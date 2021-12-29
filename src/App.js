import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";

import Layout from "./components/layout/Layout";
import Loading from "./components/layout/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const CreatePlan = React.lazy(() => import("./pages/CreatePlan"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
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
