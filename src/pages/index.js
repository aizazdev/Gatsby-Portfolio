import * as React from "react"
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header text="this is my Heading" subText="I am going to developed my portfolio using this technolofy"></Header>
      <p>This is my Home Page</p>
      <Link to="app"> Client Side Route | </Link>
      <Link to="my-dynamic-page"> Dynamic Page Link | </Link>
    </Layout>
  )
}

export default IndexPage
