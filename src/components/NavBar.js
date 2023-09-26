import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {
		country : PropTypes.string
		
  }

  static defaultProps = {
		country  : 'us' 
	}

  constructor(){
	super(); 
	this.state = {
			mode : 'light' 
	}
  }

 

  render() {
	return (
		<nav className="shadow  shadow-lg p-3 mb-5  rounded navbar navbar-expand-lg navbar-light bg-white font-lato">
		<div className="container-fluid">
		  <a className="navbar-brand" href="/"><h2>Newsly</h2></a>

		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			  
			  
			  	<li className="nav-item"><a href="/" className="nav-link active">Business</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">Entertainment</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">General</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">Health</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">Science</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">Sports</a></li>
                <li className="nav-item"><a href="/" className="nav-link active">Technology</a></li>


			</ul>
				<div className={`form-check form-switch d-flex text-dark`}>
						<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
						<label className={`form-check-label mx-2`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
				</div>
		  </div>
		</div>
	  </nav>
	)
  }
}

export default NavBar
