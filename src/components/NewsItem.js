import React from 'react'

const NewsItem = (props)=>{
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div class="card">
          <img src={imgUrl ? imgUrl : "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="} class="card-img-top" alt="..." />
          <div class="card-body">
            {/* <h5 class="card-title">{title}... 
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5> */}
            <div className="box" style={{ color: 'white', backgroundColor: 'red', position: 'absolute', top: '0', left: '0' }}>{source}</div>
            <p class="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
            {/* target="_blank" :- opens the article in new tab */}
          </div>
        </div>
      </div>
    )
}

export default NewsItem