var config = {
    style: 'mapbox://styles/mariocstrv/cmb6ef9zr001d01si7nzu8e73',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWFyaW9jc3RydiIsImEiOiJjbDY5cmU0M20wdzIxM2pvMWltMGJjZnllIn0.-MeMgtRxaUoPqGJuMburNg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El primer viaje internacional del segundo mandato de Trump',
    byline: 'Por Mario Castroviejo',
    footer: 'Todas las imágenes utilizadas son propiedad de la Casa Blanca. <br> Creado con la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'base',
            alignment: 'center',
            hidden: false,
            title: 'Comienza el viaje',
            image:'Llega.jpg',
            description: 'Del 13 al 16 de mayo de 2025, Donald Trump emprendió su primer gran viaje internacional de su segundo mandato, visitando Arabia Saudí, Qatar y Emiratos Árabes Unidos. El objetivo era conseguir acuerdos empresariales e inversiones en Estados Unidos.',
            location: {
                center: [50.58010, 24.01043],
                zoom: 4.51,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
                {
            id: 'Arab',
            alignment: 'center',
            hidden: false,
            title: 'Arabia Saudí',
            description: 'El 13 de mayo de 2025, Donald Trump aterrizó en Rihad.',
            location: {
                center: [46.72697, 24.62263],
                zoom: 9.8,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'primero',
            alignment: 'left',
            hidden: false,
            title: 'Palacio Real - Arabia Saudí',
            description: 'Trump se reunió con Mohammed bin Salman, donde el estadounidense reiteró sus llamamientos para aumentar la inversión de Arabia Saudí en Estados Unidos de 600.000 millones de dólares a un billón de dólares.',
            image: 'Trump_MBS.jpg',
            location: {
                center: [46.6395433523343,24.66470889618641],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'segundo',
            alignment: 'right',
            hidden: false,
            title: 'Centro Internacional King Abdulaziz',
            image: 'Investment.jpg',
            description: 'La visita de Trump coincidió con el Foro de Inversión Saudí-Estadounidense. En su intervención en el foro, Trump animó a Arabia Saudí a unirse a los Acuerdos de Abraham, lo que provocó el silencio de los asistentes, anunció que levantaría las sanciones a Siria e imploró a Irán que negociara sobre su programa nuclear.',
            location: {
                center: [46.63364166187366,24.667421888193285],
                zoom: 18,
                pitch: 70,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
             {
            id: 'tercer',
            alignment: 'left',
            hidden: false,
            title: 'Palacio Real',
            description: 'Trump se reunió con el presidente sirio, Ahmed al-Sharaa y le instó a unirse a los Acuerdos de Abraham. Mohammed bin Salman y el presidente turco Recep Tayyip Erdoğan participaron en la reunión.',
            image: 'Syria.jpg',
            location: {
                center: [46.6395433523343,24.66470889618641],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },  
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Consejo de Cooperación del Golfo',
            description: 'Trump asistió a una cumbre del Consejo de Cooperación del Golfo con Tamim bin Hamad Al Thani de Catar, Mishal Al-Ahmad Al-Jaber Al-Sabah de Kuwait, Hamad bin Isa Al Khalifa de Bahréin. En su discurso de apertura, Mohamed abogó por una conclusión de la guerra de Gaza que condujera a los objetivos establecidos en la Iniciativa de Paz Árabe.',
            location: {
                center: [46.64079941643063,24.681515880938445],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Qatar',
            alignment: 'center',
            hidden: false,
            title: 'Catar',
            description: 'Trump llegó a Doha el 14 de mayo.',
            location: {
                center: [51.25120, 25.21216],
                zoom: 7.3,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'otro-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Amiri Diwan - Catar',
            image: 'Catar.jpg',
            description: 'En Doha Trump se reunió con Tamim bin Hamad Al Thani. Horas después, Qatar Airways firmó un acuerdo para comprar hasta 210 aviones a Boeing y Estados Unidos anunció más de 243.000 millones de dólares en acuerdos con Qatar.',
            location: {
                center: [51.52839890488997,25.290407202420347],
                zoom: 16,
                pitch: 30,
                bearing: -11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Palacio de Lusail',
            image: 'FIFA.jpg',
            description: 'Más tarde, Trump asistió a una cena de Estado en el Palacio de Lusail,donde hizo un llamamiento a Qatar para mejorar las relaciones entre Irán y Estados Unidos. Tras la cena, Trump y Tamim se reunieron para asistir a una ceremonia de traspaso de las funciones de anfitrión del Mundial de la FIFA a Estados Unidos.',
            location: {
                center: [51.45976701460791,25.538615974557615],
                zoom: 18.52,
                pitch: 39.58,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
               {
            id: 'militar',
            alignment: 'left',
            hidden: false,
            title: 'Base militar de Al Udeid.',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Yn7-eCpY3Lk?si=S-lqdEP8FcM0_Jpd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <br/> Trump visitó a los militares estadounidenses en la Base Aérea de Al Udeid',
            location: {
                center: [51.31639663703616,25.12215686516843],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                                {
            id: 'Emiratos',
            alignment: 'center',
            hidden: false,
            title: 'Emiratos Árabes Unidos',
            description: 'Trump llegó a Abu Dabi el 16 de mayo.',
            location: {
                center: [54.39173, 24.41110],
                zoom: 7.3,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'EAU',
            alignment: 'right',
            hidden: false,
            title: 'Gran Mezquita Sheikh Zayed',
            image: 'Mezquita.jpg',
            description: 'Visitó la Gran Mezquita Sheikh Zayed con Khaled bin Mohamed Al Nahyan.',
            location: {
                center: [54.47438798096506,24.412354950214166],
                zoom: 18,
                pitch: 50,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'EAU3',
            alignment: 'left',
            hidden: false,
            title: 'Palacio Presidencial',
            image: 'Zayed.webp',
            description: 'Los Emiratos Árabes Unidos concedieron a Trump Orden de Zayed, la más alta condecoración civil de los EAU, “en reconocimiento a sus esfuerzos por mejorar la cooperación entre los Emiratos Árabes Unidos y Estados Unidos”.',
            location: {
                center: [54.305538159418724,24.461946021693453],
                zoom: 18,
                pitch: 50,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Fin',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusión',
            image: 'Airforce.jpg',
            description: 'La visita de Trump a estas tres naciones marcó un momento clave en las relaciones de Estados Unidos con Oriente Medio. Económicamente varios lo describen como un éxito rotundo y en el ámbito geopolítico, la decisión de Trump de levantar las sanciones a Siria es abiertamente considerada un acierto.',
            location: {
                center: [50.58010, 24.01043],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
