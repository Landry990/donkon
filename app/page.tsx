export default function Home() {
  return (
    <main className="gallery-ground flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="crystal-rule mb-10 h-px w-16" aria-hidden="true" />
        <h1 className="crystal-name font-serif text-5xl font-light tracking-[0.28em] sm:text-7xl md:text-8xl">
          DONKON
        </h1>
        <p className="mt-8 max-w-xl text-sm font-light tracking-[0.18em] text-[#b34e35] sm:text-base">
          Maison de couture africaine — Sur mesure depuis 2020
        </p>
      </div>
    </main>
  );
}
