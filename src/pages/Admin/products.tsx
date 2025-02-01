import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/Shared/UI/tabs"
import { ProductListSection } from "@/Sections/Admin/Products/ProductList";
import { FeaturedProductsSection } from "@/Sections/Admin/Products/FeaturedProducts";
import { CreateProductSection } from "@/Sections/Admin/Products/CreateProduct";
import { FormDataProvider } from "@/Context/FormDataContext.js";
import { AdminLayout } from "@/Layouts/AdminLayout"

export default function products() {
    return (

        <FormDataProvider>
            <AdminLayout>
                <Tabs defaultValue="products" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="products">Lista de productos</TabsTrigger>
                        <TabsTrigger value="featured">Productos destacados</TabsTrigger>
                        <TabsTrigger value="create">Crear un producto</TabsTrigger>
                    </TabsList>

                    <TabsContent value="products">
                        <ProductListSection />
                    </TabsContent>

                    <TabsContent value="featured">
                        <FeaturedProductsSection />
                    </TabsContent>

                    <TabsContent value="create">
                        <CreateProductSection />
                    </TabsContent>
                </Tabs>
            </AdminLayout>
        </FormDataProvider>

    );
}

