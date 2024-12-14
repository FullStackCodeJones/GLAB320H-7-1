export default function MovieDisplay({ movie }) {
  if (!movie) {
    return <h2>Search for a movie to see details.</h2>;
  }

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
    </div>
  );
}
