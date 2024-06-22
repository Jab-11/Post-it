const express = require("express");
const cors = require("cors");
const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

app.get("/posts", async (req, res) => {
    let storedPosts = await getStoredPosts();
    console.log(storedPosts);
    storedPosts = storedPosts.map((post) => ({
        id: post._id,
        title: post.title,
        desc: post.desc,
        author: post.author,
    }));
    res.json(storedPosts);
});

app.get("/posts/:id", async (req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find(
        (post) => post._id.toString() === req.params.id.toString()
    );
    res.json({ post: post });
});

app.post("/posts", async (req, res) => {
    const { postData } = req.body;
    const newPost = await storePosts(postData);
    res.status(201).json({ message: "Stored new post.", post: newPost });
});

module.exports = app;
