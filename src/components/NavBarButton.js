const NavBarButton = ({ text, className }) => {
	return <button className={`navbar-button btn ${className}`}>{text}</button>;
};

export default NavBarButton;
