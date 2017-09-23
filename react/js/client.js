import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return(
      <div className="ui positive message">
        <i className="close icon" />
        <div className="header">
          React is working with semantic ui css
        </div>
      </div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
