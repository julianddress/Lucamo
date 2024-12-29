import searchLogo from "../../../assets/img/search.svg";

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center rounded-md
                        w-full order-last col-span-full
                        md:order-none md:col-start-2 md:col-end-5
                        lg:col-start-4 lg:col-end-8"
        >
            <div className="hidden md:block">
                <select
                className=" text-center text-sm w-full h-10 rounded-l-md
                            bg-zinc-300 text-gray-800"
                aria-label="Filtrar por marca"
                >
                    <option>Todos</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Renault">Renault</option>
                </select>
            </div>
            <input
                className="h-10 w-full pl-2 text-lg outline-none rounded-l md:rounded-l-none
                        text-gray-900 placeholder-zinc-400"
                type="text"
                name="input"
                placeholder="Buscar en Lucamo"
            />
            <button className="flex justify-center items-center h-10 w-12 rounded-r-md 
                            bg-cyan-600"
            >
                <img src={searchLogo} alt="Buscar" className="w-6" />
            </button>
        </div>
    );
};

export { SearchBar };
