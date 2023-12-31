import React, { useState, useEffect } from 'react';
import './NewCollections.css';
import Item from './Item';
import { useRouter } from 'next/navigation'
import { Typography } from '@mui/material';

const NewCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('http://localhost:8000/listings') // Assuming getlistings_1.json is in the public folder
      .then(response => response.json())
      .then(data => {
        setCollections(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was an error fetching the collections:', error);
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW LISTINGS</h1>
      <hr />
      
      
        <div className="user-listings">
          {collections.map((item,i) => (
            <Typography>ur mom</Typography>
          ))}
        </div>
      
    </div>
  );
}

export default NewCollections;