import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {

	const [count, setCount] = useState(0);
	const [show, setShow] = useState(false);
	const [timer, setTimer] = useState(0);
	const [isTimerRunning, setIsTimerRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isTimerRunning) {
			interval = setInterval(() => {
				setTimer((Timer) => Timer + 1);
			}, 1000);
		}
		console.log("timer is running!")
		return () => clearInterval(interval);
	});

	const stopTimer = () => {
		setIsTimerRunning(false);
	};

	const resetTimer = () => {
		setTimer(2);
		setIsTimerRunning(true);
	};

	const resumeTimer = () => {
		setIsTimerRunning(true);
	};


	useEffect(() => {
		console.log("Hola Mundo 1");

	});


	useEffect(() => {
		console.log("Hola Mundo 2");
	}, []);


	useEffect(() => {
		if (count > 4) {
			alert("Password is incorrect, try in 5 minutes");
		};
		console.log("Hola Mundo 3");
	}, [count]);

	useEffect(() => {
		if (timer == 10 || timer == 30) {
			alert("Your time is reached");
		};
		console.log("Hola Mundo 3");
	},);



	return (
		<div className="text-center  h-100">
			<h1>{count}</h1>
			<button onClick={() => {
				setCount(count + 1)
				console.log(count)
			}}>+</button>
			<button onClick={() => {
				setCount(count - 1)
				console.log(count)
			}}>-</button>
			<button onClick={() => {
				setCount(count * 3)
				console.log(count)
			}}>x3</button>
			<button onClick={() => {
				setCount(count / 4)
				console.log(count)
			}}>% 4</button>
			<br></br>
			<br></br>
			<div>{show}</div>
			<button onClick={() => {
				setShow(!show)
				setCount(count + 25)

			}}>show!</button>
			<br></br>
			<br></br>
			{
				show == false ? null :
					<div className="text-center  h-100">
						<div class="card" style={{ width: "18rem" }}>
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" onClick={() => { setShow(false) }} class="btn btn-primary">close me now!</a>
							</div>
						</div>
					</div>
			}
			<div className="p-5 bg-dark container">
				<div className="d-flex flex-row justify-content-center">
					<div className="clock text-white">
						<i
							className="fa-regular fa-clock fa-spin p-2">
						</i>
					</div>
					<div className="four text-white p-2 fs-1">{Math.floor(timer / 1000) % 10}</div>
					<div className="three text-white p-2 fs-1">{Math.floor(timer / 100) % 10}</div>
					<div className="two text-white p-2 fs-1">{Math.floor(timer / 10) % 10}</div>
					<div className="one text-white p-2 fs-1">{Math.floor(timer / 1) % 10}</div>
				</div>
				<div className="d-flex flex-row justify-content-center">
					<button onClick={() => { setTimer(timer - 10) }}>- 10 seconds</button>
					<button onClick={stopTimer}>Stop</button>
					<button onClick={resetTimer}>Reset</button>
					<button onClick={resumeTimer}>Resume</button>
					<button onClick={resumeTimer}>Start</button>
				</div>
			</div>

		</div>



	);
};

export default Home;
