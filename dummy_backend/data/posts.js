const Post = require("./posts.model");

async function getStoredPosts() {
    try {
        const storedPosts = await Post.find();
        return storedPosts.reverse();
    } catch (error) {
        console.log(error);
    }
}

async function storePosts(posts) {
    let post;
    console.log(posts);
    try {
        post = await Post.create(posts);
    } catch (error) {
        console.log(error);
    }
    return post;
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
