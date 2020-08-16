import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type ImageType = {
  filename: string,
  alt: string,
  className?: string
}

const Image: React.FC<ImageType> = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    /*
      サイズFIXしたい時は上記childImageSharp {...}の中を以下のように変更
              sizes(maxWidth: 300) {
                ...GatsbyImageSharpSizes
              }
    */
    render={(data) => {
      const image = data.images.edges.find((n: { node: { relativePath: { includes: (arg0: string) => any } } }) => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) { return (<span>no image</span>); }
      //const imageSizes = image.node.childImageSharp.sizes; ←サイズFIXしたい時
      return (
        /*<Img alt={props.alt} sizes={imageSizes} /> ←サイズFIXしたい時 */
        <Img fluid={image.node.childImageSharp.fluid} alt={alt} />
      );
    }}
  />
)
export default Image