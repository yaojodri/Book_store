
import React, { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios';
import BookList from './BookList';

const Genre = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isBooksVisible, setIsBooksVisible] = useState(false);

  const fetchBooks = async (genre = null, query = null) => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };

      const params = {};
      if (query) {
        params.search = query;
      }
      if (genre) {
        params.genre = genre;
      }

      const response = await axios.get('http://localhost:8000/api/books', {
        headers,
        params
      });

      setBooks(response.data);
      setIsBooksVisible(true);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch data');
    }
  };

  const fetchAllBooks = useCallback(async () => {
    setError(null);
    await fetchBooks(); 
  }, []); 

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]); 

  const handleGenreClick = (genre) => {
    fetchBooks(genre); 
  };

  return (
    <div>     
      <section className="featured" id="genre">
        <h1 className="heading"><span>Genre</span></h1>

        <div className="genre-buttons">
          <button className="gen-btn" onClick={fetchAllBooks}>View All Books</button>
          <button className="gen-btn" onClick={() => handleGenreClick('adventure')}>Adventure</button>
          <button className="gen-btn" onClick={() => handleGenreClick('featured')}>Featured</button>
          <button className="gen-btn" onClick={() => handleGenreClick('science fiction')}>Science Fiction</button>
          <button className="gen-btn" onClick={() => handleGenreClick('philosophy')}>Philosophy</button>
          <button className="gen-btn" onClick={() => handleGenreClick('business')}>Business</button>
        </div>

        <BookList books={books} error={error} isBooksVisible={isBooksVisible} />
        
      </section>
    </div>
  );
};

export default Genre;



