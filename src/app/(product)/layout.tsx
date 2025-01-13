import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-3 flex flex-col min-h-screen dark:bg-[#1F1F1F]">
      <Header />
      <div className="flex-1 flex">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
