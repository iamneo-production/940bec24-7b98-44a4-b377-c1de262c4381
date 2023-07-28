// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8082/api/v1/user/showhome');
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Error fetching products. Please try again later.');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Products Page</h1>

//       {products.map((product) => (
//         <div key={product.id} style={{ marginBottom: '20px' }}>
//           <h2>{product.name}</h2>
//           {product.imageUrl && (
//             <img
//               src={product.imageUrl} // Use the imageUrl directly
//               alt={product.name}
//               style={{ maxWidth: '200px' }}
//             />
//           )}
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product details from the API
    axios.get('http://localhost:8082/api/v1/user/showhome')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          {product.imageUrl && (
            <img
              src={product.imageUrl} // Use the imageUrl directly
              alt={product.name}
              style={{ width: '200px', height: '200px' }}
            />
          )}
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
