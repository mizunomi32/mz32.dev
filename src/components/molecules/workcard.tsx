import React, { ReactNode } from 'react'

import Image from "@atoms/image";
import Heading from "@atoms/heading";

type CardType = {
  imgfile: string,
  workname: string,
  ricciworkname: ReactNode,
  href?: string,
  note?: string
}

const Workcard: React.FC<CardType> = ({ imgfile, workname, ricciworkname, href, note }) => {
  return (
    <div>
        <a href={href} target="_blank" className="bg-white rounded shadow-xl block">
        <Image filename={imgfile} alt={workname} />
        </a>
      <Heading level={3} className="text-center my-2">{ricciworkname}</Heading>
      <p>{note}</p>
      <a href={href} target="_blank" className="text-right block text-orange-600">詳しくみる</a>
    </div>
  )
}

export default Workcard;
