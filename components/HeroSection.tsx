"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { Button } from './ui/button'
import Link from 'next/link'
import { MdMenuBook } from 'react-icons/md'

const HeroSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const wordAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }
    return (
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
    )
}

export default HeroSection