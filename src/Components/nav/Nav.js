import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<div className="nav">
			<div className="nav__container">
				<div className="nav__title">
					<div className="nav__step">
						<Link to="/" className="clean">
							<div className="step__num">1</div>
						</Link>
						<div className="step__info">
							<h4>step 1</h4>
							<h3>your info</h3>
						</div>
					</div>
					<div className="nav__step">
						<Link className="clean" to="/plan">
							<div className="step__num">2</div>
						</Link>
						<div className="step__info">
							<h4>step 2</h4>
							<h3>Select plan</h3>
						</div>
					</div>
					<div className="nav__step">
						<Link className="clean" to="/add">
							<div className="step__num">3</div>
						</Link>
						<div className="step__info">
							<h4>step 3</h4>
							<h3>Add-ons</h3>
						</div>
					</div>
					<div className="nav__step">
						<Link className="clean" to="/summary">
							<div className="step__num">4</div>
						</Link>
						<div className="step__info">
							<h4>step 4</h4>
							<h3>Summary</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
