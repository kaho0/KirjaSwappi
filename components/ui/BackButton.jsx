import { ChevronLeft } from "lucide-react"

const BackButton = () => {
  return (
    <button
      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Go back"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  )
}

export default BackButton
