import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";
import Detail from "../Routes/Detail"

// Redirect 가 하는 일 => 명시된 라우트가 아닌 것들을 죄다 홈으로 보낸다 하지만 switch를 안쓰면 한번에 랜더링 된다
// Switch 
export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/TV" exact component={TV} />
                <Route path="/TV/popular" render={() => <h1>Popular</h1>} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/tv/:id" component={Detail} />
                <Redirect from="*" to="/" />

            </Switch>
        </>
    </Router>
);