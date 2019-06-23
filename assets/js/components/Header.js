import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

  render() {
		return (
			<header>
        <div className="logo"> Logo</div>
        <nav>
          <a href="/">Create Ads</a>
          <a href="/">PMC Realtors Team</a>
          <a href="/">Log in</a>
          <a href="/" className="register-btn">Register</a>
        </nav>
			</header>
		);
	}
}

export default Header;