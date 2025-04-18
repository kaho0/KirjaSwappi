"use client";

import { useState } from "react";
import BookHeader from "../book/BookHeader";
import SwapCondition from "../swap/SwapCondition";
import BookDescription from "../book/BookDescription";
import BookInfo from "../book/BookInfo";
import UserInfo from "../user/UserInfo";
import MoreBooks from "../book/MoreBooks";
import RequestSwap from "../ui/RequestSwap";
import Header from "../ui/Header";
import StatusBar from "../ui/StatusBar";

const BookDetails = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="book-details-container">
      <StatusBar />
      <Header title="Book Details" />

      <BookHeader
        title={book.title}
        author={book.author}
        coverImage={book.coverImage}
        genres={book.genres}
      />

      <SwapCondition swapCondition={book.swapCondition} />

      <BookDescription
        description={book.description}
        expanded={expanded}
        toggleDescription={toggleDescription}
      />

      <BookInfo condition={book.condition} language={book.language} />

      <UserInfo
        location={book.location}
        rating={book.rating}
        owner={book.owner}
      />

      <MoreBooks books={book.moreFromUser} />

      <RequestSwap owner={book.owner} />
    </div>
  );
};

export default BookDetails;
