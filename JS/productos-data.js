/*
Este js esta hecho para la data de las cartas , asi la intencion es que cada producto que tengamos al pinchar la imagen sobre el nos lleve 
a una pagina de detalle de la carta, con esto nos ahorramos un chingo de paginas html :D 
*/

const cartas = [

    /* Comienzo de seccion data para magic */
    {
        id: "black-lotus",
        nombre: "Black Lotus",
        imagen: "/images/black-lotus.webp",
        edicion: "Alpha",
        rareza: "Mitica",
        precio: 120000000,
        descripcion: "La carta mas iconica y valiosa de MTG"
    },

    {
        id: "time-walk",
        nombre: "Time Walk",
        imagen: "/images/time-walk.webp",
        edicion: "Alpha",
        rareza: "Mitica",
        precio: 17000000,
        descripcion: "Permite tomar un turno extra"
    },

    {
        id: "gaea-cradle",
        nombre: "Gaea Cradle",
        imagen: "/images/magicSingles/gaea.jpg",
        edicion: "Urza's Saga",
        rareza: "Mitica",
        precio: 6500000,
        descripcion: "Permite generar mana verde por cada criatura que controles"
    },
    {
        id: "mox-saphire",
        nombre: "Mox saphire",
        imagen: "/images/magicSingles/mox-saphire.jpg",
        edicion: "Alpha",
        rareza: "Mitica",
        precio: 9000000,
        descripcion: "Genera mana azul"
    },
    {
        id: "volcanic-island",
        nombre: "Volcanic Island",
        imagen: "/images/magicSingles/volcanic-island.avif",
        edicion: "3era Edicion",
        rareza: "Rara",
        precio: 764000,
        descripcion: "Tierras duales que generan mana azul y rojo"
    },
    {
        id: "Black-Chocobo",
        nombre: "Chocobo Negro",
        imagen: "/images/magicSingles/black-chocobo.avif",
        edicion: "Final Fantasy",
        rareza: "Mitica",
        precio: 6500000,
        descripcion: "Carta promocional de  colaboracion con final fantasy , este choco es extremadamente raro de conseguir y asi tambien este color es unico debido a que solo esta disponible en su version japonesa"
    },
    {
        id: "chains-of-mephistopheles",
        nombre: "Chains of Mephistopheles",
        imagen: "/images/magicSingles/chains-of-mephistopheles.jpg",
        edicion: "Legends",
        rareza: "Mitica",
        precio: 10500000,
        descripcion: "Permite manipular las cartas que robas y forzar a tus oponentes a descartar cartas"
    },
    {
        id: "ugin",
        nombre: "Ugin, The spirit dragon",
        imagen: "/images/magicSingles/ugin.avif",
        edicion: "Secret Lair",
        rareza: "Mitica",
        precio: 915000,
        descripcion: "Un poderoso planeswalker que puede controlar dragones y manipular el colorless mana"
    },
    {
        id: "one-ring",
        nombre: "The One Ring",
        imagen: "/images/magicSingles/the-one-ring-scroll.jpg",
        edicion: "The lord of the Rings",
        rareza: "Mitica",
        precio: 415000,
        descripcion: "Carta de colaboracion con el señor de los anillos, otorga proteccion y sigilo a su portador"
    },
    {
        id: "counterspell",
        nombre: "Counterspell",
        imagen: "/images/magicSingles/counterspell.avif",
        edicion: "Secret Lair",
        rareza: "Rara",
        precio: 55000,
        descripcion: "Contrarresta un hechizo objetivo"
    },
    {
        id: "pon",
        nombre: "Pact Of Negation",
        imagen: "/images/magicSingles/pact of negation.jpg",
        edicion: "Masterpiece Series: Invocations",
        rareza: "Mitica",
        precio: 139000,
        descripcion: "Contrarresta un hechizo sin pagar su coste de mana, pero en tu siguiente turno debes pagar 3 manas incoloros o perderas el juego"
    },
    {
        id: "rhystic-study",
        nombre: "Rhystic Study",
        imagen: "/images/magicSingles/Rhystic Study.avif",
        edicion: "Wilds of Eldraine",
        rareza: "Mitica",
        precio: 129000,
        descripcion: "Cada vez que un oponente lanza un hehizo , puedes robar una carta a menos que pague 1 mana incoloro"
    },


    // Aca seguire agregando mas cartas , les dejo sus secciones para que las vaya llenando 

    /* Fin seccion Data magic singles */

    /* Comienzo de seccion data para yugioh */
    {
        id: "droll-&-lock-bird",
        nombre: "Droll & Lock Bird",
        imagen: "/images/yugiohSingles/Droll-&-Lock-Bird.jpg",
        edicion: "1a edicion",
        rareza: "Rara",
        precio: 2000,
        descripcion: "Si una o más cartas en el Deck Principal son añadidas a la mano de tu adversario, excepto durante la Draw Phase (Efecto Rápido): puedes mandar al Cementerio esta carta en tu mano; por el resto de este turno, no se pueden añadir a la mano cartas en el Deck Principal de ningún jugador." 
    },
    {
        id: "dark-magician-of-chaos",
        nombre: "Dark Magician Of Chaos",
        imagen: "/images/yugiohSingles/Dark-Magician-Of-Chaos.jpg",
        edicion: "1a edicion",
        rareza: "Rara",
        precio: 150000,
        descripcion: "Durante la End Phase, si esta carta fue Invocada de Modo Normal o Especial en este turno: puedes seleccionar 1 Carta Mágica en tu Cementerio; añádela a tu mano. Sólo puedes usar este efecto de Mago Oscuro del Caos una vez por turno. Si esta carta destruye un monstruo de tu adversario en batalla, después del cálculo de daño: destierra a ese monstruo de tu adversario. Si esta carta boca arriba fuera a dejar el Campo, en su lugar destiérrala."
    },
    {
        id: "dark-magician",
        nombre: "Dark Magician",
        imagen: "/images/yugiohSingles/Dark-Magician.webp",
        edicion: "1a edicion",
        rareza: "Rara",
        precio: 150000,
        descripcion: "El más grande de los magos en cuanto al ataque y la defensa."
    },
    {
        id: "fiendsmith-engraver",
        nombre: "Fiendsmith Engraver",
        imagen: "/images/yugiohSingles/Fiendsmith-Engraver.jpg",
        edicion: "1a edicion",
        rareza: "Secreta",
        precio: 75000,
        descripcion: "Puedes descartar esta carta; añade a tu mano 1 Mágica/Trampa Demoniherrero/a en tu Deck. Puedes seleccionar 1 Carta de Equipo Demoniherrero/a que controles y 1 monstruo en el Campo; mándalos al Cementerio. Si esta carta está en tu Cementerio: puedes barajar al Deck/Deck Extra otro monstruo Demonio de LUZ en tu Cementerio; Invoca esta carta de Modo Especial. Sólo puedes usar cada efecto de Demoniherrero Grabador una vez por turno."
    }

    /* Fin seccion Data yugioh */


    /* Comienzo de seccion data para pokemon */
    /* Fin de seccion data para pokemon*/

    /* comienzo de seccion data de otros productos */
    /* Fin de seccion de data para otros productos */
];