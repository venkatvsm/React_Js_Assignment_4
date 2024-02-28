// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplteam: [], isLoading: true}

  componentDidMount() {
    this.fetchDetailsIpl()
  }

  fetchDetailsIpl = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const details = await response.json()
    const fetchResults = details.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplteam: fetchResults, isLoading: false})
  }

  render() {
    const {iplteam, isLoading} = this.state

    return (
      <div className="bgContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="iplLogo"
            alt="ipl logo"
          />
          <h1 className="iplHeading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="teamsContainer">
            {iplteam.map(eachItem => (
              <TeamCard itemsList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
