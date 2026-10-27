/* ============================================================
   Franck Tienda Holística — Chatbot de botones
   Sin IA, sin APIs ni claves. Todo el contenido se edita acá.
   Requiere: datos.js (telFranck) y app.js (filtrarProductos).
   ============================================================ */

(function () {
    'use strict';

    /* ---------------------------------------------------------
       1. CONFIGURACIÓN — editá textos, número y categorías acá
       --------------------------------------------------------- */

    const CONFIG = {
        // Si datos.js ya definió telFranck, se usa ese número.
        whatsapp: (typeof telFranck !== 'undefined' ? String(telFranck) : '5492615717954'),

        nombre: 'Asistente virtual',
        estado: 'Respuestas automáticas',

        saludo: '¡Hola! 🌿 Soy el asistente virtual de Franck Tienda Holística. Te guío por el catálogo y, si necesitás algo más, te conecto con Franck por WhatsApp.',
        preguntaInicial: '¿Qué estás buscando?',
        globito: '¿Te ayudo a encontrar algo? 🌿',
        demoraGlobito: 4000,        // primera aparición automática
        duracionGlobito: 6000,      // cuánto queda visible
        intervaloGlobito: 25000,    // cada cuánto se repite

        maxCaracteres: 300,

        // Texto tomado del aviso de compra que ya existe en la tienda.
        textoComoCompro: 'Al finalizar tu pedido se abre un chat de WhatsApp. Ahí confirmamos el stock disponible y coordinamos el pago y la entrega.',
        textoComoComproAyuda: 'Para empezar, agregá los productos que quieras al carrito y tocá "Finalizar Pedido por WhatsApp".',

        textoOtraCosa: 'Contame qué estás buscando y te preparo el mensaje para enviarle a Franck por WhatsApp.',
        textoOtraCosaListo: '¡Listo! Ya podés enviarle tu consulta a Franck por WhatsApp:',
        textoOtraCosaVacio: 'Escribí qué estás buscando para poder ayudarte.',
        prefijoWhatsapp: 'Hola Franck Tienda Holística, estoy buscando: '
    };

    /* Flujo de pasos.
       - siguiente: id del paso al que va el botón.
       - filtrar:   slug real de categoría; cierra el chat y filtra la tienda.
       - entrada:   muestra el formulario de texto libre.
       Cada paso muestra automáticamente "← Volver al inicio". */
    const FLUJO = {
        inicio: {
            texto: [CONFIG.saludo, CONFIG.preguntaInicial],
            opciones: [
                { etiqueta: '🕯️ Sahumerios', siguiente: 'sahumerios' },
                { etiqueta: '🏠 Deco y Hogar', filtrar: 'deco' },
                { etiqueta: '💎 Piedras y Cristales', filtrar: 'piedras' },
                { etiqueta: '📚 Libros y Cartas', filtrar: 'libros' },
                { etiqueta: '➕ Más categorías', siguiente: 'masCategorias' },
                { etiqueta: '🛒 ¿Cómo compro?', siguiente: 'comoCompro' },
                { etiqueta: '💬 Otra cosa', siguiente: 'otraCosa' }
            ]
        },

        sahumerios: {
            texto: '¿Qué línea de sahumerios te interesa?',
            opciones: [
                { etiqueta: 'Sagrada Madre', filtrar: 'sagrada-madre' },
                { etiqueta: 'Aromanza', filtrar: 'aromanza' },
                { etiqueta: 'Saphirus', filtrar: 'saphirus' }
            ]
        },

        masCategorias: {
            texto: 'Estas son otras secciones de la tienda:',
            opciones: [
                { etiqueta: 'Seres del Bosque', filtrar: 'seres-bosque' },
                { etiqueta: 'Fogoneros y Tablas', filtrar: 'fogoneros' },
                { etiqueta: 'Yoga y Meditación', filtrar: 'yoga' },
                { etiqueta: 'Japa Mala', filtrar: 'japa-mala' },
                { etiqueta: 'Vasos Sustentables', filtrar: 'vasos' }
            ]
        },

        comoCompro: {
            texto: [CONFIG.textoComoCompro, CONFIG.textoComoComproAyuda],
            opciones: []
        },

        otraCosa: {
            texto: CONFIG.textoOtraCosa,
            entrada: true
        }
    };

    /* ---------------------------------------------------------
       2. Construcción del widget
       --------------------------------------------------------- */

    const raiz = document.createElement('div');
    raiz.className = 'chatbot-tienda';
    raiz.innerHTML = [
        '<button type="button" class="chatbot-toggle" id="chatbot-toggle"',
        '        aria-label="Abrir asistente virtual" aria-controls="chatbot-caja" aria-expanded="false">',
        '    <span class="ct-icono ct-icono-abrir" aria-hidden="true">',
        '        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor"',
        '             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
        '            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5z"/>',
        '        </svg>',
        '    </span>',
        '    <span class="ct-icono ct-icono-cerrar" aria-hidden="true">&times;</span>',
        '</button>',

        // Globito de invitación (entre el botón y la ventana, que nunca se ven juntos)
        '<div class="ct-globito" id="chatbot-globito" role="status" hidden>',
        '    <p>' + CONFIG.globito + '</p>',
        '    <button type="button" class="ct-globito-cerrar" id="chatbot-globito-cerrar"',
        '            aria-label="Cerrar mensaje de ayuda">',
        '        <span aria-hidden="true">&times;</span>',
        '    </button>',
        '</div>',

        '<div class="chatbot-caja" id="chatbot-caja" role="dialog" aria-label="Asistente virtual de la tienda" hidden>',
        '    <div class="chatbot-header">',
        '        <div class="chatbot-avatar" aria-hidden="true">F</div>',
        '        <div class="chatbot-datos">',
        '            <strong>' + CONFIG.nombre + '</strong>',
        '            <span class="chatbot-status">' + CONFIG.estado + '</span>',
        '        </div>',
        '    </div>',
        '    <div class="chatbot-messages" id="chatbot-messages" role="log" aria-live="polite" aria-label="Conversación"></div>',
        '    <div class="chatbot-opciones" id="chatbot-opciones"></div>',
        '</div>'
    ].join('\n');

    document.body.appendChild(raiz);

    const toggle         = raiz.querySelector('#chatbot-toggle');
    const caja           = raiz.querySelector('#chatbot-caja');
    const mensajes       = raiz.querySelector('#chatbot-messages');
    const opciones       = raiz.querySelector('#chatbot-opciones');
    const globito        = raiz.querySelector('#chatbot-globito');
    const globitoCerrar  = raiz.querySelector('#chatbot-globito-cerrar');

    let abierto  = false;

    const CLAVE_AUTO_OFF = 'franckTienda.asistenteGlobitoAutoOff';
    const temporizadores = [];          // transiciones de pasos y respaldo de scroll
    let temporizadorAuto = null;        // ÚNICO temporizador del ciclo automático
    let temporizadorOcultar = null;     // retraso de ~300 ms al salir
    let globitoAutoVisible = false;     // ventana visible del ciclo automático
    let mouseDentro = false;
    let focoDentro = false;
    let globitoDentro = false;
    let autoDescartadoMemoria = false;  // fallback si sessionStorage no está disponible
    let suprimirFoco = false;
    let ultimoPointer = 0;

    /* ---------------------------------------------------------
       3. Utilidades de la conversación
       --------------------------------------------------------- */

    function programar(fn, ms) {
        temporizadores.push(setTimeout(fn, ms));
    }

    function cancelarTemporizadores() {
        while (temporizadores.length) clearTimeout(temporizadores.pop());
    }

    function agregarMensaje(texto, tipo) {
        const burbuja = document.createElement('div');
        burbuja.className = (tipo === 'usuario') ? 'user-msg' : 'bot-msg';
        burbuja.textContent = texto; // siempre texto plano: nunca innerHTML con datos del usuario
        mensajes.appendChild(burbuja);
        bajarScroll();
    }

    function agregarBot(texto) {
        if (Array.isArray(texto)) {
            texto.forEach(t => agregarMensaje(t, 'bot'));
        } else {
            agregarMensaje(texto, 'bot');
        }
    }

    function bajarScroll() {
        requestAnimationFrame(() => {
            mensajes.scrollTop = mensajes.scrollHeight;
        });
    }

    function limpiarOpciones() {
        opciones.innerHTML = '';
    }

    function agregarBotonVolver() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ct-volver';
        btn.textContent = '← Volver al inicio';
        btn.addEventListener('click', irAlInicio);
        opciones.appendChild(btn);
    }

    function crearOpcion(etiqueta, alElegir) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chat-option';
        btn.textContent = etiqueta;
        btn.addEventListener('click', alElegir);
        opciones.appendChild(btn);
        return btn;
    }

    /* ---------------------------------------------------------
       4. Render de pasos
       --------------------------------------------------------- */

    function renderPaso(idPaso) {
        if (!abierto) return;
        const paso = FLUJO[idPaso];
        if (!paso) return;

        agregarBot(paso.texto);
        limpiarOpciones();

        if (paso.entrada) {
            renderEntrada();
        } else {
            paso.opciones.forEach(op => {
                crearOpcion(op.etiqueta, () => elegirOpcion(op));
            });
        }

        if (idPaso !== 'inicio') agregarBotonVolver();
        bajarScroll();
    }

    function elegirOpcion(op) {
        agregarMensaje(op.etiqueta, 'usuario');
        limpiarOpciones();

        if (op.filtrar) {
            irACategoria(op.filtrar);
            return;
        }

        if (op.siguiente) {
            programar(() => renderPaso(op.siguiente), 450);
        }
    }

    function irAlInicio() {
        renderPaso('inicio'); // el paso inicio no lleva "volver"
    }

    function limpiarConversacion() {
        mensajes.innerHTML = '';
        limpiarOpciones();
    }

    /* ---------------------------------------------------------
       5. Filtrado de la tienda
       --------------------------------------------------------- */

    function irACategoria(slug) {
        cerrarChat();

        if (typeof window.filtrarProductos !== 'function') {
            console.warn('[chatbot] filtrarProductos no está disponible.');
            return;
        }

        // filtrarProductos ya hace window.scrollTo(0, 0).
        // Acá sólo llevamos la vista al título de la sección elegida.
        window.filtrarProductos(slug);

        const titulo = document.getElementById('titulo-seccion');
        if (titulo) {
            // Sin rAF: la grilla ya está renderizada por filtrarProductos.
            const scrollPrevio = window.scrollY;
            titulo.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Respaldo: si el navegador no anima el scroll (pestaña oculta,
            // movimiento reducido o contexto embebido), saltamos directo.
            programar(() => {
                const top = titulo.getBoundingClientRect().top;
                if (Math.abs(window.scrollY - scrollPrevio) < 4 && top > 150) {
                    titulo.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            }, 500);
        }

        // cerrarChat() ya dejó la conversación limpia para la próxima apertura.
    }

    /* ---------------------------------------------------------
       6. Paso "Otra cosa": input libre + WhatsApp
       --------------------------------------------------------- */

    function renderEntrada() {
        const form = document.createElement('form');
        form.className = 'ct-formulario';
        form.noValidate = true;

        const fila = document.createElement('div');
        fila.className = 'ct-fila';

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'chatbot-texto';
        input.className = 'ct-input';
        input.maxLength = CONFIG.maxCaracteres;
        input.placeholder = 'Ej: sahumerio de lavanda';
        input.autocomplete = 'off';
        input.setAttribute('aria-label', 'Qué estás buscando');

        const enviar = document.createElement('button');
        enviar.type = 'submit';
        enviar.className = 'ct-enviar';
        enviar.textContent = 'Enviar';

        const meta = document.createElement('div');
        meta.className = 'ct-meta';

        const contador = document.createElement('span');
        contador.className = 'ct-contador';
        contador.textContent = '0/' + CONFIG.maxCaracteres;

        const error = document.createElement('p');
        error.className = 'ct-error';
        error.setAttribute('role', 'alert');
        error.hidden = true;
        error.textContent = CONFIG.textoOtraCosaVacio;

        fila.appendChild(input);
        fila.appendChild(enviar);
        meta.appendChild(contador);
        form.appendChild(fila);
        form.appendChild(meta);
        form.appendChild(error);
        opciones.appendChild(form);

        input.addEventListener('input', () => {
            contador.textContent = input.value.length + '/' + CONFIG.maxCaracteres;
            if (!error.hidden && input.value.trim()) {
                error.hidden = true;
                input.removeAttribute('aria-invalid');
            }
        });

        form.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const texto = input.value.trim().slice(0, CONFIG.maxCaracteres);

            if (!texto) {
                error.hidden = false;
                input.setAttribute('aria-invalid', 'true');
                input.focus({ preventScroll: true });
                return;
            }

            agregarMensaje(texto, 'usuario');
            limpiarOpciones();
            agregarBot(CONFIG.textoOtraCosaListo);
            agregarBotonWhatsapp(texto);
            agregarBotonVolver();
            bajarScroll();
        });

        input.focus({ preventScroll: true });
        bajarScroll();
    }

    function agregarBotonWhatsapp(texto) {
        const url = 'https://wa.me/' + CONFIG.whatsapp +
            '?text=' + encodeURIComponent(CONFIG.prefijoWhatsapp + texto);

        const enlace = document.createElement('a');
        enlace.className = 'ct-whatsapp';
        enlace.href = url;
        enlace.target = '_blank';
        enlace.rel = 'noopener noreferrer';
        enlace.innerHTML = '<span aria-hidden="true">📲</span> Enviar por WhatsApp';
        opciones.appendChild(enlace);
    }

    /* ---------------------------------------------------------
       7. Globito de invitación
       --------------------------------------------------------- */

    function autoDescartado() {
        if (autoDescartadoMemoria) return true;
        try {
            return sessionStorage.getItem(CLAVE_AUTO_OFF) === '1';
        } catch (e) {
            return false;
        }
    }

    function descartarAuto() {
        autoDescartadoMemoria = true;
        try {
            sessionStorage.setItem(CLAVE_AUTO_OFF, '1');
        } catch (e) {
            /* sin almacenamiento: queda el flag en memoria */
        }
    }

    function enBoton() {
        return mouseDentro || focoDentro || globitoDentro;
    }

    function limpiarTimerAuto() {
        if (temporizadorAuto !== null) {
            clearTimeout(temporizadorAuto);
            temporizadorAuto = null;
        }
    }

    function limpiarTimerOcultar() {
        if (temporizadorOcultar !== null) {
            clearTimeout(temporizadorOcultar);
            temporizadorOcultar = null;
        }
    }

    function mostrarGlobito() {
        if (abierto) return;

        limpiarTimerOcultar();
        globito.hidden = false;
        raiz.classList.add('con-globito');
    }

    function ocultarGlobito() {
        globito.hidden = true;
        raiz.classList.remove('con-globito');
    }

    // Un solo temporizador controla todo el ciclo automático.
    function programarAuto(ms) {
        limpiarTimerAuto();
        temporizadorAuto = setTimeout(pasoAuto, ms);
    }

    function pasoAuto() {
        temporizadorAuto = null;

        if (abierto || autoDescartado()) return;

        if (!globitoAutoVisible) {
            globitoAutoVisible = true;
            mostrarGlobito();
            programarAuto(CONFIG.duracionGlobito); // se oculta a los 6 s
        } else {
            globitoAutoVisible = false;
            if (!enBoton()) ocultarGlobito();
            programarAuto(Math.max(0, CONFIG.intervaloGlobito - CONFIG.duracionGlobito));
        }
    }

    function iniciarCicloAuto() {
        limpiarTimerAuto();
        globitoAutoVisible = false;

        if (abierto || autoDescartado()) return;
        programarAuto(CONFIG.demoraGlobito); // primera aparición a los 4 s
    }

    function detenerCicloAuto() {
        limpiarTimerAuto();
        globitoAutoVisible = false;
    }

    function programarOcultar(origen) {
        limpiarTimerOcultar();

        temporizadorOcultar = setTimeout(() => {
            temporizadorOcultar = null;

            if (abierto) return;
            if (origen === 'mouse' && mouseDentro) return;
            if (origen === 'foco' && focoDentro) return;
            if (globitoDentro) return;

            ocultarGlobito();
        }, 300);
    }

    function entrarBoton() {
        mouseDentro = true;
        if (!abierto) mostrarGlobito();
    }

    function salirBoton() {
        mouseDentro = false;
        if (!abierto) programarOcultar('mouse');
    }

    function enfocarBoton() {
        // Sólo foco de teclado: un clic/tap con puntero no dispara el globito.
        if (suprimirFoco || Date.now() - ultimoPointer < 500) return;

        focoDentro = true;
        if (!abierto) mostrarGlobito();
    }

    function desenfocarBoton() {
        focoDentro = false;
        if (!abierto) programarOcultar('foco');
    }

    /* ---------------------------------------------------------
       8. Abrir / cerrar
       --------------------------------------------------------- */

    function abrirChat() {
        abierto = true;

        // Con el chat abierto el globito no se muestra y se cortan los ciclos.
        detenerCicloAuto();
        limpiarTimerOcultar();
        ocultarGlobito();

        caja.hidden = false;
        raiz.classList.add('abierto');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Cerrar asistente virtual');

        // Cada apertura arranca de cero: saludo + menú completo.
        renderPaso('inicio');
    }

    function cerrarChat() {
        abierto = false;
        caja.hidden = true;
        raiz.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir asistente virtual');

        // Corta transiciones pendientes, input de "Otra cosa" y conversación.
        cancelarTemporizadores();
        limpiarConversacion();

        // Reinicia el ciclo automático desde cero (primera aparición a los 4 s).
        iniciarCicloAuto();
    }

    function alternarChat() {
        if (abierto) {
            cerrarChat();
        } else {
            abrirChat();
        }
    }

    toggle.addEventListener('click', alternarChat);

    // Hover / foco: siempre, sin límite.
    toggle.addEventListener('mouseenter', entrarBoton);
    toggle.addEventListener('mouseleave', salirBoton);
    toggle.addEventListener('focus', enfocarBoton);
    toggle.addEventListener('blur', desenfocarBoton);

    // Si el foco viene de un clic/tap, no lo tratamos como foco de teclado.
    toggle.addEventListener('pointerdown', () => {
        ultimoPointer = Date.now();
        focoDentro = false;
    });

    // Permite llevar el cursor desde el botón hasta la X sin que se esfume.
    globito.addEventListener('mouseenter', () => {
        globitoDentro = true;
        limpiarTimerOcultar();
    });
    globito.addEventListener('mouseleave', () => {
        globitoDentro = false;
        if (!abierto) programarOcultar('mouse');
    });

    // La X frena sólo el ciclo automático de esta visita; el hover sigue vivo.
    globitoCerrar.addEventListener('click', () => {
        descartarAuto();
        detenerCicloAuto();
        ocultarGlobito();

        suprimirFoco = true;
        toggle.focus({ preventScroll: true });
        suprimirFoco = false;
    });

    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && abierto) {
            cerrarChat();
            toggle.focus();
        }
    });

    // Ciclo automático inicial (no corre si ya lo descartaron en esta visita).
    iniciarCicloAuto();
})();
