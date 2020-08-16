import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "@templates/layout";
import SEO from "@atoms/seo";
import Heading from "@atoms/heading";
import { string } from "prop-types";
import Image from "@atoms/image";

type PropsType = {
  data: {
    allMarkdownRemark: {
      edges :{
        node: {
          id: string,
          frontmatter: {
            title: string
            slug: string
            eyecatch: string,
            publicAt: string
          }
        }
      }[]
    }
  }
}

const SecondPage: React.FC<PropsType> = ({data}) =>{
  const edges = data.allMarkdownRemark.edges;

  return (
  <Layout>
    <SEO title="posts" />
    <Heading level={1} className="text-center">Post</Heading>
    <p className="text-center my-4">日々思う何かを書き綴ります。</p>
    <ul className="grid gap-4 grid-cols-2">
    {edges.map(({ node }) => {
        const eyecatch =  node.frontmatter.eyecatch=='' ? 'eyecatch.png' : node.frontmatter.eyecatch;
        return (
            <li key={node.id} className="bg-white rounded shadow-xl">
              <Link to={`/post/${node.frontmatter.slug}`}>
              <Image filename={eyecatch} alt={node.frontmatter.title} />
              <div className="p-6">
                <h2 className="text-xl font-bold">{node.frontmatter.title}</h2>
                <span className="text-right block">{node.frontmatter.publicAt}</span>
              </div>
              </Link>
            </li>
          )
      })}
    </ul>
  </Layout>
);
}

export default SecondPage;
export const query = graphql`
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          slug
          eyecatch
          publicAt(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
}
`