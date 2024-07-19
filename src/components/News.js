import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import './style.css'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import { useEffect, useState } from 'react';


const News = (props) => {
  // Warning: propTypes was defined as an instance property on News. Use a static property to define propTypes instead.(Error coming when static not used)

  // Warning: Setting defaultProps as an instance property on News is not supported and will be ignored. Instead, define defaultProps as a static property on News.(Error coming when static not used)

  // articles = [
  //   {
  //     "source": {
  //       "id": "talksport",
  //       "name": "TalkSport"
  //     },
  //     "author": "Connor Andrews",
  //     "title": "Aaron Ramsdale watches Arsenal fan Ollie Pope smash fastest ever Test match double hundred in England...",
  //     "description": "Arsenal’s Aaron Ramsdale was in awe of a sporting Pope, but this time it wasn’t his England goalkeeping teammate. Instead of being impressed by Newcastle’s Nick, it was England cricket’s Ollie who …",
  //     "url": "https://talksport.com/sport/cricket/1444378/aaron-ramsdale-arsenal-ollie-pope-fastest-test-match-double/",
  //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/ollie-pope-england-celebrates-eaching-822236557-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",

  //     "publishedAt": "2023-06-02T20:45:56Z",
  //     "content": "Arsenals Aaron Ramsdale was in awe of a sporting Pope, but this time it wasnt his England goalkeeping teammate.\r\nInstead of being impressed by Newcastles Nick, it was England crickets Ollie who left … [+1192 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]


  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${this.capitalizeFirstLetter(props.category)} - Newsmonkey`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //  const filteredArticles = articles.filter((article)=>{
  //   article.title.toLowerCase().includes(props.searchQuery.toLowerCase());
  //  })

  // ComponentDidMount can  be used for calling an api 
  // it runs after render and constructor runs before render

  // const updateNews = async ()=>{
  //   props.setProgress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1f20b07127c4637bae79757954f754d&page=${page}&pageSize=${props.pageSize}`;

  //   setLoading(true);
  //   // fetch api takes url and returns a promise
  //   let response = await fetch(url);
  //   props.setProgress(30);
  //   // console.log(data);
  //   let data = await response.json();
  //   props.setProgress(70);
  //   // let parsedData = data.json();
  //   // console.log(parsedData);


  //   setArticles(data.articles);
  //   setTotalResults(data.totalResults);
  //   setLoading(false);

  //   props.setProgress(100);
  // }

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d04046b76264f709b1ec778c6d4b355&page=${page}&pageSize=${props.pageSize}`;

    if (props.searchQuery) {
      url = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(props.searchQuery)}&country=${props.country}&category=${props.category}&apiKey=7d04046b76264f709b1ec778c6d4b355&page=${page}&pageSize=${props.pageSize}`;
    }

    try{
    // fetch api takes url and returns a promise
    let response = await fetch(url);
    props.setProgress(30);
    // console.log(data);
    let data = await response.json();
    props.setProgress(70);
    // let parsedData = data.json();
    // console.log(parsedData);

    if(page === 1)
    {
      setArticles(data.articles);
    }
    else 
    {
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
    }
    setTotalResults(data.totalResults);
  }
  catch(error)
  {
    console.log('Error fetching news articles:', error);
  }
    setLoading(false);

    props.setProgress(100);
  }

  // async and await: an async function can wait inside it's body to resove certain promises
  // useEffect(()=>{
  //   // effect:-
  //   updateNews();
  //   // return()=>{
  //   //   cleanup
  //   // }
  // },[])

  // useEffect(() => {
  //   setArticles([]);
  //   setPage(1);
  // }, [props.searchQuery]);

  useEffect(() => {
    // Fetch news articles when component mounts
    updateNews();
  }, [page, props.searchQuery]);

  useEffect(()=>{
    setPage(1);
    setArticles([]);
  },[props.searchQuery]);
  
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d04046b76264f709b1ec778c6d4b355&page=${this.state.page}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // // fetch api takes url and returns a promise
  //   // let response = await fetch(url);
  //   // // console.log(data);
  //   // let data = await response.json();
  //   // // let parsedData = data.json();
  //   // // console.log(parsedData);
  //   // this.setState({
  //   //   articles: data.articles,
  //      //   totalResults: data.totalResults,
  //   //   loading: false,
  //   // })
  // }

  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d04046b76264f709b1ec778c6d4b355&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let response = await fetch(url);
    // let data = await response.json();
    // // this.setState({articles: data.articles});

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: data.articles,
    //   loading: false
    // })

    setPage(page + 1);
    updateNews();
  }

  const handleNextClick = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20))
    // {

    // }
    // else
    // {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d04046b76264f709b1ec778c6d4b355&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let response = await fetch(url);
    // let data = await response.json();
    // // this.setState({articles: data.articles});

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: data.articles,
    //   loading: false
    // })
    setPage(page - 1);
    updateNews();
    // }
  }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1f20b07127c4637bae79757954f754d&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    // fetch api takes url and returns a promise
    // this.setState({ loading: true });
    let response = await fetch(url);
    // console.log(data);
    let data = await response.json();
    // let parsedData = data.json();
    // console.log(parsedData);
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };


  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Newsmonkey-Top Headlines from {capitalizeFirstLetter(props.category)} category</h1>
      {/* {this.state.loading && <Spinner />}    This statement indicates that whenever the loading is true, then show the loading otherwise don't show loading */}
      <InfiniteScroll
        dataLength={articles.length}
        next={() => { setPage(page + 1) }}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >


        <div className="container">
          <div className="row">
            {/* Below statement indicates that when the loading is false, then show the content else do not show content and only show loading spinner */}

            {/*Before adding infinite scrollbar:- !this.state.loading && this.state.articles.map((element) =>{....}*/}
            {/* After adding infinite scrollbar:- */}
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
            {/* when map is used, each element should be given a unique key */}

            {/* <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imgUrl="https://talksport.com/wp-content/uploads/sites/5/2023/06/ollie-pope-england-celebrates-eaching-822236557-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" newsUrl="TODO"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imgUrl="https://talksport.com/wp-content/uploads/sites/5/2023/06/ollie-pope-england-celebrates-eaching-822236557-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" newsUrl="TODO"/>
          </div> */}
          </div>
        </div>
      </InfiniteScroll>


      {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
          
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
        </div> */}

    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  searchQuery: '',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  searchQuery: PropTypes.string,
}

export default News