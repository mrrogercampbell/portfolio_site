import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"
import BrandStatment from '../components/BrandStatment/BrandStatment'
import ProjectList from '../components/ProjectList/ProjectList'

import '../components/Image/image.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BrandStatment />

    <div className='img-comp' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ProjectList />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
