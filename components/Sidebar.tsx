'use client';

import { MenuItems } from "./MenuItems";
import { Card } from "./ui/card";

export function Sidebar() {
    return (
        <aside className="hidden lg:block lg:w-72 lg:fixed lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto">
            <Card className="mx-4 mt-4 bg-neutral-900 border-0">
                <div className="p-2 pb-1">
                    <h2 className="text-3xl font-extrabold text-yellow-500 text-center font-bitter">
                        Menu
                    </h2>
                </div>
                <MenuItems />
            </Card>
        </aside>
    );
} 