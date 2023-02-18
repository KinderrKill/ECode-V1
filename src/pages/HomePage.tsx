import GlitchedTitle from '../components/GlitchedTitle';
import { TypingCodeBloc } from '../components/TypingCodeBlock';

export default function HomePage() {
  return (
    <div className='z-0 w-screen h-screen flex flex-col justify-center items-center gap-32'>
      <GlitchedTitle value={'e-code'} />
      <TypingCodeBloc />
    </div>
  );
}
