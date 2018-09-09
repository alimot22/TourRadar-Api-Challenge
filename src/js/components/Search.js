import React, { Component } from "react";
import axios from 'axios';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import currancy from '../currency.json'; //get currancy symbols from a json file.(i could use an array but i choose JSON file because it's cleaner :) )

class SearchComponent extends Component{
  render() {
      return (
        <div>
          <div className="row">
              <div className="col-md-3 offset-md-9 SortRow">
                  <br></br><br></br>
                  <label className="TextGray">
                      Sort by
                  </label>
                  <select onChange={this.sortChange.bind(this)} className="form-control">
                    <option value="LPF">Lowest price first</option>
                    <option value="HPF">Highest price first</option>
                    <option value="LTF">Longest tour first</option>
                    <option value="STF">Shortest tour first</option>
                  </select>
              </div>
          </div>
          <div id="tourList">
            {this.renderTours()}
          </div>
        </div>
      );
  }

constructor(props){
  super(props)
  // Create a state for saving sort value.
  this.state={
    sort:"LPF" //LPF is default value. (Lowest price first)
  }

}
  // change state value
  sortChange(v){
      this.setState({sort:v.target.value})
  }
  // this function is for showing the tour lists
  renderTours(data){
    var d = this.props.allData; //saving Redux Store data into a variable
    // checking sort request
    switch (this.state.sort) {
      case "LPF":
          d.sort(function(a, b){return a.price - b.price});
        break;
      case "HPF":
            d.sort(function(a, b){return b.price - a.price});
          break;
      case "LTF":
            d.sort(function(a, b){return b.length - a.length});
            break;
      case "STF":
            d.sort(function(a, b){return a.length - b.length});
          break;
      default:

    }
    // Mapping sorted data and passing them to Component return
    return d.map(tour => {
      var des = "";
        for (var i = 0; i < tour.destinations.length; i++) {
          des += tour.destinations[i] + ", ";
        }
      return(
        <LazyLoad key={tour.id} height={10}>
        <div className="row box" >
                    <div className="col-md-3 no-padding">
                    <LazyLoadImage
                        alt={tour.tour_name}
                        src={tour.tour_image}
                        effect="blur"/>
                        <LazyLoadImage
                          alt={tour.tour_name}
                          src={tour.map_image}
                          effect="blur"/>
                    </div>
                    <div className="col-md-6 pt-4">
                      <h2>
                        {tour.tour_name}
                      </h2>
                      <h4>
                          {tour.description}
                      </h4>
                      <br/>
                      <ul className="no-padding">
                          <li>
                            <label>DESTINATIONS</label>
                            <span>{des}</span>
                          </li>
                          <li>
                            <label>
                              STARTS/ ENDS IN
                            </label>
                            <span>
                              {tour.destinations[0]} / {tour.destinations.slice(-1)}
                            </span>
                          </li>
                          <li>
                            <label>
                              AGE RANGE
                            </label>
                            <span>
                              {tour.age_from} to {tour.age_to} years old
                            </span>
                          </li>
                          <li>
                            <label>
                              COUNTRY
                            </label>
                            <span>
                              {tour.country}
                            </span>
                          </li>
                          <li>
                            <label>
                              OPERATOR
                            </label>
                            <span>
                              {tour.tour_operator}
                            </span>
                          </li>
                      </ul>
                    </div>
                    <div className="col-md-3 pt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <dl>
                            <dt>
                                Our Saving
                            </dt>
                            <dd>
                            {currancy[tour.currency]}{tour.saving}
                            </dd>
                          </dl>
                        </div>
                        <div className="col-md-6">
                        <dl>
                          <dt>
                              From
                            </dt>
                            <dd>
                            {currancy[tour.currency]}{tour.price}
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="days">
                          {tour.length} Days
                      </div>
                    </div>
                </div>
                </LazyLoad>
      )
    })
  }



}





export default SearchComponent;
