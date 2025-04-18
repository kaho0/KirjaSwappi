import { ArrowLeft } from "lucide-react";

const Header = ({ title, onBack }) => {
  return (
    <div className="sticky top-0 z-10 bg-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onBack}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-base font-medium ml-4 text-gray-800">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
