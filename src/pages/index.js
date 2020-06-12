import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import Service from "../components/home/service"
import "../css/home.css"
import Expertise from "../components/home/expertise"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Service />
    <Expertise />
  </Layout>
)

export default IndexPage
