const fs = require("fs");
const path = require("path");

async function getStoredPosts() {
    const filePath = path.join(__dirname, "posts.json");
    console.log(filePath);

    try {
        const rawFileContent = await fs.readFileSync(filePath, {
            encoding: "utf-8",
        });
        const data = JSON.parse(rawFileContent);
        const storedPosts = data.posts ?? [];
        return storedPosts;
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFileSync(filePath, JSON.stringify({ posts: [] }));
            return [];
        } else {
            throw error;
        }
    }
}

function storePosts(posts) {
    return fs.writeFileSync(
        path.join(__dirname, "posts.json"),
        JSON.stringify({ posts: posts || [] })
    );
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
