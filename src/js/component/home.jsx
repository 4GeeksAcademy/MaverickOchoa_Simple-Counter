import React, { useEffect, useState } from "react";


const Home = () => {
	
	
	const [count, setCount] = useState(0);
	const [inputValue, setInputvalue] =useState('');
	const [stop, setStop]= useState(true)
	

	const handleInputChange = (event) =>{
		setInputvalue(event.target.value);
	};
	
	const updateCount = () =>{
		setCount(parseInt(inputValue) || 0);
	};
	
	useEffect(()=> {
		if (!stop) return
		let interval = setInterval(() =>{
			setCount(count + 1)
		}, 1000)
    
		return ()=> clearInterval(interval)
	},[count, stop] );
	
	return (
		<div className="text-center">
			<div className="row">
				<div className="col-12 d-flex mt-5 bg-dark text-light">
					<div className="col-2">
						<h1><i class="fa-solid fa-clock"></i></h1>
					</div>
					<div className="col-2">
						<div className="col-6">
						<h1>{Math.floor(count /86400)%60}</h1>
						</div>
						<div className="col-6">Dias</div>
					</div>
					<div className="col-2">
						<div className="col-6">
						<h1>{Math.floor(count /3600)%24}</h1>
						</div>
						<div className="col-6">Horas</div>
					</div>
					<div className="col-2">
						<div className="col-6">
						<h1>{Math.floor(count/60)%60}</h1>
						</div>
						<div className="col-6">Minutos</div>
					</div>
					<div className="col-2">
						<div className="col-6">
						<h1>{Math.floor(count)%60}</h1>
						</div>
						<div className="col-6">Segundos</div>
						
					</div>
					
				</div>
				<div className="col-12 mt-5 row">

						<div className="col-5">
						<label htmlFor="" className="mx-5">Selecciona tiempo en milisegundos </label>
						<input 
							type="number" 
							value={inputValue}
							onChange={handleInputChange}
							 />
						</div>
						<div className="col-3">
						<button className="btn btn-primary px-5" onClick={updateCount} >Actualizar tiempo</button>
						</div>
						<div className="col-3">
						<button className="btn btn-primary px-5" onClick={()=> setStop(!stop)} >{stop ? "Pause" : "Continue"}</button>
						</div>		
				</div>
				
			</div>
		</div>
	);
};

export default Home;
