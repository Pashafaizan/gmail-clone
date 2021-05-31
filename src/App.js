import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
// import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Mail from "./Mail";
import EmailList from "./EmailList";
import { useSelector } from "react-redux";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Router>
          <Switch>
            <Route path="/mail" component={Mail} />

            <Route path="/" component={EmailList} />
          </Switch>
        </Router>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;
