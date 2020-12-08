import React from "react";
import { Link } from "gatsby";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <Heading level={1} className="text-center">Works</Heading>
      <p className="text-center my-4">関わってきたサービスや制作物</p>
      <div className="mt-8 grid gap-8 grid-cols-2">
        <div>
          <div className="bg-white rounded shadow-xl">
            <Image filename="eyecatch.png" alt="mizunomi32" />
          </div>
          <Heading level={3} className="text-center my-2"><span className="text-base">小・中学生向けプログラミング学習アプリ</span><br/>『アポロン』</Heading>
          <p>いつでもどこでも3分ほどの短いどうがでプログラミングを勉強出来るアプリ。興味に合わせて様々な教材を用意しています。</p>
          <a href="https://apollon.world" className="text-right block text-orange-600">詳しくみる</a>
        </div>
        <div>
          <div className="bg-white rounded shadow-xl">
            <Image filename="eyecatch.png" alt="mizunomi32" />
          </div>
          <Heading level={3} className="text-center my-2"><span className="text-base">小・中学生向けプログラミングスクール</span><br/>『アンズテック』</Heading>
          <p>オンラインレッスン専門で全国どこでも受講できる子供向けのプログラミング教室。</p>
          <a href="https://ands-tech.com" className="text-right block text-orange-600">詳しくみる</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
