const fs = require("fs");

async function getStoredPosts() {
    const rawFileContent = await fs.readFileSync("dummy_backend/posts.json", {
        encoding: "utf-8",
    });
    console.log(data);
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
}

function storePosts(posts) {
    return fs.writeFileSync(
        "dummy_backend/posts.json",
        JSON.stringify({ posts: posts || [] })
    );
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
