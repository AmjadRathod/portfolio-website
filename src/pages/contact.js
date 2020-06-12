import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/contact.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Contact Me" />
		<section>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center py-5">
						<h1 >Contact Me</h1 >
					</div>
					<div className="col-lg-8 mx-auto">
						<div className="bg-white rounded text-center p-5 shadow-down">
							<form action="#" className="row">
								<div className="col-md-6">
									<input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" />
								</div>
								<div className="col-md-6">
									<input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" />
								</div>
								<div className="col-12">
									<textarea name="message" id="message" className="form-control px-0 mb-4" placeholder="Type Message Here"></textarea>
								</div>
								<div className="col-lg-6 col-10 mx-auto">
									<button className="btn btn-primary w-100">send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>

  </Layout>
)

export default IndexPage
