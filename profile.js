import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Ensure this path is correct
import dunksImage from './pictures/dunks.jpeg';
import purpleImage from './pictures/purple.jpeg';
import lowsImage from './pictures/lows.jpeg';

// Sample data for shoes
const shoes = [
    {
        id: 1,
        name: 'Off-White X Dunk Low University',
        price: '$523',
        image: dunksImage,
    },
    {
        id: 2,
        name: 'Travis Scott x Air Jordan 1 Low Mocha',
        price: '$2595',
        image: lowsImage, 
    },
    {
        id: 3,
        name: 'Concepts x Dunk Low SB Purple',
        price: '$2765',
        image: purpleImage,
    },
];

// Mock user data
const mockUser = {
    id: 1,
    name: 'Antonio Salazar',
    email: 'antSal@example.com',
};

const Profile = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(mockUser);

    /**
     * Handles user logout and redirects to the login page.
     */
    const handleLogout = () => {
        // Mock logout logic
        navigate('/login'); // Redirect to the login page after logout
    };

    const addToCart = (shoe) => {
        setCart([...cart, shoe]);
    };

    // Extract the first part of the email for the user's name
    const userName = user.email.split('@')[0];

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>Welcome, {userName}!</h1>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>

            <h2>Exclusive Online Shoe Store</h2>
            <div className="shoe-list">
                {shoes.map((shoe) => (
                    <div key={shoe.id} className="shoe-item">
                        <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                        <h2 className="shoe-name">{shoe.name}</h2>
                        <p className="shoe-price">{shoe.price}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => addToCart(shoe)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name} - {item.price}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
