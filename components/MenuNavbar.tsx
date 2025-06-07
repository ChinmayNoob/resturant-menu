import Link from 'next/link'
import React from 'react'
import { PiChefHatBold } from 'react-icons/pi'
import { Button } from './ui/button'
import { IoHome } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'

const MenuNavbar = () => {
    return (
        <header className="bg-black shadow-sm border-b sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <PiChefHatBold className="h-6 w-6 text-yellow-500" />
                        <h1 className="text-2xl font-bold text-gray-300 font-bitter">
                            Urahara Kitchen
                        </h1>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Button asChild variant="default">
                            <Link href="/" className="text-gray-300">
                                <IoHome className="h-4 w-4 mr-2 text-yellow-500 font-bitter" />
                                Home
                            </Link>
                        </Button>
                        <Button asChild className="bg-black border border-black text-white hover:bg-gray-900">
                            <Link href="https://github.com/chinmaynoob" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="md:hidden flex items-center space-x-2">
                        <Button asChild variant="outline" size="icon" className='bg-black border border-yellow-500/30 hover:border-yellow-500'>
                            <Link href="/">
                                <IoHome className="h-4 w-4 text-yellow-500" />
                            </Link>
                        </Button>
                        <Button asChild size="icon" className='bg-black border border-black text-white hover:bg-gray-900'>
                            <Link href="https://github.com/chinmaynoob" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MenuNavbar