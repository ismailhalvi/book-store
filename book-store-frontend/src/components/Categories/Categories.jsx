import './CategoriesStyle.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Category from '../Category/Category'
import {getCategories }from "../../store/categoriesSlice"
import { useEffect } from 'react'
import {useSelector  , useDispatch} from 'react-redux'

function Categories() {



const dispatch = useDispatch()

const {data , loading , error} = useSelector((state) => state.categories)

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
    <div className='categories-section'>
        <div className="container py-2">
            <SectionTitle title= {"كافة التصنيفات"}/>
        <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 g-4"> 

            {
              data?.map((category)=>{
                return <Category key={category.id} category={category}/>
              })
            }
          

        </div>


        </div>
    </div>  
  )
}

export default Categories