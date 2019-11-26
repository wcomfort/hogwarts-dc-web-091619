import React, { Component } from 'react';

const Settings = (props) => {
    return(
        <div>
            <button className='ui button' onClick={props.greasedPigs}>Greased Hogs</button>
            <button className='ui button' onClick={props.name}>Sort by Name</button>
            <button className='ui button' onClick={props.weight}>Sort by Weight</button>
        </div>
    )
}

export default Settings