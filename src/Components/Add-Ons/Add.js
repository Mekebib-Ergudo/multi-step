import React, { useState } from "react";
import "./Add.css";
import { Link } from "react-router-dom";
const Add = () => {
	const [isChecked1, setIsChecked1] = useState(false);
	const [isChecked2, setIsChecked2] = useState(false);
	const [isChecked3, setIsChecked3] = useState(false);

	const handleCheckboxChange1 = () => {
		setIsChecked1(!isChecked1);
	};
	const handleCheckboxChange2 = () => {
		setIsChecked2(!isChecked2);
	};
	const handleCheckboxChange3 = () => {
		setIsChecked3(!isChecked3);
	};
	return (
		<div className="addM">
			<div className="add">
				<div className="add__title">
					<h1>Pick add-ons </h1>
					<h3>Add-ons help enhance your gaming experience.</h3>
				</div>
				<div className={`add__checkbox ${isChecked1 ? "checked" : ""}`}>
					<div className="add__checkbox__title">
						<input
							type="checkbox"
							onChange={handleCheckboxChange1}
							checked={isChecked1}
						/>
						<div className="title">
							<h2>Online service</h2>
							<h3>Access to multiplayer games</h3>
						</div>
					</div>
					<p> +$1/mo</p>
				</div>
				<div className={`add__checkbox center ${isChecked2 && "checked"}`}>
					<div className="add__checkbox__title">
						<input
							type="checkbox"
							onChange={handleCheckboxChange2}
							checked={isChecked2}
						/>
						<div className="title">
							<h2>Larger storage</h2>
							<h3>Extra 1TB of cloud save</h3>
						</div>
					</div>
					<p> +$2/mo</p>
				</div>
				<div className={`add__checkbox center ${isChecked3 && "checked"}`}>
					<div className="add__checkbox__title">
						<input
							type="checkbox"
							onChange={handleCheckboxChange3}
							checked={isChecked3}
						/>
						<div className="title">
							<h2>Customizable Profile</h2>
							<h3>Custom theme on your profile</h3>
						</div>
					</div>
					<p> +$2/mo</p>
				</div>
				<div className="plans__btn">
					<Link to="/plan" className="clean">
						<h3>Go Back</h3>
					</Link>
					<Link to="/summary">
						<button className="btn"> Next Step</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Add;
