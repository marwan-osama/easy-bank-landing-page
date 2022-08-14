import Button from "./Button";
import Article from "./Article";

const Hero = () => {
	return (
		<Article className="hero bg-neutral-3" classNameInner="hero-inner-wrapper">
			<section className="hero-text clr-secondary-d">
				<h2 className="reset fs-9xl fw-m">Next generation digital banking</h2>
				<p className="fs-l lh-xl clr-neutral-1">
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<Button text="Request Invite" />
			</section>
			<div className="hero-img">
				<img className="intro-desktop-img" src="/images/bg-intro-desktop.svg" />
				<img className="intro-mobile-img" src="/images/bg-intro-mobile.svg" />
				<img className="phones-img" src="/images/image-mockups.png" />
			</div>
		</Article>
	);
};

export default Hero;
