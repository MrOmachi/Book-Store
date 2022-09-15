import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayBooks from './component/DisplayBooks';
import Category from './component/Category';

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
