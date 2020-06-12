import React from "react"
import Layout from "../components/layout"
import profile from "../images/my-profile.png"
import signature from "../images/signature.png"
import SEO from "../components/seo"
import WorkProcess from "../components/about/work-process"

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
			<section className="section pt-5">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 pb-5">
							<h1 className="text-center">About Me</h1>
						</div>
						<div className="col-md-8">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.</p>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident.</p>
							<p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
						</div>
						<div className="col-md-4 text-center drag-lg-top">
							<div className="shadow-down mb-4">
								<img src={profile} alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" />
							</div>
							<img src={signature} alt="signature" className="img-fluid" />
							<h4>Amjad Rathod</h4>
						</div>
					</div>
				</div>
			</section>
			<WorkProcess />
  </Layout>
)

export default IndexPage
