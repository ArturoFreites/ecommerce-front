import { FaBasketShopping, FaCircleUser, FaGifts, FaHouseCircleCheck, FaShop, FaWineGlass } from "react-icons/fa6";
import logo from "../assets/jema-logo.png"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

    const [selected,setSelected] = useState(0);
    const [collapse,setCollapse] = useState(false);

    const onClickSelected = (id:number) => {
        setSelected(id);
        setCollapse(false)
    }

    const rutas = [
        {
        id:0,
        nombre:"Minimarket",
        ruta:"/",
        icon:<FaShop />
        },
        {
            id:1,
            nombre:"Regalería",
            ruta:"/",
            icon:<FaGifts />
        },
        {
            id:2,
            nombre:"Catering",
            ruta:"/",
            icon:<FaWineGlass/>
        },
        {
            id:3,
            nombre:"Mantenimiento del Hogar",
            ruta:"/",
            icon:<FaHouseCircleCheck />
        }
    ]

    return (
        <nav className="flex flex-col w-full">
            <article className="max-lg:flex-col w-screen flex justify-around items-center py-10 text-principal">
                <img className="w-64" src={logo} alt="jema servicios integrales"/>
                <div className="max-lg:mt-10 flex space-x-6">
                    <span className="flex flex-col items-center">
                        <FaBasketShopping className="text-3xl"/>
                        <p className="text-xs">Carrito</p>
                    </span>
                    <span className="flex flex-col items-center">
                        <FaCircleUser className="text-3xl"/>
                        <p className="text-xs">Usuario</p>
                    </span>
                </div>
            </article>
            <article className="max-lg:hidden w-screen py-8 flex items-center justify-center space-x-10 bg-principal text-gray-600">
                {
                    rutas.map((ruta)=>(
                        <div 
                            className={`hover:cursor-pointer flex items-center ${selected == ruta.id && "text-white font-bold"} `} 
                            key={ruta.id}
                            onClick={()=>setSelected(ruta.id)}
                        >
                            {ruta.icon}
                            <p className="pl-1">{ruta.nombre}</p>
                        </div>
                    ))
                }
            </article>
            <article className="max-lg:visible lg:hidden py-8 flex flex-col bg-principal text-white" >
                <div onClick={()=>setCollapse(!collapse)} className="w-full items-center flex justify-center text-xl">
                    <span className="w-4/6 flex items-center justify-center">
                        {rutas[selected].icon}
                        <p className="pl-1">{rutas[selected].nombre}</p>
                    </span>
                    <GiHamburgerMenu className="w-2/6 text-2xl" />
                </div>
                {
                    collapse &&
                    <div className="flex flex-col items-center justify-center w-full mt-4">
                        {
                            rutas.map((ruta)=>(
                                <div 
                                    className={`hover:cursor-pointer flex items-center justify-center my-4  ${selected == ruta.id ? "text-white font-bold":"text-gray-600"} `} 
                                    key={ruta.id}
                                    onClick={()=>onClickSelected(ruta.id)}
                                >
                                    {ruta.icon}
                                    <p className="pl-2">{ruta.nombre}</p>
                                </div>
                            ))
                        }
                    </div>
                }
                
            </article>
        </nav>
    );
}

export default Navbar;