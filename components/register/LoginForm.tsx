
import Image from "next/image";

export default function LoginForm() {
  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <Image
          src="/logoGP.jpg"
          alt="Logo"
          width={128}
          height={128}
          className="rounded-full border-4 border-yellow-300 shadow-md"
        />
      </div>
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-700">Login</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 mb-2 font-semibold">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 mb-2 font-semibold">
          Contraseña:
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <div className="mb-6">
        
      </div>
    </>
  );
}
