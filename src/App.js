import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Popup} from './components/popup/popup.component'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 47,
      isPopoverOpen: false
    };
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProp) => {
        return {
          meaningOfLife: prevState.meaningOfLife + prevProp.incr
        };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };

  handlePopupClick = (e) =>{
    this.setState(
      (prevState, prevProp) => {
        return {
          isPopoverOpen: !prevState.isPopoverOpen 

        };
      },
      () => console.log('My state: '+this.state.isPopoverOpen)
    );
 
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>

          <button onClick={this.handleClick}>Meaning of Life</button>
        </header>

        <Popup isPopup ={this.state.isPopoverOpen} mycontent={<h1>This is some content in HTML</h1>} handlePopClick = {this.handlePopupClick} />
       
      </div>
    );
  }
}

export default App;
