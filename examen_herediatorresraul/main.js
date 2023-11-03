const carta =
[
    Lunes = {
      "tipoplato": "Primer Plato",
      "primeracomida": "Sopa de lentejas",
      "segundacomida": "Ensalada César",
      "terceracomida": "Risotto de champiñones",
      "tipoplato1": "Segundo Plato",
      "primeracomida1": "Lomo de cerdo a la parrilla con salsa de mostaza",
      "segundacomida1": "Salmón a la plancha con puré de patatas",
      "terceracomida1": "Espaguetis a la bolognesa",
      "tipoplato2": "Postre",
      "primeracomida2": "Tarta de chocolate con helado de vainilla",
      "segundacomida2": "Fruta fresca de temporada",
      "terceracomida2": "Tiramisú",
    },
    Martes = {
    "tipoplato": "Primer Plato",
    "primeracomida": "Sopa de tomate",
    "segundacomida": "Ensalada griega",
    "terceracomida": "Paella de mariscos",
    "tipoplato1": "Segundo Plato",
    "primeracomida1": "Pollo al curry con arroz basmati",
    "segundacomida1": "Bacalao a la vizcaína",
    "terceracomida1": "Ratatouille",
    "tipoplato2": "Postre",
    "primeracomida2": "Flan de caramelo",
    "segundacomida2": "Manzana asada",
    "terceracomida2": "Helado de fresa",
    },
    Miercoles = {
    "tipoplato": "Primer Plato",
    "primeracomida": "Gazpacho",
    "segundacomida": "Tabulé",
    "terceracomida": "Crema de espárragos",
    "tipoplato1": "Segundo Plato",
    "primeracomida1": "Entrecot a la pimienta con patatas gratinadas",
    "segundacomida1": "Merluza en salsa verde",
    "terceracomida1": "Pasta primavera",
    "tipoplato2": "Postre",
    "primeracomida2": "Pastel de queso con frutos rojos",
    "segundacomida2": "Pera en almíbar",
    "terceracomida2": "Mousse de limón",
    },
    Jueves = {
    "tipoplato": "Primer Plato",
    "primeracomida": "Sopa de calabaza",
    "segundacomida": "Ensalada de aguacate",
    "terceracomida": "Arroz con setas",
    "tipoplato1": "Segundo Plato",
    "primeracomida1": "Costillas de cerdo a la barbacoa con maíz asado",
    "segundacomida1": "Trucha a la plancha con puré de calabacín",
    "terceracomida1": "Canelones de espinacas y ricotta",
    "tipoplato2": "Postre",
    "primeracomida2": "Tarta de manzana",
    "segundacomida2": "Kiwi fresco",
    "terceracomida2": "Helado de vainilla",
    },
    Viernes = {
    "tipoplato": "Primer Plato",
    "primeracomida": "Sopa de cebolla",
    "segundacomida": "Ensalada de quinoa",
    "terceracomida": "Tortilla española",
    "tipoplato1": "Segundo Plato",
    "primeracomida1": "Pechuga de pollo a la naranja con arroz salvaje",
    "segundacomida1": "Bacalao al pil-pil",
    "terceracomida1": "Lasaña de carne",
    "tipoplato2": "Postre",
    "primeracomida2": "Tiramisú",
    "segundacomida2": "Mango maduro",
    "terceracomida2": "Flan de vainilla",
    }
]
    document.querySelector("diaSemana").addEventListener("change", mostrarMenuDelDia)

    const hoy = new Date().getDay()

    function mostrarMenuDelDia() {
        const diaSeleccionado = document.querySelector("diaSemana").value

        if (diaSeleccionado == Lunes) {
            let menuHTML 
            for (let i=0;i<carta.length;i++){
                menuHTML += `<h2>Día ${carta.Lunes}</h2>`
            }
        }
        if (diaSeleccionado == Martes){
            let menuHTML2 
            for (let i=0;i<carta.length;i++){
                menuHTML2 += `<h2>Día ${carta.Martes}</h2>`
            }
        }
        if (diaSeleccionado == Miercoles){
            let menuHTML3 
            for (let i=0;i<carta.length;i++){
                menuHTML3 += `<h2>Día ${carta.Miercoles}</h2>`
            }
        }
        if (diaSeleccionado == Jueves){
            let menuHTML4 
            for (let i=0;i<carta.length;i++){
                menuHTML4 += `<h2>Día ${carta.Jueves}</h2>`
            }
        }
        if (diaSeleccionado == Viernes){
            let menuHTML5 
            for (let i=0;i<carta.length;i++){
                menuHTML5 += `<h2>Día ${carta.Viernes}</h2>`
            }
        }
    }
    function calcularTiempoHastaApertura() {
        const horarioApertura = document.querySelector("#horarioApertura").value
        const horarioCierre = document.querySelector("#horarioCierre").value
        const horaActual = new Date().getHours()
        const minutosActuales = new Date().getMinutes()
    }
 
