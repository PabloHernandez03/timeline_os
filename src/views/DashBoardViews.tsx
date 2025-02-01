import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
}

const timelineData: TimelineEvent[] = [
    {
        year: "1940s",
        title: "ENIAC - Primeras computadoras",
        description: "Desarrollo de ENIAC, la primera computadora electrónica de propósito general.",
        longDescription: "ENIAC (Electronic Numerical Integrator and Computer) fue la primera computadora electrónica de propósito general. Fue desarrollada durante la Segunda Guerra Mundial para realizar cálculos balísticos. Aunque no tenía un sistema operativo como los conocemos hoy, sentó las bases para el desarrollo de sistemas informáticos más avanzados.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Reprogramming_ENIAC.png"
    },
    {
        year: "1950s",
        title: "Innovación en hardware",
        description: "Tajertas perforadas y cintas magnéticas eran los medios de almacenamiento más comunes en la década de 1950",
        longDescription: "Las tarjetas perforadas y las cintas magnéticas eran los medios de almacenamiento más comunes en la década de 1950. Las tarjetas perforadas se utilizaban para ingresar datos y programas en las computadoras, mientras que las cintas magnéticas se utilizaban para almacenar información de forma secuencial. Estos medios de almacenamiento eran lentos y propensos a errores, pero fueron fundamentales para el desarrollo de sistemas informáticos en esa época.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hollerith_punched_card.jpg"
    },
    {
        year: "",
        title: "Procesamiento por lotes",
        description: "El procesamiento por lotes permitía ejecutar varios programas en secuencia sin intervención manual.",
        longDescription: "El procesamiento por lotes fue una técnica utilizada en las primeras computadoras para ejecutar varios programas en secuencia sin intervención manual. Los operadores cargaban los programas y los datos en la computadora, que los ejecutaba uno tras otro. Esto permitió aumentar la eficiencia de las computadoras y acelerar el procesamiento de tareas.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Batch_Processing.png"
    },
    {
        year: "1956",
        title: "GM-NAA I/O",
        description: "La primer computadora para la que se desarrolló un sistema operativo fue la IBM 704.",
        longDescription: "La función principal de GM-NAA I/O era ejecutar automáticamente un nuevo programa una vez que el que se estaba ejecutando había terminado (procesamiento por lotes). Estaba formado por rutinas compartidas con los programas que proporcionaban acceso común a los dispositivos de entrada/salida.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/IBM_704_mainframe.gif"
    },
    {
        year: "1960s",
        title: "Multiprogramación y Tiempo Compartido",
        description: "Desarrollo de sistemas que permitían ejecutar varios programas simultáneamente.",
        longDescription: "La multiprogramación y el tiempo compartido fueron avances significativos en la década de 1960. La multiprogramación permitía ejecutar varios programas simultáneamente, aprovechando al máximo los recursos de la computadora. El tiempo compartido permitía a varios usuarios interactuar con la computadora al mismo tiempo, compartiendo sus recursos de forma eficiente.",
    },
    {
        year: "1961",
        title: "CTSS",
        description: "Desarrollo del sistema operativo CTSS en el MIT.",
        longDescription: "CTSS (Compatible Time-Sharing System) fue uno de los primeros sistemas operativos de tiempo compartido. Fue demostrado por primera vez en el IBM 709 en el MIT en 1961. CTSS permitía a varios usuarios interactuar con la computadora simultáneamente, marcando el comienzo de la era de los sistemas operativos interactivos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intrex_on_CTSS.png"
    },
    {
        year: "1969",
        title: "UNIX",
        description: "Desarrollo del sistema operativo UNIX en los laboratorios Bell de AT&T.",
        longDescription: "UNIX fue creado por Ken Thompson, Dennis Ritchie y otros en los laboratorios Bell de AT&T. Este sistema operativo sentó las bases para muchos sistemas modernos, incluyendo Linux y macOS. Su diseño modular y su enfoque en la simplicidad lo convirtieron en una herramienta poderosa para desarrolladores.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Simh-pdp11-unix-sysiii.png"
    },
    {
        year: "1970s",
        title: "Microcomputadoras y microprocesadores",
        description: "El desarrollo de microcomputadoras y microprocesadores impulsó la popularidad de los sistemas operativos.",
        longDescription: "La década de 1970 fue testigo del desarrollo de microcomputadoras y microprocesadores, lo que permitió la creación de sistemas informáticos más pequeños y asequibles. Esto llevó a un aumento en la popularidad de los sistemas operativos, ya que las computadoras personales se volvieron más accesibles para el público en general.",
    },
    {
        year: "1974",
        title: "CP/M",
        description: "Digital Research lanza CP/M, un sistema operativo popular en la década de 1970.",
        longDescription: "CP/M (Control Program for Microcomputers) fue un sistema operativo popular en la década de 1970, utilizado en muchas computadoras personales y sistemas de microcomputadoras. Fue el precursor de MS-DOS, el sistema operativo que dominaría el mercado de las computadoras personales en la década de 1980.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/26/CPM-86.png"
    },
    {
        year: "1979",
        title: "Apple DOS",
        description: "Apple lanza Apple DOS, el sistema operativo para el Apple II.",
        longDescription: "Apple DOS fue el primer sistema operativo para el Apple II, una de las primeras computadoras personales exitosas. Aunque era primitivo en comparación con los sistemas operativos modernos, sentó las bases para el desarrollo de sistemas operativos más avanzados de Apple, como ProDOS y macOS.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Upgraded_to_DOS_3.3_%286518689667%29.jpg"
    },
    {
        year: "1980s",
        title: "Computadoras personales, Interfaces gráficas y Redes",
        description: "La década de 1980 fue testigo del auge de las computadoras personales, las interfaces gráficas de usuario y las redes de computadoras como TCP/IP.",
        longDescription: "La década de 1980 fue un período de avances significativos en la informática. Las computadoras personales se volvieron más asequibles y populares, gracias a sistemas operativos como MS-DOS y Windows. Las interfaces gráficas de usuario, como las de Mac OS y Windows, hicieron que las computadoras fueran más fáciles de usar. Además, las redes de computadoras, como TCP/IP, permitieron la comunicación entre computadoras en todo el mundo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Elixir%27s_Graphical_User_Interface.jpg"
    },
    {
        year: "1981",
        title: "MS-DOS",
        description: "Microsoft lanza MS-DOS, el sistema operativo para IBM PC.",
        longDescription: "MS-DOS (Microsoft Disk Operating System) fue el sistema operativo estándar para las computadoras personales IBM PC y compatibles. Aunque carecía de una interfaz gráfica, su eficiencia y compatibilidad lo hicieron popular en la década de 1980.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Msdos-icon.svg"
    },
    {
        year: "1985",
        title: "Windows 1.0",
        description: "Microsoft lanza la primera versión de Windows.",
        longDescription: "Windows 1.0 fue la primera versión de Microsoft Windows, introduciendo una interfaz gráfica de usuario (GUI) para MS-DOS. Aunque no fue un éxito inmediato, sentó las bases para futuras versiones de Windows que dominarían el mercado.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg"
    },
    {
        year: "1990s",
        title: "Linux e Interfaces graficas avanzadas",
        description: "La década de 1990 fue testigo del desarrollo de Linux y de interfaces gráficas más avanzadas por parte de Windows y Mac OS.",
    },
    {
        year: "1991",
        title: "Linux",
        description: "Linus Torvalds lanza el kernel de Linux.",
        longDescription: "Linux es un sistema operativo de código abierto basado en UNIX. Fue creado por Linus Torvalds en 1991 y ha crecido gracias a la contribución de una comunidad global. Es ampliamente utilizado en servidores, supercomputadoras y dispositivos móviles (a través de Android).",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
    },
    {
        year: "2000s",
        title: "Sistemas operativos móviles y Nube",
        description: "La década de 2000 fue testigo del auge de los sistemas operativos móviles y de la computación en la nube."
    },
    {
        year: "2001",
        title: "Mac OS X",
        description: "Apple lanza Mac OS X, basado en UNIX.",
        longDescription: "Mac OS X marcó un cambio significativo en los sistemas operativos de Apple, al estar basado en UNIX. Introdujo una interfaz gráfica moderna (Aqua) y características avanzadas de estabilidad y seguridad. Fue el precursor de macOS, el sistema operativo actual de Apple.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Mac_OS_X_Panther_Logo.png"
    },
    {
        year: "2003",
        title: "Windows Server 2003",
        description: "Microsoft lanza Windows Server 2003.",
        longDescription: "Windows Server 2003 fue una versión importante del sistema operativo de servidor de Microsoft. Introdujo mejoras en la seguridad, la estabilidad y el rendimiento, y fue ampliamente adoptado por empresas de todo el mundo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/VirtualBox_Windows_Server_2003_Server_Enterprise_x64_VL_08_01_2025_10_14_47_CENS.png"
    },
    {
        year: "2004",
        title: "Ubuntu",
        description: "Canonical lanza Ubuntu, una distribución de Linux popular.",
        longDescription: "Ubuntu es una distribución de Linux basada en Debian que se enfoca en la facilidad de uso y la accesibilidad. Ha ganado popularidad en la comunidad de software libre y es conocida por su ciclo de lanzamiento regular y su amplio soporte de hardware.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg"
    },
    {
        year: "2007",
        title: "iOS",
        description: "Apple lanza iOS, el sistema operativo para iPhone.",
        longDescription: "iOS es el sistema operativo móvil de Apple, diseñado específicamente para el iPhone. Introdujo una interfaz táctil revolucionaria y una tienda de aplicaciones (App Store) que cambió la forma en que interactuamos con nuestros dispositivos móviles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg"
    },
    {
        year: "2008-2010",
        title: "Android",
        description: "Google lanza Android, basado en el kernel de Linux.",
        longDescription: "Android es un sistema operativo móvil desarrollado por Google, basado en el kernel de Linux. Desde su lanzamiento, se ha convertido en el sistema operativo más utilizado en dispositivos móviles, gracias a su flexibilidad y a la amplia gama de dispositivos compatibles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Android_logo_2023_%28stacked%29.svg"
    },
    {
        year: "2009",
        title: "Debian 5.0",
        description: "Lanzamiento de Debian 5.0 'Lenny'.",
        longDescription: "Debian 5.0 'Lenny' fue una versión importante de la distribución de Linux Debian. Introdujo mejoras en la instalación, la administración del sistema y la seguridad, y fue bien recibida por la comunidad de software libre.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Debian_12_%28Bookworm%29_-_GNOME_desktop.png"
    },
    {
        year: "2010-Actualidad",
        title: "Inteligencia Artificial y Computación Cuántica",
        description: "La informática actual se centra en la inteligencia artificial y la computación cuántica.",
        longDescription: "La informática actual se centra en la inteligencia artificial y la computación cuántica. La inteligencia artificial está transformando la forma en que interactuamos con la tecnología, mientras que la computación cuántica promete revolucionar la informática al aprovechar los principios de la mecánica cuántica.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
    },
];

