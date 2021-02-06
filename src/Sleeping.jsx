import React from 'react';
import './fashion.css';
import KingBedIcon from '@material-ui/icons/KingBed';



var Sleeping = (props) => {
  if ( props.listing === null) {
    return null;
  } else {
    var roomNum = 1;
    return (
      <div>
        <h2>Sleeping arrangements</h2>
        <div className="marquee-sleeping-flexbox">
        {props.listing.bedrooms.map( (bedroom) => (
          <div className="marquee-sleeping-card">
            <h2><KingBedIcon /></h2>
            <h4>Bedroom {roomNum++}</h4>
            <h6>{bedroom}</h6>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

export default Sleeping;