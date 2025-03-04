import React from 'react';
import MusicTracks from '.Components/MusicTracks';
import Products from '.Components/Products';
import StripeWrapper from '.Components/Checkout';

export default function app() {
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <MusicTracks />
      <Products />
      <StripeWrapper />
    </div>
  );
};


