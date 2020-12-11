import React from "react"
import { Link, graphql } from "gatsby";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
    PocketShareButton,
    PocketIcon,
    EmailShareButton,
    EmailIcon,
  } from 'react-share';

import Layout from "@templates/layout";
import Image from "@atoms/image";
import SEO from "@atoms/seo"
import Heading from "@atoms/heading";
import ShareBtns from "@molecules/shareBtns";

type postQueryType = {
    markdownRemark: {
        id: string,
        frontmatter: {
            slug: string,
            title: string,
            eyecatch: string,
            publicAt: string,
            updateAt: string  
        }
        html: string
    }
}
type PropsType = {
    data: postQueryType
}

const Post: React.FC<PropsType>  = ({ data })=>{
    const post = data.markdownRemark
    const eyecatch = post.frontmatter.eyecatch==='' ? 'eyecatch.png' : post.frontmatter.eyecatch;

    return (
    <Layout>
        <SEO title={ post.frontmatter.title } />
        <div>
            <Heading level={2}>{ post.frontmatter.title }</Heading>
            <span className="ml-3">公開: { post.frontmatter.publicAt }</span>
            <span className="ml-3">更新: { post.frontmatter.updateAt }</span>
        </div>
        <div className="px-8 border-l-2 border-r-2 grid gap-2">
            <div className="py-6">
            <Image filename={eyecatch} alt="mizunomi32" />
            </div>
            <div 
            className="content"
            dangerouslySetInnerHTML={{
            __html: `${ post.html }`,
            }} />
            <ShareBtns url="https'//localhost:8000"/>
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
        </div>
        
    </Layout>
    )
}

export default Post;


export const query = graphql`
 query($id: String!) {
    markdownRemark(id: { eq: $id }) {
        id
        frontmatter {
            slug
            title
            eyecatch
            publicAt(formatString: "DD MMMM, YYYY")
            updateAt(formatString: "DD MMMM, YYYY")     
        }
        html
    }
 }
`