import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import PostIt, { loader as postLoader } from "./routes/PostIt";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import RootLayout from "./routes/RootLayout";

import LoginPage from "./routes/login/LoginPage";
import SignupPage from "./routes/signup/SignupPage";
import { AuthProvider } from "./contexts/authContext/index";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />
//   },
//   {
//     path: "/login",
//     element: <LoginPage />
//   },
//   {
//     path: "/posts",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/posts",
//         element: <PostIt />,
//         loader: postLoader,
//         children: [
//           { path: "/posts/create-post", element: <NewPost />, action: newPostAction },
//           { path: "/posts/:postId", element: <PostDetails />, loader: postDetailsLoader }
//         ]
//       }
//     ]
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />
//   },
//   {
//     path: "*",
//     element: <LoginPage />
//   }
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="posts" element={<RootLayout />}>
                <Route element={<PostIt />} loader={postLoader}>
                    <Route
                        path="create-post"
                        element={<NewPost />}
                        action={newPostAction}
                    />
                    <Route
                        path=":postId"
                        element={<PostDetails />}
                        loader={postDetailsLoader}
                    />
                </Route>
            </Route>
            <Route path="*" element={<LoginPage />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);