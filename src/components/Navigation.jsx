import React from "react";
import Logo from "../assets/Logo.svg";

export const Navigation = () => {
	return (
		<>
			<header>
				<div className="logo">
					<img src={Logo} alt="TomDom" />
					<h2>TomDom</h2>
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
				<div className="nav_footer">
					<h6>footer navigation</h6>
				</div>
			</header>
		</>
	);
};
