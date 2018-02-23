class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'何する？',
    };
  }


  hundleNameChange(e){
    this.setState({name:e.target.value});
  }

  render(){
    return(
      <h1>
       <input type="text" value={this.state.name} onChange={(e)=>this.hundleNameChange(e)} />
       <Greeting name={this.state.name}/>
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
