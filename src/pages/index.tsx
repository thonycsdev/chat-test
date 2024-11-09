import { ChangeEvent, useCallback, useEffect, useState } from "react";
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
  const [instance, setInstance] = useState(socket);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleConnection = (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    };

    const handleChat = (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    };
    socket.on("connection", handleConnection);
    socket.on("chat", handleChat);

    return () => {
      socket.off("connection", handleConnection);
      socket.off("chat", handleChat);
    };
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const sendMessage = () => {
    instance.emit("chat", message);
    setMessage("");
  };
  return (
    <WrapperApplication>
      <Title />
      <WrapperMessages>
        {messages.map((msg, idx) => (
          <Message key={idx}>{msg}</Message>
        ))}
      </WrapperMessages>
      <WrapperButtons>
        <Input
          value={message}
          onChange={handleOnChange}
          onSubmit={sendMessage}
        />
        <Button onClick={sendMessage}>Send message</Button>
      </WrapperButtons>
    </WrapperApplication>
  );
}
