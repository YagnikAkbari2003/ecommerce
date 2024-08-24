import React, { useState, useEffect } from 'react';

function DiscountPopup({ accessCode, setDiscountPop, setAccessCode }) {
    const [isVisible, setIsVisible] = useState(false);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        if (accessCode && accessCode.length >= 2) {
            // Extract the last 2 digits of the access code and use it as the discount percentage
            const discountValue = parseInt(accessCode.slice(-2), 10);
            setDiscount(discountValue);
        }
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Hide after 5 seconds
        setAccessCode('');
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;
    const handleClose = () => {
        setIsVisible(false);
        setDiscountPop(false);
    }
    return (
        <div className="discount-popup">
            <div className="discount-content">
                <h2>Hurray!</h2>
                <p>You got a discount of {discount}% on your next order!</p>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default DiscountPopup;