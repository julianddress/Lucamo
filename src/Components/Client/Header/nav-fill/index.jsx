import { Search } from "lucide-react";

const NavFill = () => {
    return (
        <div className="flex items-center justify-center rounded-md order-last col-span-full
                        md:order-none md:col-start-2 md:col-end-5
                        lg:col-start-4 lg:col-end-8 lg:mr-8"
        >
            <div className="hidden md:block">
                <select
                className="w-full h-10 text-center text-sm rounded-l-md bg-zinc-300 text-gray-800"
                aria-label="Filtrar por marca"
                >
                    <option>Todos</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Renault">Renault</option>
                </select>
            </div>
            <input
                className="h-10 w-full pl-2 text-base outline-2 outline-yellow-500 rounded-l md:rounded-l-none
                        text-gray-900 placeholder-zinc-400"
                type="text"
                name="input"
                placeholder="Buscar en Lucamo"
            />
            <button className="flex justify-center items-center h-10 w-12 rounded-r-md bg-cyan-600">
                <Search size={20} alt="Buscar" className="text-white" aria-label="Busca un producto por nombre, descripción o referencia" />
            </button>
        </div>
    );
};

export default NavFill;



