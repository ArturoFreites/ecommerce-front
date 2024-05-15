import logo from "../assets/jema-logo.png"

function Footer() {
    return (
        <footer className="">
            <div className="max-lg:flex-col bg-gray-500 py-12 flex items-center justify-center">
                <img className="w-64" src={logo} />
                <p className="max-lg:px-20 max-lg:text-center max-lg:pt-5 font-bold italic text-principal">Prestando un servicio completo para lo que necesites</p>
            </div>
            <div className="bg-principal py-5">
                <p className="text-center text-white">Derechos reservados 2024 - Desarrollado por ...</p>
            </div>
        </footer>
    );
}

export default Footer;