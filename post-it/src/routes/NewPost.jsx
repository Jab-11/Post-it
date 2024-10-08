import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import axios from "axios";

import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="desc" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link type="button" to="..">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const title = formData.get("title");
    const desc = formData.get("desc");
    const author = formData.get("author");

    try {
        const res = await axios.post("https://post-it-hazel.vercel.app/posts", {
            postData: {
                title,
                desc,
                author,
            },
        });
    } catch (error) {
        console.log(error);
    }

    return redirect("/posts");
}
