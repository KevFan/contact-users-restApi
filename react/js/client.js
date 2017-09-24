import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

// Get app element in index.html and render the layout component
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
