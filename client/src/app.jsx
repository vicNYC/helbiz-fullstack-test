import React, {Component} from 'react';
import {render} from 'react-dom';
const fetch = require('node-fetch')
import Charting from './Table'


class App extends Component{
    
    constructor(props){
        super(props)
        this.state={
            bikeDisplay:"hello",
            oneBike:{bike_id: 'TBD',
                    lat: 0,
                    lon: 0,
                    is_reserved: 0,
                    is_disabled: 0,
                    vehicle_type: 'scooter'},
                    }
        this.handleRefresh= this.handleRefresh.bind(this)
        this.retrieveAll= this.retrieveAll.bind(this)
        this.bikeFinder = this.bikeFinder.bind(this)
    }

// fetching 

//individual bike search
bikeFinder(event){
  let sendObj= {"bike_id": "Y3U3"}
  console.log(this.state.oneBike)
  event.preventDefault();
    fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `query bikeFinder($bike_id: ID!){
      bike(bike_id:$bike_id){
        bike_id
        lat
        lon
        is_reserved
        is_disabled
        vehicle_type
       
        
      }
    }`,variables: sendObj }),
   
  })
    .then(res => res.json())
    
    .then(data=> this.setState({oneBike:data.data.bike[0]}))
    .then(console.log(this.state.oneBike))

   
  
    }

// Refresh Data From Helbiz API
handleRefresh(){
  console.log('you have clicked the handleRefresh Button')
  console.log(this.state.bikeDisplay)
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
     
    let quickAccess= this.state.bikeDisplay
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

isReserved(a){
  return(a ===0 ? "available to be reserverd" : "unavailable to be reserver")
}


is_disabled(a){
  return(a ===0 ? "working condition" : "Needs Service")
}


    render(){
        return(
            <div>
              <h1>
          Helbiz Vehicle Status
              </h1>
          <form onSubmit= {this.bikeFinder}>
                <input placeholder = "search bike_id"/>
                <button type="submit"> Submit</button>
            </form>
          <h3>STATUS: {this.state.oneBike.vehicle_type} with id: {this.state.oneBike.bike_id} is in {this.is_disabled(this.state.oneBike.is_disabled)} and is {this.isReserved(this.state.oneBike.is_reserved)}. The current location is: ({this.state.oneBike.lat}, {this.state.oneBike.lon}) (Latitude, Longitude)</h3>  
          <button onClick={this.handleRefresh}>Refresh from API  </button>
          <button onClick={this.retrieveAll}> Retrieve All Bikes with Graphql</button>
              <Charting {...this.state.bikeDisplay}/> 
            </div>
        )
    }
}

render(<App/>, document.querySelector('#root'))
