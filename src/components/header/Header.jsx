const Header = () => {
  return (
    <header className="relative w-full py-16 md:py-24 bg-got-dark overflow-hidden border-b border-got-gold/20">
      {/* Efecto de iluminación de fondo (Glow central) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.12)_0%,_transparent_75%)] pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-6">
        {/* Subtítulo decorativo */}
        <span className="text-got-gold/40 text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4 block animate-pulse">
          Archivos Oficiales de la Ciudadela
        </span>
        
        {/* Título Principal con sombra profunda */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-[0.25em] uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          Game of <span className="text-got-gold">Thrones</span>
        </h1>
        
        {/* Divisor heráldico */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-got-gold/60 shadow-[0_0_8px_#c5a059]"></div>
          <span className="text-got-gold text-2xl md:text-3xl filter drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]">
            ⚔️
          </span>
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-got-gold/60 shadow-[0_0_8px_#c5a059]"></div>
        </div>

        {/* Frase de ambientación */}
        <p className="mt-8 text-gray-400 font-serif italic text-sm md:text-lg tracking-wide opacity-80">
          "El invierno se acerca, pero el conocimiento perdura."
        </p>
      </div>
    </header>
  );
};

export default Header;