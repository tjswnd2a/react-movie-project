import { useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  //   .then((response) => response.json())
  //   .then(json => {
  //     setMovies((json.data.movies));
  //     setLoading(false);
  //   });
  // },[]);
  const getMovies = async () => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    
  }
  useEffect(() => {
    getMovies();
  },[]);
  return (
    <div>
      <div className={styles.container}>
        {loading ?
        <div className={styles.loader}>
         <span>loading</span> 
         </div>: 
        <div className={styles.movies}> 
        {movies.map((movie) =>
          <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            sumarry={movie.sumarry} 
            genres={movie.genres}/>
          )}
        </div>}
      </div>
    </div>
  );
}

export default Home;