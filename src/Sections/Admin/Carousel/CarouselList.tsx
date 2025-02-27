import { ErrorAlert } from "@/Components/Shared/Alerts/ErrorAlert";
import { ExternalLink, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/Components/Shared/UI/button'
import { AlertsDialog } from '@/Components/Shared/Alert-Dialog/Alert-Dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Shared/UI/table"
import { LoadingAlert } from "@/Components/Shared/Alerts/LoadingAlert";
import { SuccessAlert } from "@/Components/Shared/Alerts/SuccessAlert";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { useAlert } from "@/Context/AlertContext";
import useCarousel from "@/Hooks/Admin/useCarousel";
import useEditCarousel from "@/Hooks/Admin/useEditCarousel";
import { EditCarousel } from "./EditCarousel";

export function CarouselList() {

    const [carousel, loading, reloadCarousel, , , ] = useCarousel();
    const { isEditing, startDeleting, stopEditing, handleInputChange, handleDelete } = useEditCarousel();
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
                                    <TableHead className="text-center">Imagen</TableHead>
                                    <TableHead className="text-center">Link</TableHead>
                                    <TableHead className="text-center">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {carousel.map((item, index) => {

                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                <div className="w-full">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.image} 
                                                        className="w-full"
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="max-w-[400px]">
                                                <div className="flex items-center space-x-2">
                                                    <span className="truncate">{item.link}</span>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                                                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                                                    </a>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="place-content-center flex gap-2">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        // onClick={() => startEditing(item)}
                                                        className="bg-amber-400 hover:bg-amber-500 cursor-not-allowed"
                                                    >
                                                        <Pencil className="h-4 w-4 text-white" />
                                                    </Button>
                                                    <AlertsDialog 
                                                        description={`Esto eliminará permanentemente el link y la imagen de la base de datos.`} 
                                                        onDelete={handleDelete} 
                                                    >
                                                        <Button
                                                            size="icon"
                                                            variant="ghost"
                                                            className="bg-red-400 hover:bg-red-500"
                                                            onClick={() => startDeleting(item)}
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
                                onClick={reloadCarousel}
                                disabled={loading}
                                className=""
                            >
                                {loading ? "Cargando..." : "Refrescar"}
                            </Button>
                        </div>

                        {/* Modal de edición */}
                        {isEditing && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <EditCarousel onClose={stopEditing} carousel={carousel} onChange={handleInputChange}/>
                            </div>
                        )}
                    </div>
                )}

            </CardContent>
        </Card>
    )
}