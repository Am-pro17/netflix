import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Banner() {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const apiKey = '007bfc25f21eb93cf93cfcf7fe8fb623'; // Replace with your TMDb API key

        // Fetch popular movies to get a random movie ID
        const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const randomMovie =
          popularResponse.data.results[
            Math.floor(Math.random() * popularResponse.data.results.length)
          ];

        setMovieTitle(randomMovie.title);

        // Fetch trailer for the random movie
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}`
        );
        const youtubeTrailer = trailerResponse.data.results.find(
          (video) => video.site === 'YouTube' && video.type === 'Trailer'
        );

        if (youtubeTrailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${youtubeTrailer.key}?autoplay=1&mute=1&loop=2&playlist=${youtubeTrailer.key}&controls=0&rel=0&modestbranding=0&showinfo=0&iv_load_policy=0&disablekb=0`);
        } else {
          console.error('No trailer available for this movie.');
        }
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData();
  }, []);

  return (
<div className='banner' style={{ position: 'relative', height: '120vh', overflow: 'hidden' }}>
  {/* Replace movieTitle below if you want to display a title */}
  <h1 style={{ color: 'white', position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
    {movieTitle}
  </h1>
  {trailerUrl && (
    <iframe
      width="100%"
      height="100%"
      src={`${trailerUrl}?autoplay=1&loop=1&playlist=${trailerUrl.split('/').pop()}&controls=0&rel=0&modestbranding=1&showinfo=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{ position: 'absolute', top: -150, left: 0 }}
    ></iframe>
  )}
</div>

  );
}

export default Banner;
