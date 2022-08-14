const ImgCard = ({ img, author, title, body }) => {
	return (
		<article className="img-card bg-neutral-4">
			<div
				className="img-card-img-wrapper"
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className="img-card-text-wrapper">
				<address className="author reset fs-s clr-neutral-1">
					By {author}
				</address>
				<a className="reset fw-m fs-xl clr-primary-hvr" href="#">
					{title}
				</a>
				<p className="reset fs-m lh-xl clr-neutral-1">{body}</p>
			</div>
		</article>
	);
};

export default ImgCard;
