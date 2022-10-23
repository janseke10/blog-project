import { useRef, useState } from "react";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);
  // async function handleLogin() {
  //   const resp = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: emailRef.current?.value,
  //       password: passRef.current?.value,
  //     }),
  //   });
  //   const json = await resp.json();
  //   setMessage(json);
  // }
  return (
    <div>
      <form action="/api/login" method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" id="emailRef" name="email" required />

        <label htmlFor="passRef">Password</label>
        <input type="password" id="passRef" name="password" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
