import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import AirQualityShow from './components/AirQualityShow'
import BikePointShow from './components/BikePointShow'
import TubeStatusShow from './components/TubeStatusShow'
import Navbar from './components/Navbar'
import WeatherShow  from './components/WeatherShow'

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      data: []
    }
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: { lat: latitude, lon: longitude } })
    })
  }

  render(){
    console.log(this.state)
    if(!this.state.location) return null
    return (
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/bike-point" render={() => <BikePointShow location={this.state.location} />} />
            <Route path="/air-quality" component={AirQualityShow} />
            <Route path="/tube-status" component={TubeStatusShow} />
            <Route path="/weather" component={WeatherShow} />
            <Route path="/" component={Home} />

          </Switch>
        </main>
      </Router>
    )

  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
