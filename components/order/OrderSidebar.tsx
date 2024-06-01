import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'
import Logo from '../ui/Logo'
import Link from 'next/link'
import Image from 'next/image'

async function getCategories(){
  return await prisma.category.findMany() 
}

export default async function OrderSidebar() {

  const categories = await getCategories()

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
        
        <nav className='mt-10'>
          {categories.map(category => (
            <CategoryIcon 
              key={category.id}
              category={category}
            />
          ))}

          <Link 
            className="flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b text-xl font-bold"
            href="/orders" 
            target="_blank"
            rel="noopener noreferrer" 
          >
            <Image
              src="/pedido_listo.png" 
              alt="Pedidos Listos"
              width={60} 
              height={60} 
            />
            Pedidos Listos
          </Link>
        </nav>
    </aside>
  )
}
