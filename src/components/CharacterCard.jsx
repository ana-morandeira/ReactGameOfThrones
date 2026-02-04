const CharacterCard = ({ character }) => {
  return (
    <div className="group bg-got-iron/40 border border-got-gold/20 overflow-hidden flex flex-col transition-all duration-500 hover:border-got-gold hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] rounded-sm">
      {/* Imagen con filtro de desaturación que se activa al pasar el ratón */}
      <div className="relative overflow-hidden">
        <img 
          src={character.imageUrl} 
          alt={character.fullName} 
          className="w-full h-72 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        {/* Degradado inferior para que el texto se lea mejor */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-got-dark to-transparent opacity-90"></div>
      </div>
      
      {/* Info del personaje */}
      <div className="p-5 flex flex-col gap-1 relative bg-got-iron/10">
        <span className="text-[10px] font-bold text-got-gold uppercase tracking-[0.3em]">
          {character.family?.trim() ? character.family : "No House"}
        </span>
        <h2 className="text-2xl font-bold text-gray-100 tracking-tight">
          {character.fullName}
        </h2>
        <p className="text-sm italic text-gray-400 border-l-2 border-got-gold/40 pl-3 mt-2">
          "{character.title}"
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;