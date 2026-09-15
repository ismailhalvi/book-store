import { createContext,  useState } from "react";

export const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {

const [selectedBook , setSelectedBook] = useState(null);
const openQuickView = (book) => {
    setSelectedBook(book);
  }
const closeQuickView = () => {
    setSelectedBook(null);
  }


  return (
    <QuickViewContext.Provider value={{ selectedBook, openQuickView, closeQuickView }}>
      {children}
    </QuickViewContext.Provider>
  );
}
