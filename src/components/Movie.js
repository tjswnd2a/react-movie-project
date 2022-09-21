import PropType from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title}  className={styles.movie__img}/>
      {/* <h3><a href="/movie">{title}</a></h3> */}
      <h3 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h3>
      <p>{summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map( (g, index )=> <li key={index}>{g}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id : PropType.number.isRequired,
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,

}
export default Movie;