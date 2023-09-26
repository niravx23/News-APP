import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  constructor()
  {
	super();
  }

  render() {
	let {title, description , imageUrl, newsURL} = this.props ; 
	return (
		<div className="card border-0 bg-white shadow p-3 mb-5 bg-info rounded" style={{width: "18rem"}}>

		<img src={imageUrl} className="card-img-top" alt="Loading ..." />
		<div className="card-body">
		  <h5 className="card-title font-open-sans">{title}...</h5>
		  <p className="card-text font-poppins">{description}...</p>
		  <a href={newsURL} target ="_blank" className="btn btn-sm btn-info">Read More</a>
		</div>
	  </div>
	)
  }
}

export default NewsItem
