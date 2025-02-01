import { Outlet } from "react-router-dom"

export default function AppLayout() {
    return(
        <>
            <section>
                <Outlet />
            </section>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p><span className="font-bold">Publicación:</span> 01 de febrero de 2025</p>
                <p><span className="font-bold">Autor:</span> Pablo Alejandro Hernández Gómez</p>
            </footer>
        </>
    )
}