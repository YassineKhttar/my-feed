import React from 'react';
import "./Posts.css";
import { Avatar } from '@mui/material';
import { FavoriteBorder, Telegram } from '@mui/icons-material';

function post(user, postImage, likes, timestamp) {
  return (
    <div className="post">
    <div className = "post_header">
      <div className ="post_headerAuthor">
      <Avatar>Y</Avatar>
        Yassine

      </div>
    </div>
    <div className = "post_image">
      <img src ="https://th.bing.com/th/id/OIP.ryCklG1juOMmr1PdqJlXywHaEd?rs=1&pid=ImgDetMain"  alt="" />
    </div>
    <div className = "post_footer">
      <div className = "post_footerIcons">
      <div className = "post_iconsMain">
        <FavoriteBorder className= "postIcon"/>
        <Telegram className = "postIcon"/>
      </div>
      </div>
      Voici une petite photo de mon dernier voyage avec 2 compagnons de voyage trouver sur le site Compagnons et Partage!<p></p>
      Aimé par 242 personnes.
      </div>
    </div>
  );
}

export default post
