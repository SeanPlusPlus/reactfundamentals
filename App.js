import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: '',
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h3>{props.txt}</h3>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
