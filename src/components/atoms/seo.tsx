/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


type SEOProps = {
  description?: string,
  lang?: string,
  meta?: any,
  title: string,
  eyecatch?: string,
};

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title, eyecatch }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            eyecatch
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaEyecatch = eyecatch || site.siteMetadata.eyecatch;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaEyecatch,
        }
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
  eyecatch: ``
};

export default SEO;
