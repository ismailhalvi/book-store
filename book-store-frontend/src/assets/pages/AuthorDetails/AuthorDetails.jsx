import { useDispatch, useSelector } from "react-redux"; 
import { getAllAuthorsDetails } from "../../../store/authorSlice"; 
import { useEffect } from "react"; 
import { useParams } from "react-router-dom"; 
import Book from "../../../components/Book/Book"; 
import "./Authstyle.css"; 

function AuthorDetails() { 
    const { id } = useParams(); 
 
    const dispatch = useDispatch(); 
 
 const { authorDetails, isLoading, error, books } = useSelector(
    (state) => state.authors
);
 
    useEffect(() => { 
        dispatch(getAllAuthorsDetails({ authorId: id })); 
    }, [dispatch, id]); 
 
    return ( 
        <div> 
            {isLoading && <p className="author-loading">Loading...</p>} 
 
            {error && <p className="author-error">{error}</p>} 
 
            {!isLoading && !error && authorDetails && ( 
                <> 
                    <div className="bunner">
                        <h1>{authorDetails.name}</h1>
                    </div>

                    <div className="container author-details-page">

                        <div className="author-details">

                            {authorDetails.image?.url && ( 
                                <div className="author-details-img">
                                    <img 
                                        src={`http://localhost:1337${authorDetails.image.url}`} 
                                        alt={authorDetails.name} 
                                    />
                                </div>
                            )}

                            <div className="author-details-info">
                                <span>عن الكاتب</span>

                                <h2>{authorDetails.name}</h2>

                                <div className="author-line"></div>

                                <p>{authorDetails.description}</p>
                            </div>

                        </div>

                        <div className="author-books">
                            <h2>كتب {authorDetails.name}</h2>

                            <div className="books row mt-3 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2">
                                {books?.length > 0 ? ( 
                                    books.map((book) => ( 
                                        <Book 
                                            key={book.id} 
                                            book={book} 
                                        /> 
                                    )) 
                                ) : ( 
                                    <p className="no-books">لا يوجد كتب لهذا المؤلف</p>
                                )} 
                            </div>
                        </div>

                    </div>
                </> 
            )} 
        </div> 
    ); 
} 
 
export default AuthorDetails;