import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayBooks from './redux/books/DisplayBooks';
import Category from './redux/category/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
