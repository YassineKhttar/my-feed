import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpIcon from '@mui/icons-material/Help';

function Sidenav() {
  return (<div className="sidenav">
  <img
  className="sidenav_logo"
  src="https://www.rmpsrl.net/wp-content/uploads/2017/02/CP_logo_black-2.jpg"
  alt=""/>
  <div className="sidenav_buttons">
    <button className ="sidenav_button">
        <HomeIcon/>
        <span>Home</span>
    </button>
    <button className ="sidenav_button">
        <SavedSearchIcon/>
        <span>Recherche</span>
    </button>
    <button className ="sidenav_button">
        <FavoriteBorderIcon/>
        <span>Favoris</span>
    </button>
    <button className ="sidenav_button">
        <BookmarkBorderIcon/>
        <span>Enregistrés</span>
    </button>
    <button className ="sidenav_button">
        <FlightTakeoffIcon/>
        <span>Voyage</span>
    </button>
    <button className ="sidenav_button">
        <AddAPhotoIcon/>
        <span>Publication</span>
    </button>
    <button className ="sidenav_button">
        <AccountBoxIcon/>
        <span>Profil</span>
    </button>
   
   
  </div>
  <div className="sidenav_help">
    <button className="sidenav_button">
        <HelpIcon/>
        <span>Aide</span>
    </button>

  </div>
  </div>
  
  );
  
}

export default Sidenav
