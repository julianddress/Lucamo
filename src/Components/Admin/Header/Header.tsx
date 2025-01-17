import { Input } from "../../Shared/UI/input";
import { Button } from "../../Shared/UI/button";
import { Search } from 'lucide-react'

interface HeaderProps {
    title?: string; 
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="flex h-[60px] items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-x-4">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="relative shadow-custom3 rounded-xl border-2 border-purple-400 hover:border-solid">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar en lucamo" className="w-[30rem] pl-8 rounded-xl" />
                </div>
            </div>
            <Button variant="outline" size="sm">
                Mi Cuenta
            </Button>
        </header>
    );
};

export default Header;
