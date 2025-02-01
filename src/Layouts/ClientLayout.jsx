import { Header, Footer } from "../Components/index";

const ClientLayout = ({children}) =>{
    return  <>    
                <Header/>
                    <main>{children}</main>
                <Footer/>

            </>;
}

export {ClientLayout};