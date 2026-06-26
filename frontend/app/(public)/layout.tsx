import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

// import Navbar from "@/src/components/layout/navbar/Navbar";
// import Footer from "@/src/components/layout/footer/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <>
      <Navbar />
 
       <main>
        {children}
      </main>
      <Footer />
    </>
  );
}