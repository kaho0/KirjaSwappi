"use client";

const BookDescription = ({ description, expanded, toggleDescription }) => {
  const truncatedDescription = expanded
    ? description
    : `${description.substring(0, 150)}...`;

  return (
    <div className="book-description text-center mx-auto max-w-2xl">
      <h3 className="book-description-title font-semibold mb-2">
        Book Description
      </h3>
      <p className="book-description-text">
        {truncatedDescription}
        {description.length > 150 && (
          <button
            onClick={toggleDescription}
            className="book-description-more ml-2 text-blue-600 hover:text-blue-800"
          >
            {expanded ? "Less" : "More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default BookDescription;
