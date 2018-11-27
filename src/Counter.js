import React, {Component} from 'react';
import Display from './Display';

class Counter extends Component{

    /////////// LifeCycle 에서 가져옴 ///////////////////////////////
    constructor(props){
        super(props); // constructor(props) 와 set
        this.state = {
            number: 0
        }
        console.log('constructor 실행');
    }

    componentDidMount() {
        console.log('componentDidMount 실행');
        // alert('환영합니다.');
    }

    // 원래 render로 바뀌는거 있으면 바로 반영, 업데이트 해줄지 결정하는 것은 아래
    shouldComponentUpdate(nextProps, NextState){
        console.log('shouldComponentUpdate 실행');
        // if(this.state.number % 5 == 0){
        //     return false;
        // };
        if(NextState.number % 5 === 0){
            return false;
        };
        return true; // true면 반영, false면 반영하지 않음.
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate 실행');
    }

    /////////// LifeCycle 에서 가져옴 ///////////////////////////////


// state = {
//     number : 7
// }

counter_up = () => {
    this.setState({number: this.state.number + 1 })
}
// render 하듯이가 아닌 이렇게 해야 this.setState가 연결이 됨.

counter_down = () => {
    this.setState({number: this.state.number - 1 })
}



    render(){
        console.log("render 실행");
        return(
            // <div>
            //     {/* <div>{this.state.number}</div> */}
            //     {/* <button type="button" className="btn btn-dark" onClick={this.counter_up}>증가</button>
            //     <button type="button" className="btn btn-dark" onClick={this.counter_down}>감소</button>            
            
            //     <div>
            //         {this.state.number > 10 ? '10보다 크다' : this.state.number > 5 ? '5보다 크고 10보다 작다' : '5보다 작다'}
                               
            //     </div> */}
            //     {/* Conuter 세분화 해서 실행할거라 주석처리 */}
            // </div>
            <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '500px', height: '400px', backgroundColor: 'lightblue',
                display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}> <Display/> </div>
                
            </div>
        )
    }
}

export default Counter;