import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/Shared/UI/tabs";
import { FormDataProvider } from "@/Context/FormDataContext";
import { AdminLayout } from "@/Layouts/AdminLayout";
import { CarouselList } from "@/Sections/Admin/Carousel/CarouselList";
import { CreateCarousel } from "@/Sections/Admin/Carousel/CreateCarousel";

export default function Carousel() {
    return (

        <FormDataProvider>

            <AdminLayout>
                <Tabs defaultValue="actions" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="actions">Modificar las imagenes del carrusel</TabsTrigger>
                        <TabsTrigger value="create">Insertar imagenes al carrusel</TabsTrigger>
                    </TabsList>

                    <TabsContent value="actions">
                        <CarouselList />
                    </TabsContent>

                    <TabsContent value="create">
                        <CreateCarousel />
                    </TabsContent>
                </Tabs>
            </AdminLayout>
            
        </FormDataProvider>
    )
}