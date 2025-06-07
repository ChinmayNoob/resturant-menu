'use client';

import { useEffect, useState } from 'react';
import { motion, animate } from 'motion/react';
import { Sidebar } from '@/components/Sidebar';
import { MenuDrawer } from '@/components/MenuDrawer';
import { DishCard } from '@/components/DishCard';

import { dishes } from '@/db/dishes';
import { TMenuSection } from '@/types/dishes';
import MenuNavbar from '@/components/MenuNavbar';
import Footer from '@/components/Footer';

export default function MenuPage() {
    const [menuSections, setMenuSections] = useState<TMenuSection[]>(dishes.sections);

    useEffect(() => {
        // Animate section descriptions on load
        const sections = document.querySelectorAll('.section-animation');
        sections.forEach((section, index) => {
            animate(
                section,
                { opacity: [0, 1], y: [20, 0] },
                { delay: index * 0.1, duration: 0.6 }
            );
        });
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
                        <MenuNavbar />

        <div className="flex-1 bg-black min-h-screen">
            <div className="relative">
                {/* Sidebar for desktop */}
                <Sidebar />

                {/* Mobile drawer */}
                <MenuDrawer />

                {/* Main content with responsive margins */}
                <div className="lg:ml-72 pb-20 lg:pb-12">
                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                        <div className="space-y-10 sm:space-y-12 md:space-y-16">
                            {menuSections?.map((section: TMenuSection, sectionIndex) => (
                                <section
                                    key={section.name}
                                    id={section.name.toLowerCase().replace(/\s+/g, '')}
                                    className="scroll-mt-20"
                                >
                                    <motion.div
                                        className="text-left mb-4 sm:mb-6 md:mb-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: sectionIndex * 0.1, duration: 0.5 }}
                                    >
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2 sm:mb-3 md:mb-4 font-bitter">
                                            {section.name}
                                        </h2>
                                        <div className="section-animation opacity-0">
                                            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl font-bitter leading-relaxed">
                                                {section.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: sectionIndex * 0.1 + 0.2,
                                            duration: 0.5,
                                            staggerChildren: 0.1
                                        }}
                                    >
                                        {section.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: itemIndex * 0.1,
                                                    duration: 0.5
                                                }}
                                            >
                                                <DishCard {...item} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}