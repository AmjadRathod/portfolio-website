import React from "react"


const Footer = () => {
	return (
		<footer className="py-4 bg-dark">
			<div className="container">
				<div className="row">
					<div className="col-7 text-white">Copyright © {new Date().getFullYear()} Amjad Rathod all right reserved</div>
					<div className="col-5">
						<ul>
							<li><a href="https://twitter.com/AmjadRathod">Twitter</a></li>
							<li><a href="https://www.linkedin.com/in/amjad-rathod-a9994b8b/">LinkedIn</a></li>
							<li><a href="https://github.com/AmjadRathod">GitHub</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer 