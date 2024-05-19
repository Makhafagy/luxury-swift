import * as React from "react";
import Navbar from "../components/navbar";
const IndexPage = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8"/>
        <meta name="description" content="Auto Detailing business"/>
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Gatsby"/>
        <meta name="author" content="Hussain Alnakhli"/>
      
      </head>

      <body>
        <Navbar/>
      </body>
      
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
