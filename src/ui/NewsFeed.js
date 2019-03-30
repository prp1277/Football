import React, { Component } from "react";


export class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/
    ${this.props.news.type}
    ?${this.props.news.query}
    &apiKey=298c404f48bf409caefedfc539dbfa42`;
    // Using Fetch, you have to return the response
    // before doing anything with it
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewsCard key={item.url} item={item} />
      ));
    } else {
      return <div>Error</div>;
    }
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default NewsFeed;


const Card = () => ({
  render() {
    return (

      <div className="row card mx-1 my-2">
        <div className="card-img"><img className="img-fluid" alt="" src={Card.image} /></div>
        <div className="card-body">
          <div className="container-fluid">
            <h1>{Card.title}</h1>
            <p>{Card.text}</p>
          </div>
        </div>
      </div>

    );
  }
})

const NewsCard = ({ item }) => (
  <div className="row">
    <div className="container">

      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>

        <div className="card-content"><p className="flow-text">{item.title}</p></div>

        <div className="card-action"><a href={item.url} target="blank">
          Full Article
        </a>
        </div>
      </div>
    </div>
  </div>
);
