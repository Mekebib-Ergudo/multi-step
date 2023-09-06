import React, { useState } from "react";
import "./Plans.css";
import { Link } from "react-router-dom";
const Plans = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [color, setColor] = useState("");
	const toggleSwitch = () => {
		setIsChecked(!isChecked);
		setColor("#ccc");
	};
	return (
		<div className="plans">
			<div className="plans__container">
				<div className="plans__title">
					<h1>Select your plan</h1>
					<h3>You have the option of monthly or yearly billing.</h3>
				</div>
				<div className="plans__options">
					<div className="plans__option">
						<img src="../../assets/images/icon-arcade.svg" alt="" />
						<div>
							<h3>Arcade</h3>
							<p>$9/mo</p>
						</div>
						{isChecked && (
							<small style={{ color: "hsl(213, 96%, 18%)" }}>
								2 months free
							</small>
						)}
					</div>
					<div className="plans__option middle">
						<img src="../../assets/images/icon-advanced.svg" alt="" />
						<div>
							<h3>Advanced</h3>
							<p>$12/mo</p>
						</div>
						{isChecked && (
							<small style={{ color: "hsl(213, 96%, 18%)" }}>
								2 months free
							</small>
						)}
					</div>
					<div className="plans__option">
						<img src="../../assets/images/icon-pro.svg" alt="" />
						<div>
							<h3>Pro</h3>
							<p>$15/mo</p>
						</div>
						{isChecked && (
							<small style={{ color: "hsl(213, 96%, 18%)" }}>
								2 months free
							</small>
						)}
					</div>
				</div>
				<div className="plans__select">
					<h3 style={{ color: `${isChecked ? color : ""}` }}>Monthly</h3>
					<label className={`switch ${isChecked ? "checked" : "   "}`}>
						<input
							type="checkbox"
							checked={isChecked}
							onChange={toggleSwitch}
						/>
						<span className="slider round"></span>
					</label>
					<h3 style={{ color: `${isChecked ? "" : color}` }}>Yearly</h3>
				</div>
				<div className="plans__btn">
					<Link to="/" className="clean">
						<h3>Go Back</h3>
					</Link>
					<Link to="/add">
						<button className="btn"> Next Step</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Plans;
