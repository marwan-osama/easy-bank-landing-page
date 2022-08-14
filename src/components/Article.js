const Article = ({ children, className, classNameInner }) => {
	return (
		<article className={`article ${className}`}>
			<div className={`article-inner-wrapper ${classNameInner}`}>
				{children}
			</div>
		</article>
	);
};

export default Article;
