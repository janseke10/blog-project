import { useRef } from "react";

export default function NewPost() {
  // const emailRef = useRef<HTMLInputElement>(null)
  // const passRef = useRef<HTMLInputElement>(null)
  // async function handleNewPost() {
  //   const resp = await fetch("http://localhost:3000/api/newPost", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  // 	    title: , content, created_at, published_at, author_id
  //       email: emailRef.current?.value,
  //       password: passRef.current?.value,
  //     }),
  //   });
  //   const json = await resp.json();
  //   setMessage(json);

  return (
    <form action="/api/newPost" method="post">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">Content</label>
      <input type="text" id="content" name="content" />
      <button type="submit">Submit</button>
    </form>
  );
}
