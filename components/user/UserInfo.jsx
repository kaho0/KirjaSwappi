import { MapPin, ArrowUp } from "lucide-react"
import Image from "next/image"

const UserInfo = ({ location, rating, owner }) => {
  return (
    <div className="user-info-section">
      <div className="location-container">
        <MapPin className="w-4 h-4 location-pin mr-2" />
        <span className="text-sm font-medium text-gray-800">{location}</span>
      </div>

      <div className="offered-by-container">
        <div className="text-sm text-gray-600 mb-3">Offered by</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden mr-2">
              <Image
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
                alt={owner}
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-800">{owner}</span>
          </div>
          <div className="flex items-center">
            <ArrowUp className="w-4 h-4 positive-swaps mr-1" />
            <span className="text-sm text-gray-600">{rating.value}% Positive Swaps</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
