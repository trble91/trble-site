const express = require('express');
const { Pool } = require('pg');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Set up CORS
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Initialize Stripe with secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Stripe payment route
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a new payment intent with the amount (in cents)
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Stripe payment error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint to check DB connection
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connected', time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Get all music tracks
app.get('/music', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM music_tracks');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching music tracks:', err);
    res.status(500).json({ error: err.message });
  }
});

// Get all products (for the merchandise store)
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: err.message });
  }
});
