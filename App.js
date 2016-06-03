import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>State:</h1>
        <h3>{this.state.txt}</h3>
        <h3>{this.state.cat}</h3>
        <hr />
        <h1>Props:</h1>
        <h3>{txt}</h3>
        <h3>{cat}</h3>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: 'this is the props txt'
}

ReactDOM.render(
  <App cat={42} />,
  document.getElementById('app')
)
