// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemsList} = props
  const {id, name, teamImageUrl} = itemsList
  return (
    <Link to={`/team-matches/${id}`} className="linkcontainer">
      <li className="itemsListcontainer">
        <img src={teamImageUrl} alt={name} className="teamImage" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
