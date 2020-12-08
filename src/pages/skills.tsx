import React from "react";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <Heading level={1} className="text-center">Skills</Heading>
      <p className="text-center my-4">よく使う技術</p>
      <div className="mt-8 grid gap-2">
        <Heading level={3} className="text-center">言語・フレームワーク</Heading>
        <div className="mt-8 grid gap-2 grid-cols-4">
           <div>
            C/C++
          </div>
          <div>
            C#
          </div>
          <div>
            Python
          </div>
          <div>
            Ruby
          </div>
          <div>
            Java
          </div>
          <div>
            TypeScript
          </div>
          <div>
            ruby on rails
          </div>
          <div>
            ReactJs
          </div>
          <div>
            Flask
          </div>
          <div>
            Django
          </div>
          <div>
            Gatuby
          </div>
          <div>
            Wordpress
          </div>
          <div>
            Fuellphp
          </div>
          <div>
            lalavel
          </div>
        </div>
        <Heading level={3} className="text-center">Like</Heading>
        <div className="mt-8 grid gap-2 grid-cols-4">
           <div>
            Linux
          </div>
          <div>
            NeoVim / Vim
          </div>
        </div>
        <p className="text-center">Softwear developer.</p>
      </div>
    </Layout>
  )
}

export default IndexPage;
