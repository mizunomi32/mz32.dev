import React from "react";

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";
import Workcard from "@molecules/workcard";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <Heading level={1} className="text-center">Works</Heading>
      <p className="text-center my-4">関わってきたサービスや制作物</p>
      <div className="mt-8 grid gap-8 grid-cols-2">
        <Workcard 
          imgfile="apollon.jpg" 
          workname="アポロン" 
          ricciworkname={<><span className="text-base">小・中学生向けプログラミング学習アプリ</span><br/>『アポロン』</>} 
          href="https://apollon.world"
          note="いつでもどこでも3分ほどの短い動画でプログラミングを勉強出来るアプリ。興味に合わせて様々な教材を用意しています。"
          />
        <Workcard 
          imgfile="andstech.jpg" 
          workname="アンズテック" 
          ricciworkname={<><span className="text-base">小・中学生向けプログラミングスクール</span><br/>『アンズテック』</>} 
          href="https://ands-tech.com"
          note="オンラインレッスン専門で全国どこでも受講できる子供向けのプログラミング教室。"
          />
      </div>
    </Layout>
  )
}

export default IndexPage;
