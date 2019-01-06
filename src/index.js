import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink, Prompt, Switch } from 'react-router-dom'

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const About = (props) => (
    <div>
        <h1>About</h1>
        
    </div>
);

const NotFound = (props) => (
    <div>
        <h1>NotFound</h1>
        
    </div>
);

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            isChanged: false
        }
    }
    render(){
        return(
            <div>
                <Prompt  when={this.state.isChanged} message={"Are you sure want to leave?"} />
                <input type="text" 
                   onChange={
                       () => {
                           this.setState({
                            isChanged: true
                           })
                       }
                   }
                />
                </div>
        )
    }
}

const Content = (props) => (
    <div>
        <NavLink className="list-group-item" exact activeClassName="active" to="/content/city">City</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/content/sports">Sports</NavLink>
        <Route path="/content/:contentName" component={contentDetails} />
    </div>
);

const contentDetails = (props) => (
    <div>{props.match.params.contentName ? <div><img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/1/'} /></div> : null}</div>
)
    

const Links = () => (
    <div class="list-group">
        <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/form">Form</NavLink>
    </div>
)



ReactDOM.render(
    <Router>
        <div className="row">
           <section className="col-sm-4"> <Links /></section>
           <section className="col-sm-8">
           <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/content" component={Content} />
            <Route path="/form" component={Form} />
            <Route  component={NotFound} />
           {/*<Route  render={() => <h1>NotFound page</h1>}/> use this if u want to 404 error msg large*/} 
            </Switch>
            </section>
        </div>
    </Router>
    , document.getElementById('root'));

