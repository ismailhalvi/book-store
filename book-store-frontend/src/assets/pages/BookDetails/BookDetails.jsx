import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useParams } from "react-router-dom";
import api from "../../../api";
import "./BookDetails.css";
import { useEffect, useState } from "react";
import Book from "../../../components/Book/Book";
const content = [
  {
    type: "paragraph",
    children: [{ type: "text", text: "A simple paragraph" }],
  },
];

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await api.get(`/books/${id}?populate=*`);
        setBook(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  useEffect(() => {
    if (!book) return;
    const fetchRelated = async () => {
      const category_id = book.categories?.[0]?.id;
      if (!category_id) return;
      const res = await api.get(
        `/books?filters[categories][id][$eq]=${category_id}&filters[id][$ne]=${book.id}&populate=*&pagination[limit]=4`,
      );

      setRelatedBooks(res.data.data);
    };
    fetchRelated();
  }, [book]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <>
      <div className="bunner">
        <h1 className="bunner-title text-center">{book.name}</h1>
      </div>

      <div className="book-details container">
        <div className="row row-cols-2 mt-2">
          <div className="book-img col">
            <img
              className="img-book"
              src={`http://localhost:1337${book.image.url}`}
              alt={book.name}
            />
            <div className="book-gallery d-flex gap-2 mt-3 ">
              {book.gallery?.map((image) => (
                <img
                  className="img-book-2"
                  key={image.id}
                  src={`http://localhost:1337${image.url}`}
                  alt={book.name}
                />
              ))}
            </div>
          </div>
          <div className="book-info col">
            <h2>{book.name}</h2>
            <hr></hr>
            <p>{book.description}</p>
            <hr></hr>
            <span>سعر الكتاب: {book.price}</span>
            <hr></hr>

            <div className="book-buttons d-flex gap-2 mt-3">
              <button className="btn btn-primary">تحميل الكتاب</button>
              <button className="btn btn-secondary">استعراض</button>
            </div>
            <hr />
            <div className="">
              <p className="mt-3">الكمية المتوفرة: {book.count}</p>
              <p className="mt-3">لغة الكتاب: {book.lang}</p>
              <p className="mt-3">
                اتاحة الكتاب : {book.available ? "متوفر" : "غير متوفر"}
              </p>
            </div>
          </div>
        </div>

        <div className="book-description mt-5">
          <h2>تفاصيل الكتاب</h2>
          <hr className="hr1"></hr>
          <div>
            {book?.content && book.content.length > 0 ? (
              <BlocksRenderer content={book.content} />
            ) : (
              <p>لا يوجد محتوى متاح لهذا الكتاب.</p>
            )}
          </div>
        </div>

        <div className="Related-books mt-5">
          <div className="container">
            <h2>كتب ذات صلة:</h2>


            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mt-3">
            {
              relatedBooks.map((book)=>(
                 <Book book={book}  key={book.id} />
              ))    
            }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
