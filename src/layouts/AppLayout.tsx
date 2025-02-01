import { Outlet } from "react-router-dom"
import Logo from "@/components/Logo"

export default function AppLayout() {
    return(
        <>
            <header className="bg-[#050404] py-2 px-8">
                <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center">
                    <div className="w-32">
                        <Logo />
                    </div>
                    
                </div>
            </header>

            <section className="max-w-screen-2xl mx-auto p-5 pt-10 pb-10">
                <Outlet />
            </section>

            {/* <footer className="py-5">
                <p className="text-center font-mono text-[#F7F6F6]">       
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </footer> */}
        </>
    )
}