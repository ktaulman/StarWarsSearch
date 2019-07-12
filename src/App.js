import React from 'react';
import './App.css';

const SearchBox=(props)=>{
  return(
    <div className="searchDiv">
      <label>Search for Robots:</label>
      <div><input onChange={props.onChange}/></div>
    </div>
  )
}

const Card=(props)=>{
  
  return(
    <div className="card">
      <h1 className="h1Card">{props.name}</h1>
      <img 
      className={props.background}
      src={`https://robohash.org/${props.image}?200x200`} 
      alt={`${props.name}`}

      />
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
    </div>
  )
}



const CardList=({jedi,background})=>{
  const cardComponent= jedi.map((el,i)=>{
     return( 
     <Card 
        image={el.url.replace(/[^/0-9]/g,'')}
        background={`${background[Math.floor(Math.random()*background.length)]}`}
        key={i}
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
      jedi:[],
      searchName:'',
      background:["image0","image1","image2"]
    }
}

onSearchChange=(event)=>{
  this.setState({searchName:event.target.value})
}


componentDidMount(){
    fetch("https://swapi.co/api/people/")
      .then(response=>response.json())
      .then(data=>this.setState({jedi:data.results}))   
}


  render(){ 
      let jedi=this.state.jedi;
      let searchName=this.state.searchName;
      let background=this.state.background;
      

      let filteredJedi=jedi.filter(char=>{
          return char.name.toLowerCase().includes(searchName.toLowerCase())
      });


     return(
         <div className="App">
          <h1 className="header">Robots from Star Wars
          </h1>
          <SearchBox onChange={this.onSearchChange}/>
          <CardList jedi={filteredJedi} background={background}/>
        </div>
   
    )
  }
}

export default App;
