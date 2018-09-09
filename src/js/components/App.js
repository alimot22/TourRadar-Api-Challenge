import React from "react";
import SearchContainer from '../containers/SearchContainer.js'
import { LazyLoadComponent} from 'react-lazy-load-image-component';

const App = () => (
    <section id="searchPage">
      <img src="https://cdn.tourradar.com/s3/serp/1436x180/108281_tkzfDXuZ.jpg" width="100%"></img>
        <div className="sale-line text-center">
            <p className="no-margin">
                Unlock up to $350 off - Members Saving - Unlock up to $350
            </p>
        </div>
        <div className="container">
            <SearchContainer/>
        </div>
    </section>
);


export default App;