export default function DashBoardView() {
    const [showMore, setShowMore] = React.useState<number | null>(null);

    const handleShowMore = (index: number) => {
        setShowMore(showMore === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-first">
                Evolución de los<br />
                <span className="text-second">Sistemas Operativos</span>
            </h1>
            <div className="relative">
                <div className="absolute h-full w-1 bg-first left-0 sm:left-7 md:left-1/2 transform -translate-x-1/2"></div>
            <div 
                className={`absolute top-[-20px] w-5 h-5 left-0 sm:left-7 md:left-1/2 rounded-full bg-first transform -translate-x-1/2`}
            ></div>
            <div 
                className={`absolute top-full w-5 h-5 left-0 sm:left-7 md:left-1/2 rounded-full bg-first transform -translate-x-1/2`}
            ></div>
                {timelineData.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-8`}
                    >
                        <div className="w-11/12 sm:w-11/12 md:w-1/2 px-2 sm:px-10 relative">
                            <div 
                                className={`absolute top-1/3 w-10 h-10 hidden sm:block sm:left-6 -translate-x-full ${
                                    index % 2 === 0 
                                    ? 'md:left-auto md:right-[-60px] md:-translate-x-full' 
                                    : 'md:left-5 md:-translate-x-full'
                                } rounded-full bg-second border-4 border-first`}
                            >
                            </div>
                            <div className={`hidden md:block absolute top-1/3 left-[-135px] translate-x-1/2 ${
                                    index % 2 === 0 
                                    ? 'md:left-full md:translate-x-1/2' 
                                    : 'md:left-[-150px] md:translate-x-1/2'
                                }`}>
                                    <p className="text-second font-bold text-3xl">{event.year}</p>
                                </div>
                            { /*Flecha*/ }
                            <div className={`absolute top-1/2  ${index % 2 === 0 ? 'md:right-6 md:-translate-x-full md:border-t-8 md:border-b-8 md:border-l-8' : 'left-6 translate-x-full border-t-8 border-b-8 border-r-8'} translate-y-[-35px] w-0 h-0 border-transparent ${index % 2 === 0 ? 'border-l-second' : 'md:border-r-second'}`}></div>
                            <div className={`md:hidden absolute top-1/2  left-[-10px] sm:left-6 translate-x-full border-t-8 border-b-8 border-r-8 translate-y-[-35px] w-0 h-0 border-transparent border-r-second`}></div>
                            <p className="md:hidden text-second font-bold text-3xl py-3">{event.year}</p>
                            
                            <div className={`bg-third p-6 rounded-lg shadow-lg transform hover:scale-110 hover:sm:scale-105 transition-all duration-300 border-s-2 border-second ${ index%2 === 0 ? 'md:border-e-2 md:border-second md:border-s-0' : 'md:border-s-2 md:border-second' } `}>
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-32 object-contain mb-4"
                                    />
                                )}
                                <h2 className="text-xl font-bold">{event.title}</h2>
                                <p className="mt-2">{event.description}</p>
                                {event.longDescription && (
                                    <div className="mt-4">
                                        <button
                                            onClick={() => handleShowMore(index)}
                                            className="text-fifth hover:underline"
                                        >
                                            {showMore === index ? "Leer menos" : "Leer más"}
                                        </button>
                                        {showMore === index && (
                                            <p className="mt-2">{event.longDescription}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}