import React, { useState } from 'react';

import FallingCoin from './components/FallingCoin';
import coinImage from './assets/imgs/coin.gif';

import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const coinSize = 50;
  const maxCoins = Math.floor((window.innerHeight - 100) / coinSize);
  const pileXPosition = window.innerWidth / 2 - coinSize / 2;

  const handleClick = () => {
    if (coins.length >= maxCoins) return;

    const newCoin = {
      id: Date.now(),
      left: pileXPosition,
      top: window.innerHeight - (coins.length + 1) * coinSize - 20,
    };

    setCoins((prevCoins) => [...prevCoins, newCoin]);
  };

  const handleCoinRest = (id) => {
    setCoins((prevCoins) =>
      prevCoins.map((coin) =>
        coin.id === id ? { ...coin, resting: true } : coin
      )
    );
  };

  return (
    <div className="App" onClick={handleClick} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {coins.map((coin) =>
        coin.resting ? (
          <img
            key={coin.id}
            src={coinImage}
            alt="coin"
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              left: `${coin.left}px`,
              top: `${coin.top}px`,
            }}
          />
        ) : (
          <FallingCoin
            key={coin.id}
            left={coin.left}
            top={coin.top}
            size={coinSize}
            onRest={() => handleCoinRest(coin.id)}
          />
        )
      )}
      <div className="overlay">Click to drop coins!</div>
    </div>
  );
};

export default App;
