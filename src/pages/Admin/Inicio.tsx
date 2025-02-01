import { CardSection } from "@/Sections/Admin/General/CardSection"
import { UserStats } from "@/Components/Admin/UserStats/UserStats"
import { GraphSection } from "@/Sections/Admin/General/GraphSection"
import { AdminLayout } from "@/Layouts/AdminLayout"

export default function Inicio() {

    return (
        
        <AdminLayout>
            <div className="grid grid-cols-12 gap-6">

                {/* Columna izquierda */}
                <div className="col-span-9 space-y-6">
                    <CardSection />
                    <GraphSection />
                </div>

                {/* Columna derecha */}
                <div className="col-span-3">
                    <UserStats />
                </div>
            </div>
        </AdminLayout>

    )
}
