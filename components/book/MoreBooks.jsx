import Image from "next/image"
import Link from "next/link"

const MoreBooks = ({ books }) => {
  return (
    <div className="more-books-section bg-[#f2f4f8]">
      <div className="more-books-header">
        <h3 className="more-books-title">More from this user</h3>
        <Link href="#" className="more-books-link">
          See All
        </Link>
      </div>

      <div className="more-books-grid">
        {books.slice(0, 4).map((book, index) => (
          <div key={index} className="more-book-item">
            <div className="more-book-cover">
              <Image
                src={book.coverImage || "/placeholder.svg?height=150&width=120"}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="more-book-title">{book.title}</h4>
            <p className="more-book-author">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoreBooks
