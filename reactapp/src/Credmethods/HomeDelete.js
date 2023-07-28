import axios from 'axios';
import './Post.css';
import React, { useState } from 'react';

function Form1() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8082/api/v1/user/deletehome/${id}`);
      // Reset the id after successful deletion
      setId('');
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
            <form onSubmit={(event) => event.preventDefault()}>
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

              <div className="submit" style={styles.formRow}>
                <button className="bon" onClick={handleDelete}>
                  Delete
                </button>
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
