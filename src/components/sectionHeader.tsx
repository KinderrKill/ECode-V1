import GlitchedTitle from './shared/glitchedTitle'

type ComponentProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function SectionHeader(props: ComponentProps) {
  return (
    <section
      className='w-screen container mx-auto flex flex-col items-center text-center my-10
    after:w-1/3 after:h-1 after:bg-ecRed after:mt-10 after:rounded-md'>
      <GlitchedTitle id={props.id} value={props.title} />
      <p className='px-5 lg:w-1/2 sm:text-sm font-primary'>{props.children}</p>
    </section>
  )
}
