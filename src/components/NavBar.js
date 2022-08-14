import { useState } from "react";
import Button from "./Button";
import NavBarButtons from "./NavBarButtons";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
	const [buttonsShowing, setButtonsShowing] = useState(false);

	const toggleButtonsShowing = () => {
		setButtonsShowing(!buttonsShowing);
	};
	return (
		<>
			<nav className="bg-neutral-4">
				<div className="navbar-inner-wrapper">
					<img src="/images/logo.svg" />
					<NavBarButtons />
					<Button text="Request Invite" className="hidden-m-screen" />
					<button
						className="btn hidden-m-screen-not"
						onClick={toggleButtonsShowing}
					>
						{buttonsShowing ? (
							<img src="images/icon-close.svg" />
						) : (
							<img src="images/icon-hamburger.svg" />
						)}
					</button>
				</div>
			</nav>
			<CSSTransition
				in={buttonsShowing}
				classNames="nav-buttons-slide-down"
				timeout={300}
			>
				<NavBarButtons mobile />
			</CSSTransition>
		</>
	);
};

export default NavBar;
