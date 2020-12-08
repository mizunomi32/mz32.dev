import React from "react";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="home" />
      <Heading level={1} className="text-center">Wellcome to mz32.dev!!</Heading>
      <div className="mt-8 grid gap-2 grid-cols-2">
        <div className="p-8">
          <div className="max-w-md w-full mx-auto shadow-inner">
            <Image filename="mizunomi32.png" alt="mizunomi32" />
          </div>
        </div>
        <div className="">
          <Heading level={2} className="text-center my-4"><span className="font-extrabold">m</span>i<span className="font-extrabold">z</span>unomi<span className="font-extrabold">32</span></Heading>
          <div className="text-center my-4">
            <p>Softwear developer.</p>
            <p><a href="https://andsdow.com" className="text-orange-600">株式会社あんず堂</a> CTO </p>
          </div>
          <div>
            <p>現在は、関西圏の大学に大学院生として在籍しております。</p>
            <p>勉学のかたわら、<a href="https://andsdow.com" className="text-orange-600">株式会社あんず堂</a>でCTOとして小・中学生向けプログラミングスクール『<a href="https://ands-tech.com" className="text-orange-600">アンズテック</a>』の運営や小・中学生向けプログラミング学習アプリ『<a href="https://apollon.world" className="text-orange-600">アポロン</a>』の開発運営を行っています。</p>
            <br/>
            <p>主に、RubyやPython, PHPでのWebの開発を得意とする。</p>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage;
