import Link from 'next/link'
import React from 'react'
import { PiChefHatBold } from 'react-icons/pi'
import { Button } from './ui/button'
import { MdMenuBook } from 'react-icons/md'

const Navbar = () => {
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
                <Link href="/menu" className="text-gray-300">
                  <MdMenuBook className="h-4 w-4 mr-2 text-yellow-500 font-bitter" />
                  Menu
                </Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Button asChild variant="outline" size="icon">
                <Link href="/menu">
                  <MdMenuBook className="h-4 w-4 text-yellow-500" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar