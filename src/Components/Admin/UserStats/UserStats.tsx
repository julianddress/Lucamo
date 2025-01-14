import { Avatar, AvatarFallback, AvatarImage } from "@/Components/UI/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/UI/Card"
import { MessageCircle, Share2, Heart, UsersRound } from 'lucide-react'
import WomenIcon from "../../../assets/img/womenIcon.png"

export function UserStats() {
    return (
        <Card className="h-full shadow-custom2">
            <CardHeader className="pb-2 h-[50%] justify-center">
                <div className="flex flex-col items-center text-center gap-3 space-x-4">
                    <Avatar className="h-120 w-130 rounded-md">
                        <AvatarImage src={WomenIcon} />
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-xl">Natalia Andrea Rojas</CardTitle>
                        <p className="text-sm text-muted-foreground">Administrador</p>
                    </div>
                </div>
            </CardHeader>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">1'234.576.000 </span>
                    <span className="text-muted-foreground">Usuarios</span>
                </div>
                <CardContent className="h-[40%] flex items-center">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <UsersRound className="h-6 w-6 text-sky-600 fill-sky-600" />
                            <span className="ml-2">45 productos</span>
                        </div>
                        <div className="flex items-center">
                            <Share2 className="h-6 w-6 text-fuchsia-800" />
                            <span className="ml-2">245 Publicaciones</span>
                        </div>
                        <div className="flex items-center">
                            <MessageCircle className="h-6 w-6 text-lime-600 fill-lime-600" />
                            <span className="ml-2">1.2k Comentarios</span>
                        </div>
                        <div className="flex items-center">
                            <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                            <span className="ml-2">3.4k Likes</span>
                        </div>
                    </div>
                </CardContent>
        </Card>
    )
}

