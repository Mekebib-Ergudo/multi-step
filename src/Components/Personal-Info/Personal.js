import React, { useState } from "react";
import "./Personal.css";
import { Link } from "react-router-dom";
const Personal = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData) console.log("error");
		console.log(formData);
	};

	return (
		<div className="personal">
			<div className="persoanl__container">
				<div className="personal__title">
					<h1>Personal info</h1>
					<h3>Please provide your name, email address, and phone number.</h3>
				</div>
				<div className="personal__form">
					<form action="" onSubmit={handleSubmit}>
						<h4>Name</h4>
						<input
							name="name"
							value={formData.name}
							type="text"
							onChange={handleChange}
							placeholder="e.g.Stephen King"
						/>
						<h4>Email Address</h4>
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g.stephenking@gmail.com"
						/>
						<h4>Phone Number</h4>
						<input
							type="number"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="e.g.+14373466789"
						/>
						<Link to={formData && "/plan"} className="clean">
							<button type="button" className="personal__btn">
								Next Step
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Personal;
