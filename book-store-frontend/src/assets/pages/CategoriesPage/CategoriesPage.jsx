import React from 'react'
import "./CategoreisPage.css"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../../store/categoriesSlice'
import Category from '../../../components/Category/Category'


function CategoriesPage() {
const {data , loading , error} = useSelector((state) => state.categories)
 const dispatch = useDispatch();
useEffect(() => {
    dispatch(getCategories())
}, [dispatch])

if (loading) {
    return <div>Loading...</div>
}

if (error) {
    return <div>Error: {error}</div>
}


  return (
    <>
        <div className="bunner">
          <h1>كافة التصنيفات</h1>
        </div>

    <div className="container">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4  " >
      {
        data?.map((category)=>(
            <Category key={category.id} category={category}/>
        ))    
      }
      </div>
    </div>


    </>
  )
}

export default CategoriesPage