import PropType from "prop-types";
import {Link} from "react-router-dom"

function Movie({coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      {/* <h3><a href="/movie">{title}</a></h3> */}
      <h3><Link to="/movie">{title}</Link></h3>
      <p>{summary}</p>
      <ul>
        {genres.map( (g, index )=> <li key={index}>{g}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,

}
export default Movie;