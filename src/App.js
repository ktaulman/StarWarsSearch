import React from 'react';
import './App.css';

const Card=(props)=>{
  return(
    <div className="card">
      <h1>Character</h1>
      <img src={`https://robohash.org/${props.image}?200x200`} alt={`${props.name}`}/>
      <h2>Name: {props.name}</h2>
      <h3>height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
    </div>
  )
}

const CardList=({jedi})=>{
  const cardComponent= jedi.map((el,i)=>{
     return( 
     <Card 
        image={i}
        key={el}
        name={el.name}
        height={el.height}
        mass={el.mass}
      />
        )
  })
  
  return(
    <div className="cardContainer">
    {cardComponent}
    </div>
)
}

class App extends React.Component {
constructor(){
    super();
     this.state={
      jedi:[]
    }
}


componentDidMount(){
    fetch("https://swapi.co/api/people/")
      .then(response=>response.json())
      .then(data=>this.setState({jedi:data.results}))   
}


  render(){ 
     return(
      
      <div className="App">
        <header className="header">Robots from Star Wars</header>
        <CardList jedi={this.state.jedi}/>
      </div>
    )
  }
}

export default App;
