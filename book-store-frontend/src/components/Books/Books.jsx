import React from "react";
import "./BooksStyle.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Book from "../Book/Book";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../store/booksSlice";

function Books() {
  const dispatch = useDispatch();

  const { data, isloading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (data.length === 0) {
    return <div>No books available.</div>;
  }

  const LastesBooks = data?.slice(0 , 6) // Get the last 6 books and reverse the order


  return (
  <div className="mt-3 section-style section-color " >
    <div className="container mt-2 ">

      <SectionTitle title={"أحدث الكتب"} />

      <div className="books row mt-3 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 ">

        {LastesBooks.map((book) => (
          <div className="col" key={book.id}>
            <Book book={book} />
          </div>
        ))}

      </div>

    </div>
  </div>
);
}

export default Books;
