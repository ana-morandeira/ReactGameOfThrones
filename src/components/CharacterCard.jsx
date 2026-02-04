const CharacterCard = ({ character }) => {
  return (
    <div className="group relative bg-got-iron/30 border border-got-gold/20 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-got-gold hover:shadow-[0_0_25px_rgba(197,160,89,0.4)]">
      
      {/* Contenedor de Imagen */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={character.imageUrl} 
          alt={character.fullName} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Capa de degradado para que el nombre resalte */}
        <div className="absolute inset-0 bg-gradient-to-t from-got-dark via-transparent to-transparent opacity-90" />
      </div>
      
      {/* Información */}
      <div className="p-5 absolute bottom-0 w-full bg-got-dark/60 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-got-gold uppercase tracking-[0.3em] block mb-1">
          {character.family || "Unknown House"}
        </span>
        <h2 className="text-2xl font-got text-white leading-tight">
          {character.fullName}
        </h2>
        <p className="text-xs italic text-gray-400 mt-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          "{character.title}"
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;