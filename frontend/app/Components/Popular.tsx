import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from './Item';

const Popular = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch('/getlistings_1.json') // Assuming getlistings_1.json is in the public folder
      .then(response => response.json())
      .then(data => {
        setCollections(data);
      })
      .catch(error => {
        console.error('There was an error fetching the collections:', error);
      });
  }, []);

  return (
    <div className='popular'>
      <h1>WOMENS CLOTHING</h1>
      <hr />
      {/*<div className="popular-item"> */}
      <div className="user-listings">
        ur mom
      </div>
    </div>
  );
}

export default Popular;