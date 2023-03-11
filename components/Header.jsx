import React from 'react'
import Link from 'next/link'

const categories = [
    {name:'Praktikum',slug:"praktikum"},
    {name:'Projects',slug:"projects"}
]
const Header = () => {
  return (
    <div className='container mx-auto mb-8 px-10'>
        <div className='border-b w-full inline-block border-blue-500 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Blog CMS
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map(category=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle cursor-pointer text-white ml-4 font-semibold'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header