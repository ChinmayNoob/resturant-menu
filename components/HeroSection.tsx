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
                                <motion.div
                                    variants={itemVariants}
                                    className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full text-[11px] sm:text-sm font-medium font-dmsans mx-auto text-yellow-200 mb-4 sm:mb-6 sm:border-2 border-dashed border-yellow-500/30 hover:border-yellow-500/50 transition-colors duration-300"
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <span className="bg-yellow-600 text-white px-3 py-1.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit mx-auto sm:mx-0 sticky">
                                        Until 12/25
                                    </span>
                                    <span className="text-center sm:text-left text-sm mt-1 sm:mt-0 px-2">
                                        Get 50% off your first order!
                                    </span>
                                </motion.div>
                                <motion.h1 className="text-8xl font-bold mb-6 leading-tight" variants={wordAnimation} initial="initial" animate="animate" exit="exit" transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}>
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
                                        href=""
                                        target="_blank"
                                        className="py-3 px-6 inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-yellow-500 text-black font-bitter font-bold text-sm rounded-xl"
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
                                            <MdMenuBook className="text-lg text-black" />
                                            Urahara&apos;s Menu
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