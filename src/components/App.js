import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Settings from './Settings'
import PigContainer from '../containers/PigContainer'
import hogs from '../porkers_data';

class App extends Component {

  constructor(){
    super()
    this.state = {
      greased: false,
      shownHogs: hogs,
    }
  }

  filteredHogs = () => {
    if(this.state.greased){
      return this.state.shownHogs.filter(hog => hog.greased == true)
    }else{
      return this.state.shownHogs
    }
  }

  sortName = () => {
    console.log('clicked')
    let sortHogs = [...this.state.shownHogs].sort((a,b) => a.name > b.name ? 1 : -1)
    this.setState({
      shownHogs: sortHogs
    })
  }

  sortWeight = () => {
    console.log('clicked')
    let sortHogs = [...this.state.shownHogs].sort((a,b) => a.weight > b.weight ? 1 : -1)
    this.setState({
      shownHogs: sortHogs
    })
  }

  greasedPigs = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Settings greasedPigs={this.greasedPigs} weight={this.sortWeight} name={this.sortName}/>
          <PigContainer greased={this.state.greased} hogs={this.filteredHogs()}/>
      </div>
    )
  }
}

export default App;
