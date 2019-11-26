import React, { Component } from 'react';
import Pig from '../components/Pig'

const PigContainer = (props) => {
    return (
            <div>
               {props.hogs.map(pig => <Pig pig={pig}/>)}
            </div>
        )
    }


export default PigContainer