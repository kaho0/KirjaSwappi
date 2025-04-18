"use client"

const BookDescription = ({ description, expanded, toggleDescription }) => {
  const truncatedDescription = expanded ? description : `${description.substring(0, 150)}...`

  return (
    <div className="book-description">
      <h3 className="book-description-title">Book Description</h3>
      <p className="book-description-text">
        {truncatedDescription}
        {description.length > 150 && (
          <button onClick={toggleDescription} className="book-description-more">
            {expanded ? "Less" : "More"}
          </button>
        )}
      </p>
    </div>
  )
}

export default BookDescription
