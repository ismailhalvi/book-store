import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Book from "../../../components/Book/Book";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../../store/booksSlice";

function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useSelector((state) => state.books);
  const query = searchParams.get("q")?.toLocaleLowerCase().trim() || "";

  const filteredBooks = useMemo(() => {
    return data.filter((book) => book.name.toLocaleLowerCase().includes(query));
  }, [data, query]);
  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (data.length === 0) {
    return <div>No books available.</div>;
  }                                                 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="bunner">
        <h1>نتائج البحث عن {query}</h1>
      </div>

      <div className="container mt-3">
        <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4 ">
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
