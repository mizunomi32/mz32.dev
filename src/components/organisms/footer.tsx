import React from "react";

type FooterProps = {
  siteTitle: string
};
const Footer:React.FC<FooterProps>  = ({ siteTitle }) => (
    <footer className="text-center mt-6">
    { siteTitle } © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
