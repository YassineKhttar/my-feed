import React from 'react';
import "./Timeline.css";
import Posts from './posts/Posts';

function Timeline() {
  return (<div className="timeline">
   <div className="timeline_post">
     <Posts />
     <Posts />
     <Posts />


    
   </div>
   </div>)
}

export default Timeline
