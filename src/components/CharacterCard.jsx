const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200">
      <img 
        src={character.imageUrl} 
        alt={character.fullName} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col gap-1">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
         {character.family?.trim() ? character.family : "Unknown House"}
        </span>
        <h2 className="text-xl font-semibold text-gray-800">
          {character.fullName}
        </h2>
        <p className="text-sm italic text-gray-500">
          "{character.title}"
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;