import{useEffect  }  from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllBlogs } from '../../store/blogSlice'
import SectionTitle from '../SectionTitle/SectionTitle'
import BlogCard from '../BlogCard/BlogCard'
function BlogSection() {

  const dispatch = useDispatch();
  const {data , isLoading , error} = useSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
   

  } , [dispatch])
if (isLoading) {
  return <div>جاري التحميل ...</div>
}
if (error) {
  return <div>حدث خطاء ما</div>  
}
if (data.length === 0) {
  return <div>لا يوجد مدونات متاحة</div>
}
const latestBlogs = data?.slice(0 , 6)
  return (
    <div>
        <div className="container">
         <SectionTitle title={"المدونة"} />
            <div className="books row mt-3 row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-2 ">
              

    {
      latestBlogs?.map((blog) => <BlogCard key={blog.id} blog={blog}/>)

    }

            </div>

        </div>  
    </div>
  )
}

export default BlogSection