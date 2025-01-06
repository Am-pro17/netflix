import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const BannerCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=007bfc25f21eb93cf93cfcf7fe8fb623&language=en-US&page=2`
        );
        const data = await response.json();
        // Filter movies with valid backdrop paths
        const filteredMovies = data.results.filter((movie) => movie.backdrop_path);
        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop through slides
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 5000, // 3 seconds per slide
    slidesToShow: 1, // One slide at a time
    slidesToScroll: 1,
  };

  return (
    <div className="carousel" style={{ width: "100%", overflow: "hidden" }}>
      {movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={movie.id}>
                <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                style={{ width: "100%", height: "100%", objectFit:"contain" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BannerCarousel;
