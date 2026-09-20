import Navbar from "./components/global/Navbar/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

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
  const booksLoading = useSelector((state) => state.books.isLoading);
  const categoriesLoading = useSelector(
    (state) => state.categories.isLoading
  );
  const authorsLoading = useSelector((state) => state.authors.isLoading);
  const blogsLoading = useSelector((state) => state.blogs.isLoading);
  const slidersLoading = useSelector((state) => state.sliders.isLoading);

  const isLoading =
    booksLoading ||
    categoriesLoading ||
    authorsLoading ||
    blogsLoading ||
    slidersLoading;

  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}

      <Navbar />

      <ScrollTop />

      <QuickViewModal />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/author/:id" element={<AuthorDetails />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;