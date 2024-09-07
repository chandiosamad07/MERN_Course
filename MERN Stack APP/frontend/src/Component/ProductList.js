import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/Getdata');
            const result = await response.json();
            console.log(result);
            if (Array.isArray(result)) {
                setProducts(result);
            } else {
                console.warn('API did not return an array:', result);
                setProducts([]);
            }
        } catch (error) {
            console.warn('API Not Found', error);
        }
    };
    const deleteProduct = async (id) => {
        console.log('Deleting product with ID:', id); // Debugging line
        try {
            const response = await fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE' // Correct HTTP method
            });
            const result = await response.json();
            console.log('Delete result:', result); // Debugging line
            if (result) {
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    
    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>S No</li>
                <li>Name</li>
                <li>Company</li>
                <li>Actions</li>
            </ul>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.Company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            
                            <Link to={'/update/'+item._id}>Update</Link> 
                        </li>
                    </ul>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default ProductList;
