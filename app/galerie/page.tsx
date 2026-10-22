import Link from "next/link";

export default function Galerie() {
  // Fausses données pour tester le design
  const pieces = [
    {
      id: 1,
      nom: "Boubou Latérite",
      tissu: "Bazin riche brodé main",
      statut: "Exposé à Dakar",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      nom: "Ensemble Cristal",
      tissu: "Soie sauvage et fils d'argent",
      statut: "Exposé à Abidjan",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      nom: "Robe Donkon",
      tissu: "Coton bio et broderie ocre",
      statut: "Exposé à Paris",
      image: "https://images.unsplash.com/photo-1550614000-4b95d868e3f2?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcf9] flex flex-col font-serif text-[#1a1a1a]">
      
      {/* Header identique à l'accueil */}
      <header className="flex justify-between items-center px-8 py-6 text-xs tracking-widest uppercase border-b border-[#e5e5e0]">
        <Link href="/" className="font-bold text-sm tracking-widest">
          DONKON
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-[#b34e35] transition-colors duration-300">Accueil</Link>
          <Link href="/galerie" className="text-[#b34e35]">Galerie</Link>
          <Link href="/maison" className="hover:text-[#b34e35] transition-colors duration-300">La Maison</Link>
          <Link href="/contact" className="hover:text-[#b34e35] transition-colors duration-300">Contact</Link>
        </nav>
      </header>

      {/* Contenu de la galerie */}
      <main className="flex-grow px-8 py-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl tracking-[0.2em] mb-4">LA COLLECTION</h1>
          <p className="text-sm text-gray-500 tracking-widest">
            Chaque pièce est unique. Exposée une seule fois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pieces.map((piece) => (
            <div key={piece.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4] bg-gray-100">
                <img 
                  src={piece.image} 
                  alt={piece.nom} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-[#b34e35] tracking-widest uppercase mb-2">{piece.statut}</p>
                <h2 className="text-lg tracking-wider mb-1">{piece.nom}</h2>
                <p className="text-xs text-gray-500 italic">{piece.tissu}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer identique */}
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