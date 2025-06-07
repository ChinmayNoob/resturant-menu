'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';
import { dish_by_id } from '@/db/dish_by_id';
import { TMenuItem, TPriceOption, PriceNameType } from '@/types/dishes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DishDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [dish, setDish] = useState<TMenuItem | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (params.id) {
            const foundDish = dish_by_id.find(item => item.id === params.id);
            setDish(foundDish || null);
        }
    }, [params.id]);

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    if (!dish) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center z-50">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-2xl font-bold text-yellow-500 mb-4 font-bitter">Dish not found</h1>
                    <motion.button
                        onClick={() => router.push('/menu')}
                        className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bitter font-bold rounded-xl transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Menu
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.button
                        onClick={() => router.back()}
                        className="inline-flex items-center mb-6 md:mb-8 px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black font-bitter font-medium rounded-xl transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, x: -5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            animate={{ x: [0, -3, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                        </motion.div>
                        Back
                    </motion.button>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Image */}
                        <motion.div
                            className="aspect-square relative overflow-hidden rounded-xl bg-neutral-900 border border-gray-800"
                            variants={imageVariants}
                        >
                            {!imageLoaded && (
                                <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                                    <div className="w-12 h-12 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                            <Image
                                src={dish.imageUrl}
                                alt={dish.name}
                                fill
                                className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                priority
                                onLoad={() => setImageLoaded(true)}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            className="space-y-6 md:space-y-8"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                {dish.bestSeller && (
                                    <motion.div
                                        className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold font-bitter mb-4"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Star className="w-4 h-4 fill-current" />
                                        Best Seller
                                    </motion.div>
                                )}
                                <motion.h1
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-500 mb-4 font-bitter leading-tight"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    {dish.name}
                                </motion.h1>
                            </motion.div>

                            {/* Prices */}
                            <motion.div
                                className="space-y-3"
                                variants={itemVariants}
                            >
                                <h3 className="text-xl font-bold text-yellow-500 font-bitter">Price</h3>
                                <div className="space-y-2">
                                    {dish.prices.map(({ name, price }: TPriceOption, idx) => (
                                        <motion.div
                                            key={`${name}-${price}-${idx}`}
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                        >
                                            <span className="text-gray-300 font-medium font-bitter">
                                                {handlePriceName(name)}
                                            </span>
                                            <span className="text-yellow-500 font-bold text-lg font-bitter">
                                                ${price}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Ingredients */}
                            <motion.div
                                className="space-y-3"
                                variants={itemVariants}
                            >
                                <h3 className="text-xl font-bold text-yellow-500 font-bitter">Ingredients</h3>
                                <motion.p
                                    className="text-gray-300 leading-relaxed font-bitter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    {dish.ingredients}
                                </motion.p>
                            </motion.div>

                            {/* Description */}
                            {dish.description && (
                                <motion.div
                                    className="space-y-3"
                                    variants={itemVariants}
                                >
                                    <h3 className="text-xl font-bold text-yellow-500 font-bitter">Description</h3>
                                    <motion.p
                                        className="text-gray-300 leading-relaxed font-bitter"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    >
                                        {dish.description}
                                    </motion.p>
                                </motion.div>
                            )}

                            {/* Action Button */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-4"
                            >
                                <motion.button
                                    className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bitter font-bold text-lg rounded-xl transition-colors duration-300 border-2 border-yellow-500 hover:border-yellow-400"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => router.push('/menu')}
                                >
                                    Browse More Dishes
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
} 