import { ChangeEvent, useEffect, useState } from "react";
import { socket } from "../../socket";
export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    socket.on("connection", (id: string) => {
      console.log(id);
      setMessages((x) => [...x, id]);
    });

    socket.on("chat", (msg: string) => {
      console.log(msg);
      setMessages((x) => [...x, msg]);
    });
  }, []);

  function sendMessage() {
    console.log("emiited");
    socket.emit("chat", message);
  }
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <input type="text" onChange={handleOnChange} />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}
