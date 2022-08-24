import React from "react";


import Card from './card.jsx';
import Footer from './footer.jsx';
import Jumbotron from './jumbotron.jsx';
import Navbar from './navbar.jsx';


const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div><Navbar /></div>
			<div className="row mx-5 mt-4 mb-4 p-0">
				<Jumbotron />
			</div>
			<div className="row mx-5 mb-4 d-flex justify-content-between">
				<div className="col-md-3">
				<Card 
				title="Ejemplo 1" 
				imageUrl="https://picsum.photos/id/237/600/400" 
				description="Lorem ipsum dolor sit amet consectetur adipiscing elit mattis cubilia dictum etiam laoreet nulla, blandit phasellus vulputate dui." 
				buttonLabel="Find Out More!" />
				</div>

				<div className="col-md-3">
				<Card title="Ejemplo 2" 
				imageUrl="https://picsum.photos/id/238/600/400" 
				description="Lorem ipsum dolor sit amet consectetur adipiscing, elit torquent lobortis conubia congue, sapien taciti pretium orci tempor." 
				buttonLabel="Find Out More!" />
				</div>

				<div className="col-md-3">
				<Card title="Ejemplo 3" 
				imageUrl="https://picsum.photos/id/239/600/400" 
				description="Lorem ipsum dolor sit amet consectetur adipiscing elit auctor imperdiet, mauris luctus lacus faucibus suscipit nulla dignissim conubia." 
				buttonLabel="Find Out More!"/>
				</div>

				<div className="col-md-3">
				<Card title="Ejemplo 4" 
				imageUrl="https://picsum.photos/id/240/600/400" 
				description="Taciti quis posuere sociosqu neque habitant interdum urna, proin porta sociis libero maecenas accumsan, gravida lacus eleifend." 
				buttonLabel="Find Out More!"/>
				</div>

			</div>
			<div className="">
				<Footer />
			</div>
	   </div>
	);
};

export default Home;
