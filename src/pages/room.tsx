import { useParams } from 'react-router-dom';
import amaLogo from '../assets/ama-logo.svg';
import { ArrowRight, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { Message } from '../components/message';

export function Room() {
  const { roomId } = useParams();

  function handleShareRoom() {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.info('The Room URL was copied to your clipboard');
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="Ask Me Anything Logo" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-orange-400">{roomId}</span>
        </span>

        <button
          type="submit"
          onClick={handleShareRoom}
          className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 flex items-center gap-1.5 rounded-lg font-medium text-sm duration-200 transition-colors ease-in-out hover:bg-zinc-900"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form className="flex items-center gap-2 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta"
          autoComplete="off"
          className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
        />

        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 flex items-center gap-1.5 rounded-lg font-medium text-sm duration-200 transition-colors ease-in-out hover:bg-orange-500"
        >
          Criar Pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8 ">
        <Message
          textMessage="O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?"
          amountOfReactions={215}
          answered
        />
        <Message
          textMessage="Como funcionam as goroutines em GoLang e por que elas são importantes para a concorrência e paralelismo?"
          amountOfReactions={187}
        />

        <Message
          textMessage="Quais são as melhores práticas para organizar o código em um projeto GoLang, incluindo pacotes, módulos e a estrutura de diretórios?"
          amountOfReactions={90}
        />

        <Message
          textMessage="Como fazer a depuração de programas GoLang e quais ferramentas são recomendadas para isso?"
          amountOfReactions={46}
        />

        <Message
          textMessage="Quais são os primeiros passos para começar a programar em GoLang, incluindo a instalação do ambiente de desenvolvimento, configuração e execução do primeiro programa?"
          amountOfReactions={27}
        />

        <Message
          textMessage="Como funciona o gerenciamento de memória em GoLang, incluindo a coleta de lixo (garbage collection)? Quais são as implicações de desempenho e como otimizar o uso de memória em programas Go? Quais são as diferenças entre alocação na stack e no heap, e como essas diferenças afetam a eficiência do programa?"
          amountOfReactions={8}
        />
      </ol>
    </div>
  );
}
