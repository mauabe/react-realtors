import React, { Component } from 'react';


class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

  	render() {
		return (
			<div >
				<section className="listings" >
					Listings
				</section>
			</div>
		);
	}
}

export default Listings;