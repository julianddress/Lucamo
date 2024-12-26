import { Header, Footer } from "../Components/index";

const MainLayout = ({children}) =>{
    return  <>    
                <Header/>
                    <main>{children}</main>
                <Footer/>

            </>;
}

export {MainLayout};