import React from "react";
import "./Summary.css";
import { Link } from "react-router-dom";
const Summary = () => {
	return (
		<div className="summaryM">
			<div className="summary">
				<div className="summary__title">
					<h1>Finishing up </h1>
					<h3>Double-check everything looks OK before confirming.</h3>
				</div>
				<div className="summary__price__container">
					<div className="summary__price top">
						<div className="summary__price__title">
							<h2>Arcade (Monthly)</h2>
							<Link href="#">Change</Link>
						</div>
						<p className="top__price">$9/mo</p>
					</div>
					<div className="summary__price centeral ">
						<div className="summary__price__title">
							<h3>Online service</h3>
						</div>
						<p>+$1/mo</p>
					</div>
					<div className="summary__price">
						<div className="summary__price__title">
							<h3>Larger storage</h3>
						</div>
						<p>+$2/mo</p>
					</div>
				</div>
				<div className="summary__totla_price">
					<h3>Total (per month)</h3>
					<h2>+$12/mo</h2>
				</div>

				<div className="summary__btn">
					<Link to="/add" className="clean">
						<h3>Go Back</h3>
					</Link>
					<Link to="/final" className="clean">
						<button className="btn">Confirm</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Summary;
