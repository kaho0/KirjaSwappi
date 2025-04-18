import { AiOutlineBook } from "react-icons/ai";

const SwapByGenres = ({ genres }) => {
  return (
    <div className="exchange-condition-container">
      <div className="flex gap-4">
        {genres.map((genre, index) => (
          <div key={index} className="flex-1 bg-[#dee7f5] p-4 rounded-xl">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <AiOutlineBook className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1 text-gray-800">
                  {genre}
                </h4>
                <p className="text-xs text-gray-600">Any of this genre</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapByGenres;
