import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Shared/UI/table";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { Checkbox } from "@/Components/Shared/UI/checkbox";
import { Button } from "@/Components/Shared/UI/button";
import { useAlert } from "@/Context/AlertContext";
import useProducts from "@/Hooks/Admin/useProducts";
import { SuccessAlert } from "@/Components/Shared/Alerts/SuccessAlert";
import { ErrorAlert } from "@/Components/Shared/Alerts/ErrorAlert";
import { LoadingAlert } from "@/Components/Shared/Alerts/LoadingAlert";
import { InfoAlert } from "@/Components/Shared/Alerts/InfoAlert";

export function FeaturedProductsSection() {

    const [, loading , , reloadProducts, sortedProducts, toggleFeatured, updateFeatureColumn] = useProducts();
    const { successMessage, showInfoAlert, showLoadingAlert, errorMessage, infoMessage, showSuccessAlert, loadingMessage, infoAlertVisible, showErrorAlert, loadingAlertVisible, successAlertVisible, errorAlertVisible  } = useAlert();

    const handleSave = async () => {

        showLoadingAlert("Guardando cambios");
        
        try {
            await updateFeatureColumn();
            showSuccessAlert("Los cambios han sido guardados.");
            showInfoAlert("No olvides agregar una promoción");
        } catch (error) {
            showErrorAlert("Error al guardar los cambios.", error);
        }
    };

    return (
        <Card>
            <div className="fixed left-[70%] top-[5%] flex flex-col gap-2">
                {loadingAlertVisible && (
                        <LoadingAlert
                            title="Cargando !"
                            description={loadingMessage}
                            className=""
                        />
                    )}
                {successAlertVisible && (
                        <SuccessAlert
                            title="Success!"
                            description={successMessage}
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
                            title="Info Alert!"
                            description={infoMessage}
                            className=""
                        />
                )}
            </div>
            <CardContent className="pt-6">
                {loading ? (
                    <LoadingAlert
                        title="Cargando los productos ..."
                        description={'Espere por favor'}
                        className=""
                    />
                ) : (
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center">Destacado</TableHead>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Referencia</TableHead>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Precio</TableHead>
                                    <TableHead>Descuento</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedProducts.map((product, index) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="text-center pl-0">
                                            <Checkbox
                                                checked={product.featured}
                                                className=" bg-violet-100 hover:bg-violet-500"
                                                onCheckedChange={() => toggleFeatured(product.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{product.reference}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{`$ ${product.price}`}</TableCell>
                                        <TableCell>{`${product.discount}`}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="block justify-self-end mt-4 gap-2">
                            <Button 
                                onClick={reloadProducts} 
                                disabled={loading}
                                className=""
                            >
                                {loading ? "Cargando..." : "Refrescar"}
                            </Button>
                            <Button 
                                onClick={handleSave} 
                                disabled={loading}
                                className="ml-4 bg-green-500"
                            >
                                {loading ? "Cargando..." : "Guardar"}
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
