import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"
import BrandStatment from '../components/BrandStatment/BrandStatment'
import ProjectList from '../components/ProjectList/ProjectList'
import MockUp from "../components/MockUp/MockUp"
import './index.css'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BrandStatment />

    <div className='img-comp' style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div className='project-gallery'>

      <dviv className='project-list-gallery'>
        <ProjectList />
      </dviv>

      <div className='mockup-div'>
        <MockUp />
      </div>

    </div>
  </Layout >
)

export default IndexPage
