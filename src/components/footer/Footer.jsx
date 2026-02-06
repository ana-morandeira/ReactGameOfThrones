const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t-2 border-got-gold/40 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
        
        {/* Lado Izquierdo: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-got-gold text-sm uppercase tracking-[0.2em] font-bold mb-2">
            Proyecto API Game of Thrones
          </p>
          <p className="text-gray-400 text-base italic">
            © {currentYear} — Hecho con honor en los Siete Reinos
          </p>
        </div>

        {/* Centro: Símbolo con Glow */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-got-gold to-transparent shadow-[0_0_10px_#c5a059]"></div>
          <span className="text-got-gold text-3xl my-3 filter drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">⚔️</span>
          <div className="h-12 w-[2px] bg-gradient-to-t from-transparent via-got-gold to-transparent shadow-[0_0_10px_#c5a059]"></div>
        </div>

        {/* Lado Derecho: Créditos */}
        <div className="text-center md:text-right">
          <p className="text-got-gold text-sm uppercase tracking-[0.2em] font-bold mb-2">
            Datos de la Ciudadela
          </p>
          <a 
            href="https://thronesapi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-got-gold transition-all duration-300 text-base underline decoration-got-gold/30 underline-offset-4"
          >
            Powered by ThronesAPI
          </a>
        </div>

      </div>
      
      {/* Línea de cierre más visible */}
      <div className="mt-10 h-[3px] w-full bg-gradient-to-r from-transparent via-got-gold/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;