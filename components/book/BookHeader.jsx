import Image from "next/image"

const BookHeader = ({ title, author, coverImage, genres }) => {
  return (
    <div className="relative">
      {/* Fixed background */}
      <div className="book-header-bg"></div>

      {/* Content positioned over the background */}
      <div className="book-header-content">
        <div className="book-cover-container">
          <Image
            src={coverImage || "/placeholder.svg?height=260&width=180"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h2 className="book-title">{title}</h2>
        <p className="book-author">by {author}</p>

        <div className="book-genres">
          {genres.map((genre, index) => (
            <span key={index} className="book-genre">
              {genre}
              {index < genres.length - 1 && <span className="genre-separator">|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookHeader
