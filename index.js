const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json')
const blogs = require('./data/blogs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Chef Stories Server");
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipe.id === id) || {}
    res.send(recipe);
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`Chef Stories Server port ${port}`)
})
