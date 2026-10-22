import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fcfcf9] flex flex-col font-serif text-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#fcfcf9]/90 backdrop-blur-sm z-50 flex justify-between items-center px-8 py-6 text-xs tracking-widest uppercase border-b border-[#e5e5e0]">
        <Link href="/" className="font-bold text-sm tracking-widest">DONKON</Link>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-[#b34e35] transition-colors duration-300">Accueil</Link>
          <Link href="/galerie" className="hover:text-[#b34e35] transition-colors duration-300">Galerie</Link>
          <Link href="/maison" className="hover:text-[#b34e35] transition-colors duration-300">La Maison</Link>
          <Link href="/contact" className="text-[#b34e35]">Contact</Link>
        </nav>
      </header>

      {/* Contenu */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-[1px] bg-[#b34e35] mx-auto mb-8"></div>
            <h1 className="text-3xl tracking-[0.15em] uppercase mb-4">Privilège d'accès</h1>
            <p className="text-xs text-gray-500 tracking-widest">
              Donkon n'est pas ouverte à tous. Laissez-nous vos coordonnées.
            </p>
          </div>

          <form className="space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Nom complet</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#b34e35] transition-colors" placeholder="Votre nom" />
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Adresse Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#b34e35] transition-colors" placeholder="votre@email.com" />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Ville / Pays</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#b34e35] transition-colors" placeholder="Ex: Dakar, Sénégal" />
            </div>

            <div className="pt-4 text-center">
              <button type="button" className="border border-[#b34e35] text-[#b34e35] px-10 py-3 text-xs tracking-widest uppercase hover:bg-[#b34e35] hover:text-[#fcfcf9] transition-all duration-300">
                Demander l'accès
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] text-gray-400 tracking-wider border-t border-[#e5e5e0]">
        <p className="mb-2">© 2026 DONKON. Tous droits réservés. Œuvres uniques. Ne pas divulguer.</p>
      </footer>
    </div>
  );
}