import "./App.css";
import { Route, Routes } from "react-router-dom";
import All from "./components/pages/All";
import Layout from "./components/layout/Layout";
import Completed from "./components/pages/Completed";
import Uncompleted from "./components/pages/Uncompleted";

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
