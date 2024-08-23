import axios from "axios";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function PostIt() {
    return (
        <>
            <main>
                <PostList />
            </main>
            <Outlet />
        </>
    );
}

export default PostIt;

export async function loader() {
    const response = await axios.get("https://post-it-hazel.vercel.app/posts");
    // console.log(response);
    return response.data;
}
