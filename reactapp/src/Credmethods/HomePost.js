import axios from 'axios';
import './Post.css';
import React, { useState } from 'react';

function Form1() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [imageFile, setImageFile] = useState(null); 
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id,
      name: name,
      price,
      description,
      imageUrl
    };

    try {
      const response = await axios.post('http://localhost:8082/api/v1/user/addinhome', data);
      const newProductId = response.data.id;
  
    
      const formData = new FormData();
      formData.append('image', imageFile); // Attach the image file
  
      const imageUploadResponse = await axios.post(`http://localhost:8082/api/v1/user/uploadImage/${newProductId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Image uploaded successfully!', imageUploadResponse);
      
      const formData1 = new FormData();
      formData.append('imageUrl', imageFile); // Attach the image file
  
      const imageUploadResponse1 = await axios.post(`http://localhost:8082/api/v1/user/uploadImageUrl/${newProductId}`, formData1, {

      });
  
      console.log('Image Url uploaded successfully!', imageUploadResponse1);

      setId('');
      setName('');
      setPrice('');
      setDescription('');
      setImageFile('');
      setImageUrl('');
  
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };


  return (
    <>
      <div className='ig'>
        <div className='mar'>
          <div style={styles.container}>
            <form onSubmit={handleSubmit}>
              <h1>
                <center>Post product Details</center>
              </h1>

              <div style={styles.formRow}>
                <label style={styles.label}>Enter ID:</label>
                <input
                  type="number"
                  id="id"
                  style={styles.input}
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label}>Product Name:</label>
                <input
                  type="text"
                  id="name"
                  style={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label}>Product Price:</label>
                <input
                  type="number"
                  id="count"
                  style={styles.input}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <div style={styles.formRow}>
                <label style={styles.label}>Product Description:</label>
                <input
                  type="text"
                  id="description"
                  style={styles.input}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div style={styles.formRow}>
      <label style={styles.label}>Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        style={styles.input}
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
    </div>
              <div style={styles.formRow}>
                <label style={styles.label}>Product Image:</label>
                <input
  type="file"
  accept="image/*"
  onChange={(event) => setImageFile(event.target.files[0])}
  style={styles.input}
/>
              </div>

              <div className="submit" style={styles.formRow}>
                <button className="bon">Submit</button>
              </div>
            </form>

          
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: 'rgb(205, 196, 196)',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    flex: '1',
  },
  input: {
    flex: '2',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  successMessage: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    padding: '10px',
    borderRadius: '3px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Form1;
