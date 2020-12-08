import React from "react";
import { Link } from "gatsby";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contacts" />
      <Heading level={1} className="text-center">Contacts</Heading>
      <div className="mt-8 grid gap-2 grid-cols-4">
        <div>Twitter</div>
        <div>Github</div>
        <div>Qiita</div>
      </div>
    </Layout>
  )
}

export default IndexPage;
