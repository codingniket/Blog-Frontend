import React, { useEffect, useState } from 'react';
import { useGetUserID } from '../hooks/useGetUserID';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [savedArticle, setsavedArticle] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blog');
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchsavedArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/blog/savedArticle/ids/${userID}`
        );
        setsavedArticle(response.data.savedArticle);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
    fetchsavedArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const saveRecipe = async (blogID) => {
  //   try {
  //     const response = await axios.put('http://localhost:3001/blog', {
  //       blogID,
  //       userID,
  //     });
  //     setsavedArticle(response.data.savedArticle);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const isRecipeSaved = (id) => savedArticle.includes(id);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 fw-bold badge bg-primary fs-4">All Posts</h2>
      <div className="row">
        {posts.map((post) => (
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
              {/* <button
                className="btn btn-warning text-dark border border-dark m-2 fw-bolder"
                onClick={() => saveRecipe(post._id)}
                disabled={isRecipeSaved(post._id)}
              >
                {isRecipeSaved(post._id) ? 'Saved' : 'Save'}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
