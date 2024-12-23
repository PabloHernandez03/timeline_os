import { useEffect, useState, TouchEvent } from "react";

interface Opinion {
    name: string;
    opinion: string;
}

export default function DashBoardView() {
    const opiniones: Opinion[] = [
        { name: "Juan Pérez", opinion: "Excelente calidad y servicio. Muy satisfecho con mi compra." },
        { name: "Ana Gómez", opinion: "Los tenis llegaron a tiempo y son muy cómodos. Recomendado." },
        { name: "Carlos Ruiz", opinion: "Gran variedad de modelos y precios accesibles. Volveré a comprar." },
        { name: "María López", opinion: "El diseño es increíble y la calidad insuperable. Muy feliz con mi compra." },
        { name: "Luis Fernández", opinion: "Servicio al cliente excepcional y productos de alta calidad." },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Movimiento automático
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Cambiar cada 3 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Función para ir a la siguiente diapositiva
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % opiniones.length);
    };

    // Función para ir a la diapositiva anterior
    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + opiniones.length) % opiniones.length);
    };

    // Manejo de deslizamiento táctil
    let touchStartX: number = 0;
    let touchEndX: number = 0;

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
        touchStartX = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>): void => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchStartX - touchEndX < -50) prevSlide();
    };

    return (
        <>
            {/* Sección inicial */}
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="col-span-1 p-12 bg-[#050404] rounded-3xl">
                        <h2 className="text-5xl font-bold text-start text-[#F7F6F6]">
                            La mejor calidad, al mejor precio
                        </h2>
                        <div>
                            <p className="text-[#F7F6F6] mt-6 leading-8 text-start">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla tempora ipsam alias
                                tenetur veritatis quidem, ad assumenda exercitationem harum eum, ipsum tempore cumque,
                                quaerat enim officiis non magnam nam possimus Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Nulla tempora ipsam alias tenetur veritatis quidem, ad assumenda
                                exercitationem harum eum.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 p-8 flex justify-center items-center bg-[#050404] rounded-3xl">
                        <img className="w-8/12 rounded-e-3xl" src="logo_principal.avif" alt="Logo Principal" />
                    </div>
                </div>
            </div>

            {/* Carrusel de opiniones */}
            <div className="w-full relative mt-12">
                <h2 className="text-4xl font-bold text-center text-[#050404] mb-8">Opiniones de Clientes</h2>

                <div
                    className="w-full overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {opiniones.map((review, index) => (
                            <div
                                key={index}
                                className="min-w-full p-6 bg-[#F7F6F6] flex flex-col items-center rounded-3xl shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-[#050404]">{review.name}</h3>
                                <p className="mt-4 text-center text-[#050404]">{review.opinion}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones de navegación */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#050404] text-white p-3 rounded-full"
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#050404] text-white p-3 rounded-full"
                    onClick={nextSlide}
                >
                    &#8250;
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-4 space-x-2">
                    {opiniones.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? "bg-[#050404]" : "bg-[#F7F6F6]"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
}
