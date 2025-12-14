// --- BASE DE DATOS SECUNDARIA: SAHUMERIOS ---
// Incluye: Sagrada Madre (Sahumerios, Bombitas, Pastillas, Pirámides, Resinas, Sahumos, Perlas, Velas, Kits)

const productosSahumerios = [
    
    // --- SAGRADA MADRE: LÍNEA SAHUMERIOS ---
    { id: 2001, nombre: "Sahumerio 5 Elementos", precio: 2400, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_5_elementos.jpg", descripcion: "Un Elemento para cada Signo. Ayudan a conectar con los ritmos cósmicos.", variedades: ["Agua (Renacer)", "Aire (Alegría)", "Fuego (Energía)", "Tierra (Armonía)", "Éter (Claridad)"] },
    { id: 2002, nombre: "Sahumerio Amarillo Energía Limpia", precio: 1600, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_amarillo_energia.jpg", descripcion: "La combinación ideal de los 7 elementos que armonizan nuestros hogares: Incienso, mirra, benjuí, almizcle, alcanfor, carbón y sal." },
    { id: 2003, nombre: "Sahumerio Artesano x 30", precio: 8400, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_artesano_30.jpg", descripcion: "El Sahumerio Línea Artesano es un testimonio de la maestría artesanal.", variedades: ["Palo Santo", "Sándalo", "Incienso", "Mirra", "Ruda", "Lavanda", "Yagra"] },
    { id: 2004, nombre: "Sahumerio Blend Masala x 8", precio: 4300, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_blend_masala.jpg", descripcion: "Conecta con la esencia de la Tierra. Incienso blend masala artesanal que invita a la armonía y la paz.", variedades: ["Energy", "Harmony", "Love", "Peace", "Prosperity"] },
    { id: 2005, nombre: "Sahumerio Botánico", precio: 2300, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_botanico.jpg", descripcion: "Cada cuidadosa combinación de fragancias promete una experiencia placentera y única, de la mano de las reinas de la naturaleza, las Flores.", variedades: ["Rosas", "Lavanda", "Fresias", "Jazmín", "Gardenia", "Nardos", "Magnolias", "Reina de la Noche"] },
    { id: 2006, nombre: "Sahumerio Cosmos", precio: 3200, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_cosmos.jpg", descripcion: "7 sahumerios, cada uno vinculado a un planeta y su poder único. Ritual para armonizar cuerpo, mente y alma." },
    { id: 2007, nombre: "Sahumerio Dúo", precio: 2600, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_duo.jpg", descripcion: "Dos intenciones, un sahumerio. Combinamos intenciones y propiedades para potenciar sus rituales sagrados.", variedades: ["Palo Santo y Sándalo", "Palo Santo y Rosa", "Palo Santo y Mirra", "Palo Santo y Copal", "Palo Santo y Incienso", "Palo Santo y Yagra"] },
    { id: 2008, nombre: "Sahumerio en Polvo", precio: 3000, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_polvo.jpg", descripcion: "Variados y exquisitos sahumerios en polvo. Brindan la posibilidad de realizar poderosas combinaciones.", variedades: ["Palo Santo", "Sándalo", "7 Poderes", "Abre Caminos", "Incienso", "Benjuí"] },
    { id: 2009, nombre: "Sahumerio Energía Limpia", precio: 2600, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_energia_limpia.jpg", descripcion: "Mantener nuestros espacios limpios y armonizados para acompañar nuestro equilibrio interno.", variedades: ["Incienso", "Mirra", "Benjuí", "Canela", "Palo Santo", "Ruda"] },
    { id: 2010, nombre: "Sahumerio Hexagonal Importado (Bhakti/Sree Vani)", precio: 900, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_hex_bhakti.jpg", descripcion: "Inciensos importados de la India. Calidad Premium Hexagonal.", variedades: ["Atrae Dinero", "Palo Santo Lavender", "Sandal Rose", "OM", "Open The Way (Abre Caminos)", "Limón", "Sándalo", "Energía", "Myrrh Copal (Mirra Copal)", "Palo Santo", "Siete Poderes", "Destrabe"] },
    { id: 2011, nombre: "Sahumerio Hexagonal ES x 20", precio: 900, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_hex_es.jpg", descripcion: "Línea económica de calidad.", variedades: ["Surtidos", "Consultar Disponibilidad"] },
    { id: 2012, nombre: "Sahumerio Línea Grows", precio: 3400, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_grows.jpg", descripcion: "Permití que el aroma sagrado de estos innovadores inciensos guíe tu viaje interior.", variedades: ["Inspiración", "Intuición", "Meditación", "Relajación"] },
    { id: 2013, nombre: "Sahumerio Línea Yagra", precio: 2900, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_yagra.jpg", descripcion: "Colección meticulosamente artesanal que combina ingredientes naturales y exóticos.", variedades: ["Yagra Puro", "Yagra y Canela", "Yagra y Rosas", "Yagra y Manzanilla", "Yagra e Incienso", "Yagra y Vainilla", "Yagra y Violetas", "Yagra y Citronela"] },
    { id: 2014, nombre: "Sahumerio Natural Premium", precio: 1400, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_natural_premium.jpg", descripcion: "Esta línea nos trae las bondades naturales de las frutas en sus aromas más deliciosos.", variedades: ["Frutos Rojos", "Limón", "Naranja", "Manzana", "Coco", "Vainilla"] },
    { id: 2015, nombre: "Sahumerio Natural x 8", precio: 2500, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_natural_x8.jpg", descripcion: "Ideal para limpieza energética de todos tus ambientes. EXTRA DURACIÓN - CALIDAD PREMIUM.", variedades: ["Sándalo", "Ruda", "Palo Santo", "Romero", "Lavanda", "Copal", "Incienso", "Mirra", "Yagra", "Citronela"] },
    { id: 2016, nombre: "Sahumerio Oráculo", precio: 3700, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_oraculo.jpg", descripcion: "8 Varillas de Hierbas, BIOMASA DE FRUTAS + 1 carta troquelada del Oráculo de los Animales Sagrados (al azar)." },
    { id: 2017, nombre: "Sahumerio Palo Santo Sustentable", precio: 2200, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_palo_santo.jpg", descripcion: "Aromático humo que imprime una sensación de calma y bienestar. Atrae energías positivas.", variedades: ["Con Yagra", "Con Vainilla", "Con Rosas", "Con Lavanda", "Con Sándalo", "Con Jazmín", "Con Copal", "Puro", "Con Champa", "Con Romero", "Con Menta"] },
    { id: 2018, nombre: "Sahumerio Patagonia", precio: 2900, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_patagonia.jpg", descripcion: "Cada aroma está cuidadosamente seleccionado para evocar la pureza y la fuerza de la naturaleza patagónica.", variedades: ["Hibiscus", "Rosa Mosqueta", "Menta y Limón", "Lavanda Silvestre", "Yerba Mate"] },
    { id: 2019, nombre: "Sahumerio Ritual x 6", precio: 2800, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_ritual_x6.jpg", descripcion: "Enciende este incienso y pásalo suavemente por el aire alrededor de tu cuerpo y tu entorno.", variedades: ["Olíbano", "Mirra", "Ruda", "Romero", "Salvia"] },
    { id: 2020, nombre: "Sahumerio Sagrado", precio: 3200, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_sagrado.jpg", descripcion: "Un incienso negro con una textura inigualable y combinación de fragancias emblemáticas y seductoras." },
    { id: 2021, nombre: "Sahumerio Tarot", precio: 3200, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_tarot.jpg", descripcion: "Edición coleccionable de inciensos aromáticos de la línea Tarot de Marsella. Incluye 2 cartas troqueladas al azar." },
    { id: 2022, nombre: "Sahumerio Triple 7 Chacras", precio: 3000, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_triple_chacras.jpg", descripcion: "Las fragancias vigorizan y vibran con los 7 chakras creando armonía y paz interior." },
    { id: 2023, nombre: "Sahumerio x 20 Artesano", precio: 4300, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_artesano_x20.jpg", descripcion: "20 varillas de Sahumerios Artesanales y Naturales, a base de frutas." },
    { id: 2024, nombre: "Sahumerios 2 Aromas Natural", precio: 2700, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_2_aromas.jpg", descripcion: "Dos aromas naturales se combinan y potencian entre sí.", variedades: ["Palo Santo y Lavanda", "Palo Santo e Incienso", "Sándalo y Olíbano", "Caléndula y Manzanilla", "Rosas y Vainilla", "Eucalipto y Laurel"] },
    { id: 2025, nombre: "Sahumerios de Hierbas y Flores", precio: 2600, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_hierbas_flores.jpg", descripcion: "Combinan la sutileza de las hierbas con la calidez del incienso.", variedades: ["Lavanda y Rosas", "Eucalipto y Laurel", "Ruda y Romero", "Salvia y Menta", "Anís y Canela", "Manzanilla y Caléndula"] },
    { id: 2026, nombre: "Sahumerios India Black", precio: 2300, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_india_black.jpg", descripcion: "Cada aroma de India nos conecta con secretos ancestrales.", variedades: ["Ganesh", "Shiva", "Krishna", "Lakshmi", "Buddha"] },
    { id: 2027, nombre: "Sahumerios Tao Perfums", precio: 3600, categoria: "sagrada-madre", subcategoria: "sm-sahumerios", imagen: "img/sm_tao.jpg", descripcion: "NUEVA LÍNEA PERFUM TAO PREMIUM. 8 varillas gruesas fabricadas con resinas naturales 100% ecológicos." },

    // --- SAGRADA MADRE: BOMBITAS ---
    { id: 2101, nombre: "Bomba Carbón Defumación Activada x12", precio: 3200, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bomba_carbon_12.jpg", descripcion: "Maximiza la eficacia de tus rituales de limpieza. Ideal para cualquier tipo de defumación." },
    { id: 2102, nombre: "Bomba Carbón Defumación Activada x24", precio: 5000, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bomba_carbon_24.jpg", descripcion: "Pack grande. Carbón Defumador de Sagrada Madre, ideal para cualquier tipo de defumación." },
    { id: 2103, nombre: "Bombita Defumación x 8", precio: 1700, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_defumacion_8.jpg", descripcion: "Purifica tu espacio. Perfectas para una limpieza rápida y efectiva.", variedades: ["7 Poderes", "Abre Caminos", "Defumación Completa", "Destrabe", "Limpieza Energética", "Palo Santo", "Yagra"] },
    { id: 2104, nombre: "Bombita Herbal x 4", precio: 1300, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_herbal.jpg", descripcion: "", variedades: ["Lavanda", "Rosas", "Eucalipto", "Romero", "Salvia"] },
    { id: 2105, nombre: "Bombita Ritual x 4", precio: 1200, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_ritual.jpg", descripcion: "", variedades: ["Ruda", "Romero", "Salvia", "Mirra", "Incienso"] },
    { id: 2106, nombre: "Bombita x 4 en Bolsita", precio: 900, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_bolsita.jpg", descripcion: "Presentación económica en bolsita." },
    { id: 2107, nombre: "Bombitas Cosmos", precio: 5000, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_cosmos.jpg", descripcion: "Con aromas especiales, equilibran y potencian tus energías. Un ritual para armonizar cuerpo, mente y alma." },
    { id: 2108, nombre: "Bombitas de Defumación por 4 (Caja)", precio: 1000, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_caja_4.jpg", descripcion: "Solución artesanal ideal para quienes buscan una limpieza energética rápida y efectiva.", variedades: ["7 Poderes", "Abre Caminos", "Defumación Completa", "Destrabe", "Limpieza Energética", "Palo Santo", "Yagra"] },
    { id: 2109, nombre: "Bombitas en Caja 7 Chacras", precio: 1900, categoria: "sagrada-madre", subcategoria: "sm-bombitas", imagen: "img/sm_bombita_7chacras.jpg", descripcion: "" },

    // --- SAGRADA MADRE: PASTILLAS ---
    { id: 2201, nombre: "Mix Defumación Activada", precio: 2461, categoria: "sagrada-madre", subcategoria: "sm-pastillas", imagen: "img/sm_mix_defumacion.jpg", descripcion: "Selección de 25 productos surtidos de defumación, edición limitada. Puede incluir: Bomba Carbón, Bombitas, Pirámides o Triángulos (surtido sin elección)." },
    { id: 2202, nombre: "Pastillas 7 Días de Limpieza", precio: 2700, categoria: "sagrada-madre", subcategoria: "sm-pastillas", imagen: "img/sm_pastillas_7dias.jpg", descripcion: "Cada caja trae 7 pastillas para acompañar los 7 días de la semana con el poder de hierbas, resinas y flores sagradas." },
    { id: 2203, nombre: "Pastillas x 4 Defumación Activada", precio: 2700, categoria: "sagrada-madre", subcategoria: "sm-pastillas", imagen: "img/sm_pastillas_x4.jpg", descripcion: "Pastillas de defumación intensa.", variedades: ["Anís, Canela y Romero", "Incienso", "Lavanda", "Palo Santo", "Ruda", "Salvia Blanca"] },

    // --- SAGRADA MADRE: PIRÁMIDES ---
    { id: 2301, nombre: "Pirámide Geometría Sagrada", precio: 1712, categoria: "sagrada-madre", subcategoria: "sm-piramides", imagen: "img/sm_piramide_geometria.jpg", descripcion: "Conecta las energías más poderosas del cosmos. Activan la armonía en los ambientes dejando una energía de paz." },
    { id: 2302, nombre: "Pirámides Energéticas x 4", precio: 3531, categoria: "sagrada-madre", subcategoria: "sm-piramides", imagen: "img/sm_piramides_x4.jpg", descripcion: "Al encender estas Pirámides de defumación, sus cautivantes fragancias despliegan su fuerza transformadora y elevan la vibración.", variedades: ["7 Poderes", "Olíbano", "Yagra", "Ruda", "Romero", "Palo Santo", "Pétalos de Rosa"] },

    // --- SAGRADA MADRE: RESINAS (NUEVO) ---
    { id: 2401, nombre: "Agua Florida", precio: 6634, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_agua_florida.jpg", descripcion: "Intenso y poderoso limpiador espiritual." },
    { id: 2402, nombre: "Hierbas Sueltas Lavanda/Romero", precio: 1200, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_hierbas_sueltas.jpg", descripcion: "Hierbas naturales para sahumar." },
    { id: 2403, nombre: "Resina Benjuí", precio: 2033, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_benjui.jpg", descripcion: "Resina de benjuí listo para sahumar. Nos ayuda a combatir la envidia, nos protege de las malas vibras y ayuda a mejorar económicamente. Efecto estimulante." },
    { id: 2404, nombre: "Resina Estoraque", precio: 1926, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_estoraque.jpg", descripcion: "Atraer energías positivas. Desarrollar las cualidades intelectuales. Limpiar casas y negocios. Favorecer la prosperidad material y comercial." },
    { id: 2405, nombre: "Resina Incienso", precio: 2033, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_incienso.jpg", descripcion: "Las resinas son energía de sanación extraídas de los árboles y poseen la sabiduría de la Madre Tierra, heredada desde tiempos ancestrales." },
    { id: 2406, nombre: "Resina Mirra", precio: 2033, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_mirra.jpg", descripcion: "Recomendada para purificar y proteger espacios, personas y objetos. Su aroma es dulce y profundo. Ideal para limpiezas, rituales de protección, consagración y purificación." },
    { id: 2407, nombre: "Resina Sándalo", precio: 2100, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_sandalo.jpg", descripcion: "El sándalo es símbolo de paz. Propicia estados de devoción, introspección y conexión con lo divino. Aporta calidez, serenidad y profundidad espiritual. ¡Puede encenderse sin carboncito!" },
    { id: 2408, nombre: "Resina Yagra", precio: 2900, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_resina_yagra.jpg", descripcion: "El Yagra es una resina hindú, suave como talco, con un brillo estelar y un aroma dulce, místico e intenso. Se usa para rituales de prosperidad en lo material." },
    { id: 2409, nombre: "Ruda en Sobre", precio: 1200, categoria: "sagrada-madre", subcategoria: "sm-resinas", imagen: "img/sm_ruda_sobre.jpg", descripcion: "Hierbas de ruda para defumación." },

    // --- SAGRADA MADRE: SAHUMOS (NUEVO) ---
    { id: 2501, nombre: "Hierbas en Sobre", precio: 700, categoria: "sagrada-madre", subcategoria: "sm-sahumos", imagen: "img/sm_hierbas_sobre.jpg", descripcion: "" },
    { id: 2502, nombre: "Incienso en Copa (Cup Sambrani)", precio: 8400, categoria: "sagrada-madre", subcategoria: "sm-sahumos", imagen: "img/sm_cup_sambrani.jpg", descripcion: "Las copas de resina incienso natural se elaboran con resinas de árboles, hierbas y especias. Se presentan en forma de pequeñas copas que se queman lentamente." },
    { id: 2503, nombre: "Línea Sahumo Grande", precio: 4387, categoria: "sagrada-madre", subcategoria: "sm-sahumos", imagen: "img/sm_sahumo_grande.jpg", descripcion: "Estos atados de hierbas y resinas son esmeradamente elaborados con los más nobles productos. Enciende un Sahumo y observa como su humo envolvente se dispersa por todo el lugar." },
    { id: 2504, nombre: "Palo Santo en Trozos", precio: 1605, categoria: "sagrada-madre", subcategoria: "sm-sahumos", imagen: "img/sm_palo_santo_trozos.jpg", descripcion: "Purificador de energía." },
    { id: 2505, nombre: "Sahumo Chico", precio: 2247, categoria: "sagrada-madre", subcategoria: "sm-sahumos", imagen: "img/sm_sahumo_chico.jpg", descripcion: "Estos atados de hierbas y resinas son esmeradamente elaborados con los más nobles productos. Enciende un Sahumo y observa como su humo envolvente se dispersa por todo el lugar." },

    // --- SAGRADA MADRE: PERLAS (NUEVO) ---
    { 
        id: 2601, 
        nombre: "Perlas Aromáticas", 
        precio: 3638, 
        categoria: "sagrada-madre", 
        subcategoria: "sm-perlas", 
        imagen: "img/sm_perlas_aromaticas.jpg",
        descripcion: "Perlas aromáticas para perfumar espacios pequeños o utilizar en hornillos.",
        variedades: ["Coco", "Flores", "Frutilla", "Hindú", "Jazmín", "Lavanda", "Limón", "Primavera", "Reina de la Noche", "Rosas", "Sándalo", "Vainilla"]
    },

    // --- SAGRADA MADRE: VELAS (NUEVO) ---
    { id: 2701, nombre: "Vela Soja Con Piedra", precio: 10593, categoria: "sagrada-madre", subcategoria: "sm-velas", imagen: "img/sm_vela_soja_piedra.jpg", descripcion: "Esta vela de soja con aroma a vainilla y orquídeas negras está diseñada para renovar energías y aportar vitalidad a tu espacio." },

    // --- SAGRADA MADRE: KITS (NUEVO) ---
    { id: 2801, nombre: "Kit Humito Sagrado", precio: 2354, categoria: "sagrada-madre", subcategoria: "sm-kits", imagen: "img/sm_kit_humito.jpg", descripcion: "Kit herbal. Variedades: Protección y sanación, 7 Energías, Amor y unión, Armonía, Prosperidad, Energía Limpia, Purificación.", variedades: ["Protección y Sanación", "7 Energías", "Amor y Unión", "Armonía", "Prosperidad", "Energía Limpia", "Purificación"] },
    { id: 2802, nombre: "Kit Limpieza Energética", precio: 11770, categoria: "sagrada-madre", subcategoria: "sm-kits", imagen: "img/sm_kit_limpieza.jpg", descripcion: "Cerrá puertas y ventanas con el humo recorré tu casa o habitación pasando por todas las esquinas. Pasa por todos por rincones con afirmaciones de amor y luz, limpiando las energías negativas." },
    { id: 2803, nombre: "Kit Luz", precio: 27820, categoria: "sagrada-madre", subcategoria: "sm-kits", imagen: "img/sm_kit_luz.jpg", descripcion: "El Kit Luz Sagrada Madre es la herramienta perfecta para rituales de purificación y limpieza energética. Con su aroma intenso y duradero, este kit te ayuda a transformar cualquier espacio en un lugar lleno de luz, armonía y bienestar." },
    { id: 2804, nombre: "Kit Pétalos de Amor", precio: 14980, categoria: "sagrada-madre", subcategoria: "sm-kits", imagen: "img/sm_kit_petalos_amor.jpg", descripcion: "Contiene: 1 Sahumo De Rosas XXL, 2 Bombitas De Rosa Y Olíbano, 1 Triangulito Piramide De Rosa Y Olíbano, 2 Sahumerios De Rosa Y Olíbano, 1 Amuleto De Cuarzo Rosa, Folleto Explicativo." },
    { id: 2805, nombre: "Kit Turmalina", precio: 19260, categoria: "sagrada-madre", subcategoria: "sm-kits", imagen: "img/sm_kit_turmalina.jpg", descripcion: "Un kit único que combina la magia de las hierbas con la fuerza protectora y energética de la piedra Turmalina." },
    // --- AROMANZA: SAHUMERIOS ---

    { 
        id: 3001, 
        nombre: "Sahumerio Mágico x 10", 
        precio: 3103, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_magico_10.jpg",
        descripcion: "5 veces más aroma. Calidad extra fuerte.",
        variedades: ["Sándalo", "Reina de la Noche", "Lavanda", "Rosa", "Limón", "Jazmín", "Frutilla", "Vainilla", "Palo Santo", "Coco", "Mirra", "Incienso", "Ruda", "Patchouli", "Champa"]
    },
    { 
        id: 3002, 
        nombre: "Energía Limpia", 
        precio: 1391, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_energia_limpia.jpg",
        descripcion: "Ideal para elevar el espíritu y purificar el ambiente.",
        variedades: ["Incienso Consagrado", "Mirra Consagrada", "Sándalo Consagrado", "Benjuí", "Ruda", "Palo Santo", "Sangre de Drago"]
    },
    { 
        id: 3003, 
        nombre: "Hexagonal Sree Vani x 20 (Importado)", 
        precio: 900, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_hexagonal_sree.jpg",
        descripcion: "Un viaje aromático al corazón de la India.",
        variedades: ["Palo Santo", "Sándalo", "7 Chakras", "Atrae Dinero", "Ruda", "Lavanda", "Rosa", "Coco", "Vainilla", "Mirra", "Copal"]
    },
    { 
        id: 3004, 
        nombre: "Mini Palo Santo Buena Onda x 8", 
        precio: 1284, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_mini_palosanto.jpg",
        descripcion: "Palo Santo conocido por sus excepcionales propiedades purificadoras.",
        variedades: ["Puro", "Con Jazmín", "Con Lavanda", "Con Limón", "Con Mirra", "Con Reina", "Con Rosa", "Con Ruda", "Con Sándalo", "Con Vainilla", "Con Violeta"]
    },
    { 
        id: 3005, 
        nombre: "Mini Tibetano x 8", 
        precio: 2354, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_mini_tibetano.jpg",
        descripcion: "Aromas naturales, intensos y extra fuertes.",
        variedades: ["Berry Kiss", "Coconut", "Ebano Marfil", "Esencias de la India", "Fragancia Oriental", "Frutillas Dulces", "Jazmín del País", "Maderas de Oriente", "Naranja Pimienta", "Néctar de los Dioses", "Noche de Ensueños", "Real Champa", "Real Rose", "Reina de la Noche", "Sándalo Hindú", "Super Palo Santo", "Vainillas Encantadas", "Viva la Vida"]
    },
    { 
        id: 3006, 
        nombre: "Orgánico por 6", 
        precio: 2033, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_organico_6.jpg",
        descripcion: "Aromas naturales, intensos y extra fuertes. Hechos con fruta.",
        variedades: ["Ananá", "Cereza", "Durazno", "Frambuesa", "Frutilla", "Limón", "Manzana", "Melón", "Naranja", "Uva"]
    },
    { 
        id: 3007, 
        nombre: "Palo Santo Buena Onda x 8", 
        precio: 1712, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_palosanto_buenaonda.jpg",
        descripcion: "Varillas de Palo Santo combinadas con exquisitas fragancias.",
        variedades: ["Puro", "Con Incienso", "Con Jazmín", "Con Lavanda", "Con Limón", "Con Mirra", "Con Reina", "Con Rosa", "Con Ruda", "Con Sándalo", "Con Vainilla"]
    },
    { 
        id: 3008, 
        nombre: "Palo Santo x 5", 
        precio: 1498, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_palosanto_x5.jpg",
        descripcion: "Varillas gruesas de Palo Santo puro para limpieza intensa."
    },
    { 
        id: 3009, 
        nombre: "Sahumerio 7 Chakras", 
        precio: 2140, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_7_chakras.jpg",
        descripcion: "Caja con 7 aromas distintos para alinear cada chakra."
    },
    { 
        id: 3010, 
        nombre: "Sahumerio Emociones", 
        precio: 2700, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_emociones.jpg",
        descripcion: "Sahumerios fabricados con aromas de primera calidad. 10 motivos disponibles.",
        variedades: ["Anti Stress", "Armonía", "Buena Onda", "Concentración", "Destrabe", "Dinero", "Paz Interior", "Seducción", "Superación", "Unión"]
    },
    { 
        id: 3011, 
        nombre: "Sahumerio Encanto Nuna", 
        precio: 1819, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_encanto_nuna.jpg",
        descripcion: "Creados para conectar con el mundo sutil de hadas y duendes.",
        variedades: ["Alegría", "Amor", "Bienestar", "Dulzura", "Esperanza", "Éxito", "Felicidad", "Gratitud", "Paz", "Prosperidad"]
    },
    { 
        id: 3012, 
        nombre: "Sahumerio Largo Sai Champa 7 Chakras", 
        precio: 4500, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_largo_saichampa.jpg",
        descripcion: "Sahumerios importados de 40 cm de largo."
    },
    { 
        id: 3013, 
        nombre: "Sahumerio Magistral x 8", 
        precio: 2140, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_magistral_x8.jpg",
        descripcion: "Aromas naturales, intensos y extra fuertes. La línea clásica de Aromanza.",
        variedades: ["Berry Kiss", "Coconut", "Ebano Marfil", "Esencias de la India", "Fragancia Oriental", "Frutillas Dulces", "Gardenia y Flores Blancas", "Hindu", "Jazmin del Pais", "Krishna", "Lavanda del Valle", "Maderas de Oriente", "Naranja Pimienta", "Nectar de los Dioses", "Noche de Ensueños", "Pimpollos de Jazmin", "Polo", "Real Champa", "Real Rose", "Reina de la Noche", "Sandalo Hindu", "Super Palo Santo", "Vainillas Encantadas", "Viva la Vida"]
    },
    { 
        id: 3014, 
        nombre: "Sahumerio Momentos", 
        precio: 2354, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_momentos.jpg",
        descripcion: "Diseñados para crear un ambiente aromático único y agradable.",
        variedades: ["Estudio y Trabajo", "Limpieza Energética", "Meditación", "Relax", "Yoga", "Aquí y Ahora"]
    },
    { 
        id: 3015, 
        nombre: "Sahumerio Rama x 8", 
        precio: 3300, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_rama_x8.jpg",
        descripcion: "Varillas gruesas extra fuertes y un porta sahumerios incluido.",
        variedades: ["Sándalo", "Palo Santo", "Ruda", "Lavanda", "Incienso", "Mirra", "7 Poderes"]
    },
    { 
        id: 3016, 
        nombre: "Sahumerios Elixir Aromanza", 
        precio: 2900, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_elixir.jpg",
        descripcion: "Fragancias premium para los sentidos."
    },
    { 
        id: 3017, 
        nombre: "Seven x 35", 
        precio: 2000, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_seven_35.jpg",
        descripcion: "35 varillas con 7 aromas distintos para toda la semana."
    },
    { 
        id: 3018, 
        nombre: "Tibetano Black Premium x 8", 
        precio: 3959, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_tibetano_black.jpg",
        descripcion: "Recomendado para procesos de sanación o meditación. Aromas intensos.",
        variedades: ["Aguamarina", "Amatista", "Ambar", "Cuarzo Rosa", "Diamante Negro", "Esmeralda", "Rubí", "Topacio"]
    },
    { 
        id: 3019, 
        nombre: "Tibetano Colgable x 5", 
        precio: 1605, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_tibetano_colgable.jpg",
        descripcion: "Sahumerio tibetano grueso en presentación colgable."
    },
    { 
        id: 3020, 
        nombre: "Tibetano Slim", 
        precio: 1819, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_tibetano_slim.jpg",
        descripcion: "Diseñado para un momento de conexión interior y serenidad en el hogar."
    },
    { 
        id: 3021, 
        nombre: "Triple Tibetano Black x 8", 
        precio: 3210, 
        categoria: "aromanza", 
        subcategoria: "ar-sahumerios", 
        imagen: "img/ar_triple_tibetano.jpg",
        descripcion: "Contiene 5 veces más aroma que el resto. Triple empaste."
    },
    // --- AROMANZA: BOMBITAS ---
    { 
        id: 3101, 
        nombre: "Esferas Aromanza 7 Chacras", 
        precio: 1605, 
        categoria: "aromanza", 
        subcategoria: "ar-bombitas", 
        imagen: "img/ar_esferas_7chakras.jpg", 
        descripcion: "Caja con 7 esferas surtidas para alinear los chakras." 
    },
    { 
        id: 3102, 
        nombre: "Esferas Colgables x 4", 
        precio: 856, 
        categoria: "aromanza", 
        subcategoria: "ar-bombitas", 
        imagen: "img/ar_esferas_colgables.jpg", 
        descripcion: "Esferas orgánicas para colgar o defumar.",
        variedades: ["Sándalo", "Lavanda", "Rosa", "Limón", "Jazmín", "Frutilla", "Reina de la Noche", "Palo Santo"]
    },
    { 
        id: 3103, 
        nombre: "Esferas Mágicas Caja x 4", 
        precio: 963, 
        categoria: "aromanza", 
        subcategoria: "ar-bombitas", 
        imagen: "img/ar_esferas_magicas.jpg", 
        descripcion: "Calidad premium, con aromas exquisitos de la línea Aromanza.",
        variedades: [
            "Berry Kiss", "Coconut", "Cristóbal Colón", "Diamante Negro", 
            "Esencias de la India", "Frutillas Dulces", "Gardenia y Flores", 
            "Naranja Pimienta", "Néctar de los Dioses", "Real Champa", 
            "Real Rose", "Super Palo Santo", "Vainillas Encantadas"
        ]
    },

    // --- AROMANZA: CONOS ---
    { 
        id: 3201, 
        nombre: "Cono Cascada x 100", 
        precio: 9400, 
        categoria: "aromanza", 
        subcategoria: "ar-conos", 
        imagen: "img/ar_cono_cascada_100.jpg", 
        descripcion: "Pack económico de conos para cascada. Surtidos." 
    },
    { 
        id: 3202, 
        nombre: "Conos Aromanza Premium", 
        precio: 2700, 
        categoria: "aromanza", 
        subcategoria: "ar-conos", 
        imagen: "img/ar_conos_aromanza.jpg", 
        descripcion: "Cono premium de alta duración para cascadas de humo.",
        variedades: [
            "Berry Kiss", "Coconut", "Diamante Negro", "Esencias de la India", 
            "Frutillas Dulces", "Gardenia", "Naranja Pimienta", "Néctar de los Dioses", 
            "Real Champa", "Real Rose", "Super Palo Santo", "Vainillas Encantadas"
        ]
    },
    { 
        id: 3203, 
        nombre: "Conos Momentos x 12", 
        precio: 2300, 
        categoria: "aromanza", 
        subcategoria: "ar-conos", 
        imagen: "img/ar_conos_momentos.jpg", 
        descripcion: "Liberan aromas suaves que invitan a la tranquilidad.",
        variedades: ["Aquí y Ahora", "Estudio y Trabajo", "Limpieza Energética", "Meditación", "Relax", "Yoga"]
    },
    { 
        id: 3204, 
        nombre: "Conos Vividha (Para Cascadas) x 10", 
        precio: 1200, 
        categoria: "aromanza", 
        subcategoria: "ar-conos", 
        imagen: "img/ar_conos_vividha.jpg", 
        descripcion: "Conos hindúes tradicionales.",
        variedades: ["Sándalo", "Lavanda", "Rosa", "Jazmín", "Patchouli", "Vainilla", "Opium", "Musk"]
    },

    // --- AROMANZA: ROCÍOS ÁURICOS ---
    { 
        id: 3301, 
        nombre: "Aerosol Aromanza Premium", 
        precio: 6000, 
        categoria: "aromanza", 
        subcategoria: "ar-rocios", 
        imagen: "img/ar_aerosol_premium.jpg", 
        descripcion: "Fragancias premium para aromatizar ambientes en aerosol.",
        variedades: [
            "Berry Kiss", "Bubblegum", "Confort Baby", "Diamante Negro", 
            "Frutos Rojos", "Gardenia y Flores Blancas", "Limón", 
            "Naranja Pimienta", "Néctar de los Dioses", "Ocean Blue", 
            "Pasión Rosa", "Vainilla"
        ]
    },
    { 
        id: 3302, 
        nombre: "Rocío Áurico", 
        precio: 2500, 
        categoria: "aromanza", 
        subcategoria: "ar-rocios", 
        imagen: "img/ar_rocio_aurico.jpg", 
        descripcion: "Herramienta para armonizar y limpiar el aura propiciando equilibrio.",
        variedades: [
            "7 Poderes", "Abre Caminos", "Atrae Dinero", "Contra Envidia", 
            "Destrabe", "Lavanda", "Limpieza Energética", "Palo Santo", 
            "Sanación", "San Cayetano", "San Jorge"
        ]
    },

    // --- AROMANZA: PASTILLAS ---
    { 
        id: 3401, 
        nombre: "Pastillas 7 Chacras", 
        precio: 1819, 
        categoria: "aromanza", 
        subcategoria: "ar-pastillas", 
        imagen: "img/ar_pastillas_7chakras.jpg", 
        descripcion: "Limpian la energía negativa de nuestro entorno. Caja surtida." 
    },
    { 
        id: 3402, 
        nombre: "Pastillas de Carbón x 36 (Sin Aroma)", 
        precio: 2889, 
        categoria: "aromanza", 
        subcategoria: "ar-pastillas", 
        imagen: "img/ar_pastillas_carbon.jpg", 
        descripcion: "Carbón vegetal ideal para defumación con resinas o hierbas." 
    },
    // --- AROMANZA: DIFUSORES ---
    { 
        id: 3501, 
        nombre: "Difusor Aromanza Premium x 125ml", 
        precio: 13500, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_premium_125.jpg", 
        descripcion: "Crean un ambiente propicio para la meditación y la tranquilidad. Varillas de ratán.",
        variedades: ["Berry Kiss", "Coconut", "Diamante Negro", "Esencias de la India", "Frutos Rojos", "Gardenia y Flores", "Limón", "Naranja Pimienta", "Néctar de los Dioses", "Real Champa", "Real Rose", "Super Palo Santo", "Vainillas Encantadas"]
    },
    { 
        id: 3502, 
        nombre: "Difusor Aromanza x 200ml", 
        precio: 11342, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_200.jpg", 
        descripcion: "Exquisitas fragancias de larga duración.",
        variedades: ["Bebé", "Citronela", "Coco", "Coniglio", "Flores Blancas", "Frutilla", "Jazmín", "Lavanda", "Limón", "Maderas de Oriente", "Marina", "Melón", "Naranja", "Palo Santo", "Papaya", "Patio", "Rosas", "Sandía", "Vainilla", "Uva"]
    },
    { 
        id: 3503, 
        nombre: "Difusor Aromanza x 60ml", 
        precio: 5100, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_60.jpg", 
        descripcion: "Versión pequeña ideal para espacios reducidos.",
        variedades: ["Bebé", "Coco", "Flores Blancas", "Frutilla", "Jazmín", "Lavanda", "Limón", "Maderas", "Vainilla"]
    },
    { 
        id: 3504, 
        nombre: "Difusor Auto Aromanza", 
        precio: 4700, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_auto.jpg", 
        descripcion: "Aromatizante colgante para el auto.",
        variedades: ["Vainilla", "Limón", "Coco", "Frutos Rojos", "Ocean", "New Car", "Bebé"]
    },
    { 
        id: 3505, 
        nombre: "Difusor Auto Iluminarte", 
        precio: 4700, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_auto_iluminarte.jpg", 
        descripcion: "Fragancias intensas para tu vehículo.",
        variedades: ["Limón", "Vainilla", "Lavanda", "Pino", "Frutilla"]
    },
    { 
        id: 3506, 
        nombre: "Difusor Auto Sandra Marzan", 
        precio: 5900, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_auto_sandra.jpg", 
        descripcion: "Aromas de autor para vehículos.",
        variedades: ["Consultar Disponibilidad"]
    },
    { 
        id: 3507, 
        nombre: "Difusor Autos 10ml Ganesha/Diamante", 
        precio: 3100, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_auto_ganesha.jpg", 
        descripcion: "Pequeño difusor colgante intenso.",
        variedades: ["Surtidos"]
    },
    { 
        id: 3508, 
        nombre: "Difusor Iluminarte x 60ml", 
        precio: 3700, 
        categoria: "aromanza", 
        subcategoria: "ar-difusores", 
        imagen: "img/ar_difusor_iluminarte_60.jpg", 
        descripcion: "Aromatizante de ambientes clásico.",
        variedades: ["Lavanda", "Rosa", "Limón", "Jazmín", "Vainilla", "Coco"]
    },

    // --- AROMANZA: ACEITES (Para Hornillo) ---
    { 
        id: 3601, 
        nombre: "Aceite Esencial en Lata (Aromanza)", 
        precio: 5992, 
        categoria: "aromanza", 
        subcategoria: "ar-aceites", 
        imagen: "img/ar_aceite_lata.jpg", 
        descripcion: "Transforman cualquier espacio en un refugio de calma. Presentación en lata premium.",
        variedades: ["Berry Kiss", "Coconut", "Diamante Negro", "Esencias de la India", "Frutos Rojos", "Gardenia", "Naranja Pimienta", "Néctar de los Dioses", "Real Champa", "Real Rose", "Super Palo Santo"]
    },
    { 
        id: 3602, 
        nombre: "Aceite Esencial Ganesha", 
        precio: 2033, 
        categoria: "aromanza", 
        subcategoria: "ar-aceites", 
        imagen: "img/ar_aceite_ganesha.jpg", 
        descripcion: "Esencias para hornitos de alta calidad.",
        variedades: ["Surtidos"]
    },
    { 
        id: 3603, 
        nombre: "Esencia Aromanza 10ml", 
        precio: 2000, 
        categoria: "aromanza", 
        subcategoria: "ar-aceites", 
        imagen: "img/ar_esencia_10ml.jpg", 
        descripcion: "Súper concentradas: con solo unas gotas obtenés una fragancia intensa y duradera.",
        variedades: ["7 Poderes", "Abre Caminos", "Citronela", "Coco", "Frutilla", "Incienso", "Jazmín", "Lavanda", "Limón", "Maderas de Oriente", "Mirra", "Palo Santo", "Rosas", "Sándalo", "Vainilla", "Violeta"]
    },

    // --- AROMANZA: ESENCIAS (Humidificadores y Sólidas) ---
    { 
        id: 3701, 
        nombre: "Esencia al Agua para Humidificador", 
        precio: 5992, 
        categoria: "aromanza", 
        subcategoria: "ar-esencias", 
        imagen: "img/ar_esencia_agua.jpg", 
        descripcion: "Hidrosolubles. Especiales para humidificadores ultrasónicos (no tapan el filtro).",
        variedades: ["Berry Kiss", "Bubblegum", "Confort Baby", "Diamante Negro", "Frutos Rojos", "Gardenia", "Limón", "Naranja Pimienta", "Néctar de los Dioses", "Ocean Blue", "Pasión Rosa", "Vainilla"]
    },
    { 
        id: 3702, 
        nombre: "Esencia Humidificador Colores", 
        precio: 3200, 
        categoria: "aromanza", 
        subcategoria: "ar-esencias", 
        imagen: "img/ar_esencia_colores.jpg", 
        descripcion: "Fragancias para humidificadores línea económica.",
        variedades: ["Surtidos"]
    },
    { 
        id: 3703, 
        nombre: "Esencia Sólida Aromanza", 
        precio: 3200, 
        categoria: "aromanza", 
        subcategoria: "ar-esencias", 
        imagen: "img/ar_esencia_solida.jpg", 
        descripcion: "Pastilla sólida para hornillo. Se derrite con el calor liberando aroma intenso. No se derrama.",
        variedades: ["Berry Kiss", "Coconut", "Diamante Negro", "Esencias de la India", "Frutos Rojos", "Gardenia", "Naranja Pimienta", "Néctar de los Dioses", "Real Champa", "Real Rose", "Super Palo Santo", "Vainillas Encantadas"]
    },
    { 
        id: 3704, 
        nombre: "Ruda en Spray Ganesha", 
        precio: 4000, 
        categoria: "aromanza", 
        subcategoria: "ar-esencias", 
        imagen: "img/ar_spray_ruda.jpg", 
        descripcion: "Spray de ruda para limpieza energética rápida de ambientes." 
    },

    // --- AROMANZA: BOX / KITS ---
    { 
        id: 3801, 
        nombre: "Box Kit 7 Chacras Premium", 
        precio: 12840, 
        categoria: "aromanza", 
        subcategoria: "ar-box", 
        imagen: "img/ar_box_7chakras.jpg", 
        descripcion: "Piedras y cristales que representan cada chakra, incienso para purificar el ambiente." 
    },
    { 
        id: 3802, 
        nombre: "Box Kit Mágico Premium", 
        precio: 10914, 
        categoria: "aromanza", 
        subcategoria: "ar-box", 
        imagen: "img/ar_box_magico.jpg", 
        descripcion: "Con sahumerios, mini porta sahumerio, esferas mágicas, carbones, polvos mágicos." 
    },
    { 
        id: 3803, 
        nombre: "Box Kit Momentos", 
        precio: 14980, 
        categoria: "aromanza", 
        subcategoria: "ar-box", 
        imagen: "img/ar_box_momentos.jpg", 
        descripcion: "Sahumerios Momentos, Porta sahumerio, Porta conos." 
    },
    { 
        id: 3804, 
        nombre: "Caja Porta Sahumerio + Sahumerios", 
        precio: 5778, 
        categoria: "aromanza", 
        subcategoria: "ar-box", 
        imagen: "img/ar_box_caja_porta.jpg", 
        descripcion: "Para limpiar energías negativas y purificar espacios." 
    },
    { 
        id: 3805, 
        nombre: "Kit Tibetano Premium", 
        precio: 18190, 
        categoria: "aromanza", 
        subcategoria: "ar-box", 
        imagen: "img/ar_kit_tibetano.jpg", 
        descripcion: "Sahumerios tibetanos, porta sahumerio de madera, pergamino." 
    },
    // --- AROMANZA: VELAS ---
    { 
        id: 3901, 
        nombre: "Vela Aromática Premium", 
        precio: 13500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_aromatica_premium.jpg", 
        descripcion: "Crean un ambiente acogedor y relajante en su hogar." 
    },
    { 
        id: 3902, 
        nombre: "Vela Candle Lux Soja", 
        precio: 18900, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_candle_lux.jpg", 
        descripcion: "Crean un ambiente acogedor y relajante en su hogar." 
    },
    { 
        id: 3903, 
        nombre: "Vela Chica Vaso Facetado Negro", 
        precio: 10500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_vaso_negro_chica.jpg", 
        descripcion: "" 
    },
    { 
        id: 3904, 
        nombre: "Vela Color Con Aroma", 
        precio: 1800, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_color_aroma.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Azul", "Amarillo", "Verde", "Violeta", "Rosa"]
    },
    { 
        id: 3905, 
        nombre: "Vela Color Sin Aroma x 1", 
        precio: 1000, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_color_sin_aroma.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Azul", "Amarillo", "Verde", "Violeta", "Rosa"]
    },
    { 
        id: 3906, 
        nombre: "Vela Larga Oro/Plata", 
        precio: 1000, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_larga_metalizada.jpg", 
        descripcion: "",
        variedades: ["Oro", "Plata"]
    },
    { 
        id: 3907, 
        nombre: "Vela Loto", 
        precio: 2100, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_loto.jpg", 
        descripcion: "" 
    },
    { 
        id: 3908, 
        nombre: "Vela Noche Blanca x 12", 
        precio: 2500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_noche_blanca.jpg", 
        descripcion: "Velas de noche clásicas." 
    },
    { 
        id: 3909, 
        nombre: "Vela Noche Color x 12", 
        precio: 3424, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_noche_color.jpg", 
        descripcion: "Velas de noche surtidas." 
    },
    { 
        id: 3910, 
        nombre: "Vela Noche x 50", 
        precio: 11021, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_noche_50.jpg", 
        descripcion: "Pack mayorista de velas de noche." 
    },
    { 
        id: 3911, 
        nombre: "Vela Perfumada Hornillo Por 12", 
        precio: 5800, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_hornillo_12.jpg", 
        descripcion: "Ideales para utilizar en hornillos." 
    },
    { 
        id: 3912, 
        nombre: "Vela Premium Aromanza", 
        precio: 12840, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_premium.jpg", 
        descripcion: "" 
    },
    { 
        id: 3913, 
        nombre: "Vela Soja Cuenco Madera", 
        precio: 6313, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_soja_cuenco.jpg", 
        descripcion: "Crean un ambiente acogedor y relajante." 
    },
    { 
        id: 3914, 
        nombre: "Vela Tennese Con Inclusión", 
        precio: 9400, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_tennese.jpg", 
        descripcion: "Disfrutá de una experiencia sensorial única con esta vela aromática de cera vegetal 100% natural. Un producto ideal para crear ambientes cálidos, relajantes y armónicos." 
    },
    { 
        id: 3915, 
        nombre: "Vela Vaso Vidrio Facetado Negro Grande", 
        precio: 16800, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_vela_vaso_negro_grande.jpg", 
        descripcion: "" 
    },
    { 
        id: 3916, 
        nombre: "Velas Bautismo", 
        precio: 1800, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_bautismo.jpg", 
        descripcion: "" 
    },
    { 
        id: 3917, 
        nombre: "Velas Colores Medianas", 
        precio: 700, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_colores_medianas.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Azul", "Amarillo", "Verde", "Violeta", "Rosa", "Naranja"]
    },
    { 
        id: 3918, 
        nombre: "Velas Cónicas Largas", 
        precio: 2500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_conicas.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Negro", "Violeta"]
    },
    { 
        id: 3919, 
        nombre: "Velas Finitas Largas Colores", 
        precio: 500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_finitas.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Azul", "Amarillo", "Verde", "Violeta", "San Cayetano", "San Jorge"]
    },
    { 
        id: 3920, 
        nombre: "Velas Hornillo x 6", 
        precio: 1700, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_hornillo_6.jpg", 
        descripcion: "" 
    },
    { 
        id: 3921, 
        nombre: "Velas Torneadas", 
        precio: 1500, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velas_torneadas.jpg", 
        descripcion: "",
        variedades: ["Blanco", "Rojo", "Dorado", "Plateado"]
    },
    { 
        id: 3922, 
        nombre: "Velón 3 Días Combinado", 
        precio: 2247, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_3dias.jpg", 
        descripcion: "",
        variedades: ["San Jorge", "San Cayetano", "7 Poderes", "Abre Caminos"]
    },
    { 
        id: 3923, 
        nombre: "Velón 7 Chakras 7 Arcángeles", 
        precio: 8774, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_7chakras.jpg", 
        descripcion: "" 
    },
    { 
        id: 3924, 
        nombre: "Velón 7 Días Blanco", 
        precio: 4601, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_7dias_blanco.jpg", 
        descripcion: "" 
    },
    { 
        id: 3925, 
        nombre: "Velón 7 Días Combinado", 
        precio: 4708, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_7dias_combinado.jpg", 
        descripcion: "Para rituales espirituales, religiosos o energéticos.",
        variedades: ["San Jorge", "San Cayetano", "7 Poderes", "Abre Caminos", "Destrabe"]
    },
    { 
        id: 3926, 
        nombre: "Velón Aromanza Con Flor", 
        precio: 16900, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_flor.jpg", 
        descripcion: "" 
    },
    { 
        id: 3927, 
        nombre: "Velón Aromático Fanal", 
        precio: 9200, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_fanal.jpg", 
        descripcion: "El velón fanal aromático es un objeto que combina la función decorativa, terapéutica y espiritual en un solo producto. 18 horas de duración." 
    },
    { 
        id: 3928, 
        nombre: "Velón Burbuja", 
        precio: 2461, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_burbuja.jpg", 
        descripcion: "" 
    },
    { 
        id: 3929, 
        nombre: "Velón Campana", 
        precio: 18404, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_campana.jpg", 
        descripcion: "" 
    },
    { 
        id: 3930, 
        nombre: "Velón Iluminarte Decorativo Grande", 
        precio: 7300, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_iluminarte.jpg", 
        descripcion: "" 
    },
    { 
        id: 3931, 
        nombre: "Velón Infinito", 
        precio: 5900, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_infinito.jpg", 
        descripcion: "" 
    },
    { 
        id: 3932, 
        nombre: "Velón Lata Negra", 
        precio: 6848, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_lata.jpg", 
        descripcion: "" 
    },
    { 
        id: 3933, 
        nombre: "Velón Luxe", 
        precio: 10593, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_velon_luxe.jpg", 
        descripcion: "" 
    },
    { 
        id: 3934, 
        nombre: "Veloncito Por 3 Color Con Aroma", 
        precio: 4200, 
        categoria: "aromanza", 
        subcategoria: "ar-velas", 
        imagen: "img/ar_veloncito_x3.jpg", 
        descripcion: "" 
    }

]; // <--- ¡ASEGÚRATE DE QUE ESTE SEA EL FINAL DEL ARCHIVO!

