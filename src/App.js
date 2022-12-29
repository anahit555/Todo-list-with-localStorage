import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from './config/routes';

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<route.component />}></Route>
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
