import PostList from "../components/PostList";
import {Outlet} from'react-router-dom';

function PostIt() {

  return (
    <>
    <Outlet/>
    <main>
      <PostList/>
    </main>
    </>
  );
}

export default PostIt;

export async function loader(){
  const response = await fetch("https://post-it-beta.vercel.app/posts");
  const resData = await response.json();
  return resData.posts;
}