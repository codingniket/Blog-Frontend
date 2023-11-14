import React, { useEffect, useState } from 'react';
import { useGetUserID } from '../hooks/useGetUserID';
import axios from 'axios';

const SavedArticle = () => {
  const [savedBlog, setSavedBlog] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedArticle/${userID}`
        );
        setSavedBlog(response.data.savedBlog);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 fw-bold badge bg-primary fs-4">Saved Posts</h2>
      <div className="row">
        {savedBlog.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card border border-dark">
              <img
                src={post.imageUrl}
                alt={post.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5">{post.name}</h5>
                <p className="card-text">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedArticle;
