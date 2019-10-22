import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    console.log('myImage')
    return (
      <div className="App">
        <Image myImage={'https://i.ytimg.com/vi/JSJY1o2bm_M/maxresdefault.jpg'}/>
      </div>
    );
  }
}

export default App;
