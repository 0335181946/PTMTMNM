import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TFT_FUTSAL</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALkD3IteuDb9E9sjF1ZZq_bDxfAifwA3K9Q&usqp=CAU" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
