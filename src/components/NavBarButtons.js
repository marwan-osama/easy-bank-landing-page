import NavBarButton from "./NavBarButton";

const NavBarButtons = ({ mobile }) => {
	const theme = mobile
		? "clr-secondary-d"
		: "clr-neutral-1 clr-secondary-d-hvr";

	return (
		<div className={`${mobile ? "navbar-buttons-mobile" : "navbar-buttons"}`}>
			<NavBarButton text="Home" className={theme} />
			<NavBarButton text="About" className={theme} />
			<NavBarButton text="Contact" className={theme} />
			<NavBarButton text="Blog" className={theme} />
			<NavBarButton text="Careers" className={theme} />
		</div>
	);
};

export default NavBarButtons;
