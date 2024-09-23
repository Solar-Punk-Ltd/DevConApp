import React from 'react';
import "./Message.scss";
import { MessageData } from 'swarm-decentralized-chat';
import AvatarMonogram from '../../AvatarMonogram/AvatarMonogram';
import { useGlobalState } from '../../../GlobalStateContext';
import LikeIcon from '../../icons/LikeIcon/LikeIcon';

interface MessageProps {
    data: MessageData;
    threadId: string;
}

const Message: React.FC<MessageProps> = ({
    data,
    threadId,
}) => {
  const { monogram } = useGlobalState();
  const mockMonogram = "OP";

  return (
    <div className="message">
      <div className="message__left-side">
        <AvatarMonogram letters={mockMonogram} />
      </div>
      <div className="message__right-side">
        <p className="message__right-side__username">{data.username}</p>
        <p className="message__right-side__text">{data.message}</p>
        <div className="message__right-side__message-controls">
          <LikeIcon />
          <p>{"reply"}</p>
        </div>
      </div>
    </div>
  )
}

export default Message;