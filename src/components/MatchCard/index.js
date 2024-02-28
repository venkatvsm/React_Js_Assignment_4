// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachItem
  const matchResult = matchStatus === 'Won' ? 'matchWon' : 'matchLose'

  return (
    <li className="MatchCard_Container">
      <img
        src={competingTeamLogo}
        className="MatchCard_image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="MatchCard_competingTeam">{competingTeam}</p>
      <p className="MatchCard_result">{result}</p>
      <p className={matchResult}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
