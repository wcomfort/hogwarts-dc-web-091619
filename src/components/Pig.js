import React, { Component } from 'react';

class Pig extends React.Component {
    
    constructor (){
        super ()
        this.state ={
            showDetails: false 
        }
    }

    showDetails = () =>{
        console.log('clicked')
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render (){
        let filename = this.props.pig.name.toLowerCase().split(' ').join('_')
        return (
        <div className='ui card' onClick={this.showDetails}>
            <h4>{this.props.pig.name}</h4>
            <img src={require(`../hog-imgs/${filename}.jpg`)}></img>
            {
                this.state.showDetails ? (<div>
                    <h5>{this.props.pig.specialty}</h5>
                    <h5>{this.props.pig.weight}</h5>
                    <h5>{this.props.pig['highest medal achieved']}</h5>
                </div>)
                : 
                null 
            }
            
        </div>
    )}
}

export default Pig