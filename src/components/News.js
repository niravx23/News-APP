import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
	static propTypes = {
		country  : PropTypes.string , 
		pageSize : PropTypes.number ,
		category : PropTypes.string ,

  }

  static defaultProps = {
		country  : 'us' ,
		pageSize : 8,
		category : 'general'
	}


	articles = []


	constructor() {
		super();
		// console.log("new.js constructor");

		this.state = {
			articles: this.articles,
			loading: false,
			page: 1,
		}
	}

	async componentDidMount() {
		this.setState({loading : true})

		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17fca77734a04bb9ad9d7d7761a4ac58&page=1&pageSize=${this.props.pageSize}`
		let data = await fetch(url);
		let parsedData = await data.json()
		
		// console.log("Component did mount");
		this.setState({ 
			articles: parsedData.articles,
			totalResults : parsedData.totalResults,
			loading : false 
		 })

	}

	 handlePrev= async ()=>{
		window.scrollTo(0, 0);
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17fca77734a04bb9ad9d7d7761a4ac58&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
		let data = await fetch(url);
		let parsedData = await data.json()
		
		this.setState({ page : this.state.page-1,
						articles: parsedData.articles	
			 		 })
	}

	handleNext= async ()=>{
		window.scrollTo(0, 0);
		this.setState({loading :true})
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17fca77734a04bb9ad9d7d7761a4ac58&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({loading : false })

		this.setState({ 
						page : this.state.page+1,
						articles: parsedData.articles
			 		 })
			
	}

	render() {
		let img1 = "https://yt3.googleusercontent.com/ytc/APkrFKbj7abS4m46w9ZumDM2CZCDleu1Fx3uNm1aofdYEvs=s900-c-k-c0x00ffffff-no-rj"
		return (
			<div className="container my-3">
				
				<h2 className={`shadow-sm p-3 mb-5  rounded text-center font-roboto`}>Headliners </h2>
				{this.state.loading && <Spinner/>}
				{!this.state.loading && <div className="row mx-4 my-4 p-2 text-center">
					{this.state.articles.map((element) => {
						return <div className="col-md-4 my-2" key={element.url}>
							<NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : img1} newsURL={element.url} />
						</div>
					})}

				</div>}
				{!this.state.loading &&<div className="container d-flex justify-content-between">
					<button type="button" disabled={this.state.page<=1} className="btn btn-dark font-poppins " onClick={this.handlePrev}>&larr; Previous</button>
					<button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark font-poppins "  onClick={this.handleNext}>Next &rarr;</button>
				</div> 
				}

			</div>
		)
	}
}

export default News
