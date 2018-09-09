import React, { Component } from "react";
import Search from '../components/Search.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllData } from '../actions/index.js';

class SearchContainer extends Component {
  componentWillMount() {
    this.props.getAllData();
  }
  render(){
    return(
        <Search allData={this.props.allData}/>
    );
  }
}

function mapStateToProps(store) {
  return {
    allData: store.allData,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllData: getAllData,
  }, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(SearchContainer)
