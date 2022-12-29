import "./App.css";
import { Route, Routes } from "react-router-dom";
import All from "./pages/All";
import Layout from "./layout/Layout";
import Completed from "./pages/Completed";
import Uncompleted from "./pages/Uncompleted";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/uncompleted" element={<Uncompleted />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
