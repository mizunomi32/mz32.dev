/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "@organisms/header";
import Footer from "@organisms/footer"

type LayoutProp = {
  children: React.ReactNode
}

const Layout:React.FC<LayoutProp> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="max-w-screen-md m-0 mx-auto pt-0 pb-6 px-4"
      >
        <main className="w-full h-full grid gap-2">{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  );
};

export default Layout;
