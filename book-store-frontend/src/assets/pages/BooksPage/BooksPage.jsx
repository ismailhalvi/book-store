import { useSelector  } from "react-redux";
import Book from "../../../components/Book/Book";
import { useDispatch } from "react-redux";
import React, { useEffect , useState } from "react";
import { getBooks } from "../../../store/booksSlice";
import { useSearchParams } from "react-router-dom";
import "./BooksPage.css";

function BooksPage() {




const { data, isLoading, error , meta } = useSelector((state) => state.books);
const dispatch = useDispatch();
// const [currentPage , setCurrentPage] = useState(1);
const [searchParams , setSearchParams] = useSearchParams();

const currentPage = Number(searchParams.get("page") || 1); 



const pageSize = 4;


useEffect(() => {
  dispatch(getBooks({ page: currentPage, pageSize }));
}, [dispatch , currentPage , data.length]);


const totalPage = meta?.pagination?.pageCount || 1;





  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // if (data.length === 0) {
  //   return <div>No books available.</div>;
  // }

  return (
    <>
      <div className="bunner">
        <h1>كافة الكتب</h1>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4">
          {data?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

<div className="d-flex justify-content-center mt-3">
{
  [...Array(totalPage)].map((_ , index)=>(
      <button onClick={() => setSearchParams({ page: index + 1 })} className={`btn mx-2 ${
  currentPage === index + 1
    ? ""
    : ""
}`} key={index}>{index + 1}</button>
    
  ))
}
</div>


    </>
  );
}

export default BooksPage;
