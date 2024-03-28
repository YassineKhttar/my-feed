import React from 'react'
import "./Homepage.css";
import Sidenav from './naviguation/Sidenav'
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
      <Sidenav />
    
      </div>
      <div className ="homepages__timeline">
      <Timeline />
      
      </div>

    </div>
  );
}

export default Homepage
