import Footer from "@/components/Footer";
import MenuNavbar from "@/components/MenuNavbar";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <MenuNavbar />
            {children}
            <Footer />
        </div>
    )
}