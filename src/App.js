import React, { Component } from 'react';
import Counter from "./Counter"; // 현재 폴더에서 Counter 가져옴




class App extends Component{
    state = {
        a : 5,
        b : 10,
        style : { width: '200px', height: '200ox', backgroundColor: 'green'}
    }

    render() {
        /*
        var i = 1; // ES6로 넘어오면서 쓰지 않음
        const a = 1; //변하지 않는 값
        let b = 1; // 변하는 값
        */

       /*
        const a = 1;
        let b = 2;
        const style = { width: '200px', height: '200px', backgroundColor: 'blue'}
        */

        return(
            // <div>MIRO 20181122 바뀌나?
            //     <div style = {{color: 'red', fontSize: '50px'}}>
            //         { this.state.a > this.state.b ? 'yes' : 'no'}
            //         {/* 삼항연산자 */}
            //     </div>
            //     <div>
            //         { this.state.b > this.state.a ? <div style = { this.state.style }>맞다</div> : <div>아니다</div> }
            //         {/* div에 style 적용하는 법 */}
            //     </div>
            //     <div>
            //         <button type="button" className="btn btn-dark">Dark</button>
            //         {/* class 대신 className */}
            //     <div style = {{display: 'flex', flexDirection:'column',alignItems:'column'}}>
                <div>   
                    <div>MIRO</div>
                     <Counter/>  
                </div>
                  
            //     </div>
            //     </div>
            // </div>
            // 이 안에 들어가는 건 JSX, 무조건 제대로 적고 태그 무조건 닫아줘야함.
            // div 같은 걸로 하나!로 감싸줘야함.
        )
    }
}

export default App; // App을 밖으로 꺼내준다.

// npm start 로 실행.