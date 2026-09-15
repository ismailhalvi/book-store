import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Book from '../../../components/Book/Book'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBooks } from "../../../store/booksSlice"
import "./categorystyle.css"

function CategoryPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  const { id } = useParams()
  const { data, isLoading, error } = useSelector((state) => state.books)

  const filteredBooks = data.filter((book) =>
    book.categories?.some((cat) => cat.id === Number(id))
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className="bunner">
        <h1>كتب التصنيف</h1>
      </div>

      <div className="container category-page">

        {filteredBooks.length > 0 ? (
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-4">
            {filteredBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="category-empty">
            <h2>لا توجد كتب في هذا التصنيف</h2>
            <p>لم نتمكن من العثور على كتب متاحة حالياً.</p>
          </div>
        )}

      </div>
    </>
  )
}

export default CategoryPage