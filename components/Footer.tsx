import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer