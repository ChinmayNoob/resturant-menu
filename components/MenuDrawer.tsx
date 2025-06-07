'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuItems } from "./MenuItems";
import { Menu, X } from "lucide-react";

export function MenuDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const drawerVariants = {
        closed: { x: "100%" },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const overlayVariants = {
        closed: { opacity: 0 },
        open: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        closed: { scale: 1, rotate: 0 },
        open: {
            scale: 1.1,
            rotate: 90,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg flex items-center justify-center font-bitter font-bold transition-colors duration-300"
                    variants={buttonVariants}
                    animate={isOpen ? "open" : "closed"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Menu className="h-6 w-6" />
                </motion.button>
            </div>

            {/* Overlay and Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-neutral-900 transform z-50 lg:hidden border-l border-gray-800"
                            variants={drawerVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                                <motion.h2
                                    className="text-2xl font-extrabold text-yellow-500 font-bitter"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                    Menu
                                </motion.h2>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="h-5 w-5" />
                                </motion.button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <MenuItems isDrawerOpen={isOpen} setOpenDrawer={setIsOpen} />
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
} 