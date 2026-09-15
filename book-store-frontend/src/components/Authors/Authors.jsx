import SectionTitle from '../SectionTitle/SectionTitle'
import Author from '../Author/Author'
import {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getAllAuthors } from '../../store/authorSlice'
import './Authors.css'
function Authors() {
const dispatch = useDispatch();
const {data , isLoading , error} = useSelector((state) => state.authors)

useEffect(() => {
  dispatch(getAllAuthors())
} , [dispatch , data.length])


if (isLoading) {
  return <div>جاري التحميل ...</div>
}

if (error) {
  
}
if (data.length === 0) {
  return <div>لا يوجد كاتبين متاحين ...</div>
}

  return (
    <div className="mt-3  authors section-style section-color ">
        <div className="container">
            <SectionTitle title={"الكُتّاب"} />
            <div className="books row mt-3 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2">
          {
            data?.map((author) => <Author key={author.id} author={author}/>)

          }
                   

            </div>
        </div>
    </div>
  )
}

export default Authors