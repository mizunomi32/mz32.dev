import React, { ReactNode } from 'react'
import { Link } from "gatsby";

import Image from "@atoms/image";
import Heading from "@atoms/heading";

type CardType = {
  imgfile: string,
  workname: string,
  ricciworkname: ReactNode,
  href?: string,
  note?: string
}

const AboutCard: React.FC<CardType> = ({ imgfile, workname, ricciworkname, href, note }) => {
  return (
    <div className="grid gap-2 shadow-md my-4 p-6 bg-white">
    <h3 className="text-md">このブログを書いた人</h3>
    <div className="grid grid-cols-3">
        <div>
          <div className="roundedImage w-32 h-32 m-auto"><Image filename="mizunomi32.png" alt="mizunomi32" /></div>
        </div>
        <div className="col-span-2">
            <h4 className="font-bold my-4">mizunomi32</h4>
            <p className="my-2">Software developer.</p>
            <p className="my-2">小・中学生向けプログラミングスクール『アンズテック』の運営や小・中学生向けプログラミング学習アプリ『アポロン』の開発運営を行っている。</p>
            <div className="text-right pl-4">
                <Link to="/" className="text-blue-600">詳しく見る</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutCard;
