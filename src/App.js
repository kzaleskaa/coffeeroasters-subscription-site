import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";
import * as Loader from "react-loader-spinner";

import Layout from "./components/layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const CreatePlan = React.lazy(() => import("./pages/CreatePlan"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const style = { display: "flex", justifyContent: "center" };

  return (
    <Layout>
      <Suspense
        fallback={
          <div style={style}>
            <Loader.TailSpin color="#4c4c4c" height={70} width={70} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/create-plan/" element={<CreatePlan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
