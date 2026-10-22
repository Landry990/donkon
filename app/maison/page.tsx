import Link from "next/link";

export default function LaMaison() {
  return (
    <div className="min-h-screen bg-[#fcfcf9] flex flex-col font-serif text-[#1a1a1a]">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 text-xs tracking-widest uppercase border-b border-[#e5e5e0]">
        <Link href="/" className="font-bold text-sm tracking-widest">
          DONKON
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-[#b34e35] transition-colors duration-300">Accueil</Link>
          <Link href="/galerie" className="hover:text-[#b34e35] transition-colors duration-300">Galerie</Link>
          <Link href="/maison" className="text-[#b34e35]">La Maison</Link>
          <Link href="/contact" className="hover:text-[#b34e35] transition-colors duration-300">Contact</Link>
        </nav>
      </header>

      {/* Contenu */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="w-12 h-[1px] bg-[#b34e35] mx-auto mb-10"></div>
          
          <h1 className="text-4xl md:text-5xl tracking-[0.15em] mb-12 uppercase">
            Le Manifeste
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              DONKON n'est pas une marque de vêtements. C'est une maison de couture dédiée à l'excellence africaine.
            </p>
            <p>
              Nous croyons que le vrai luxe ne se crie pas. Il se ressent. C'est pourquoi chaque pièce que nous créons est unique, coupée sur mesure pour une seule personne, et exposée une seule fois dans nos galeries.
            </p>
            <p>
              Nos tissus racontent une histoire. La latérite de nos terres, la pureté du cristal, la richesse de nos traditions. Nous les sublimons avec une exigence absolue.
            </p>
            <p className="italic text-[#b34e35]">
              "L'élégance suprême est de passer inaperçu aux yeux de ceux qui ne savent pas regarder."
            </p>
          </div>

          <div className="w-12 h-[1px] bg-[#b34e35] mx-auto mt-16"></div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] text-gray-400 tracking-wider border-t border-[#e5e5e0]">
        <p className="mb-2">© 2026 DONKON. Tous droits réservés. Œuvres uniques. Ne pas divulguer.</p>
        <div className="flex justify-center gap-4">
          <span className="hover:text-[#b34e35] cursor-pointer transition-colors">Mentions légales</span>
          <span className="hover:text-[#b34e35] cursor-pointer transition-colors">Instagram</span>
        </div>
      </footer>

    </div>
  );
}