import "./App.css";
//import Notes from "./components/notes/Notes";
import Post from "./components/post/Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
      {/* <Route path="/notes" element={<Notes />} /> */}
    </Routes>
  );
}

export default App;
