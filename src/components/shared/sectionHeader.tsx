import GlitchedTitle from './glitchedTitle';

type ComponentProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionHeader(props: ComponentProps) {
  return (
    <section
      className='w-screen container mx-auto z-10 flex flex-col items-center text-center py-10
    after:w-1/3 after:h-1 after:bg-ecRed after:mt-10 after:rounded-md after:z-10'>
      <GlitchedTitle id={props.id} value={props.title} />
      <p className='px-5 lg:w-1/2 font-primary z-10'>{props.children}</p>
    </section>
  );
}
