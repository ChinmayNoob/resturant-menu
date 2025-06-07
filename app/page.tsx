"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MdMenuBook } from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaClock, FaPhone } from "react-icons/fa6";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeInDelayed = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const wordAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1">
        <section className="text-white font-bitter">
          <div className="relative">
            <div className="relative h-[calc(100vh-10rem)]"></div>
            <Image
              src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="restaurant dish"
              fill
              className="object-cover brightness-50"
              priority
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" variants={fadeInUp} initial="hidden" animate="visible" exit="hidden" transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
              {/* Contact Info at Top */}
              <div className="absolute top-4 left-0 right-0 text-white font-bitter z-10">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="h-4 w-4" />
                        <span>Main St, Delicious City, Mumbai 9578, India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock className="h-4 w-4" />
                        <span>Daily: 8:00 am to 11:00 pm</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaPhone className="h-4 w-4" />
                        <span>+91 98260 00000</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaEnvelope className="h-4 w-4" />
                        <span>uraharakitchen@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Centered Hero Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 w-full max-w-4xl text-yellow-500">
                  <motion.h1 className="text-8xl font-bold mb-6 leading-tight" variants={wordAnimation} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}>
                    Where Every Bite Whispers a Tale
                  </motion.h1>
                  <Button asChild size="lg" className="text-lg font-bold font-bitter px-4 py-6 bg-yellow-500 text-black hover:bg-yellow-600">
                    <Link href="/menu">
                      <MdMenuBook className="h-5 w-5 mr-2 text-black" />
                      Urahara&apos;s Menu
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>


        </section>

      </main>

      <footer className="bg-black text-gray-300 py-6 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center font-bitter">
            <h3 className="text-lg font-semibold mb-2">Urahara Kitchen</h3>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Urahara Kitchen. All rights reserved.
            </p>

          </div>
        </div>

      </footer>

    </div>
  )
}