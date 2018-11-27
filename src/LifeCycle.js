import React , { Component } from 'react';

class LifeCycle extends Component{
    // Componet가 실행되면 constructor 제일 먼저 실행 됨.
    // 원래는 state에 바로 넣어줌.
    constructor(props){
        super(props); // constructor(props) 와 set
        this.state = {
            number: 0
        }
    }

    componentDidMount() {

    }

    // 원래 render로 바뀌는거 있으면 바로 반영, 업데이트 해줄지 결정하는 것은 아래
    shouldComponentUpdate(nextProps, NextState){
        return true; // true면 반영, false면 반영하지 않음.
    }

    componentDidUpdate(prevProps, prevState){
        
    }

    render() {
        return(
            <div>


            </div>
        )
    }
}

export default LifeCycle;