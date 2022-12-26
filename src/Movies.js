import React from "react";
import { useEffect, useState } from "react";
import styels from "./Movies.module.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        console.log(data);

        console.log("data.data.movies");
        console.log(data.data.movies);

        setMovies(data.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <h1>영화 정보를 받아오는 중입니다.</h1> : null}
      {movies.map((item) => {
        console.log("item");
        console.log(item);
        console.log(item.title);
        console.log(item.year);

        return (
          <Movie
            key={item.key}
            id={item.id}
            title={item.title}
            img={item.medium_cover_image}
            year={item.year}
          />
        );
      })}
    </div>
  );
};

const Movie = ({ id, title, img, year }) => {
  return (
    <div className={styels.movies}>
      <Link to={`/movies/detail/${id}`}>
        <h2>{title}</h2>
      </Link>

      <img src={img}></img>
      <h4>{year}</h4>
    </div>
  );
};

export default Movies;
