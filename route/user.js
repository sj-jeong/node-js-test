import express from 'express';

export default function route() {
  return express.Router()
    //main
    .get('/', (req, res) => {
      res.send('user main');
    })
    .get('/load', (req, res) => {
      res.send('load user main');
    });
};
