import Article from "./Article";
import ImgCard from "./ImgCard";

const Section2 = () => {
	return (
		<Article
			className="section-2 bg-neutral-3"
			classNameInner="section-2-inner-wrapper"
		>
			<h3 className="reset fs-6xl fw-m">Latest Articles</h3>
			<div className="img-cards">
				<ImgCard
					img="/images/image-currency.jpg"
					author="Claire Robinson"
					title="Receive money in any currency with no fees"
					body="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
				/>
				<ImgCard
					img="/images/image-restaurant.jpg"
					author="Wilson Hutton"
					title="Treat yourself without worrying about money"
					body="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
				/>
				<ImgCard
					img="/images/image-plane.jpg"
					author="Wilson Hutton"
					title="Take your Easybank card wherever you go"
					body="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
				/>
				<ImgCard
					img="/images/image-confetti.jpg"
					author="Claire Robinson"
					title="Our invite-only Beta accounts are now live!"
					body="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
				/>
			</div>
		</Article>
	);
};

export default Section2;
