// --- CONFIGURACIÓN GENERAL ---
const telFranck = "5492615717954"; // <--- TU NÚMERO VA AQUÍ

// --- 2. DICCIONARIO DE TÍTULOS ---
const nombresCategorias = {
    "todos": "Todos los Productos",
    "sagrada-madre": "Productos Sagrada Madre",
    "aromanza": "Mundo Aromanza",
    "saphirus": "Línea Saphirus",
    "vasos": "Vasos Sustentables",
    "jabones": "Jabones Artesanales",
    "fogoneros": "Fogoneros y Tablas",
    "piedras": "Piedras y Cristales",
    "yoga": "Yoga y Meditación",
    "japa-mala": "Japa Mala",
    "libros": "Libros y Cartas",
    "seres-bosque": "Seres del Bosque",
    "deco": "Deco y Hogar"
};

// --- 3. CONFIGURACIÓN DE SUBCATEGORÍAS ---
const estructuraCategorias = {
    "sagrada-madre": [
        { id: "sm-sahumerios", nombre: "Sahumerios" },
        { id: "sm-bombitas", nombre: "Bombitas" },
        { id: "sm-pastillas", nombre: "Pastillas" },
        { id: "sm-resinas", nombre: "Resinas" },
        { id: "sm-piramides", nombre: "Pirámides" },
        { id: "sm-sahumos", nombre: "Sahumos" },
        { id: "sm-perlas", nombre: "Perlas" },
        { id: "sm-velas", nombre: "Velas" },
        { id: "sm-kits", nombre: "Kits" }
    ],
    "aromanza": [
        { id: "ar-sahumerios", nombre: "Sahumerios" },
        { id: "ar-bombitas", nombre: "Bombitas" },
        { id: "ar-conos", nombre: "Conos" },
        { id: "ar-rocios", nombre: "Rocíos Áuricos" },
        { id: "ar-pastillas", nombre: "Pastillas" },
        { id: "ar-difusores", nombre: "Difusores" },
        { id: "ar-aceites", nombre: "Aceites" },
        { id: "ar-esencias", nombre: "Esencias" },
        { id: "ar-velas", nombre: "Velas" },
        { id: "ar-box", nombre: "Box" }
    ],
    "jabones": [
        { id: "jab-rostro", nombre: "Rostro" },
        { id: "jab-cuerpo", nombre: "Cuerpo" },
        { id: "jab-accesorios", nombre: "Accesorios" },
        { id: "jab-kits", nombre: "Kit Regalos" }
    ],
    "libros": [
        { id: "lib-magiablanca", nombre: "Magia Blanca" },
        { id: "lib-rituales", nombre: "Rituales" },
        { id: "lib-cartas", nombre: "Cartas Tarot" },
        { id: "lib-panos", nombre: "Paños" }
    ],
    "seres-bosque": [
        { id: "sb-gnomos", nombre: "Gnomos" },
        { id: "sb-duendes", nombre: "Duendes" },
        { id: "sb-brujitas", nombre: "Brujitas" },
        { id: "sb-hadas", nombre: "Hadas" },
        { id: "sb-magos", nombre: "Magos" },
        { id: "sb-kits", nombre: "Kits Duendes Mágicos" }
    ],
    "japa-mala": [
        { id: "jm-collares", nombre: "Collares 108" },
        { id: "jm-pulseras", nombre: "Pulseras" }
    ],
    "deco": [
        { id: "dc-cascadas", nombre: "Cascadas Humo" },
        { id: "dc-fuentes", nombre: "Fuentes Agua" },
        { id: "dc-budas", nombre: "Budas" },
        { id: "dc-velas", nombre: "Velas" },
        { id: "dc-hornillos", nombre: "Hornillos" },
        { id: "dc-llamadores", nombre: "Llamadores" },
        { id: "dc-atrapasol", nombre: "Atrapa Sol" },
        { id: "dc-humificadores", nombre: "Humificadores" },
        { id: "dc-esencias", nombre: "Esencias" },
        { id: "dc-lamparas", nombre: "Lámparas" },
        { id: "dc-colgantes", nombre: "Colgantes Y Llaveros" },
        { id: "dc-giratorios", nombre: "Giratorios De Viento" },
        { id: "dc-ganeshas", nombre: "Ganeshas" },
        { id: "dc-gatos", nombre: "Gatos" },
        { id: "dc-pendulos", nombre: "Péndulos" },
        { id: "dc-decohogar", nombre: "Deco Hogar" },
        { id: "dc-portasahumerios", nombre: "Porta Sahumerios" }
    ]
    // ... (después del bloque de "deco")
    , // <--- NO OLVIDES ESTA COMA ANTES DE PEGAR LO SIGUIENTE
    "saphirus": [
        { id: "sap-aerosoles", nombre: "Aerosoles" },
        { id: "sap-textiles", nombre: "Textiles" },
        { id: "sap-difusores", nombre: "Difusores" },
        { id: "sap-tarjetas", nombre: "Tarjetas Aromáticas" },
        { id: "sap-aceites", nombre: "Aceites" },
        { id: "sap-gel", nombre: "Gel" },
        { id: "sap-rute66", nombre: "Rute 66" },
        { id: "sap-equipos", nombre: "Difusores Equipos" },
        { id: "sap-hornillos", nombre: "Hornillos" },
        { id: "sap-sahumerios", nombre: "Sahumerios" },
        { id: "sap-parfum", nombre: "Perfumes Parfum" },
        { id: "sap-milano", nombre: "Línea Milano" },
        { id: "sap-limpiadores", nombre: "Líquidos Limpiadores" },
        { id: "sap-repelentes", nombre: "Repelentes" }
    ]
};

