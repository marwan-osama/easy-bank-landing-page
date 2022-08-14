const IconCard = ({ img, heading, body }) => {
	return (
		<article className="icon-card">
			<img src={img} alt={heading} />
			<h4 className="icon-card-title fw-m fs-xl">{heading}</h4>
			<p className="reset icon-card-text fs-m lh-xl clr-neutral-1">{body}</p>
		</article>
	);
};

export default IconCard;
