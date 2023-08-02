import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPages] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    // document.title=`${props.category} -NEWSapi`
    const update = async () => {
        // console.log("cdm");
    setLoading({ loading: true })
    let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=43f8583a15f944978d2556cf3df08e67&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({ articles: parsedData.articles , totalResults:, loading:false})
}
useEffect(() => {
    update();
}, []);
const handlenextClick = async () => {
    
    if (page + 1 <= Math.ceil(totalResults / 12)) {
        setLoading({ loading: true })
        let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=43f8583a15f944978d2556cf3df08e67&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setPages(page + 1)
        setLoading(false)
        // this.setState({page: this.state.page + 1 ,  articles: parsedData.articles, loading: false})
        
    }
}
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const handleprevClick = async () => {
    setLoading({ loading: true })
    let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=43f8583a15f944978d2556cf3df08e67&page=${page - 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setPages(page - 1)
    setLoading(false)
    // setPages()
    // this.setState({page: this.state.page - 1 ,  articles: parsedData.articles ,loading: false})
    
}

// console.log("render")
return (
    <div className='container my-4'>
        <h1 className='mb-4 text-center '>LATEST NEWS - Headlines from {capitalizeFirstLetter(props.category)}</h1>
        <hr />
        {loading ? <Spinner /> : " "}

        <div className="row mt-3">
            {!loading && articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <Newsitem description={element.description ? element.description.slice(0, 88) : " "} title={element.title ? element.title.slice(0, 40) : " "} url={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>


            })}

        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" disabled={page <= 1} onClick={handleprevClick} className="btn btn-dark">Previous</button>
            <button type="button" disabled={page == Math.ceil(totalResults / 12)} onClick={handlenextClick} className="btn btn-dark">Next</button>
        </div>
    </div>
)
        
}

News.defaultProps = {
    country: 'in', pageSize: 12, category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News