import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* UI 컴포넌트 IMPORT */
import Count from "./Count";
import Effect from "./Effect";
import Todo from "./Todo";
import Button from "./Button";
import BookList from "./BookList";
import Users from "./Users";
import Movies from "./Movies";
import Home from "./Home";
import Details from "./Details";

// 최상위 컴포넌트
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/count" element={<Count />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/booklist" element={<BookList />}></Route>
        <Route path="/users" element={<Users />}></Route>

        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/detail/:id" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
