// --- VARIABLES GLOBALES ---
let carrito = [];
let todosLosProductos = []; // Aquí uniremos todas las bases de datos

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Unificar bases de datos
    // Tomamos la base principal
    todosLosProductos = productosBD;
    
    // Sumamos Sahumerios (Sagrada Madre, Aromanza)
    if (typeof productosSahumerios !== 'undefined') {
        todosLosProductos = todosLosProductos.concat(productosSahumerios);
    }

    // Sumamos Saphirus (NUEVO)
    if (typeof productosSaphirus !== 'undefined') {
        todosLosProductos = todosLosProductos.concat(productosSaphirus);
    }
    
    // 2. Iniciar la tienda mostrando vasos
    filtrarProductos('vasos');
});

// --- LÓGICA DE NAVEGACIÓN ---

function filtrarProductos(categoria) {
    // Scroll arriba
    window.scrollTo(0, 0);

    const contenedor = document.getElementById('contenedor-productos');
    const titulo = document.getElementById('titulo-seccion');
    contenedor.innerHTML = '';
    
    eliminarBotonesVolver();

    // Título
    if (nombresCategorias[categoria]) {
        titulo.innerText = nombresCategorias[categoria];
    } else {
        titulo.innerText = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    }

    const btnVolverArriba = crearBotornInicio();
    contenedor.parentElement.insertBefore(btnVolverArriba, contenedor);

    // LÓGICA PRINCIPAL
    if (estructuraCategorias[categoria]) {
        mostrarSubcategorias(categoria);
        return;
    }

    // Filtramos sobre la lista unificada
    let productosAMostrar = [];
    if (categoria === 'todos') {
        productosAMostrar = todosLosProductos; 
    } else {
        productosAMostrar = todosLosProductos.filter(p => p.categoria === categoria);
    }

    if (productosAMostrar.length === 0) {
        mostrarMensajeVacio(contenedor);
    } else {
        renderizarProductos(productosAMostrar);
        const btnVolverAbajo = crearBotornInicio();
        contenedor.parentElement.appendChild(btnVolverAbajo);
    }
}

function mostrarSubcategorias(categoriaPadre) {
    const contenedor = document.getElementById('contenedor-productos');
    const subs = estructuraCategorias[categoriaPadre];
    contenedor.className = 'grid-subcategorias'; 

    if (!subs || subs.length === 0) {
        mostrarMensajeVacio(contenedor);
        return;
    }

    subs.forEach(sub => {
        const btn = document.createElement('div');
        btn.className = 'card-subcategoria';
        btn.innerHTML = `<h3>${sub.nombre}</h3>`;
        btn.onclick = () => verProductosDeSubcategoria(categoriaPadre, sub.id, sub.nombre);
        contenedor.appendChild(btn);
    });
}

function verProductosDeSubcategoria(catPadre, subId, subNombre) {
    window.scrollTo(0, 0);
    
    const titulo = document.getElementById('titulo-seccion');
    const contenedor = document.getElementById('contenedor-productos');
    
    titulo.innerText = subNombre;
    contenedor.className = 'grid-productos'; 
    contenedor.innerHTML = ''; 

    eliminarBotonesVolver();

    const btnVolverArriba = crearBotornVolver(catPadre);
    contenedor.parentElement.insertBefore(btnVolverArriba, contenedor); 

    const filtrados = todosLosProductos.filter(p => p.categoria === catPadre && p.subcategoria === subId);
    
    if (filtrados.length === 0) {
        mostrarMensajeVacio(contenedor);
    } else {
        renderizarProductos(filtrados);
        const btnVolverAbajo = crearBotornVolver(catPadre);
        contenedor.parentElement.appendChild(btnVolverAbajo);
    }
}

// --- FUNCIONES AUXILIARES UI ---

function crearBotornVolver(catPadre) {
    const btn = document.createElement('button');
    btn.innerText = "⬅ Volver a " + (nombresCategorias[catPadre] || "Atrás");
    btn.className = "btn-volver";
    btn.onclick = () => filtrarProductos(catPadre);
    return btn;
}

function crearBotornInicio() {
    const btn = document.createElement('button');
    btn.innerText = "⬅ Volver al Inicio";
    btn.className = "btn-volver";
    btn.onclick = () => filtrarProductos('vasos'); 
    return btn;
}

function eliminarBotonesVolver() {
    const botones = document.querySelectorAll('.btn-volver');
    botones.forEach(btn => btn.remove());
}

function mostrarMensajeVacio(contenedor) {
    contenedor.innerHTML = `
        <div class="mensaje-vacio">
            <i class="fas fa-hammer"></i>
            <p>Estamos trabajando para pronto tener esta sección completa, gracias.</p>
        </div>
    `;
}

// --- RENDERIZADO DE PRODUCTOS ---

function renderizarProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');

    lista.forEach(prod => {
        const div = document.createElement('div');
        div.classList.add('producto-card');

        let htmlVariedades = '';
        if (prod.variedades && prod.variedades.length > 0) {
            htmlVariedades = `
                <p class="desc-variedades">Elige:</p>
                <select id="select-${prod.id}" class="selector-variedad">
                    ${prod.variedades.map(v => `<option value="${v}">${v}</option>`).join('')}
                </select>
            `;
        }

        let htmlDesc = '';
        if (prod.descripcion) {
            htmlDesc = `<p class="texto-descripcion">${prod.descripcion}</p>`;
        }

        let htmlPrecio = '';
        if (prod.precio > 0) {
            htmlPrecio = `<p class="precio">$${prod.precio.toLocaleString('es-AR')}</p>`;
        } else {
            htmlPrecio = `
                <div class="cartel-consultar">
                    <i class="fas fa-info-circle"></i>
                    <span>Consultar precio, disponibilidad y stock</span>
                </div>
            `;
        }

        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200?text=Foto+Pendiente'">
            <h3>${prod.nombre}</h3>
            ${htmlDesc} 
            ${htmlVariedades}
            ${htmlPrecio} 
            
            <div class="control-cantidad">
                <button class="btn-qty" onclick="cambiarCantidad(${prod.id}, -1)">-</button>
                <input type="text" id="cantidad-${prod.id}" class="input-cantidad" value="1" readonly>
                <button class="btn-qty" onclick="cambiarCantidad(${prod.id}, 1)">+</button>
            </div>

            <button class="btn-agregar" onclick="prepararPedido(${prod.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

// --- LÓGICA DEL CARRITO ---

function cambiarCantidad(id, cambio) {
    const input = document.getElementById(`cantidad-${id}`);
    let valorActual = parseInt(input.value);
    let nuevoValor = valorActual + cambio;
    if (nuevoValor < 1) nuevoValor = 1; 
    input.value = nuevoValor;
}

function prepararPedido(id) {
    const selector = document.getElementById(`select-${id}`);
    let variedadSeleccionada = null;
    if (selector) variedadSeleccionada = selector.value;

    const inputCantidad = document.getElementById(`cantidad-${id}`);
    let cantidadElegida = 1;
    if (inputCantidad) cantidadElegida = parseInt(inputCantidad.value);

    agregarAlCarrito(id, variedadSeleccionada, cantidadElegida);
}

function agregarAlCarrito(id, variedad, cantidad) {
    const producto = todosLosProductos.find(p => p.id === id);
    
    if (!producto) return;

    const idUnicoEnCarrito = variedad ? `${id}-${variedad}` : `${id}`;
    const existe = carrito.find(item => item.cartId === idUnicoEnCarrito);

    if (existe) {
        existe.cantidad += cantidad;
    } else {
        carrito.push({
            ...producto,
            cartId: idUnicoEnCarrito,
            cantidad: cantidad,
            variedadElegida: variedad
        });
    }
    
    const inputCantidad = document.getElementById(`cantidad-${id}`);
    if(inputCantidad) inputCantidad.value = 1;

    actualizarCarritoUI();
    toggleCarrito();
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    const confirmacion = confirm("¿Estás seguro de que quieres borrar todo el pedido?");
    if (confirmacion) {
        carrito = [];
        actualizarCarritoUI();
    }
}

function actualizarCarritoUI() {
    const contador = document.getElementById('contador-carrito');
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.innerText = totalItems;

    const listaCarrito = document.getElementById('lista-carrito');
    const totalPrecioSpan = document.getElementById('total-precio');
    
    listaCarrito.innerHTML = '';
    let totalPrecio = 0;
    let hayItemsAConsultar = false;

    carrito.forEach((item, index) => {
        const itemSubtotal = item.precio * item.cantidad;
        totalPrecio += itemSubtotal;
        if (item.precio === 0) hayItemsAConsultar = true;

        const nombreMostrar = item.variedadElegida ? `${item.nombre} <strong>(${item.variedadElegida})</strong>` : item.nombre;
        const textoPrecio = item.precio > 0 ? `$${itemSubtotal.toLocaleString('es-AR')}` : `<span style="color:#d9534f; font-weight:bold; font-size:0.85rem;">Consultar</span>`;

        const itemDiv = document.createElement('div');
        itemDiv.style.borderBottom = "1px solid #eee";
        itemDiv.style.padding = "10px 0";
        itemDiv.style.display = "flex";
        itemDiv.style.justifyContent = "space-between";
        itemDiv.style.alignItems = "center";
        
        itemDiv.innerHTML = `
            <div style="flex:1"><span style="font-size:0.9rem">${item.cantidad}x ${nombreMostrar}</span></div>
            <div style="display:flex; align-items:center; gap:10px;">
                <span>${textoPrecio}</span>
                <span style="color:red; cursor:pointer;" onclick="eliminarDelCarrito(${index})"><i class="fas fa-trash"></i></span>
            </div>
        `;
        listaCarrito.appendChild(itemDiv);
    });
    
    totalPrecioSpan.innerText = totalPrecio > 0 ? totalPrecio.toLocaleString('es-AR') + (hayItemsAConsultar ? ' + a consultar' : '') : (hayItemsAConsultar ? 'A consultar' : '0');
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarritoUI();
}

function toggleCarrito() {
    const modal = document.getElementById('modal-carrito');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function enviarWhatsapp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    let mensaje = "Hola Franck Tienda Holística, quiero pedir:%0A%0A";
    let total = 0;
    let hayItemsAConsultar = false;

    carrito.forEach(item => {
        const detalle = item.variedadElegida ? `(${item.variedadElegida})` : "";
        if (item.precio > 0) {
            mensaje += `- ${item.cantidad}x ${item.nombre} ${detalle} ($${(item.precio * item.cantidad).toLocaleString('es-AR')})%0A`;
            total += item.precio * item.cantidad;
        } else {
            hayItemsAConsultar = true;
            mensaje += `- ${item.cantidad}x ${item.nombre} ${detalle} (⚠️ Consultar precio/stock)%0A`;
        }
    });

    if (total > 0) {
        mensaje += `%0A*Total parcial: $${total.toLocaleString('es-AR')}*${hayItemsAConsultar ? ' (más productos a consultar)' : ''}`;
    } else {
        mensaje += `%0A*Productos a consultar precio, disponibilidad y stock*`;
    }
    mensaje += "%0A%0A¿Hay stock? Gracias.";
    window.open(`https://wa.me/${telFranck}?text=${mensaje}`, '_blank');
}