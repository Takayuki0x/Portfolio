import { Navbar } from "../components/navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
        <p className="text-center text-gray-500 pt-3">
          Last updated: December 3, 2024
        </p>
      </main>
      <footer className="w-full flex items-center justify-center pb-3">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Takayuki0x
        </p>
      </footer>
    </div>
  );
}
