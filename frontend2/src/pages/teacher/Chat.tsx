import { MoreVertical, Phone, Search } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useEffect, useRef } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import {
  addMessage,
  fetchChat,
  fetchMessages,
} from "../../redux/features/chat.slice";
import { useSelector } from "react-redux";
import { IMessage } from "../../utils/types";

interface IProps {
  message: IMessage;
}
const Message = ({ message }: IProps) => {
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-col items-end">
        <span className="bg-blue-500 rounded-xl p-2 text-white">
          {message.content}
        </span>
        <span className="text-xs">{message.createdAt}</span>
      </div>
    </div>
  );
};

/* eslint-disable no-empty-pattern */
interface IProps {}
const ChatPage = ({}: IProps) => {
  const messageRef = useRef<HTMLInputElement>(null);

  const { messages, loading, chat, error } = useSelector(
    (state: RootState) => state.chat
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChat());

    const realtimeFetch = setInterval(() => {
      dispatch(fetchMessages());
    }, 2000);

    return () => {
      clearInterval(realtimeFetch);
    };
  }, [dispatch]);

  // Start handlers ----------------------------------------------------------------------
  const handleSendMessage = () => {
    const message = messageRef.current?.value;
    if (!message) return;

    dispatch(addMessage({ message }));
    messageRef.current!.value = "";
  };

  return (
    <div className="px-40 pt-12 min-h-screen flex flex-col ">
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2">
          <img src="" alt="" className="h-10 w-10 bg-red-300 rounded-full" />
          <div className="flex flex-col">
            <span>module teacher</span>
            <span>last seen 5 mins ago</span>
          </div>
        </div>
        <div></div>
        <div className="flex space-x-4">
          <Phone />
          <Search />
          <MoreVertical />
        </div>
      </div>
      <div>
        {messages?.map((message) => {
          return <Message key={message?._id} message={message} />;
        })}
      </div>
      <div className="align-bottom flex space-x-1 items-center">
        <Input ref={messageRef} />
        <Button size={"default"} onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};
export default ChatPage;
