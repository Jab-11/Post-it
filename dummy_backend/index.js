const express = require("express");
const cors = require("cors");
const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();
const port = 8080;

app.use(
    cors({ origin: "https://post-it-beryl.vercel.app/", credentials: true })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

app.get("/posts", async (req, res) => {
    const storedPosts = await getStoredPosts();
    res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === req.params.id);
    res.json({ post });
});

app.post("/posts", async (req, res) => {
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
        ...postData,
        id: Math.random().toString(),
    };
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: "Stored new post.", post: newPost });
});

app.listen(port, () => {
    console.log(`STARTING SERVER ON ${port}`);
});
