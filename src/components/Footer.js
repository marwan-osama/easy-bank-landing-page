import Button from "./Button";

const Footer = () => {
	return (
		<footer className="article bg-secondary-d clr-neutral-4">
			<div className="footer-inner-wrapper article-inner-wrapper">
				<div className="left">
					<div className="logo-social">
						<img src="/images/logo-l.svg" />
						<div className="social-icons">
							<a href="#">
								<img className="icon" src="/images/icon-facebook.svg" />
								<img
									className="icon-primary"
									src="/images/icon-facebook-primary.svg"
								/>
							</a>
							<a href="#">
								<img className="icon" src="/images/icon-youtube.svg" />
								<img
									className="icon-primary"
									src="/images/icon-youtube-primary.svg"
								/>
							</a>
							<a href="#">
								<img className="icon" src="/images/icon-twitter.svg" />
								<img
									className="icon-primary"
									src="/images/icon-twitter-primary.svg"
								/>
							</a>
							<a href="#">
								<img className="icon" src="/images/icon-pinterest.svg" />
								<img
									className="icon-primary"
									src="/images/icon-pinterest-primary.svg"
								/>
							</a>
							<a href="#">
								<img className="icon" src="/images/icon-instagram.svg" />
								<img
									className="icon-primary"
									src="/images/icon-instagram-primary.svg"
								/>
							</a>
						</div>
					</div>
					<div className="link-lists fs-m fw-s">
						<ul className="reset">
							<li>
								<a href="#" className="reset clr-primary-hvr">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="reset clr-primary-hvr">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="reset clr-primary-hvr">
									Blog
								</a>
							</li>
						</ul>
						<ul className="reset">
							<li>
								<a href="#" className="reset clr-primary-hvr">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="reset clr-primary-hvr">
									Support
								</a>
							</li>
							<li>
								<a href="#" className="reset clr-primary-hvr">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="right">
					<Button text="Request Invite" />
					<p className="reset clr-neutral-1 fw-s fs-m">
						© Easybank. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
