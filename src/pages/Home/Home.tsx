import { Link } from "react-router-dom";
import { menus } from "../../util/menuJson";

function Home() {
    return (
        <section className="max-lg:grid-cols-1 w-screen grid grid-cols-2 justify-items-center items-center py-36 gap-14" >
            {
                menus.map((menu)=>(
                    <Link to={menu.url}
                        className="max-lg:h-28 hover:cursor-pointer  hover:scale-105 transition-transform flex justify-center items-center w-4/6 h-44 rounded-md bg-cover bg-center" 
                        style={{backgroundImage: `url(${menu.imagen})`}}
                    >
                        <h1 
                            className="max-lg:text-center max-lg:text-2xl font-black text-4xl text-white"
                        >
                            {menu.nombre}
                        </h1>
                    </Link>
                ))
            }
        </section>
    );
}

export default Home;