import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./SideBar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SnoozeIcon from "@material-ui/icons/Snooze";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={SnoozeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
      <div className="sidebar__footer">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SideBar;
