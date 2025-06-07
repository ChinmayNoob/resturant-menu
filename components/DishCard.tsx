'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { TMenuItem, TPriceOption, PriceNameType } from '@/types/dishes';

export function DishCard({
    id,
    name,
    ingredients,
    prices,
    imageUrl,
    bestSeller,
}: TMenuItem) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handlePriceName = (name: string) => {
        switch (name) {
            case PriceNameType.STANDARD:
                return '';
            case PriceNameType.TWELVEOZ:
                return '12Oz: ';
            case PriceNameType.SIXTEENOZ:
                return '16Oz: ';
            case PriceNameType.SMALL:
                return 'Small: ';
            case PriceNameType.MEDIUM:
                return 'Medium: ';
            case PriceNameType.SINGLE:
                return 'Single: ';
            case PriceNameType.DOUBLE:
                return 'Double: ';
            default:
                return `${name.charAt(0).toUpperCase() + name.slice(1)}: `;
        }
    };

    return (
        <motion.div
            className="group relative overflow-hidden bg-neutral-900 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 w-full h-[420px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                }
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <motion.div
                className="h-48 relative overflow-hidden rounded-t-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {bestSeller && (
                    <motion.div
                        className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold font-bitter flex items-center gap-1"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                type: "spring",
                                stiffness: 500
                            }
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true }}
                    >
                        <Star className="w-3 h-3 fill-current" />
                        Best Seller
                    </motion.div>
                )}
            </motion.div>

            <div className="p-5 h-[228px] flex flex-col justify-between">
                <div className="space-y-3">
                    <motion.h3
                        className="text-lg font-bold text-yellow-500 line-clamp-2 font-bitter group-hover:text-yellow-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 0.5 }
                        }}
                        whileHover={{
                            scale: 1.03,
                            x: 5,
                            transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true }}
                    >
                        {name}
                    </motion.h3>

                    <motion.div
                        className="flex flex-row flex-wrap gap-x-4 gap-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.3, duration: 0.5 }
                        }}
                        viewport={{ once: true }}
                    >
                        {prices.map(({ name: priceName, price }: TPriceOption, idx) => (
                            <motion.p
                                key={`${priceName}-${price}-${idx}`}
                                className="text-sm font-bitter"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: 0.4 + idx * 0.1, duration: 0.3 }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                viewport={{ once: true }}
                            >
                                <span className="font-medium text-gray-300">
                                    {handlePriceName(priceName)}
                                </span>
                                <span className="text-yellow-500 font-bold">${price}</span>
                            </motion.p>
                        ))}
                    </motion.div>

                    <motion.div
                        className="h-16 overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.5 }
                        }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-gray-400 font-bitter leading-relaxed line-clamp-3">
                            {ingredients}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="flex justify-end mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.6, duration: 0.5 }
                    }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            href={`/menu/${id}`}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black transition-all duration-300 group/button border border-yellow-500/20 hover:border-yellow-500"
                        >
                            <motion.div
                                animate={{ x: [0, 3, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{
                                    x: [0, 5, 0],
                                    transition: {
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }
                                }}
                            >
                                <ArrowRight className="h-4 w-4" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced hover effect border glow */}
            <motion.div
                className="absolute inset-0 rounded-xl border-2 border-yellow-500/0 pointer-events-none"
                whileHover={{
                    borderColor: "rgba(234, 179, 8, 0.4)",
                    boxShadow: "0 0 20px rgba(234, 179, 8, 0.2)",
                    transition: { duration: 0.3 }
                }}
            />
        </motion.div>
    );
} 