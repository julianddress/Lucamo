import { AdminLayout } from "@/Layouts/AdminLayout"
import { UnderDevelopment } from "@/Components/Shared/Under-development/under-development"

export default function sales() {
    return (
        <AdminLayout>
            <UnderDevelopment message="Nuestras sección de ventas está en camino. Pronto podrás ver esta sección de manera más eficiente."/>
        </AdminLayout>
    )
}
