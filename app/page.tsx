import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcf9] flex flex-col font-serif text-[#1a1a1a]">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#fcfcf9]/90 backdrop-blur-sm z-50 flex justify-between items-center px-8 py-6 text-xs tracking-widest uppercase border-b border-[#e5e5e0]">
        <Link href="/" className="font-bold text-sm tracking-widest">
          DONKON
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-[#b34e35] transition-colors duration-300">Accueil</Link>
          <Link href="/galerie" className="hover:text-[#b34e35] transition-colors duration-300">Galerie</Link>
          <Link href="/maison" className="hover:text-[#b34e35] transition-colors duration-300">La Maison</Link>
          <Link href="/contact" className="hover:text-[#b34e35] transition-colors duration-300">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-[1px] bg-[#b34e35] mb-8"></div>
        <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] mb-6">
          DONKON
        </h1>
        <p className="text-sm md:text-base text-gray-500 tracking-widest mb-12">
          Maison de couture africaine — Sur mesure depuis 2020
        </p>
        <Link 
          href="/galerie" 
          className="border border-[#b34e35] text-[#b34e35] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#b34e35] hover:text-[#fcfcf9] transition-all duration-300"
        >
          Découvrir la collection
        </Link>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] text-gray-400 tracking-wider">
        <p className="mb-2">© 2026 DONKON. Tous droits réservés. Œuvres uniques. Ne pas divulguer.</p>
        <div className="flex justify-center gap-4">
          <span className="hover:text-[#b34e35] cursor-pointer transition-colors">Mentions légales</span>
          <span className="hover:text-[#b34e35] cursor-pointer transition-colors">Instagram</span>
        </div>
      </footer>

    </div>
  );
}