// import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
    image: string;
}

const timelineData: TimelineEvent[] = [
    {
        year: 1969,
        title: "UNIX",
        description: "Desarrollo del sistema operativo UNIX en los laboratorios Bell de AT&T.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Unix_history-simple.svg"
    },
    {
        year: 1981,
        title: "MS-DOS",
        description: "Microsoft lanza MS-DOS, el sistema operativo para IBM PC.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Msdos-icon.svg"
    },
    {
        year: 1985,
        title: "Windows 1.0",
        description: "Microsoft lanza la primera versión de Windows.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg"
    },
    {
        year: 1991,
        title: "Linux",
        description: "Linus Torvalds lanza el kernel de Linux.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
    },
    {
        year: 2001,
        title: "Mac OS X",
        description: "Apple lanza Mac OS X, basado en UNIX.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Mac_OS_X_Panther_Logo.png"
    },
    {
        year: 2009,
        title: "Android",
        description: "Google lanza Android, basado en el kernel de Linux.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Android_logo_2023_%28stacked%29.svg"
    }
];

export default function DashBoardView() {
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
                                    : 'md:left-[-135px] md:translate-x-1/2'
                                }`}>
                                    <p className="text-second font-bold text-3xl">{event.year}</p>
                                </div>
                            { /*Flecha*/ }
                            <div className={`absolute top-1/2  ${index % 2 === 0 ? 'md:right-6 md:-translate-x-full md:border-t-8 md:border-b-8 md:border-l-8' : 'left-6 translate-x-full border-t-8 border-b-8 border-r-8'} translate-y-[-35px] w-0 h-0 border-transparent ${index % 2 === 0 ? 'border-l-second' : 'md:border-r-second'}`}></div>
                            <div className={`md:hidden absolute top-1/2  left-[-10px] sm:left-6 translate-x-full border-t-8 border-b-8 border-r-8 translate-y-[-35px] w-0 h-0 border-transparent border-r-second`}></div>
                            <p className="md:hidden text-second font-bold text-3xl py-3">{event.year}</p>

                            <div className={`bg-third p-6 rounded-lg shadow-lg transform hover:scale-110 hover:sm:scale-105 transition-all duration-300 border-s-2 border-second ${ index%2 === 0 ? 'md:border-e-2 md:border-second md:border-s-0' : 'md:border-s-2 md:border-second' } `}>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-32 object-contain mb-4"
                                />
                                <h2 className="text-xl font-bold">{event.title}</h2>
                                <p className="mt-2">{event.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}