// --- 1. BASE DE DATOS DE PRODUCTOS ---
const productosBD = [
    // --- TUS VASOS ---
    { id: 1, nombre: "Vaso Sustentable (Sin Logo)", precio: 4000, categoria: "vasos", imagen: "img/vasosolosinlogo.jpeg" },
    { id: 2, nombre: "Vaso con Logo Personalizado", precio: 7000, categoria: "vasos", imagen: "img/vaso franck.jpeg" },
    { id: 3, nombre: "Jarro Artesanal", precio: 10000, categoria: "vasos", imagen: "img/jarros boca.png" },
    { id: 4, nombre: "Jarro Super Medida", precio: 12000, categoria: "vasos", imagen: "img/vasosenelespacio.jpeg" },
    { id: 5, nombre: "Vasos de colores", precio: 7000, categoria: "vasos", imagen: "img/vaso sky.jpeg" },
    { id: 6, nombre: "Vasos a elegir", precio: 7000, categoria: "vasos", imagen: "img/vasos varios.jpeg" },

    // --- JABONES ARTESANALES: ROSTRO ---
    { 
        id: 501, 
        nombre: "Jabón Facial Ácido Hialurónico", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-rostro", 
        imagen: "img/jabon_facial_hialuronico.jpg", 
        descripcion: "Base de jabón de coco, vitamina E, aceite de coco, manteca de karité y ácido hialurónico." 
    },
    { 
        id: 502, 
        nombre: "Jabón Facial Arcilla", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-rostro", 
        imagen: "img/jabon_facial_arcilla.jpg", 
        descripcion: "Base de jabón de coco, aceite de jojoba, manteca de karité, arcilla blanca." 
    },
    { 
        id: 503, 
        nombre: "Jabón Facial Arroz Blanco", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-rostro", 
        imagen: "img/jabon_facial_arroz.jpg", 
        descripcion: "Coco, aceite de almendras, manteca de karité y polvo de arroz." 
    },
    { 
        id: 504, 
        nombre: "Jabón Facial Avena", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-rostro", 
        imagen: "img/jabon_facial_avena.jpg", 
        descripcion: "Base de jabón de coco, extracto de avena, vitamina E, manteca de Karité, avena en polvo y aceite de almendras." 
    },
    { 
        id: 505, 
        nombre: "Jabón Facial Té Verde", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-rostro", 
        imagen: "img/jabon_facial_teverde.jpg", 
        descripcion: "El té verde está compuesto por taninos y catequinas. Ayuda a combatir el envejecimiento celular, desinflama la piel y reduce el sebo." 
    },

    // --- JABONES ARTESANALES: CUERPO ---
    { 
        id: 510, 
        nombre: "Jabón Corporal Arcilla Roja", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_arcilla_roja.jpg", 
        descripcion: "Limpieza profunda: la arcilla roja ayuda a eliminar impurezas. Hidratación: el aceite de argán proporciona hidratación intensa." 
    },
    { 
        id: 511, 
        nombre: "Jabón Corporal Caléndula y Avena", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_calendula.jpg", 
        descripcion: "La caléndula fomenta la formación de nuevos tejidos. Combinado con la avena da un jabón muy cremoso." 
    },
    { 
        id: 512, 
        nombre: "Jabón Corporal Centella Asiática", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_centella.jpg", 
        descripcion: "Ayuda a estimular la circulación sanguínea y a promover la producción de colágeno." 
    },
    { 
        id: 513, 
        nombre: "Jabón Corporal Coco", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_coco.jpg", 
        descripcion: "Ideal para pieles sensibles, elaborado a base de coco y enriquecido con vitamina E." 
    },
    { 
        id: 514, 
        nombre: "Jabón Corporal de Cacao", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_cacao.jpg", 
        descripcion: "Perfecto para ablandar y nutrir la piel, embellecer zonas secas y actuar contra la flacidez." 
    },
    { 
        id: 515, 
        nombre: "Jabón Corporal de Café", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_cafe.jpg", 
        descripcion: "Exfoliante y regenerador celular. Favorece la regeneración de la piel y la nutre." 
    },
    { 
        id: 516, 
        nombre: "Jabón Corporal Carbón y Sal", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_carbon.jpg", 
        descripcion: "Limpieza profunda, absorbe toxinas y suciedad. Ideal para pieles grasas o con acné." 
    },
    { 
        id: 517, 
        nombre: "Jabón Corporal de Cúrcuma", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_curcuma.jpg", 
        descripcion: "Propiedades antiinflamatorias y antioxidantes. Ayuda a calmar la piel irritada." 
    },
    { 
        id: 518, 
        nombre: "Jabón Corporal de Oliva", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_oliva.jpg", 
        descripcion: "El aceite de oliva contiene elevados niveles de vitamina E y A. Es balsámico y desodorante." 
    },
    { 
        id: 519, 
        nombre: "Jabón Corporal Eucalipto", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_eucalipto.jpg", 
        descripcion: "Ayuda a calmar afecciones cutáneas, irritaciones y heridas. Balsámico." 
    },
    { 
        id: 520, 
        nombre: "Jabón Corporal Hongo Hidratante", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_hongo.jpg", 
        descripcion: "Ayuda al organismo a adaptarse y equilibrarse frente al estrés físico." 
    },
    { 
        id: 521, 
        nombre: "Jabón Corporal Lavanda", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_lavanda.jpg", 
        descripcion: "Actúa como revitalizador de la piel, regenera células y mantiene el tejido firme." 
    },
    { 
        id: 522, 
        nombre: "Jabón Corporal Malbec", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_malbec.jpg", 
        descripcion: "Vinoterapia: aprovecha antioxidantes para combatir radicales libres y el envejecimiento." 
    },
    { 
        id: 523, 
        nombre: "Jabón Corporal Manzanilla y Aloe", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_manzanilla.jpg", 
        descripcion: "El aloe vera es antibacteriano. La manzanilla limpia, tonifica y suaviza." 
    },
    { 
        id: 524, 
        nombre: "Jabón Corporal Pepitas de Uva", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_uva.jpg", 
        descripcion: "Exfoliante. Base de jabón de coco, manteca de cacao y aceite de pepitas de uva." 
    },
    { 
        id: 525, 
        nombre: "Jabón Corporal Rosa Mosqueta", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_rosa_mosqueta.jpg", 
        descripcion: "Nutrientes como retinol y vitamina C. Reparador de la piel y antioxidante." 
    },
    { 
        id: 526, 
        nombre: "Jabón Corporal Ruda Romero Sándalo", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-cuerpo", 
        imagen: "img/jabon_corporal_ruda.jpg", 
        descripcion: "Protección energética diaria. Antibacteriano y antiinflamatorio." 
    },

    // --- JABONES ARTESANALES: ACCESORIOS ---
    { 
        id: 530, 
        nombre: "Esponja Vegetal Corporal", 
        precio: 6300, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/esponja_vegetal.jpg", 
        descripcion: "100% natural y compostable. Remueve células muertas y mejora la circulación." 
    },
    { 
        id: 531, 
        nombre: "Jabonera de Madera", 
        precio: 3900, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/jabonera_madera.jpg", 
        descripcion: "Madera de pino curada y tratada con aceite de lino." 
    },
    { 
        id: 532, 
        nombre: "Pad Desmaquillante", 
        precio: 4900, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/pad_desmaquillante.jpg", 
        descripcion: "Súper suave de 8 cm de diámetro." 
    },
    { 
        id: 533, 
        nombre: "Sal del Himalaya de Jazmín", 
        precio: 13000, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/sal_himalaya_jazmin.jpg", 
        descripcion: "" 
    },
    { 
        id: 534, 
        nombre: "Sal Rosa del Himalaya", 
        precio: 13000, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/sal_rosa_himalaya.jpg", 
        descripcion: "" 
    },
    { 
        id: 535, 
        nombre: "Toalla para el Rostro", 
        precio: 6500, 
        categoria: "jabones", 
        subcategoria: "jab-accesorios", 
        imagen: "img/toalla_rostro.jpg", 
        descripcion: "Microfibra blanca. Indispensable para tu rutina facial." 
    },

    // --- JABONES ARTESANALES: KIT REGALOS ---
    { 
        id: 540, 
        nombre: "Box Blend", 
        precio: 19900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_blend.jpg", 
        descripcion: "Contiene 4 jabones corporales combinados." 
    },
    { 
        id: 541, 
        nombre: "Box Dúo", 
        precio: 10600, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_duo.jpg", 
        descripcion: "Contiene un jabón corporal más un jabón facial." 
    },
    { 
        id: 542, 
        nombre: "Box Reserva", 
        precio: 37900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_reserva.jpg", 
        descripcion: "Caja rígida. Contiene: 1 sal de baño + 2 jabones corporales + 2 jabones faciales." 
    },
    { 
        id: 543, 
        nombre: "Box Tiny", 
        precio: 8900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_tiny.jpg", 
        descripcion: "Jabones para manos con forma de racimos de uvas en frasco." 
    },
    { 
        id: 544, 
        nombre: "Box Tiny Corazón Celeste", 
        precio: 8900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_tiny_celeste.jpg", 
        descripcion: "" 
    },
    { 
        id: 545, 
        nombre: "Box Tiny Corazón Rojo", 
        precio: 8900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_tiny_rojo.jpg", 
        descripcion: "" 
    },
    { 
        id: 546, 
        nombre: "Box Tiny Corazón Rosa", 
        precio: 8900, 
        categoria: "jabones", 
        subcategoria: "jab-kits", 
        imagen: "img/box_tiny_rosa.jpg", 
        descripcion: "" 
    },

    // --- DECO: CASCADAS HUMO ---
    { id: 1101, nombre: "Cascada Humo Buda", precio: 5800, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_buda.jpg", descripcion: "" },
    { id: 1102, nombre: "Cascada Humo Caldera Brujo", precio: 6900, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_caldera_brujo.jpg", descripcion: "" },
    { id: 1103, nombre: "Cascada Humo Color", precio: 5200, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_color.jpg", descripcion: "" },
    { id: 1104, nombre: "Cascada Humo Escalera", precio: 4500, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_escalera.jpg", descripcion: "" },
    { id: 1105, nombre: "Cascada Humo Manito", precio: 10800, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_manito.jpg", descripcion: "" },
    { id: 1106, nombre: "Cascada Humo Manito Pimpollo", precio: 15000, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_manito_pimpollo.jpg", descripcion: "" },
    { id: 1107, nombre: "Cascada Humo MDF", precio: 3900, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_mdf.jpg", descripcion: "" },
    { id: 1108, nombre: "Cascada Humo MDF 7 Chakras", precio: 6900, categoria: "deco", subcategoria: "dc-cascadas", imagen: "img/cascada_mdf_7chakras.jpg", descripcion: "" },

    // --- DECO: FUENTES AGUA ---
    { id: 1120, nombre: "Fuente Agua", precio: 39000, categoria: "deco", subcategoria: "dc-fuentes", imagen: "img/fuente_agua.jpg", descripcion: "" },
    { id: 1121, nombre: "Fuente Agua Chica", precio: 39000, categoria: "deco", subcategoria: "dc-fuentes", imagen: "img/fuente_agua_chica.jpg", descripcion: "" },
    { id: 1122, nombre: "Fuente Color Agua Chica", precio: 35000, categoria: "deco", subcategoria: "dc-fuentes", imagen: "img/fuente_color_agua_chica.jpg", descripcion: "" },
    { id: 1123, nombre: "Fuente Japonesa", precio: 48000, categoria: "deco", subcategoria: "dc-fuentes", imagen: "img/fuente_japonesa.jpg", descripcion: "" },
    { id: 1124, nombre: "Fuente Mediana Color", precio: 48000, categoria: "deco", subcategoria: "dc-fuentes", imagen: "img/fuente_mediana_color.jpg", descripcion: "" },

    // --- DECO: BUDAS ---
    { id: 1130, nombre: "Buda de Yeso con Piedras", precio: 28300, categoria: "deco", subcategoria: "dc-budas", imagen: "img/buda_yeso_piedras.jpg", descripcion: "" },
    { id: 1131, nombre: "Cuadro Buda", precio: 60000, categoria: "deco", subcategoria: "dc-budas", imagen: "img/cuadro_buda.jpg", descripcion: "" },
    { id: 1132, nombre: "Figura Buda Yeso", precio: 39000, categoria: "deco", subcategoria: "dc-budas", imagen: "img/figura_buda_yeso.jpg", descripcion: "" },
    { id: 1133, nombre: "Lámpara Grande Buda Cristal con Luz", precio: 39000, categoria: "deco", subcategoria: "dc-budas", imagen: "img/lampara_buda_cristal.jpg", descripcion: "" },

    // --- DECO: VELAS ---
    { id: 1140, nombre: "Base Cemento Para Velas Formas Oval", precio: 4000, categoria: "deco", subcategoria: "dc-velas", imagen: "img/base_cemento_oval.jpg", descripcion: "" },
    { id: 1141, nombre: "Vela Blanca Spa Grande", precio: 8500, categoria: "deco", subcategoria: "dc-velas", imagen: "img/vela_blanca_spa.jpg", descripcion: "" },
    { id: 1142, nombre: "Vela Navideña Forma Pino", precio: 4500, categoria: "deco", subcategoria: "dc-velas", imagen: "img/vela_navidena_pino.jpg", descripcion: "" },
    { id: 1143, nombre: "Velas Cemento Set x 3 Tamaños", precio: 9000, categoria: "deco", subcategoria: "dc-velas", imagen: "img/velas_cemento_set.jpg", descripcion: "" },
    { id: 1144, nombre: "Velas con Formas x 10", precio: 12000, categoria: "deco", subcategoria: "dc-velas", imagen: "img/velas_formas_x10.jpg", descripcion: "" },
    { id: 1145, nombre: "Velas Navideñas con Formas", precio: 4500, categoria: "deco", subcategoria: "dc-velas", imagen: "img/velas_navidenas_formas.jpg", descripcion: "" },

    // --- DECO: HORNILLOS ---
    { id: 1150, nombre: "Hornillo Blanco Redondo", precio: 7900, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornillo_blanco_redondo.jpg", descripcion: "" },
    { id: 1151, nombre: "Hornillo Buda", precio: 6955, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornillo_buda.jpg", descripcion: "" },
    { id: 1152, nombre: "Hornillo Mano Fátima", precio: 12305, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornillo_mano_fatima.jpg", descripcion: "" },
    { id: 1153, nombre: "Hornillo MDF Con Pájaros", precio: 7600, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornillo_mdf_pajaros.jpg", descripcion: "" },
    { id: 1154, nombre: "Hornillos Chicos", precio: 4494, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornillos_chicos.jpg", descripcion: "" },
    { id: 1155, nombre: "Hornito Grande Flores/Mariposas", precio: 8500, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/hornito_grande_flores.jpg", descripcion: "" },
    { id: 1156, nombre: "Set Hornillo + Esencia + Vela", precio: 8400, categoria: "deco", subcategoria: "dc-hornillos", imagen: "img/set_hornillo_completo.jpg", descripcion: "" },

    // --- DECO: LLAMADORES ---
    { id: 1160, nombre: "Atrapa Sueños Color", precio: 13375, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_color.jpg", descripcion: "" },
    { id: 1161, nombre: "Atrapa Sueños Gigante", precio: 56200, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_gigante.jpg", descripcion: "" },
    { id: 1162, nombre: "Atrapa Sueños MDF", precio: 14500, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_mdf.jpg", descripcion: "" },
    { id: 1163, nombre: "Atrapa Sueños Mediano", precio: 44000, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_mediano.jpg", descripcion: "" },
    { id: 1164, nombre: "Atrapa Sueños Tejido Pequeño", precio: 13500, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_tejido_peq.jpg", descripcion: "" },
    { id: 1165, nombre: "Atrapa Sueños Chico", precio: 28000, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/atrapasuenos_chico.jpg", descripcion: "" },
    { id: 1166, nombre: "Campana Viento Chica", precio: 8600, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/campana_viento_chica.jpg", descripcion: "" },
    { id: 1167, nombre: "Campana Viento Gatito", precio: 10272, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/campana_viento_gatito.jpg", descripcion: "" },
    { id: 1168, nombre: "Campana Viento Grande", precio: 13500, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/campana_viento_grande.jpg", descripcion: "" },
    { id: 1169, nombre: "Llamador Buda Campana", precio: 13482, categoria: "deco", subcategoria: "dc-llamadores", imagen: "img/llamador_buda_campana.jpg", descripcion: "" },

    // --- DECO: ATRAPA SOL ---
    { id: 1180, nombre: "Atrapa Sol Cristal", precio: 10486, categoria: "deco", subcategoria: "dc-atrapasol", imagen: "img/atrapasol_cristal.jpg", descripcion: "" },
    { id: 1181, nombre: "Atrapa Sol Esfera", precio: 10600, categoria: "deco", subcategoria: "dc-atrapasol", imagen: "img/atrapasol_esfera.jpg", descripcion: "" },
    { id: 1182, nombre: "Atrapa Sol Media Luna", precio: 13375, categoria: "deco", subcategoria: "dc-atrapasol", imagen: "img/atrapasol_medialuna.jpg", descripcion: "" },

    // --- DECO: HUMIDIFICADORES ---
    { id: 1190, nombre: "Humidificador Efecto Vela", precio: 12900, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_efecto_vela.jpg", descripcion: "" },
    { id: 1191, nombre: "Humidificador Acanalado Grande", precio: 31700, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_acanalado_grande.jpg", descripcion: "" },
    { id: 1192, nombre: "Humidificador Auto", precio: 13482, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_auto.jpg", descripcion: "Ayuda a contrarrestar el ambiente seco y mejorar la calidad del aire en el automóvil, lo que puede ser especialmente beneficioso durante los meses de invierno o en áreas con climas áridos." },
    { id: 1193, nombre: "Humidificador Craquelado Luna", precio: 12500, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_craquelado_luna.jpg", descripcion: "" },
    { id: 1194, nombre: "Humidificador Efecto Llama", precio: 35631, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_efecto_llama.jpg", descripcion: "Un humidificador es un dispositivo que incrementa la humedad del aire en el interior de un espacio." },
    { id: 1195, nombre: "Humidificador Símil Craquelado", precio: 13375, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_simil_craquelado.jpg", descripcion: "" },
    { id: 1196, nombre: "Humidificador Símil Madera", precio: 14445, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_simil_madera.jpg", descripcion: "" },
    { id: 1197, nombre: "Humidificador Redondo Símil Madera", precio: 13600, categoria: "deco", subcategoria: "dc-humificadores", imagen: "img/humidificador_redondo_madera.jpg", descripcion: "" },
// --- DECO: ESENCIAS ---
    { id: 1200, nombre: "Esencias Para Hornillos X 12", precio: 8560, categoria: "deco", subcategoria: "dc-esencias", imagen: "img/esencias_hornillos_x12.jpg", descripcion: "Disfruta de una gran cantidad de beneficios naturales para la salud gracias a este juego de aceites esenciales para hornillo que contiene botes de lavanda, rosa, jazmín, limón, violetas, naranja, té verde, océano, mora, lotus, osmanthus, sándalo." },

    // --- DECO: LÁMPARAS ---
    { id: 1201, nombre: "Esfera Cristal Chica Iluminada", precio: 10000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/esfera_cristal_chica.jpg", descripcion: "Pon un toque mágico a cualquier espacio con esta bola de cristal con luz y un detallado grabado 3D en su interior." },
    { id: 1202, nombre: "Esfera Cristal Grande", precio: 24075, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/esfera_cristal_grande.jpg", descripcion: "Pon un toque mágico a cualquier espacio con esta bola de cristal con luz y un detallado grabado 3D en su interior." },
    { id: 1203, nombre: "Esfera Cristal Mediana Con Luz", precio: 12000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/esfera_cristal_mediana.jpg", descripcion: "Pon un toque mágico a cualquier espacio." },
    { id: 1204, nombre: "Lámpara Aladino Chica + Inciensos X 40", precio: 18832, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_aladino_chica.jpg", descripcion: "Antigua tetera y Quemador de incienso con forma de Lámpara de Aladino completamente realizada en bronce macizo. Traída de Estambul, Turquía." },
    { id: 1205, nombre: "Lámpara Aladino Grande", precio: 24610, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_aladino_grande.jpg", descripcion: "Frota para hacer realidad tus deseos Lámpara vintage de diseño del Genio." },
    { id: 1206, nombre: "Lámpara Corazón", precio: 21293, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_corazon.jpg", descripcion: "" },
    { id: 1207, nombre: "Lámpara De Sal Turca", precio: 34000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_turca.jpg", descripcion: "" },
    { id: 1208, nombre: "Lámpara Sal del Himalaya Grande Regulable", precio: 33705, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_himalaya_grande.jpg", descripcion: "Transmutan y trasmiten buena energía." },
    { id: 1209, nombre: "Lámpara Sal Himalaya chica", precio: 25680, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_himalaya_chica.jpg", descripcion: "El principal beneficio es su capacidad para ionizar el aire." },
    { id: 1210, nombre: "Lámpara Sal MDF", precio: 19000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_mdf.jpg", descripcion: "Transmiten buena energía, según el Feng Shui. Aportan al ambiente un toque de color rosado y luz suave que invita a la relajación. Mejoran la calidad del sueño al eliminar las ondas electromagnéticas del aire." },
    { id: 1211, nombre: "Lámpara Sal Piedra Calada", precio: 21935, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_piedra_calada.jpg", descripcion: "Lámpara de sal decorativa con forma de piedra calada. Incluye las sales y kit eléctrico completo." },
    { id: 1212, nombre: "Lámpara Sal Pirámide", precio: 45000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_piramide.jpg", descripcion: "" },
    { id: 1213, nombre: "Lámpara Sal Swet Home", precio: 15000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_swet_home.jpg", descripcion: "" },
    { id: 1214, nombre: "Lámpara Sal Turca Grande", precio: 35000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_sal_turca_grande.jpg", descripcion: "" },
    { id: 1215, nombre: "Lámpara Velador MDF", precio: 27000, categoria: "deco", subcategoria: "dc-lamparas", imagen: "img/lampara_velador_mdf.jpg", descripcion: "" },

    // --- DECO: COLGANTES Y LLAVEROS ---
    { id: 1220, nombre: "Colgante Auto Ojo", precio: 3745, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_auto_ojo.jpg", descripcion: "" },
    { id: 1221, nombre: "Colgante Buda Picaflor 2D", precio: 6700, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_buda_picaflor.jpg", descripcion: "" },
    { id: 1222, nombre: "Colgante Búho", precio: 13375, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_buho.jpg", descripcion: "" },
    { id: 1223, nombre: "Colgante Búho Madera", precio: 10165, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_buho_madera.jpg", descripcion: "" },
    { id: 1224, nombre: "Colgante Cartera Ojo Turco", precio: 10500, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_cartera_ojo.jpg", descripcion: "" },
    { id: 1225, nombre: "Colgante Elefante Atrapa Sol", precio: 9095, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_elefante_atrapasol.jpg", descripcion: "" },
    { id: 1226, nombre: "Colgante Elefante Hindú Color", precio: 7000, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_elefante_hindu.jpg", descripcion: "" },
    { id: 1227, nombre: "Colgante Madera Para Bolsos", precio: 6900, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_madera_bolsos.jpg", descripcion: "" },
    { id: 1228, nombre: "Colgante Mariposa", precio: 27713, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_mariposa.jpg", descripcion: "" },
    { id: 1229, nombre: "Colgante MDF Con Flecos", precio: 3200, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_mdf_flecos.jpg", descripcion: "" },
    { id: 1230, nombre: "Colgante MDF Frases", precio: 2354, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_mdf_frases.jpg", descripcion: "" },
    { id: 1231, nombre: "Colgante MDF Grande", precio: 14500, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_mdf_grande.jpg", descripcion: "" },
    { id: 1232, nombre: "Colgante Ojo Turco con Plumas", precio: 7000, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_ojo_plumas.jpg", descripcion: "El ojo turco es una tradición arraigada en muchas culturas y se considera un símbolo de buena suerte y protección. Muchas personas creen en su poder para alejar la mala energía y mantener a salvo a su portador." },
    { id: 1233, nombre: "Colgante Ojo Turco Vidrio", precio: 8453, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_ojo_vidrio.jpg", descripcion: "" },
    { id: 1234, nombre: "Colgante Vidrio", precio: 14445, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_vidrio.jpg", descripcion: "" },
    { id: 1235, nombre: "Colgante Vidrio Elefante", precio: 14445, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgante_vidrio_elefante.jpg", descripcion: "" },
    { id: 1236, nombre: "Colgantes Acrílicos 2D", precio: 10486, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/colgantes_acrilicos_2d.jpg", descripcion: "" },
    { id: 1237, nombre: "Denario", precio: 2600, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/denario.jpg", descripcion: "Es una pieza que combina elegancia y espiritualidad en un diseño clásico." },
    { id: 1238, nombre: "Llavero Elefante", precio: 6900, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/llavero_elefante.jpg", descripcion: "" },
    { id: 1239, nombre: "Llavero Ojo Turco", precio: 3638, categoria: "deco", subcategoria: "dc-colgantes", imagen: "img/llavero_ojo_turco.jpg", descripcion: "El llavero protector ojo turco azul combina la poderosa simbología de los animales, que representan fortaleza y sabiduría, con el ojo turco, conocido por su capacidad de alejar el mal de ojo, no solo es un protector espiritual, sino también un elegante accesorio que añade un toque distintivo a tus pertenencias." },

    // --- DECO: GIRATORIOS DE VIENTO ---
    { id: 1250, nombre: "Gira Vientos Chico", precio: 18832, categoria: "deco", subcategoria: "dc-giratorios", imagen: "img/gira_vientos_chico.jpg", descripcion: "" },
    { id: 1251, nombre: "Gira Vientos Grande", precio: 27713, categoria: "deco", subcategoria: "dc-giratorios", imagen: "img/gira_vientos_grande.jpg", descripcion: "Decoración para casa y jardín." },
    { id: 1252, nombre: "Gira Vientos Ojo Turco", precio: 13910, categoria: "deco", subcategoria: "dc-giratorios", imagen: "img/gira_vientos_ojo_turco.jpg", descripcion: "" },

    // --- DECO: GANESHAS ---
    { id: 1260, nombre: "Estatua de Ganesha", precio: 18832, categoria: "deco", subcategoria: "dc-ganeshas", imagen: "img/estatua_ganesha.jpg", descripcion: "" },
    { id: 1261, nombre: "Ganesha Bebe", precio: 19200, categoria: "deco", subcategoria: "dc-ganeshas", imagen: "img/ganesha_bebe.jpg", descripcion: "" },
    { id: 1262, nombre: "Lámpara Ganesha con Luz", precio: 17500, categoria: "deco", subcategoria: "dc-ganeshas", imagen: "img/lampara_ganesha_luz.jpg", descripcion: "" },

    // --- DECO: GATOS ---
    { id: 1270, nombre: "Gatito Madera Chico", precio: 15729, categoria: "deco", subcategoria: "dc-gatos", imagen: "img/gatito_madera_chico.jpg", descripcion: "" },
    { id: 1271, nombre: "Gatito Madera Grande", precio: 17762, categoria: "deco", subcategoria: "dc-gatos", imagen: "img/gatito_madera_grande.jpg", descripcion: "" },
    { id: 1272, nombre: "Gatito Solar Chiquito", precio: 14659, categoria: "deco", subcategoria: "dc-gatos", imagen: "img/gatito_solar_chiquito.jpg", descripcion: "" },
    { id: 1273, nombre: "Gatito Dorado de la Suerte", precio: 12600, categoria: "deco", subcategoria: "dc-gatos", imagen: "img/gatito_dorado_suerte.jpg", descripcion: "" },

    // --- DECO: PÉNDULOS ---
    { id: 1280, nombre: "Paño Péndulo", precio: 17655, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pano_pendulo.jpg", descripcion: "" },
    { id: 1281, nombre: "Péndulo Bronce", precio: 17120, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_bronce.jpg", descripcion: "" },
    { id: 1282, nombre: "Péndulo Cristal", precio: 9630, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_cristal.jpg", descripcion: "" },
    { id: 1283, nombre: "Péndulo de Orgon Grande", precio: 9951, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_orgon_grande.jpg", descripcion: "Energiza tu entorno y mejora tu bienestar." },
    { id: 1284, nombre: "Péndulo Hebreo", precio: 5500, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_hebreo.jpg", descripcion: "El péndulo Hebreo posee 2 caras, la lisa es la encargada de detectar y la estriada se usa para tratar. Potente herramienta de sanación holística, ya que combina la radiestesia (detectar) con la radiónica (sanar) permitiendo ir al origen de la enfermedad." },
    { id: 1285, nombre: "Péndulo Madera", precio: 12840, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_madera.jpg", descripcion: "" },
    { id: 1286, nombre: "Péndulo Orgon Chico", precio: 7490, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_orgon_chico.jpg", descripcion: "Herramienta poderosa para energizar tu entorno." },
    { id: 1287, nombre: "Péndulo Shungit", precio: 20223, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/pendulo_shungit.jpg", descripcion: "Los péndulos de Shungit son ideales para encontrar respuestas a preguntas sobre el equilibrio energético del cuerpo y el medio ambiente." },
    { id: 1288, nombre: "Tablero Madera Péndulo", precio: 10486, categoria: "deco", subcategoria: "dc-pendulos", imagen: "img/tablero_madera_pendulo.jpg", descripcion: "Tablero de Madera para Lecturas con Péndulo. Un elemento esencial para quienes practican la radiestesia y buscan respuestas claras. Este tablero te ayudará a interpretar mejor las respuestas y profundizar en tu conexión con el universo." },

    // --- DECO: DECO HOGAR ---
    { id: 1301, nombre: "Adornos Navideños Tejidos Para Arbolito", precio: 2500, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/adornos_navidenos.jpg", descripcion: "" },
    { id: 1302, nombre: "Almohadilla Térmica", precio: 8800, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/almohadilla_termica.jpg", descripcion: "" },
    { id: 1303, nombre: "Bolso Hindu", precio: 69550, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/bolso_hindu.jpg", descripcion: "Hecho a mano" },
    { id: 1304, nombre: "Bolso Hindu Con Piedras", precio: 69550, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/bolso_hindu_piedras.jpg", descripcion: "Hecho a mano" },
    { id: 1305, nombre: "Bolso Hindu Rayas", precio: 69550, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/bolso_hindu_rayas.jpg", descripcion: "Artesanal, hecho a mano" },
    { id: 1306, nombre: "Bolso Hindu Rombos", precio: 69550, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/bolso_hindu_rombos.jpg", descripcion: "Hecho a mano" },
    { id: 1307, nombre: "Colgante Tela Chico 7 Chacras", precio: 12840, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/colgante_tela_chico.jpg", descripcion: "Ayuda a equilibrar mente, cuerpo y emociones" },
    { id: 1308, nombre: "Colgante Tela Grande 7 Chacras", precio: 17869, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/colgante_tela_grande.jpg", descripcion: "Para espacios sagrados, altares, puertas o salas de terapia" },
    { id: 1309, nombre: "Copalera Chica", precio: 8988, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/copalera_chica.jpg", descripcion: "" },
    { id: 1310, nombre: "Copalera Grande", precio: 10379, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/copalera_grande.jpg", descripcion: "" },
    { id: 1311, nombre: "Corona Navideña con luz Redonda grande", precio: 22000, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/corona_navidena_redonda.jpg", descripcion: "Artesanales" },
    { id: 1312, nombre: "Corona Navideña con luz corazon grande", precio: 25000, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/corona_navidena_corazon.jpg", descripcion: "Artesanal" },
    { id: 1313, nombre: "Coronas Navideñas Chicas con Detalle MDF", precio: 8500, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/coronas_navidenas_chicas.jpg", descripcion: "" },
    { id: 1314, nombre: "Coronas Navideñas Con Detalle Pino Navidad", precio: 8500, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/coronas_navidenas_pino.jpg", descripcion: "" },
    { id: 1315, nombre: "Destapador Gatito", precio: 4922, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/destapador_gatito.jpg", descripcion: "" },
    { id: 1316, nombre: "Elefante x 3", precio: 11663, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/elefante_x3.jpg", descripcion: "" },
    { id: 1317, nombre: "Elefante Porta Vela x 3", precio: 9200, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/elefante_portavela.jpg", descripcion: "" },
    { id: 1318, nombre: "Elefante Trompa Arriba", precio: 4600, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/elefante_trompa.jpg", descripcion: "" },
    { id: 1319, nombre: "Individual Hindu", precio: 5778, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/individual_hindu.jpg", descripcion: "" },
    { id: 1320, nombre: "Jabones Flores", precio: 1000, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/jabones_flores.jpg", descripcion: "" },
    { id: 1321, nombre: "Jabones motivos navideños", precio: 2500, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/jabones_navidenos.jpg", descripcion: "Jabones motivos navideños hermosos!!" },
    { id: 1322, nombre: "Jardin Zen Mediano", precio: 31672, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/jardin_zen_mediano.jpg", descripcion: "Crea un espacio para la contemplación y la reflexión." },
    { id: 1323, nombre: "Jardin Zen Pequeño", precio: 24824, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/jardin_zen_pequeno.jpg", descripcion: "Crea un espacio para la contemplación y la reflexión" },
    { id: 1324, nombre: "Pin Sonoro", precio: 12305, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/pin_sonoro.jpg", descripcion: "Una experiencia única de armonización. Estos pines son la herramienta ideal para quienes buscan equilibrio físico y mental, alineando los chakras y fortaleciendo el espíritu" },
    { id: 1325, nombre: "Posa Pava", precio: 7704, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/posa_pava.jpg", descripcion: "" },
    { id: 1326, nombre: "Quemador Palo Santo forma fruta", precio: 7100, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/quemador_fruta.jpg", descripcion: "Ayuda a que la madera se vaya consumiendo lentamente" },
    { id: 1327, nombre: "Timbre Cuenco Tibetano", precio: 16585, categoria: "deco", subcategoria: "dc-decohogar", imagen: "img/timbre_cuenco.jpg", descripcion: "Pieza única. Timbre de sonido profundo, envolvente y dulce. Es muy hipnótico, perfecto para silenciar la mente." },

    // --- DECO: PORTA SAHUMERIOS ---
    { id: 1401, nombre: "Porta Sahumerios Fotos", precio: 4200, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_fotos.jpg", descripcion: "" },
    { id: 1402, nombre: "Porta Sahumerios Piedras 7 Chakras Chico", precio: 12600, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_7chakras.jpg", descripcion: "" },
    { id: 1403, nombre: "Porta Sahumerios Tablita Pintada", precio: 6700, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_tablita.jpg", descripcion: "" },
    { id: 1404, nombre: "Porta Sahumerios Chiquitos Calados", precio: 900, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_calados.jpg", descripcion: "" },
    { id: 1405, nombre: "Porta Sahumerios Chiquitos Pintados", precio: 2300, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_pintados.jpg", descripcion: "" },
    { id: 1406, nombre: "Porta Sahumerios Elefante", precio: 3900, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/porta_sahumerios_elefante.jpg", descripcion: "" },
    { id: 1407, nombre: "Sahumador Torre", precio: 13300, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/sahumador_torre.jpg", descripcion: "" },
    { id: 1408, nombre: "Tablita Porta Sahumerios Color", precio: 1600, categoria: "deco", subcategoria: "dc-portasahumerios", imagen: "img/tablita_color.jpg", descripcion: "" },

    // --- FOGONEROS Y TABLAS ---
    { id: 701, nombre: "Centro de Mesa Una Vela", precio: 8500, categoria: "fogoneros", imagen: "img/centro_mesa_1vela.jpg" },
    { id: 702, nombre: "Centro de Mesa Dos Velas", precio: 10700, categoria: "fogoneros", imagen: "img/centro_mesa_2velas.jpg" },
    { id: 703, nombre: "Fogonero 12 cm", precio: 14900, categoria: "fogoneros", imagen: "img/fogonero_12cm.jpg" },
    { id: 704, nombre: "Fogonero 16 cm", precio: 16900, categoria: "fogoneros", imagen: "img/fogonero_16cm.jpg" },
    { id: 705, nombre: "Fogonero 2 Llamas", precio: 21500, categoria: "fogoneros", imagen: "img/fogonero_2llamas.jpg" },
    { id: 706, nombre: "Fogonero 3 Llamas", precio: 29500, categoria: "fogoneros", imagen: "img/fogonero_3llamas.jpg" },
    { id: 707, nombre: "Fogonero Argentina", precio: 19000, categoria: "fogoneros", imagen: "img/fogonero_argentina.jpg" },
    { id: 708, nombre: "Fogonero Plata/Oro", precio: 19500, categoria: "fogoneros", imagen: "img/fogonero_plata_oro.jpg" },
    { id: 709, nombre: "Fogonero Rojo", precio: 19000, categoria: "fogoneros", imagen: "img/fogonero_rojo.jpg" },
    { id: 710, nombre: "Fogonero Rombo", precio: 16900, categoria: "fogoneros", imagen: "img/fogonero_rombo.jpg" },
    { id: 711, nombre: "Fogonero Rosa", precio: 16900, categoria: "fogoneros", imagen: "img/fogonero_rosa.jpg" },
    { id: 712, nombre: "Fogonero Triángulo", precio: 19000, categoria: "fogoneros", imagen: "img/fogonero_triangulo.jpg" },
    { id: 713, nombre: "Fogonero Ying Yang", precio: 27500, categoria: "fogoneros", imagen: "img/fogonero_ying_yang.jpg" },
    { id: 714, nombre: "Lingote de Oro", precio: 14800, categoria: "fogoneros", imagen: "img/lingote_oro.jpg" },
    { id: 715, nombre: "Tabla Para Picada Iluminada Chica", precio: 14800, categoria: "fogoneros", imagen: "img/tabla_picada_chica.jpg" },
    { id: 716, nombre: "Tabla Para Picada Iluminada Grande", precio: 23500, categoria: "fogoneros", imagen: "img/tabla_picada_grande.jpg" },
    { id: 717, nombre: "Tabla Para Picada Iluminada Mediana", precio: 19000, categoria: "fogoneros", imagen: "img/tabla_picada_mediana.jpg" },

    // --- SERES DEL BOSQUE: GNOMOS ---
    { id: 801, nombre: "Gnomitos Medianos", precio: 20223, categoria: "seres-bosque", subcategoria: "sb-gnomos", imagen: "img/gnomito_mediano.jpg", descripcion: "" },
    { id: 802, nombre: "Gnomo de la Abundancia", precio: 16050, categoria: "seres-bosque", subcategoria: "sb-gnomos", imagen: "img/gnomo_abundancia.jpg", descripcion: "Gnomito pequeño con moneda de la fortuna y piedra protectora." },
    { id: 803, nombre: "Gnomo de la Suerte Chico", precio: 10000, categoria: "seres-bosque", subcategoria: "sb-gnomos", imagen: "img/gnomo_suerte_chico.jpg", descripcion: "" },
    { id: 804, nombre: "Gnomo Prosperidad", precio: 20200, categoria: "seres-bosque", subcategoria: "sb-gnomos", imagen: "img/gnomo_prosperidad.jpg", descripcion: "" },
    { id: 805, nombre: "Gnomos Grandes", precio: 20200, categoria: "seres-bosque", subcategoria: "sb-gnomos", imagen: "img/gnomo_grande.jpg", descripcion: "" },

    // --- SERES DEL BOSQUE: DUENDES ---
    { id: 810, nombre: "Duende Meditador", precio: 15000, categoria: "seres-bosque", subcategoria: "sb-duendes", imagen: "img/duende_meditador.jpg", descripcion: "" },
    { id: 811, nombre: "Duende Meditador en Caja con Acces.", precio: 25800, categoria: "seres-bosque", subcategoria: "sb-duendes", imagen: "img/duende_meditador_caja.jpg", descripcion: "" },
    { id: 812, nombre: "Duende Dormilones", precio: 15000, categoria: "seres-bosque", subcategoria: "sb-duendes", imagen: "img/duende_dormilon.jpg", descripcion: "" },
    { id: 813, nombre: "Mandragora", precio: 21500, categoria: "seres-bosque", subcategoria: "sb-duendes", imagen: "img/mandragora.jpg", descripcion: "" },

    // --- SERES DEL BOSQUE: BRUJITAS ---
    { id: 820, nombre: "Bruja de la Abundancia", precio: 27000, categoria: "seres-bosque", subcategoria: "sb-brujitas", imagen: "img/bruja_abundancia.jpg", descripcion: "" },
    { id: 821, nombre: "Brujita Chica en Caja", precio: 15000, categoria: "seres-bosque", subcategoria: "sb-brujitas", imagen: "img/brujita_chica_caja.jpg", descripcion: "" },
    { id: 822, nombre: "Brujita Protectora del Hogar", precio: 26750, categoria: "seres-bosque", subcategoria: "sb-brujitas", imagen: "img/brujita_protectora.jpg", descripcion: "" },

    // --- SERES DEL BOSQUE: HADAS ---
    { id: 830, nombre: "Hada en Caja con Accesorios", precio: 25800, categoria: "seres-bosque", subcategoria: "sb-hadas", imagen: "img/hada_caja_accesorios.jpg", descripcion: "" },
    { id: 831, nombre: "Hadas", precio: 20200, categoria: "seres-bosque", subcategoria: "sb-hadas", imagen: "img/hadas_sueltas.jpg", descripcion: "" },

    // --- SERES DEL BOSQUE: MAGOS ---
    { id: 840, nombre: "Mago con Luz", precio: 36000, categoria: "seres-bosque", subcategoria: "sb-magos", imagen: "img/mago_con_luz.jpg", descripcion: "" },
    { id: 841, nombre: "Mago sin Luz Celeste", precio: 26000, categoria: "seres-bosque", subcategoria: "sb-magos", imagen: "img/mago_sin_luz_celeste.jpg", descripcion: "" },

    // --- SERES DEL BOSQUE: KITS DUENDES MÁGICOS ---
    { id: 850, nombre: "Duende de la Familia", precio: 26750, categoria: "seres-bosque", subcategoria: "sb-kits", imagen: "img/kit_duende_familia.jpg", descripcion: "Duende grande con sahumerios Encanto, piedra protectora y moneda de la fortuna." },
    { id: 851, nombre: "Duende de la Prosperidad", precio: 26750, categoria: "seres-bosque", subcategoria: "sb-kits", imagen: "img/kit_duende_prosperidad.jpg", descripcion: "Duende grande con sahumerios Encanto, moneda de la fortuna y piedra protectora." },
    { id: 852, nombre: "Duende de la Salud", precio: 25730, categoria: "seres-bosque", subcategoria: "sb-kits", imagen: "img/kit_duende_salud.jpg", descripcion: "Duende grande con sahumerios encanto, piedra protectora y moneda de la suerte." },
    { id: 853, nombre: "Duende del Amor", precio: 26750, categoria: "seres-bosque", subcategoria: "sb-kits", imagen: "img/kit_duende_amor.jpg", descripcion: "Duende grande con sahumerios Encanto, piedra rodocrosita y moneda de la fortuna." },
    { id: 854, nombre: "Pachamama", precio: 25000, categoria: "seres-bosque", subcategoria: "sb-kits", imagen: "img/kit_pachamama.jpg", descripcion: "Representa abundancia, crecimiento y fertilidad." },

    // --- LIBROS Y CARTAS: MAGIA BLANCA ---
    { id: 601, nombre: "Jabón Esotérico de Rosas", precio: 3959, categoria: "libros", subcategoria: "lib-magiablanca", imagen: "img/jabon_esoterico_rosas.jpg", descripcion: "Hidrata profundamente la piel. Endulza nuestro aura, nos conecta con nuestra sensualidad, la autoconfianza y brinda apoyo energético para trabajar el amor propio." },
    { id: 602, nombre: "Jabón Limpieza Energética", precio: 4601, categoria: "libros", subcategoria: "lib-magiablanca", imagen: "img/jabon_limpieza_energetica.jpg", descripcion: "Limpian y purifican las energías negativas." },
    { id: 603, nombre: "Vela Negra Contra Envidia", precio: 5992, categoria: "libros", subcategoria: "lib-magiablanca", imagen: "img/vela_negra_envidia.jpg", descripcion: "Corta mal de ojos, envidia y todo tipo de malas intenciones." },

    // --- LIBROS Y CARTAS: RITUALES ---
    { id: 610, nombre: "Sales de Limpieza en bolsita", precio: 3959, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/sales_limpieza_bolsa.jpg", descripcion: "Utilizada en el esoterismo y la Magia Natural como elemento purificador." },
    { id: 611, nombre: "Sales de Limpieza en botella", precio: 5992, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/sales_limpieza_botella.jpg", descripcion: "Utilizada en el esoterismo y la Magia Natural como elemento purificador." },
    { id: 612, nombre: "Sales Energéticas", precio: 2354, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/sales_energeticas.jpg", descripcion: "" },
    { id: 613, nombre: "Vela 7 Hierbas", precio: 3959, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_7_hierbas.jpg", descripcion: "Esta Potente Veladora está Hecha de Hierbas que bien proporcionadas son un Potente Remedio de MALES Y DAÑOS." },
    { id: 614, nombre: "Vela 7 Poderes", precio: 1070, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_7_poderes.jpg", descripcion: "Bienestar, Fuerza, Protección, Suerte, Prosperidad y Armonía." },
    { id: 615, nombre: "Vela Abre Caminos x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_abre_caminos.jpg", descripcion: "Su propósito es claro y potente: facilitar la apertura de caminos, iluminar soluciones y desbloquear situaciones que nos mantienen estancados." },
    { id: 616, nombre: "Vela Afrodita x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_afrodita.jpg", descripcion: "Cuidadosamente elaborada para ayudarte a manifestar amor en todas sus formas y desde luego avivar la llama de la pasión." },
    { id: 617, nombre: "Vela Calma Mental x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_calma_mental.jpg", descripcion: "La vela azul es ampliamente reconocida como un símbolo de serenidad y tranquilidad." },
    { id: 618, nombre: "Vela Canela 1ro. DE MES", precio: 3959, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_canela.jpg", descripcion: "Este ritual está basado en la creencia de que al encender una vela el primer día de cada mes con intenciones específicas, se generan vibraciones positivas. La canela se asocia a la riqueza y la fortuna." },
    { id: 619, nombre: "Vela Crecimiento Personal x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_crecimiento_personal.jpg", descripcion: "Simboliza la transformación y la transmutación de energías negativas en positivas." },
    { id: 620, nombre: "Vela de Caléndula", precio: 3959, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_calendula.jpg", descripcion: "La Caléndula eleva las vibraciones y conecta con la armonía. Enciende tu velita los días 11 y 22 de cada mes, éstos son días que aportan una alta vibración de energía positiva." },
    { id: 621, nombre: "Vela Limpia Hogar x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_limpia_hogar.jpg", descripcion: "Las velas de protección y limpieza son herramientas poderosas que se utilizan en diversas tradiciones espirituales para purificar y proteger el hogar." },
    { id: 622, nombre: "Vela Limpieza Energética x 2", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_limpieza_energetica.jpg", descripcion: "Las velas de protección y limpieza son herramientas poderosas que se utilizan en diversas tradiciones espirituales para purificar y proteger el hogar." },
    { id: 623, nombre: "Vela Negra con Espinas", precio: 5992, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_negra_espinas.jpg", descripcion: "Se usa para cortar o eliminar maldiciones, brujerías, envidias, energías negativas o amarres. Las espinas representan obstáculos o bloqueos que se desean romper." },
    { id: 624, nombre: "Vela Positividad y Cura", precio: 3959, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_positividad.jpg", descripcion: "Se utiliza en rituales de curación o meditación, se acompaña de intenciones específicas, afirmaciones u oraciones centradas en el resultado curativo deseado." },
    { id: 625, nombre: "Vela Refuerza Pareja", precio: 6955, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/vela_refuerza_pareja.jpg", descripcion: "Se utiliza para resolver dificultades de pareja, un símbolo de unión y compromiso." },
    { id: 626, nombre: "Velón 7 Mechas", precio: 15836, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/velon_7_mechas.jpg", descripcion: "El número 7 está cargado de simbolismo espiritual. Se asocia con la protección, la sabiduría y la conexión con planos más elevados. Búsqueda de equilibrio entre cuerpo, mente y espíritu." },
    { id: 627, nombre: "Velón Miel 7 Chacras", precio: 1284, categoria: "libros", subcategoria: "lib-rituales", imagen: "img/velon_miel_7chacras.jpg", descripcion: "Para armonizar los chakras, desde el raíz hasta el corona." },

    // --- LIBROS Y CARTAS: CARTAS TAROT ---
    { id: 630, nombre: "Oráculos Horóscopo Chino", precio: 8132, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/oraculo_chino.jpg", descripcion: "Pregunta lo que necesites saber al Oráculo del si o no sobre tu futuro inmediato." },
    { id: 631, nombre: "Oráculos Importados", precio: 16906, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/oraculo_importado.jpg", descripcion: "" },
    { id: 632, nombre: "Tarot Ángeles", precio: 11770, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_angeles.jpg", descripcion: "" },
    { id: 633, nombre: "Tarot Diosas", precio: 8025, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_diosas.jpg", descripcion: "" },
    { id: 634, nombre: "Tarot Egipcio", precio: 11235, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_egipcio.jpg", descripcion: "" },
    { id: 635, nombre: "Tarot Importado", precio: 16906, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_importado.jpg", descripcion: "El Tarot nos cambia la vida. Nos abre la percepción a un mundo mágico a través del cual podemos conocernos mejor y ayudar a otros." },
    { id: 636, nombre: "Tarot Lenormand", precio: 8025, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_lenormand.jpg", descripcion: "" },
    { id: 637, nombre: "Tarot Marsella", precio: 11770, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_marsella.jpg", descripcion: "" },
    { id: 638, nombre: "Tarot Rider Clásico", precio: 11770, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_rider_clasico.jpg", descripcion: "" },
    { id: 639, nombre: "Tarot Rider Holograma", precio: 20223, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_rider_holograma.jpg", descripcion: "" },
    { id: 640, nombre: "Tarot Rider Premium The Fool", precio: 45796, categoria: "libros", subcategoria: "lib-cartas", imagen: "img/tarot_rider_premium.jpg", descripcion: "" },

    // --- LIBROS Y CARTAS: PAÑOS ---
    { id: 650, nombre: "Bolsa Para Cartas Tarot Con Tiras", precio: 7800, categoria: "libros", subcategoria: "lib-panos", imagen: "img/bolsa_tarot_tiras.jpg", descripcion: "" },
    { id: 651, nombre: "Bolsa Para Cartas Tarot Lisa", precio: 7000, categoria: "libros", subcategoria: "lib-panos", imagen: "img/bolsa_tarot_lisa.jpg", descripcion: "" },
    { id: 652, nombre: "Paño Tarot", precio: 16585, categoria: "libros", subcategoria: "lib-panos", imagen: "img/pano_tarot.jpg", descripcion: "" },
    { id: 653, nombre: "Tapiz Yoga", precio: 19153, categoria: "libros", subcategoria: "lib-panos", imagen: "img/tapiz_yoga.jpg", descripcion: "" },

    // --- JAPA MALA: COLLARES 108 ---
    { id: 901, nombre: "Japamala Collar", precio: 8025, categoria: "japa-mala", subcategoria: "jm-collares", imagen: "img/japamala_collar.jpg", descripcion: "" },
    { id: 902, nombre: "Japamala Collar 108 Hindu", precio: 35200, categoria: "japa-mala", subcategoria: "jm-collares", imagen: "img/japamala_collar_108_hindu.jpg", descripcion: "" },

    // --- JAPA MALA: PULSERAS ---
    { id: 910, nombre: "Japamala Pulsera", precio: 2568, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/japamala_pulsera.jpg", descripcion: "" },
    { id: 911, nombre: "Pulsera Mano Fátima y Ojo Turco", precio: 4200, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_mano_fatima_ojo.jpg", descripcion: "" },
    { id: 912, nombre: "Pulsera Japamala Hindu", precio: 35200, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_japamala_hindu.jpg", descripcion: "" },
    { id: 913, nombre: "Pulsera Nudo Brujo", precio: 3800, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_nudo_brujo.jpg", descripcion: "" },
    { id: 914, nombre: "Pulsera Ojo Turco Piolín", precio: 2300, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_ojo_turco_piolin.jpg", descripcion: "" },
    { id: 915, nombre: "Pulsera Roja Cuentas", precio: 5000, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_roja_cuentas.jpg", descripcion: "" },
    { id: 916, nombre: "Pulsera Roja Piedras Ojo Turco", precio: 3800, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_roja_piedras_ojo.jpg", descripcion: "" },
    { id: 917, nombre: "Pulsera Roja San Benito", precio: 3800, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_roja_san_benito.jpg", descripcion: "" },
    { id: 918, nombre: "Pulsera Azules Ojo Turco", precio: 2500, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_azules_ojo_turco.jpg", descripcion: "" },
    { id: 919, nombre: "Pulsera Buho", precio: 4922, categoria: "japa-mala", subcategoria: "jm-pulseras", imagen: "img/pulsera_buho.jpg", descripcion: "" },

    // --- YOGA Y MEDITACIÓN ---
    { id: 1001, nombre: "Mat Yoga", precio: 15943, categoria: "yoga", imagen: "img/mat_yoga.jpg", descripcion: "" },
    { id: 1002, nombre: "Block Yoga", precio: 10700, categoria: "yoga", imagen: "img/block_yoga.jpg", descripcion: "" },
    { id: 1003, nombre: "Cinta Elongación", precio: 4922, categoria: "yoga", imagen: "img/cinta_elongacion.jpg", descripcion: "" },
    { id: 1004, nombre: "Rodillo Roller", precio: 20330, categoria: "yoga", imagen: "img/rodillo_roller.jpg", descripcion: "" },
    { id: 1005, nombre: "Fit Ball 75 cm", precio: 18190, categoria: "yoga", imagen: "img/fit_ball_75.jpg", descripcion: "" },
    { id: 1006, nombre: "Inflador Fit Ball", precio: 18725, categoria: "yoga", imagen: "img/inflador_fit_ball.jpg", descripcion: "" },

    // --- PIEDRAS Y CRISTALES (CATÁLOGO COMPLETO) ---
    { id: 301, nombre: "Agata (Flor de Sakura)", precio: 59385, categoria: "piedras", imagen: "img/agata_sakura.jpg", descripcion: "Joya natural que cautiva con su belleza. Apreciada a lo largo de la historia por su simbolismo y poderes místicos." },
    { id: 302, nombre: "Agatha Violeta", precio: 4280, categoria: "piedras", imagen: "img/agata_violeta.jpg", descripcion: "Si sufres de trastornos del sueño, no dudes en poner una debajo de tu almohada." },
    { id: 303, nombre: "Amatista Africana", precio: 4280, categoria: "piedras", imagen: "img/amatista_africana.jpg", descripcion: "La amatista es un analgésico natural y también puede desintoxicar el cuerpo de una enfermedad y reducir dolores." },
    { id: 304, nombre: "Amazonita", precio: 4280, categoria: "piedras", imagen: "img/amazonita.jpg", descripcion: "Si estás pasando por momentos de angustias, preocupaciones, te será entonces muy útil una amazonita para conseguir calmar y serenar tus pensamientos." },
    { id: 305, nombre: "Arbol de la Felicidad", precio: 15515, categoria: "piedras", imagen: "img/arbol_felicidad.jpg", descripcion: "Con piedras naturales energéticas." },
    { id: 306, nombre: "Arbol Dolares", precio: 15900, categoria: "piedras", imagen: "img/arbol_dolares.jpg", descripcion: "" },
    { id: 307, nombre: "Botella Agua con Piedra Energetica", precio: 47700, categoria: "piedras", imagen: "img/botella_piedra.jpg", descripcion: "" },
    { id: 308, nombre: "Botella de los Deseos Grande", precio: 4000, categoria: "piedras", imagen: "img/botella_deseos_grande.jpg", descripcion: "Para protección." },
    { id: 309, nombre: "Botellita de los Deseos", precio: 7000, categoria: "piedras", imagen: "img/botellita_deseos.jpg", descripcion: "" },
    { id: 310, nombre: "Cianita Azul", precio: 4280, categoria: "piedras", imagen: "img/cianita_azul.jpg", descripcion: "Las piedras de Cianita índigo tienen una fuerte energía del tercer ojo y también pueden ayudar con el recuerdo de los sueños y ayudar a traer sueños de sanación." },
    { id: 311, nombre: "Colgante Orgonita Metatron", precio: 8346, categoria: "piedras", imagen: "img/colgante_metatron.jpg", descripcion: "Potente orgonita para purificar y mejorar la energía." },
    { id: 312, nombre: "Colgante Piedras Naturales", precio: 5200, categoria: "piedras", imagen: "img/colgante_piedras.jpg", descripcion: "" },
    { id: 313, nombre: "Crisocola", precio: 4280, categoria: "piedras", imagen: "img/crisocola.jpg", descripcion: "Es capaz de trasmitir a su portador un estado de paz y relajación mental y emocional." },
    { id: 314, nombre: "Crisoprasa", precio: 4280, categoria: "piedras", imagen: "img/crisoprasa.jpg", descripcion: "Promueve el perdón, la empatía, el crecimiento personal, el amor propio y la alegría de vivir en general." },
    { id: 315, nombre: "Cristal Blanco", precio: 4280, categoria: "piedras", imagen: "img/cristal_blanco.jpg", descripcion: "Esta piedra es ideal para realizar meditaciones de limpieza y alineación energética." },
    { id: 316, nombre: "Cristal de Cuarzo", precio: 4280, categoria: "piedras", imagen: "img/cristal_cuarzo.jpg", descripcion: "Bloqueador de malas energías." },
    { id: 317, nombre: "Cuarzo Ahumado", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_ahumado.jpg", descripcion: "Te ayudará a disolver energías densas y promueve un pensamiento positivo y aporta calma emocional." },
    { id: 318, nombre: "Cuarzo Aqua", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_aqua.jpg", descripcion: "Se dice que estas piedras atraen la riqueza y el éxito." },
    { id: 319, nombre: "Cuarzo Azufre", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_azufre.jpg", descripcion: "El Cuarzo es un cristal potenciador y fortalecerá esta energía recién conjurada, mientras la canaliza directamente hacia tu voluntad personal." },
    { id: 320, nombre: "Cuarzo Azul", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_azul.jpg", descripcion: "Repele la energía negativa y la transmuta en vibraciones superiores." },
    { id: 321, nombre: "Cuarzo Lechoso", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_lechoso.jpg", descripcion: "Piedra protectora." },
    { id: 322, nombre: "Cuarzo Rosa", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_rosa.jpg", descripcion: "Nos ayuda a encontrar el verdadero significado y lo que representa el amor." },
    { id: 323, nombre: "Cuarzo Verde", precio: 4280, categoria: "piedras", imagen: "img/cuarzo_verde.jpg", descripcion: "Al cuarzo verde se le atribuyen poderes para atraer la suerte sobre todo en juegos de azar." },
    { id: 324, nombre: "Esfera Cuarzo Rosa", precio: 128400, categoria: "piedras", imagen: "img/esfera_cuarzo_rosa.jpg", descripcion: "Logra restaurar la armonía y la confianza en las relaciones de pareja." },
    { id: 325, nombre: "Espejo Obsidiana Chico 5 cm", precio: 25680, categoria: "piedras", imagen: "img/espejo_obsidiana_chico.jpg", descripcion: "Superficie pulida que trasciende lo físico." },
    { id: 326, nombre: "Espejo Obsidiana Grande Con Pie", precio: 129000, categoria: "piedras", imagen: "img/espejo_obsidiana_grande.jpg", descripcion: "Superficie pulida que trasciende lo físico." },
    { id: 327, nombre: "Fluorita Verde", precio: 4280, categoria: "piedras", imagen: "img/fluorita_verde.jpg", descripcion: "La fluorita verde es una piedra preciosa con propiedades curativas y sanadoras." },
    { id: 328, nombre: "Hematite", precio: 4280, categoria: "piedras", imagen: "img/hematite.jpg", descripcion: "Se asocia al hematite para ayudar en temas legales." },
    { id: 329, nombre: "Jaspe Leopardo", precio: 4280, categoria: "piedras", imagen: "img/jaspe_leopardo.jpg", descripcion: "Piedra de protección, ayuda a luchar contra los trastornos relacionados con la ansiedad." },
    { id: 330, nombre: "Jaspe Policromo", precio: 58850, categoria: "piedras", imagen: "img/jaspe_policromo.jpg", descripcion: "El jaspe policromo se asocia al plexo solar, ofrece un aumento de energía y ayuda así a combatir la fatiga crónica." },
    { id: 331, nombre: "Lapislazuli", precio: 4280, categoria: "piedras", imagen: "img/lapislazuli.jpg", descripcion: "Sana las heridas del alma drenando las energías negativas acumuladas que se convierten en odio y rencor con el tiempo." },
    { id: 332, nombre: "Obsidiana", precio: 4280, categoria: "piedras", imagen: "img/obsidiana.jpg", descripcion: "La obsidiana bloquea los ataques psíquicos y aparta las influencias espirituales negativas." },
    { id: 333, nombre: "Ojo de Buey", precio: 4280, categoria: "piedras", imagen: "img/ojo_buey.jpg", descripcion: "Esta piedra es conocida por sus propiedades curativas." },
    { id: 334, nombre: "Ojo de Tigre", precio: 4280, categoria: "piedras", imagen: "img/ojo_tigre.jpg", descripcion: "El amuleto perfecto para revertir las malas energías y las envidias." },
    { id: 335, nombre: "Ombliguera de Obsidiana", precio: 9095, categoria: "piedras", imagen: "img/ombliguera_obsidiana.jpg", descripcion: "OMBLIGUERO: se utiliza para equilibrar desde el interior y sobre todo para limpiar en profundidad la energía que está bloqueada." },
    { id: 336, nombre: "Onix Negro", precio: 4280, categoria: "piedras", imagen: "img/onix_negro.jpg", descripcion: "A nivel emocional, en momentos de angustia y estrés, ayuda a tomar las mejores y más importantes decisiones." },
    { id: 337, nombre: "Piedra de la Luna", precio: 6313, categoria: "piedras", imagen: "img/piedra_luna.jpg", descripcion: "Despierta y potencia la fertilidad de la mujer." },
    { id: 338, nombre: "Piedra Diamantina", precio: 4280, categoria: "piedras", imagen: "img/piedra_diamantina.jpg", descripcion: "La Diamantina Piedra es una gema que ha capturado la atención de muchos gracias a su belleza y su raro significado espiritual. Es conocida por su capacidad para inducir una sensación de calma y claridad mental." },
    { id: 339, nombre: "Piedra Lunar", precio: 4280, categoria: "piedras", imagen: "img/piedra_lunar_simple.jpg", descripcion: "Ayuda a aliviar los dolores menstruales y mejora los problemas de lactancia." },
    { id: 340, nombre: "Piedras 7 Chacras con Simbolos", precio: 23540, categoria: "piedras", imagen: "img/piedras_7chacras_simbolos.jpg", descripcion: "Juego de 7 piedras equilibrio de los 7 chakras. Talladas y pulidas a mano en forma ovalada y con grabados en color dorado." },
    { id: 341, nombre: "Piramide de Orgonita", precio: 15000, categoria: "piedras", imagen: "img/piramide_orgonita.jpg", descripcion: "Limpia la energía negativa y contrarresta los efectos de ondas electromagnéticas." },
    { id: 342, nombre: "Piramide Orgonita Cristal", precio: 15000, categoria: "piedras", imagen: "img/piramide_orgonita_cristal.jpg", descripcion: "Una pirámide de orgonita limpia la energía negativa." },
    { id: 343, nombre: "Pirita", precio: 4280, categoria: "piedras", imagen: "img/pirita.jpg", descripcion: "Atrae abundancia." },
    { id: 344, nombre: "Poder de los Cristales", precio: 4280, categoria: "piedras", imagen: "img/poder_cristales.jpg", descripcion: "DESCUBRE EL PODER DE LAS PIEDRAS." },
    { id: 345, nombre: "Raiz Esmeralda", precio: 4280, categoria: "piedras", imagen: "img/raiz_esmeralda.jpg", descripcion: "Herramienta para sanar, equilibrar y potenciar la energía del cuerpo, la mente y el espíritu." },
    { id: 346, nombre: "Rodocrosita", precio: 4280, categoria: "piedras", imagen: "img/rodocrosita.jpg", descripcion: "Le ayudará a desarrollar su confianza para crear la realidad que desea." },
    { id: 347, nombre: "Selenita", precio: 4280, categoria: "piedras", imagen: "img/selenita.jpg", descripcion: "Trata problemas de tristeza y ansiedad." },
    { id: 348, nombre: "Serpentina", precio: 4280, categoria: "piedras", imagen: "img/serpentina.jpg", descripcion: "Ayuda a calmar las migrañas, dolores musculares y combate los parásitos." },
    { id: 349, nombre: "Set 9 Piezas Modelo Sistema Planetario", precio: 35000, categoria: "piedras", imagen: "img/set_sistema_planetario.jpg", descripcion: "" },
    { id: 350, nombre: "Set Piedras 7 Chacras Chica", precio: 12900, categoria: "piedras", imagen: "img/set_chacras_chica.jpg", descripcion: "" },
    { id: 351, nombre: "Set Piedras 7 Chacras Grande", precio: 18800, categoria: "piedras", imagen: "img/set_chacras_grande.jpg", descripcion: "" },
    { id: 352, nombre: "Set Piedras con Accesorios en Caja", precio: 26750, categoria: "piedras", imagen: "img/set_accesorios_caja.jpg", descripcion: "Compuesta por 7 minerales que influyen en los 7 centros energéticos del cuerpo." },
    { id: 353, nombre: "Torre Piedra Selenita 7 Chacras", precio: 39590, categoria: "piedras", imagen: "img/torre_selenita.jpg", descripcion: "Ayuda a eliminar bloqueos energéticos y a mantener el aura limpia." },
    { id: 354, nombre: "Turmalina", precio: 4280, categoria: "piedras", imagen: "img/turmalina.jpg", descripcion: "La Turmalina Negra es por excelencia una piedra de protección capaz de absorber y disipar todos los tipos de energía negativa." },

   
];    