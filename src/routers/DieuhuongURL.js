import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Contact from "../componet/contact/Contact.js"
import Checkin from "../componet/checkin/Checkin.js"
import Home from "../views/Home.js"
class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Router><Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/checkin">
                        <Checkin/>
                    </Route>
                </Switch></Router>
            </div>
        );
    }
}
export default DieuhuongURL;