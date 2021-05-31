import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import "./EmailList.css";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      {/* <p>
        this is a paragraph of this things related to ecah other. i am noobs in
        machine learning ok. Every thing is good in this worl. after sometimes i
        will make master of react.
      </p> */}
      <div className="email__section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />

        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="hey fellow streamer !!!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellow streamer !!!"
          description="this is a test. so i will contuning a lot of practce est right now"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
