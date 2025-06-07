'use client';

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { menuOptions } from "@/lib/menuOptions";
import { Button } from "./ui/button";

interface MenuItemsProps {
    isDrawerOpen?: boolean;
    setOpenDrawer?: (open: boolean) => void;
}

export function MenuItems({ isDrawerOpen, setOpenDrawer }: MenuItemsProps) {
    const [currentSection, setCurrentSection] = useState(menuOptions[0].key);

    useEffect(() => {
        const handleScroll = () => {
            // Find all sections in the main layout
            const sections = document.querySelectorAll("section");

            // Determine the current section in view
            let newCurrentSection = null;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 300 && rect.bottom >= 10) {
                    // Adjust threshold as needed
                    newCurrentSection = section.id;
                }
            });

            // Update the current section in state
            if (newCurrentSection) {
                setCurrentSection(newCurrentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuClick = (key: string, href: string) => {
        if (isDrawerOpen && setOpenDrawer) {
            setOpenDrawer(false);
        }
        setCurrentSection(key);

        // Smooth scroll to section with wave effect
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            targetElement.classList.add('scroll-wave-animation');
            setTimeout(() => {
                targetElement.classList.remove('scroll-wave-animation');
            }, 1000);
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.02,
            transition: { duration: 0.2, ease: 'easeInOut' }
        },
        tap: { scale: 0.98 },
    };

    const iconVariants = {
        hover: {
            rotate: [0, -8, 8, -8, 0],
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        }
    };

    return (
        <>
            <style jsx global>{`
                .scroll-wave-animation {
                    animation: scrollWave 1s ease-out;
                }
                
                @keyframes scrollWave {
                    0% {
                        transform: translateX(-20px);
                        opacity: 0.7;
                    }
                    25% {
                        transform: translateX(10px);
                        opacity: 0.9;
                    }
                    50% {
                        transform: translateX(-5px);
                        opacity: 1;
                    }
                    75% {
                        transform: translateX(2px);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>

            <motion.div
                className="space-y-1 pt-2 px-4 pb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {menuOptions.map((option) => {
                    const IconComponent = option.icon;
                    const isActive = currentSection === option.key;

                    return (
                        <motion.div
                            key={option.key}

                            variants={itemVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <motion.div variants={buttonVariants}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start text-left h-auto py-3 px-4 text-white hover:bg-yellow-500/10 hover:text-yellow-500 transition-all duration-300",
                                        isActive && "bg-yellow-500 text-black hover:bg-yellow-500 hover:text-black"
                                    )}
                                    onClick={() => handleMenuClick(option.key, option.href)}
                                >
                                    <div className="flex items-center space-x-3 w-full">
                                        <motion.div
                                            variants={iconVariants}
                                            className="flex-shrink-0"
                                        >
                                            <IconComponent size={32} />
                                        </motion.div>
                                        <motion.span
                                            className="font-medium font-bitter"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{
                                                opacity: 1,
                                                x: 3,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {option.label}
                                        </motion.span>
                                    </div>
                                </Button>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
} 