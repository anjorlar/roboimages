import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Cardlist from './components/Cardlist'
import Search from './components/Search'
import Scroll from './components/Scroll';
import Errorboundary from './components/Errorboundary';
import { setSearchField, requestRobots } from './store/actions'
// import { robots } from './components/Robots'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    // onRequestRobots: ()=>requestRobots(dispatch)
    onRequestRobots: () => dispatch(requestRobots)
  }
}

class App extends Component {
  // state is not needed again as we are getting our state from actions.js
  // state = {
  //   robots: [],
  //   // searchfield: ''
  // }
  componentDidMount() {
    this.props.onRequestRobots()
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users =>
    //     this.setState({ robots: users })
    //   )
    //   .catch(err => console.log(err))
  }
  // onSearchChange = (e) => {
  //   this.setState({ searchfield: e.target.value })
  // }
  render() {
    // const { robots } = this.state
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (!isPending) {
      return <h1>.. is loading</h1>
    } else {
      return (<div className="tc App">
        <h1>ROBOTFRIENDS</h1>
        <Search searchChange={onSearchChange} />
        <Scroll>
          <Errorboundary>
            <Cardlist robots={filteredRobot} />
          </Errorboundary>
        </Scroll>
      </div>
      )
    };
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
