import LucamoLogo from "@/assets/img/logo.svg";

const Logo = () => {
    return (
                <div className="flex items-center">
                    <a href="/">
                        <img
                            src={LucamoLogo}
                            alt="Lucamo Logo"
                            className="w-[50%]"
                        />
                    </a>
                </div>
    )
}

export default Logo;
