// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchTable: [], isLoading: true}

  componentDidMount() {
    this.fetchDetails()
  }

  fetchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const details = await response.json()
    const fetchDetailsList = {
      teamBannerUrl: details.team_banner_url,
      latestMatchDetails: {
        competingTeam: details.latest_match_details.competing_team,
        competingTeamLogo: details.latest_match_details.competing_team_logo,
        date: details.latest_match_details.date,
        firstInnings: details.latest_match_details.first_innings,
        id: details.latest_match_details.id,
        manOfTheMatch: details.latest_match_details.man_of_the_match,
        matchStatus: details.latest_match_details.match_status,
        result: details.latest_match_details.result,
        secondInnings: details.latest_match_details.second_innings,
        umpires: details.latest_match_details.umpires,
        venue: details.latest_match_details.venue,
      },
      recentMatch: details.recent_matches.map(items => ({
        competingTeam: items.competing_team,
        competingTeamLogo: items.competing_team_logo,
        date: items.date,
        firstInnings: items.first_innings,
        id: items.id,
        manOfTheMatch: items.man_of_the_match,
        matchStatus: items.match_status,
        result: items.result,
        secondInnings: items.second_innings,
        umpires: items.umpires,
        venue: items.venue,
      })),
    }
    this.setState({matchTable: fetchDetailsList, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {matchTable} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchTable
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bgColor = id
    return (
      <div className={`teamMatch_cardContainer ${bgColor}`}>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="teamMatch_Image"
        />
        <h1 className="teamMatch_heading">Latest Matches</h1>
        <div className="TeamMatch_LatestMatch_Container">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        {this.renderRecentMatch()}
      </div>
    )
  }

  renderRecentMatch = () => {
    const {matchTable} = this.state
    const {recentMatch} = matchTable
    return (
      <ul className="recentMatchContainer">
        {recentMatch.map(eachItem => (
          <MatchCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="teamMatch_Container">
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
