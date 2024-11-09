import { ChangeEvent, useEffect, useState } from "react";
import { socket } from "../../socket";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import Title from "@/components/ui/Title/Title";
import WrapperApplication, {
  WrapperButtons,
  WrapperMessages,
} from "@/components/ui/Wrapper/WrapperApplication";
import Message from "@/components/ui/Messages/Message";
export default function Home() {
  const [messages, setMessages] = useState<string[]>(["Anthony", "Palloma"]);
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
    <WrapperApplication>
      <Title />
      <WrapperMessages>
        {messages.map((msg, idx) => (
          <Message key={idx}>{msg}</Message>
        ))}
      </WrapperMessages>
      <WrapperButtons>
        <Input onChange={handleOnChange} />
        <Button onClick={sendMessage}>Send message</Button>
      </WrapperButtons>
    </WrapperApplication>
  );
}
