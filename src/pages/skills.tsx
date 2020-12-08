import React from "react";
import { Link } from "gatsby";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="home" />
      <Heading level={1} className="text-center">Skills</Heading>
      <div className="mt-8 grid gap-2">
        <div className="max-w-md w-full mx-auto">
          <Image filename="mizunomi32.png" alt="mizunomi32" />
        </div>
        <Heading level={2} className="text-center">mizunomi32</Heading>
        <p className="text-center">Softwear developer.</p>
      </div>
    </Layout>
  )
}

export default IndexPage;
