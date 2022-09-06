import express from 'express';
import user from './userRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "User registration" });
    })

    app.use(express.json(), user)
}

export default routes;