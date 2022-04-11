import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div> 
          <span className=" badge rounded-pill bg-danger" >
            {source}
            </span>

          </div>
       
          <img src={!imageUrl?"":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  
            </h5>
            <p className="card-text"> {description}</p>
            <p className="card-text">By {!author? "Unknown":author} on {new Date(date).toGMTString()}.</p>
            <a rel="noreferrer" target="_blank" href={newsUrl} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
