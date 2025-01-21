
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Header from './Header';
import BookList from './BookList';
import { useCart } from './CartContext'; 


const Search = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { cart, addToCart } = useCart(); 

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchQuery.trim() === '') {
        setBooks([]); 
        return; 
      }

      setError(null); 
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        };

        const params = { search: searchQuery };
        const response = await axios.get('http://localhost:8000/api/books', { headers, params });

        setBooks(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch data');
      }
    };

    fetchBooks();
  }, [searchQuery]); 

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  return (
    <div>
   <section className="featured" id="featured">

      <Header onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {searchQuery && books.length > 0 && <BookList books={books} isBooksVisible={true} cart={addToCart} />} {       }
      </section>

    </div>
  );
};

export default Search;





