// import React, { Component} from 'react';
// 이렇게 하거나

import React from 'react';

class Display extends React.Component{
    render() {
        return(
            <div style={{width:'450px', height:'150px', backgroundColor: 'lightgreen',
        display: 'flex', justifyContent: 'center', alignItems:'center', fontWeight:'bold', fontSize:'300px'}}>MIRO</div>
        )
    }
}

export default Display;