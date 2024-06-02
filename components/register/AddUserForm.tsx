"use client";

import { createUser } from "@/actions/create-user-action";
import { UserSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddUserForm({ children }: { children: React.ReactNode; }) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = UserSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    try {
      const response = await createUser(result.data);
      if (response?.errors) {
        response.errors.forEach((issue) => {
          toast.error(issue.message);
        });
      } else {
        toast.success("Usuario Creado Correctamente");
        router.push("/auth/login");
      }
    } catch (error) {
      toast.error("Ocurrió un error al crear el usuario.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <form className="space-y-5" onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}>
          {children}
          <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full py-3 mt-4 uppercase font-bold cursor-pointer transition-all duration-300 rounded-lg"
            value="Registrar Usuario"
          />
        </form>
      </div>
    </div>
  );
}
