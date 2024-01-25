import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie.jsx'
import AddMovieForm from './AddMovieForm.jsx'

function App() {
  const [movies, setMovies] = useState([])

  function getMovies() {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addMovie(newMovie) {
    axios.post("/api/movies", newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteMovie(movieId) {
    axios.delete(`/api/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err))
  }

  function editMovie(updates, movieId) {
    axios.put(`/api/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  function handleFilter(e) {
    axios.get(`/api/movies/search/genre?genre=${e.target.value}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <div className="movie-container">
        <AddMovieForm 
          submit={addMovie}
          btnText="Add Movie"
        />

        <h4>Filter by Genre</h4>
        <select onChange={handleFilter} className="filter-form">
          <option>- Select a Genre -</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="musical">Musical</option>
        </select>

        { 
          movies.map(movie => 
            <Movie 
              {...movie} 
              key={movie.title}
              deleteMovie={deleteMovie}
              editMovie={editMovie}
            />
          )
        }
      </div>
    </div>
  )
}

export default App
