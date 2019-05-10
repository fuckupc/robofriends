import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

/*send state*/
const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

/*send action */
const mapDispatchToProps = (dispatch) => {
    return {
        /*input box that use type *//*setSearchField listens to the action, which receives a text */
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
            /*,searchfield:''*/
            /*searchfield is removed because of connect */
        }
    }

    componentDidMount() {
        // console.log(this.props.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    /*onSearchChange is removed because of connect */
    /* 
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    } 
    */

    render() {
        const { robots } = this.state;  /*searchfield is removed because of connect */
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        /*in case the fetch fails */
        return (!robots.length) ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                {/*this.onSearchChange, this is removed because it is from props, not state */}
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );  
    }
}

/*"connect" listens to the first part(state), and the second part(action), then send them to App*/
export default connect(mapStateToProps, mapDispatchToProps)(App);