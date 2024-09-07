import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState('');
    const [Company, setCompany] = useState('');
    const [error, setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                console.log(params.id)
                let result = await fetch(`http://localhost:5000/GetData/${params.id}`);
                
                if (!result.ok) {
                    throw new Error(`API request failed with status ${result.status}`);
                }

                result = await result.json();
                console.log(result)
                setName(result.name);
                setCompany(result.Company);
                console.log(name)
                console.log(Company)
                
            } catch (err) {
                console.error('Error fetching product details:', err);
            }
        };
        getProductDetails();
    }, [params.id]);

    const update = async () => {
        if (!name || !Company) {
            setError(true);
            return;
        }
        setError(false);

        try {
            let result = await fetch(`http://localhost:5000/update/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, Company }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
            navigate('/');
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input
                type='text'
                placeholder='Enter product name'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
            
            <input
                type='text'
                placeholder='Enter product company'
                className='input'
                value={Company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !Company && <span className='invalid-input'>Enter Valid Company</span>}
            
            <button className='button' onClick={update}>Update Product</button>
        </div>
    );
};

export default Update;
