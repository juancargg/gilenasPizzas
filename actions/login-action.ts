"use server"

import { prisma } from "@/src/lib/prisma"
import { UserSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"
import { toast } from "react-toastify"

export async function loginAction(data: unknown) {
    const result = UserSchema.safeParse(data)

    if(!result.success){
        return {
            errors: result.error.issues
        }
    }
    
    const user = await prisma.user.findUnique({
        where: {
            email: result.data?.email,
            password: result.data?.password
        }
    })

    if(user?.role == "USER"){
        revalidatePath('/order/cafe')
    }else if(user?.role == "ADMIN"){
        revalidatePath('/admin/orders')
    }else{
        toast.error('Credenciales incorrectas')
    }

}
