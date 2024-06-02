"use client"

import { loginAction } from "@/actions/login-action"
import { UserSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function Signin({children}: {children: React.ReactNode}) {

    const router = useRouter()

    const handleSubmit = async(formData: FormData)=>{
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        const result = UserSchema.safeParse(data)

        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }

        const response = await loginAction(result.data)
        if(response?.errors){
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
        }

        toast.success('Login Hecho Correctamente')

}
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <form 
            className="space-y-5"
            action={handleSubmit}
        >
            {children}

            <input
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase 
                    font-bold cursor-pointer"
                value={'Entrar'}
            />
            
        </form>
        
    </div>
  )
}
