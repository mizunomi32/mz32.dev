import React from "react";
import { Link } from "gatsby";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="home" />
      <h1 className="text-3xl">Welcome to mz32.dev!</h1>
      <p>Welcome to my site.</p>
      <div className="max-w-md mb-6">
        <Image filename="mizunomi32.png" alt="mizunomi32" />
      </div>
    </Layout>
  )
};

export default IndexPage;
