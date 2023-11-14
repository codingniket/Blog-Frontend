import React, { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const CreateArticle = () => {
  const userID = useGetUserID();
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies(['access_token']);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    userOwner: userID,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        'http://localhost:3001/blog',
        { ...formData },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert('Article Created');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2
              className="text-center mb-4 fw-bold"
              style={{ fontSize: '24px' }}
            >
              Create Article
            </h2>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>

            <div className="container d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary btn-block mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
