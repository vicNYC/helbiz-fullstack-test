import React, {Component} from 'react';
import {render} from 'react-dom';
const fetch = require('node-fetch')
import Charting from './Table'


var quickAccess ="hello123"
class App extends Component{
    
    constructor(props){
        super(props)
        this.state={
            bikeDisplay:"hello",
            oneBike:"",
            label:['hello','there']
        }
        this.handleRefresh= this.handleRefresh.bind(this)
        this.retrieveAll= this.retrieveAll.bind(this)
        this.bikeFinder = this.bikeFinder.bind(this)
        // this.items=this.items.bind(this)
        // this.handleTime =this.handleTime.bind(this)
    }

// fetching 


bikeFinder(bike_id){
  
    event.preventDefault();
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      query bikeFinder($bike_id: ID!){
  bike(bike_id:$bike_id){
    bike_id
    lat
    lon
    is_reserved
    is_disabled
    vehicle_type
   
  }
}`,variables:{bike_id} }),
     
    })
      .then(res => res.json())
      
      // .then(data=> this.setState({oneBike:data}))
       
    // quickAccess= this.state.oneBike
  // console.log(this.state.oneBike)
  
    }






handleRefresh(){
  console.log('you have clicked the handleRefresh Button')
  console.log(this.state.bikeDisplay)
}


onSubmitlabel(){
  event.preventDefault();
  // console.log(this.labelInput.value)
  console.log(this.state.label)
  const tempState=this.state.label
  
  tempState.push(this.labelInput.value)
  console.log(this.state.label)
  this.setState({tempState})
  console.log(this.state)

}

retrieveAll(){
  event.preventDefault();
  fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{allbikes{
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }}` }),
   
  })
    .then(res => res.json())
    
    .then(data=> this.setState({bikeDisplay:data}))
     
  quickAccess= this.state.bikeDisplay
console.log(this.state.bikeDisplay)
console.log(quickAccess)
  }

  
componentDidMount(){

  fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{allbikes{
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }}` }),
   
  })
    .then(res => res.json())
    
    .then(data=> this.setState({bikeDisplay:data}))
    .then(console.log(this.state.bikeDisplay))  





}





    render(){
        return(
            <div>
              <h1>
          Getting Closer!!
          
          <form onSubmit= {this.bikeFinder}>
                <input placeholder = "gimme a string"/>
                <button> Enter</button>
            </form>
          <button onClick={this.handleRefresh}>Most recent refresh time  </button>
          <button onClick={this.retrieveAll}> retrieve all bikes</button>
       
              </h1>
                  
              <Charting {...this.state.bikeDisplay}/> 
            </div>
        )

    }
}

export{quickAccess}
render(<App/>, document.querySelector('#root'))
