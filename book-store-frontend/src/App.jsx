import Navbar from "./components/global/Navbar/Navbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CategoriesPage from "./assets/pages/CategoriesPage/CategoriesPage";
import Home from "./assets/pages/HomePage/Home";
import BooksPage from "./assets/pages/BooksPage/BooksPage";
import Contact from "./assets/pages/Contact/Contact";
import About from "./assets/pages/AboutUs/AboutUs";
import BookDetails from "./assets/pages/BookDetails/BookDetails";
import CategoryPage from "./assets/pages/CategoryPage/CategoryPage";
import SearchPage from "./assets/pages/SearchPage/SearchPage";
import QuickViewModal from "./components/QuickView/QuickViewModal";
import AuthorDetails from "./assets/pages/AuthorDetails/AuthorDetails";
import AdminLayout from "./assets/pages/admin/AdminLayout";
import Dashboard from "./assets/pages/admin/Dashboard";
import Categories from "./assets/pages/admin/Categories/Categories";
import Books from "./assets/pages/admin/Books/Books";
import Footer from "./components/global/Footer/Footer";
import ScrollTop from "./components/global/ScrollTop/ScrollTop";
import Cart from "./assets/pages/Cart/Cart";
function App() {
  return <>

<BrowserRouter>
  <Navbar/>
  <ScrollTop />

<QuickViewModal></QuickViewModal>

  <Routes>  
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/categories" element={<CategoriesPage/>}></Route>
    <Route path="/books" element={<BooksPage/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    
      <Route path="/book/:id" element={<BookDetails/>}></Route>
    <Route path="/category/:id" element={<CategoryPage/>}></Route>
  <Route path="/search" element={<SearchPage />} />
    <Route path="/author/:id" element={<AuthorDetails/>}></Route>
    
    <Route path="/admin" element={<AdminLayout/>}>

      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="categories" element={<Categories/>}></Route>
      <Route path="books" element={<Books/>}></Route>

    </Route>
  </Routes>
<Footer></Footer>

</BrowserRouter>

  </>
}

export default App; 