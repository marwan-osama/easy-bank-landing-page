const Button = ({ text, className }) => {
	return (
		<button className={`button btn fw-l clr-neutral-4 ${className}`}>
			<span>{text}</span>
		</button>
	);
};

export default Button;
