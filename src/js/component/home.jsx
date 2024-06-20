import React, { useEffect, useState } from "react";


const Home = () => {
	
		const [count, setCount] = useState(0)

		useEffect(()=> {
			const interval = setInterval(() =>{
				setCount(prevCount => prevCount +1);
			}, 100)
			return () => clearInterval(interval);
		},[] );
	
		
	return (
		<div className="text-center">
			<div className="row">
				<div className="col-12 d-flex mt-5 bg-dark text-light">
					<div className="col-3">
						<h1>{Math.floor(count /10000)%10}</h1>
					</div>
					<div className="col-3">
						<h1>{Math.floor(count /1000)%10}</h1>
					</div>
					<div className="col-3">
						<h1>{Math.floor(count /100)%10}</h1>
					</div>
					<div className="col-3">
						<h1>{Math.floor(count /10)%10}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
