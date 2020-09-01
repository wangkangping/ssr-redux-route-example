import React, { Component } from "react";

class NewsList extends Component {

  handleClickGettingNews = (channelName='bbc-news') => {
    this.props.fetchNews('bbc-news');
  };

  render() {
    console.log(this);
    let json = this.props.json || {},
      channel = json.channels || {};
    return (
      <div>
        <input
          type="button"
          value="Get News From Async"
          onClick={this.handleClickGettingNews}
        />
        <div>
          {channel.channels &&
            channel.channels.map((channel) => (
              <div className="article-wrapper" key={channel.title}>
                <h3 className="text-center">{channel.title}</h3>
                <img src={channel.urlToImage} alt="" />
                <p className="text-center">{channel.description}</p>
                <a href={channel.url} target="_blank">
                  {" "}
                  read more{" "}
                </a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default NewsList;
