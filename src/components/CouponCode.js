import React, { useState } from 'react';
import '../components/AccessCodeEntry.css';
import DiscountPopup from './DiscountPopup';
import Confetti from 'react-confetti'

function AccessCodeEntry() {
    const [accessCode, setAccessCode] = useState('');
    const [discountPopup, setDiscountPop] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDiscountPop(true);
    };

    return (
        <>{
            discountPopup &&
            <>
                <DiscountPopup setDiscountPop={setDiscountPop} accessCode={accessCode} setAccessCode={setAccessCode} />
            </>
        }
            <div className="access-code-container">
                <h2>COUPON CODE</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        placeholder="Your code"
                    />
                    <button type="submit" className='button-GO'>GO</button>
                </form>
            </div>
        </>
    );
}

export default AccessCodeEntry;