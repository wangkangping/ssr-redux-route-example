import React, { Component } from 'react';
import { connect } from "react-redux";

import NewsList from "../../components/news/NewsList";
import { fetchNews } from "../../actions";

export class index extends Component {
    render() {
        return (
            <div>
                <NewsList json={this.props.json} fetchNews={this.props.fetchNews}></NewsList>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchNews: (channalName) => dispatch(fetchNews(channalName)),
  });
  
  const mapStateToProps = (state = []) => ({
    // TODO ???
    json: state,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(index);
