// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <>
      <div className="latestMatch_Details_container">
        <div className="latestMatch_container">
          <p className="latestMatch_competingTeam">{competingTeam}</p>
          <p className="latestMatch_date">{date}</p>
          <p className="latestMatch_venue">{venue}</p>
          <p className="latestMatch_result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latestMatch_Details_logo"
        />
      </div>
      <hr />
      <div className="latestMatch_inningsContainer">
        <p className="latestMatch_date">First Innings</p>
        <p className="latestMatch_date">{firstInnings}</p>
        <p className="latestMatch_date">Second Innings</p>
        <p className="latestMatch_date">{secondInnings}</p>
        <p className="latestMatch_date">Man Of The Match</p>
        <p className="latestMatch_date">{manOfTheMatch}</p>
        <p className="latestMatch_date">Umpires</p>
        <p className="latestMatch_date">{umpires}</p>
      </div>
    </>
  )
}
export default LatestMatch
