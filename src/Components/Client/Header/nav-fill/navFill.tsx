import { Search } from "lucide-react";

const NavFill = () => {
    return (
        <div className="flex items-center justify-center rounded-md order-last col-span-full
                        md:order-none md:w-[55%] lg:w-[60%]"
        >
            <div className="hidden md:block">
                <select
                    className="h-8 text-center text-xs rounded-l-sm bg-zinc-300 text-gray-600"
                    aria-label="Filtrar por marca"
                >
                    <option value="" className="text-black">Todos</option>
                    <option value="" className="text-black">Exploradoras</option>
                    <option value="" className="text-black">Barras</option>
                    <option value="" className="text-black">Bombillos</option>
                    <option value="" className="text-black">Licuadoras</option>
                    <option value="" className="text-black">Farolas</option>
                    <option value="" className="text-black">Industrial</option>
                </select>
            </div>
            <input
                className="h-8 w-full pl-2 text-sm outline-2 outline-yellow-500 rounded-l md:rounded-l-none
                        text-gray-900 placeholder-zinc-400"
                type="text"
                name="input"
                placeholder="Buscar en Lucamo"
            />
            <button className="flex justify-center items-center h-8 w-12 rounded-r-sm bg-cyan-600">
                <Search size={20} className="text-white" aria-label="Busca un producto por nombre, descripción o referencia" />
            </button>
        </div>
    );
};

export default NavFill;



