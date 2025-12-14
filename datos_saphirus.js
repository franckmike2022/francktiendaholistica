// --- BASE DE DATOS SECUNDARIA: SAPHIRUS Y OTRAS MARCAS ---

const productosSaphirus = [

    // --- SAPHIRUS: AEROSOLES ---
    { 
        id: 4001, 
        nombre: "Aerosol Ambar", 
        precio: 4800, 
        categoria: "saphirus", 
        subcategoria: "sap-aerosoles", 
        imagen: "img/sap_aerosol_ambar.jpg", 
        descripcion: "Fragancias inspiradas en perfumes internacionales y aromas textiles.",
        variedades: ["Coniglio", "Daniel", "Flores Blancas", "Invictus", "Kosiuko", "Lady", "Limón", "Million", "Nina", "Olimpea", "One", "Paula", "Uva", "Vainilla", "Wanama"]
    },
    { 
        id: 4002, 
        nombre: "Aerosol Saphirus", 
        precio: 6400, 
        categoria: "saphirus", 
        subcategoria: "sap-aerosoles", 
        imagen: "img/sap_aerosol_saphirus.jpg", 
        descripcion: "El clásico aromatizante de ambientes Saphirus. Fragancias intensas y duraderas.",
        variedades: ["Amapola", "Andrea", "Angel", "Bamboo", "Bella", "Blue", "Bubblegum", "Citrus", "Coco Vai", "Coni", "Cristobal", "Daniel", "Etiqueta", "Flores Blancas", "Green", "Guarana", "Hawai", "Invicto", "Jazmin", "Lady", "Lavanda", "Limon", "Linah", "Lola", "Magnolia", "Manzana", "Maracuya", "Marino", "Melon", "Mery", "Mito", "Naranja", "Olimpia", "Oriente", "Palo Santo", "Papaya", "Paula", "Rocio", "Rosas", "Sandia", "Sweet Flowers", "Uva", "Vainilla", "Vainilla Coco"]
    },

    // --- SAPHIRUS: TEXTILES ---
    { 
        id: 4101, 
        nombre: "Sandra Marzzan 500cc", 
        precio: 7900, 
        categoria: "saphirus", 
        subcategoria: "sap-textiles", 
        imagen: "img/sap_textil_marzzan.jpg", 
        descripcion: "Sumergite en la frescura de estas fragancias y llevá la elegancia de sus notas a todo tu hogar. Podés utilizar su presentación de 500ml para aromatizar tu living o comedor.",
        variedades: ["Bamboo", "Flores Blancas", "Frutos Rojos", "Lavanda", "Limón", "Papaya", "Pepino", "Sandía", "Te Verde", "Tilo", "Vainilla"]
    },
    { 
        id: 4102, 
        nombre: "Textil 250 cc (Saphirus)", 
        precio: 4400, 
        categoria: "saphirus", 
        subcategoria: "sap-textiles", 
        imagen: "img/sap_textil_250.jpg", 
        descripcion: "Fragancia textil compacta para renovar tus prendas y ambientes.",
        variedades: ["Angel", "Bamboo", "Bubblegum", "Coco Vai", "Coni", "Flores Blancas", "Jazmín", "Lavanda", "Limón", "Marino", "Melón", "Paula", "Rosas", "Vainilla"]
    },
    { 
        id: 4103, 
        nombre: "Textil Ambar", 
        precio: 2400, 
        categoria: "saphirus", 
        subcategoria: "sap-textiles", 
        imagen: "img/sap_textil_ambar.jpg", 
        descripcion: "Aromatizante textil línea Ambar.",
        variedades: ["Coniglio", "Flores", "Invictus", "Limón", "Million", "Olimpea", "Paula", "Vainilla", "Wanama"]
    },
    { 
        id: 4104, 
        nombre: "Textil Home 500 cc", 
        precio: 8800, 
        categoria: "saphirus", 
        subcategoria: "sap-textiles", 
        imagen: "img/sap_textil_home.jpg", 
        descripcion: "Aromatizante textil formato grande para el hogar.",
        variedades: ["Lavanda y Té Verde", "Limón y Jengibre", "Rosas y Peonías", "Vainilla y Coco", "Bamboo y Jazmín"]
    },
    { 
        id: 4105, 
        nombre: "Textil Mini", 
        precio: 3500, 
        categoria: "saphirus", 
        subcategoria: "sap-textiles", 
        imagen: "img/sap_textil_mini.jpg", 
        descripcion: "La fragancia de siempre en formato de bolsillo para llevar a todos lados.",
        variedades: ["Bubblegum", "Coco Vai", "Coni", "Flores Blancas", "Invicto", "Lavanda", "Limón", "Paula", "Vainilla"]
    },

    // --- SAPHIRUS: DIFUSORES ---
    { 
        id: 4201, 
        nombre: "Difusor Aromático Saphirus", 
        precio: 6200, 
        categoria: "saphirus", 
        subcategoria: "sap-difusores", 
        imagen: "img/sap_difusor_aromatico.jpg", 
        descripcion: "Difusor de varillas clásico. Ambienta tus espacios de forma constante.",
        variedades: ["Amapola", "Bamboo", "Blue", "Bubblegum", "Coco Vai", "Flores Blancas", "Jazmín", "Lavanda", "Limón", "Linah", "Magnolia", "Manzana", "Maracuya", "Marino", "Melón", "Naranja", "Palo Santo", "Papaya", "Rosas", "Sandía", "Uva", "Vainilla"]
    },
    { 
        id: 4202, 
        nombre: "Difusor Aromático Premium", 
        precio: 13500, 
        categoria: "saphirus", 
        subcategoria: "sap-difusores", 
        imagen: "img/sap_difusor_premium.jpg", 
        descripcion: "Línea Premium con mayor concentración y presentación de lujo.",
        variedades: ["Black", "Gold", "Silver", "Diamond", "Platinum", "Bronze"]
    },
    // --- SAPHIRUS: TARJETAS AROMÁTICAS ---
    { 
        id: 4301, 
        nombre: "Tarjeta Aromática x 3", 
        precio: 6800, 
        categoria: "saphirus", 
        subcategoria: "sap-tarjetas", 
        imagen: "img/sap_tarjeta_aromatica.jpg", 
        descripcion: "Ideales para placares, cajones, autos y espacios pequeños.",
        variedades: ["Amapola", "Angel", "Bamboo", "Blue", "Bubblegum", "Coco Vai", "Coni", "Daniel", "Flores Blancas", "Jazmín", "Lady", "Lavanda", "Limón", "Linah", "Magnolia", "Manzana", "Maracuya", "Marino", "Melón", "Mery", "Mito", "Naranja", "Olimpia", "Oriente", "Palo Santo", "Papaya", "Paula", "Rocio", "Rosas", "Sandía", "Sweet Flowers", "Uva", "Vainilla"]
    },

    // --- SAPHIRUS: ACEITES ESENCIALES ---
    { 
        id: 4401, 
        nombre: "Aceite Esencial Ambar", 
        precio: 2000, 
        categoria: "saphirus", 
        subcategoria: "sap-aceites", 
        imagen: "img/sap_aceite_ambar.jpg", 
        descripcion: "Aceites esenciales para hornillo y aromaterapia.",
        variedades: ["Bergamota", "Citronella", "Eucaliptus", "Jazmín", "Lavanda", "Limón", "Menta", "Naranja", "Palo Santo", "Romero", "Rosas", "Sándalo", "Vainilla"]
    },
    { 
        id: 4402, 
        nombre: "Aceite Esencial Saphirus", 
        precio: 3900, 
        categoria: "saphirus", 
        subcategoria: "sap-aceites", 
        imagen: "img/sap_aceite_saphirus.jpg", 
        descripcion: "100% Puro. Ideal para hornillos, humidificadores y aromaterapia.",
        variedades: ["Bergamota", "Citronella", "Eucaliptus", "Jazmín", "Lavanda", "Limón", "Melisa", "Menta", "Naranja", "Palo Santo", "Romero", "Rosa Búlgara", "Sándalo", "Tea Tree", "Vainilla", "Verbena"]
    },

    // --- SAPHIRUS: GEL ---
    { 
        id: 4501, 
        nombre: "Gel Sensaciones", 
        precio: 4900, 
        categoria: "saphirus", 
        subcategoria: "sap-gel", 
        imagen: "img/sap_gel_sensaciones.jpg", 
        descripcion: "Aromatizante en gel de larga duración con intensidad regulable.",
        variedades: ["Anti Tabaco", "Apple", "Bebé", "Bubblegum", "Citrus", "Coco Vai", "Flores Blancas", "Lavanda", "Limón", "Manzana", "Marino", "Melón", "Naranja", "Pino", "Ropa Limpia", "Rosas", "Uva", "Vainilla"]
    },

    // --- SAPHIRUS: RUTE 66 ---
    { 
        id: 4601, 
        nombre: "Route 66 (Lata Orgánica)", 
        precio: 3900, 
        categoria: "saphirus", 
        subcategoria: "sap-rute66", 
        imagen: "img/sap_route66.jpg", 
        descripcion: "Aromatizante orgánico en lata para el auto.",
        variedades: ["Acqua", "Black", "Bubblegum", "Cherry", "Citric", "Coco", "New Car", "Uva", "Vainilla", "Frutilla"]
    },

    // --- SAPHIRUS: DIFUSORES EQUIPOS (DISPENSERS) ---
    { 
        id: 4701, 
        nombre: "Equipo Analógico (Dispenser)", 
        precio: 13900, 
        categoria: "saphirus", 
        subcategoria: "sap-equipos", 
        imagen: "img/sap_equipo_analogico.jpg", 
        descripcion: "Dispenser automático para aerosoles Saphirus. (No incluye pilas ni aerosol).",
        variedades: ["Blanco", "Negro"]
    },
    { 
        id: 4702, 
        nombre: "Repuesto Touch", 
        precio: 3400, 
        categoria: "saphirus", 
        subcategoria: "sap-equipos", 
        imagen: "img/sap_repuesto_touch.jpg", 
        descripcion: "Repuesto mini aerosol para equipos Saphirus Touch.",
        variedades: ["Amapola", "Bamboo", "Blue", "Bubblegum", "Coco Vai", "Coni", "Flores Blancas", "Jazmín", "Lavanda", "Limón", "Linah", "Marino", "Melón", "Naranja", "Paula", "Rosas", "Sandía", "Uva", "Vainilla"]
    },
    { 
        id: 4703, 
        nombre: "Touch + Repuesto", 
        precio: 5500, 
        categoria: "saphirus", 
        subcategoria: "sap-equipos", 
        imagen: "img/sap_touch_completo.jpg", 
        descripcion: "Equipo difusor manual de pared con repuesto incluido.",
        variedades: ["Equipo Blanco + Fragancia", "Equipo Negro + Fragancia"]
    },
    // --- SAPHIRUS: HORNILLOS ---
    { 
        id: 4801, 
        nombre: "Hornillo Saphirus Chico", 
        precio: 6300, 
        categoria: "saphirus", 
        subcategoria: "sap-hornillos", 
        imagen: "img/sap_hornillo_chico.jpg", 
        descripcion: "Hornillo de cerámica para esencias." 
    },
    { 
        id: 4802, 
        nombre: "Hornillo Saphirus Grande", 
        precio: 8000, 
        categoria: "saphirus", 
        subcategoria: "sap-hornillos", 
        imagen: "img/sap_hornillo_grande.jpg", 
        descripcion: "Hornillo de cerámica tamaño grande." 
    },

    // --- SAPHIRUS: SAHUMERIOS ---
    { 
        id: 4901, 
        nombre: "Sahumerio Himalaya", 
        precio: 2800, 
        categoria: "saphirus", 
        subcategoria: "sap-sahumerios", 
        imagen: "img/sap_sahumerio_himalaya.jpg", 
        descripcion: "Varillas aromáticas de alta calidad.",
        variedades: ["Sándalo", "Palo Santo", "Lavanda", "Rosas", "Vainilla", "Limón", "Coco", "Reina de la Noche"]
    },

    // --- SAPHIRUS: PERFUMES PARFUM ---
    { 
        id: 5001, 
        nombre: "Parfums Saphirus (Simil)", 
        precio: 6900, 
        categoria: "saphirus", 
        subcategoria: "sap-parfum", 
        imagen: "img/sap_parfum.jpg", 
        descripcion: "Fragancias alternativas de alta persistencia inspiradas en perfumes internacionales.",
        variedades: [
            "Femenino: La Vida es Bella", "Femenino: Olympea", "Femenino: Good Girl", "Femenino: Lady Million", "Femenino: Nina",
            "Masculino: Invictus", "Masculino: One Million", "Masculino: 212 VIP", "Masculino: Sauvage", "Masculino: Polo Blue",
            "Unisex: CK One"
        ]
    },

    // --- SAPHIRUS: LÍNEA MILANO ---
    { 
        id: 5101, 
        nombre: "Jabón Líquido Milano 250ml", 
        precio: 5700, 
        categoria: "saphirus", 
        subcategoria: "sap-milano", 
        imagen: "img/sap_jabon_milano.jpg", 
        descripcion: "Jabón líquido para manos con dosificador. Aromas sofisticados.",
        variedades: ["Uva y Frutos Rojos", "Pera y Palta", "Limón y Jengibre", "Coco y Vainilla", "Verbena y Lima"]
    },

    // --- SAPHIRUS: LÍQUIDOS LIMPIADORES ---
    { 
        id: 5201, 
        nombre: "Lustra Muebles Saphirus", 
        precio: 5500, 
        categoria: "saphirus", 
        subcategoria: "sap-limpiadores", 
        imagen: "img/sap_lustramuebles.jpg", 
        descripcion: "Limpiador y lustrador con agradable aroma.",
        variedades: ["Lavanda", "Naranja"]
    },
    { 
        id: 5202, 
        nombre: "Shimy Limpia Superficies", 
        precio: 2100, 
        categoria: "saphirus", 
        subcategoria: "sap-limpiadores", 
        imagen: "img/sap_shimy.jpg", 
        descripcion: "Limpiador multiuso perfumado.",
        variedades: ["Lavanda", "Limón", "Manzana", "Flores Blancas"]
    },

    // --- SAPHIRUS: REPELENTES ---
    { 
        id: 5301, 
        nombre: "Repelente Red 200ml (Crema/Spray)", 
        precio: 6000, 
        categoria: "saphirus", 
        subcategoria: "sap-repelentes", 
        imagen: "img/sap_repelente_200.jpg", 
        descripcion: "Protección efectiva contra mosquitos." 
    },
    { 
        id: 5302, 
        nombre: "Repelente Red 60ml", 
        precio: 3000, 
        categoria: "saphirus", 
        subcategoria: "sap-repelentes", 
        imagen: "img/sap_repelente_60.jpg", 
        descripcion: "Tamaño de bolsillo." 
    },
    { 
        id: 5303, 
        nombre: "Repelente Red Aerosol", 
        precio: 5500, 
        categoria: "saphirus", 
        subcategoria: "sap-repelentes", 
        imagen: "img/sap_repelente_aerosol.jpg", 
        descripcion: "Aplicación rápida y seca." 
    }

]; // FIN DEL ARCHIVO