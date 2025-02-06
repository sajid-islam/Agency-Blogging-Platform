import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
    return (
        <div className="max-w-6xl mx-auto px-5">
            <nav>
                <Navbar />
            </nav>
            <div className="min-h-[80vh]">{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
