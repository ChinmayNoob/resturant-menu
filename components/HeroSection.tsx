"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa6'
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
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    return (
        <main className="flex-1">
            <section className="text-white font-bitter">
                <div className="relative">
                    <div className="relative h-[100vh] sm:h-[100vh] lg:h-[calc(100vh-10rem)]"></div>
                    <Image
                        src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="restaurant dish"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" variants={fadeInUp} initial="hidden" animate="visible" exit="hidden" transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
                        {/* Contact Info at Top */}
                        <div className="absolute top-2 sm:top-4 left-0 right-0 text-white font-bitter z-10">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className="flex flex-col lg:flex-row lg:justify-between space-y-2 sm:space-y-3 lg:space-y-0">
                                    <div className="space-y-1 sm:space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <FaMapMarkerAlt className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">Main St, Delicious City, Mumbai 9578, India</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <FaClock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">Daily: 8:00 am to 11:00 pm</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1 sm:space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <FaPhone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">+91 98260 00000</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <FaEnvelope className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm">uraharakitchen@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Centered Hero Text */}
                        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                            <div className="text-center w-full max-w-4xl text-yellow-500">
                                <motion.div
                                    variants={itemVariants}
                                    className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] xs:text-[11px] sm:text-sm font-medium font-dmsans mx-auto text-yellow-200 mb-3 sm:mb-4 lg:mb-6 border border-dashed border-yellow-500/30 hover:border-yellow-500/50 transition-colors duration-300"
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <span className="bg-yellow-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[9px] xs:text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit mx-auto sm:mx-0">
                                        Until 12/25
                                    </span>
                                    <span className="text-center sm:text-left text-[10px] xs:text-[11px] sm:text-sm mt-1 sm:mt-0 px-1 sm:px-2">
                                        Get 50% off your first order!
                                    </span>
                                </motion.div>
                                <motion.h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0" variants={wordAnimation} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}>
                                    Where Every Bite Whispers a Tale
                                </motion.h1>
                                <motion.div
                                    className="w-full sm:w-auto"
                                    whileHover={{
                                        scale: 1.02,
                                        transition: {
                                            duration: 0.2,
                                            ease: "easeOut"
                                        }
                                    }}
                                >
                                    <Link
                                        href="/menu"
                                        className="py-2.5 sm:py-3 px-4 sm:px-6 inline-flex items-center justify-center gap-2 bg-yellow-500 text-black font-bitter font-bold text-xs sm:text-sm rounded-xl max-w-xs sm:max-w-none mx-auto transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg"
                                    >
                                        <motion.div
                                            className="flex items-center gap-2"
                                            whileHover={{
                                                y: -1.8,
                                                transition: {
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                }
                                            }}
                                        >
                                            <MdMenuBook className="text-base sm:text-lg text-black" />
                                            <span className="whitespace-nowrap">Urahara&apos;s Menu</span>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default HeroSection