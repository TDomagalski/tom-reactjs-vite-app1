import React from "react";
import Logo from "../assets/Logo.svg";

export const Navbar = () => {
	return (
		<>
			<div className="logo">
				<img src={Logo} alt="TomDom" />
				<span>TomDom</span>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">test1</a>
					</li>
					<li>
						<a href="#">test2</a>
					</li>
					<li>
						<a href="#">test3</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
