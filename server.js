import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const html = `<div id="root">${app}</div>`;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});