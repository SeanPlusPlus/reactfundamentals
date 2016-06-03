import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>Hell World</h1>
        <h3>{txt}</h3>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: 'this is the default'
}

ReactDOM.render(
  <App cat={42} />,
  document.getElementById('app')
)
