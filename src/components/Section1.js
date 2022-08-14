import Article from "./Article";
import IconCard from "./IconCard";

const Section1 = () => {
	return (
		<Article
			className="bg-neutral-2 clr-secondary-d section-1"
			classNameInner="section-1-inner-wrapper"
		>
			<section className="text-wrap-m">
				<h3 className="reset fs-6xl fw-m">Why choose Easybank?</h3>
				<p className="clr-neutral-1 fs-l lh-xl">
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</section>
			<div className="icon-cards">
				<IconCard
					img="/images/icon-online.svg"
					heading="Online Banking"
					body="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
				/>
				<IconCard
					img="/images/icon-budgeting.svg"
					heading="Simple Budgeting"
					body="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
				/>
				<IconCard
					img="/images/icon-Onboarding.svg"
					heading="Fast Onboarding"
					body="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
				/>
				<IconCard
					img="/images/icon-api.svg"
					heading="Open API"
					body="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
				/>
			</div>
		</Article>
	);
};

export default Section1;
