import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/todo/Header";
import Filter from "../../components/todo/Filter";
import NewsList from "../../components/news/NewsList";
import { fetchNews, addTodo } from "../../actions";

class index extends Component {

  render() {
    return (
      <div>
        <Header addTodo={this.props.addTodo}></Header>
        <Filter></Filter>
        {/* <NewsList json={this.props.json}></NewsList> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchNews: (channalName) => dispatch(fetchNews(channalName)),
  addTodo: (text) => dispatch(addTodo(text)),
});

const mapStateToProps = (state = []) => ({
  // TODO ???
  // json: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);