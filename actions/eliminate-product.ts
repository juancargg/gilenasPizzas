"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function deleteProduct(id: number | any) {
    try {
        await prisma.product.delete({
            where: {
                id
            }
        })
        
        revalidatePath('/admin/products')
    } catch (error) {
        return {
            errors: [{ message: 'Error deleting the product', details: error }]
        }
    }
}
