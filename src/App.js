import React from 'react';
import './App.css';


const SearchBox=(props)=>{
  return(
    <div className="searchDiv">
      <label>Press Enter to Search:</label>
      <div>
        <input 
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
        />
      </div>
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



const CardList=({jedi})=>{
    const cardComponent= jedi.map((el,i)=>{
    return( 
     <Card 
        image={el.url.replace(/[^/0-9]/g,'')}
        background={el.background}
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
      backgrounds:["image0","image1","image2"],
      showMenu:false,
    }
}

handleEnter=(event)=>{
  if(event.keyCode===13){
    this.setState({searchName:event.target.value})
 }

}
handleBackspace=(event)=>{
  if(event.keyCode===8){
    this.setState({searchName:event.target.value})
  }
 
}


componentDidMount(){
    //Fetch API Data
      fetch("https://swapi.co/api/people/")
      .then(response=>response.json())
      .then(data=>this.setState({jedi:data.results}))
    //Assign Random Backgrounds to jedi
}

  render(){ 
      console.log('searchName in render() '+this.state.searchName)
      let {jedi,searchName}=this.state;
    
      let filteredJedi=jedi.filter(char=>{
         return char.name.toLowerCase().includes(searchName.toLowerCase())
      });
  
     return(
       !jedi.length?
        <p className="loading">Loading....</p>:
         <div className="App">
         <h1 className="header">Robots from Star Wars
          </h1>
          <SearchBox onKeyDown={this.handleEnter} onKeyUp={this.handleBackspace}/>
          <CardList jedi={filteredJedi}/>
        </div>
   
    )
  }
}

export default App;
