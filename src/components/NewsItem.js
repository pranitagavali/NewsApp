import React from "react";

const NewsItem =(props) => {
  
    let { title, description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
            <div style={{
                display: "flex",
                justifyContent:"flex-end",
                position:"absolute",
                right:'0'
                }
                }>
        <span className="badge rounded-pill bg-danger">
            {source}</span>
            </div>
          <img src={imageUrl?imageUrl:"https://img.freepik.com/free-photo/russian-ruble-falls-out-column-coins-against-background-exchange-rate-chart-economic-sanctions-economic-crisis-space-text-idea-banner-news_166373-2656.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem;
