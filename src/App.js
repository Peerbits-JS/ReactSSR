import React from "react";
import { BrowserRouter, Link, Redirect, Route,Router, Switch } from "react-router-dom";
import About from "./components/About.js";
import AllPosts from "./components/AllPosts.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import MetaTag from "./components/Meta.js";
import OnePost from "./components/OnePost.js";
import Wrapper from "./components/Wrapper.js";
import history from './history';

function noData() {
  return (
    <div>
    <div className="bg-green-100 min-h-screen p-12">
        <div className="container mx-auto">
            <Link to="/">Home</Link>
            <hr />
            <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
            <h3 className="text-lg text-gray-600 flex justify-center mb-12">
                No MetaData
</h3>
        </div>
    </div>
    
</div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <div>
      <Wrapper>
          {/* <MetaTag /> */}
          <Switch>
          <Route component={Home} path="/" exact />
          <Route component={AllPosts} path="/blogs" exact />
          <Route component={OnePost} path="/OnePost/:slug" />
          <Route component={Contact} path="/contact" />
          <Route component={About} path="/about" />
          <Route component={noData} path="/NoMeta" />
            {/* <Redirect to="/" /> */}
            </Switch>
      </Wrapper>
        </div>
    </BrowserRouter>
  );
}

export default App;
