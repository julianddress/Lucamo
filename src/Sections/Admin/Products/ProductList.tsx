import { Pencil, Trash2 } from 'lucide-react'
import { EditProduct } from './EditProduct.tsx'
import { Button } from '@/Components/Shared/UI/button'
import { Card, CardContent } from '@/Components/Shared/UI/Card'
import { LoadingAlert } from '@/Components/Shared/Alerts/LoadingAlert'
import { AlertsDialog } from '@/Components/Shared/Alert-Dialog/Alert-Dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Shared/UI/table"
import useForm from '@/Hooks/Admin/useForm'
import useProducts from '@/Hooks/Admin/useProducts'
import useEditProduct from '@/Hooks/Admin/useEditProduct'
import { useAlert } from '@/Context/AlertContext.jsx'
import { ErrorAlert } from '@/Components/Shared/Alerts/ErrorAlert.tsx'
import { SuccessAlert } from '@/Components/Shared/Alerts/SuccessAlert.tsx'

export function ProductListSection() {

    const [inventory, category, images] = useForm();
    const [products, loading, , , , , , refreshForm ] = useProducts();
    const { isEditing, startEditing, stopEditing, startDeleting, handleFormChange, handleCategoryChange, handleDelete } = useEditProduct()
    const { successMessage, successAlertVisible, errorAlertVisible, errorMessage  } = useAlert();

    return (
        <Card>
            <div className="fixed left-[70%] top-[5%] flex flex-col gap-2">
                {successAlertVisible && (
                    <SuccessAlert
                        title="Cargando !"
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
            </div>                                        
            <CardContent className="pt-6">
                {loading ? (
                    <LoadingAlert
                        title="Cargando los productos"
                        description={"Espere un momento por favor."}
                        className=""
                    />
                ) : (
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Referencia</TableHead>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead className="text-center">Categoria</TableHead>
                                    <TableHead className="text-center">Subcategoria</TableHead>
                                    <TableHead className="text-center">Inventario</TableHead>
                                    <TableHead className="text-center">Precio</TableHead>
                                    <TableHead className="text-center">Destacado</TableHead>
                                    <TableHead className="text-center">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product, index) => {

                                    const productInventory = inventory.find((inv) => inv.id_product === product.id)
                                    const productCategory = category.find((cat) => cat.id_product === product.id)

                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{product.reference}</TableCell>
                                            <TableCell className="w-[25%]">{product.name}</TableCell>
                                            <TableCell className="text-center">
                                                {productCategory?.category.toUpperCase() || 'N/A'}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {productCategory?.sub_category|| 'N/A'}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {productInventory?.quantity} uds.
                                            </TableCell>
                                            <TableCell className="text-center">
                                                $ {product.price}
                                            </TableCell>
                                            {product.featured ? 
                                                <TableCell className="text-center font-extrabold text-green-600">
                                                    SI
                                                </TableCell> 
                                            : 
                                                <TableCell className="text-center font-extrabold text-stone-400">
                                                    NO
                                                </TableCell>
                                            }
                                            <TableCell>
                                                <div className="place-content-center flex gap-2">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        onClick={() => startEditing(product, productInventory!, productCategory!)}
                                                        className="bg-amber-400 hover:bg-amber-500"
                                                    >
                                                        <Pencil className="h-4 w-4 text-white" />
                                                    </Button>
                                                    <AlertsDialog 
                                                        description={`Esto eliminará permanentemente el producto ( ${product.reference} ).`} 
                                                        onDelete={handleDelete} 
                                                    >
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="bg-red-400 hover:bg-red-500"
                                                            onClick={() => startDeleting(product)}
                                                        >
                                                            <Trash2 className="h-4 w-4 text-white" />
                                                        </Button>
                                                    </AlertsDialog>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>

                        <div className="block justify-self-end mt-4 gap-2">
                            <Button 
                                onClick={refreshForm} 
                                disabled={loading}
                                className=""
                            >
                                {loading ? "Cargando..." : "Refrescar"}
                            </Button>
                        </div>

                        {/* Modal de edición */}
                        {isEditing && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <EditProduct onClose={stopEditing} prod_images={images} onChange={handleFormChange} onSelect={handleCategoryChange} />
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
