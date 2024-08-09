import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

interface IMessage {
  textMessage: string;
  amountOfReactions: number;
  answered?: boolean;
}

export function Message({
  textMessage,
  amountOfReactions,
  answered = false,
}: IMessage) {
  const [hasReacted, setHasReacted] = useState(false);

  function handleReactToMessage() {
    setHasReacted(true);
  }

  function handleRemoveReactToMessage() {
    setHasReacted(false);
  }

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-base text-zinc-100 data-[answered=true]:opacity-60 data-[answered=true]:pointer-events-none"
    >
      {textMessage}
      {hasReacted ? (
        <button
          type="submit"
          onClick={handleRemoveReactToMessage}
          className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
        >
          Curtiu pergunta ({amountOfReactions}) <ArrowUp className="zize-4" />
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleReactToMessage}
          className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
        >
          Curtir pergunta ({amountOfReactions}) <ArrowUp className="zize-4" />
        </button>
      )}
    </li>
  );
}
