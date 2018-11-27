// var React = require('react') //자바스크립트의 ES5로 2009년에 나온 문법
import React from 'react'; // ES6로 2015년에 나온 문법
import ReactDOM from 'react-dom';
import App from './App' // App.js를 불러옴

ReactDOM.render(<App/> , document.getElementById('root'));
// public의 index.html에서 ID가 root였음.
// 불러온 App.js를 html에 넣어줌.