import { useAlert } from "@/Context/AlertContext";
import { Header, Footer } from "../Components/index";
import { ReactNode } from "react";
import { LoadingAlert } from "@/Components/Shared/Alerts/LoadingAlert";
import { SuccessAlert } from "@/Components/Shared/Alerts/SuccessAlert";
import { ErrorAlert } from "@/Components/Shared/Alerts/ErrorAlert";
import { InfoAlert } from "@/Components/Shared/Alerts/InfoAlert";

interface ClientLayoutProps {
    children: ReactNode
}

const ClientLayout = ({children}: ClientLayoutProps) =>{

    const { successMessage, errorMessage, loadingMessage, infoMessage, loadingAlertVisible, successAlertVisible, errorAlertVisible, infoAlertVisible  } = useAlert();
    
    return  <>    
            <div className="flex flex-col min-h-screen">
                <Header/>
                    <div className="fixed right-[10%] top-[5%] flex flex-col gap-2 z-50">
                        {loadingAlertVisible && (
                            <LoadingAlert
                                title="Cargando !"
                                description={loadingMessage}
                                className=""
                            />
                        )}
                        {successAlertVisible && (
                            <SuccessAlert
                                title="Estupendo!"
                                description={successMessage }
                                className=""
                            />
                        )}
                        {errorAlertVisible && (
                            <ErrorAlert
                                title="Ocurrió un error!"
                                description={errorMessage}
                                className=""
                            />
                        )}
                        {infoAlertVisible && (
                            <InfoAlert
                                title="Info Alerta!"
                                description={infoMessage}
                                className=""
                            />
                        )}
                    </div>
                    <main className="flex-1">{children}</main>
                <Footer/>
            </div>

            </>;
}

export {ClientLayout};