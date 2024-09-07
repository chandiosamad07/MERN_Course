import React, { useState } from 'react';

const AddProductList = () => {
    const [name, setName] = useState('');
    const [Company, setCompany] = useState('');
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(false); 

    const addProduct = async (event) => {
        event.preventDefault();

        if (!name || !Company) {
            setError('Please enter both name and company');
            return;
        }

        try {
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            let result = await fetch("http://localhost:5000/post", {
                method: 'POST',
                body: JSON.stringify({ name, Company, userId }),
                headers: {
                    'Content-Type': "application/json"
                }
            });

            result = await result.json();
            console.log('Server response:', result);

            if (result.success) {
                alert('Product added successfully!');
                setName('');
                setCompany('');
                setError('');
                
                // Trigger a re-render
                setRefresh(!refresh);
            } else {
                setError(result.message || 'Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setError('Something went wrong. Could not add the product.');
        }
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input 
                type='text' 
                placeholder='Enter product name' 
                className='input'  
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            {error && !name && <span className='invalid-input'>{error}</span>}
            
            <input 
                type='text' 
                placeholder='Enter product company' 
                className='input' 
                value={Company} 
                onChange={(e) => setCompany(e.target.value)} 
            />
            {error && !Company && <span className='invalid-input'>{error}</span>}

            <button className='button' onClick={addProduct}>Add Product</button>
        </div>
    );
}

export default AddProductList;
