import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";
import { Oval } from "react-loader-spinner";

import Layout from "./components/layout/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const CreatePlan = React.lazy(() => import("./pages/CreatePlan"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const style = { margin: "0 auto" };
  return (
    <Layout>
      <Suspense
        fallback={
          <div style={style}>
            <Oval color="#0e8784" height={80} width={80} />
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
