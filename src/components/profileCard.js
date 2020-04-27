import React from 'react';
import '../App.css';

const profileCard = ({name,dp}) => {
    return (
<div className="wrapper">
	<div className="profile">
		<img alt="profile" src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnail"></img>
		<h2 className="name">Beverly Little</h2>
		<p className="title">Javascript Developer</p>
		<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
		<button type="button" className="btn">Hire Me</button>  
	</div>
	
	<div className="social-icons">
		<div class="icon">
			
			<h5>12.8k</h5>
		</div>
		
		<div class="icon">
			<a href="#"></a>
			<h4>12.8k</h4>
		</div>
		
		<div class="icon">
			<a href="#"></a>
			<h4>12.8k</h4>
		</div>
	</div>
</div>
    );
}
export default profileCard;


