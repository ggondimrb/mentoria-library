import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Book } from "./pages/Book";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}
