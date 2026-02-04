const CharacterCard = ({ character }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          className="w-full h-72 object-cover" 
          src={character.imageUrl} 
          alt={character.fullName} 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">
            {character.family}
          </p>
        </div>
      </div>
      
      <div className="p-5">
        <h5 className="text-xl font-bold text-white mb-1">
          {character.fullName}
        </h5>
        <p className="text-slate-400 text-sm italic">
          "{character.title}"
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;