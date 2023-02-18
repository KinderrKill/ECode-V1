import { useEffect, useRef } from 'react'
import TypingWriter from '../tools/typingWriter'

import './_typingCodeBlock.scss'
import { APP_VERSION } from '../utils/constants'

import CMDIcon from '..//assets/command-window.svg'
import { useNavigate } from 'react-router-dom'

export function TypingCodeBloc() {
  const navigate = useNavigate()

  const typingWriterRef = useRef<HTMLParagraphElement>(null)
  let writer: TypingWriter | null = null

  useEffect(() => {
    if (typingWriterRef.current) {
      if (!writer) writer = new TypingWriter(document.getElementById('typing-writer') as HTMLParagraphElement)

      if (writer.isActive() || writer.isFinished()) return

      writer
        .type('/start welcome.txt ')
        .pauseFor(1000)
        .clear()
        .type('Bonjour et bienvenue sur mon site internet !')
        .pauseFor(700)
        .type('\nComme vous pouvez le voir, il est en construction...')
        .pauseFor(500)
        .type('\nIl sera disponible demain !')
        .pauseFor(300)
        .deleteChar(8)
        .type('la semaine prochaine...')
        .pauseFor(500)
        .deleteChar(23, 20)
        .type("'when it's ready' !")
        .pauseFor(500)
        .type('\n\n')
        .pauseFor(2000)
        .start(true)
    }
  }, [typingWriterRef])

  return (
    <section className='cmd_interface font-primary'>
      <article className='cmd_interface__header select-none'>
        <div className='ml-5 w-1/2 h-full flex items-end'>
          <span className='cmd_interface__header--tab pb-2'>
            <img
              src={CMDIcon}
              alt='Icône de console de commande'
              className='w-4 mr-3 hover:cursor-pointer'
              onClick={() => navigate('/dashboard')}
            />
            @E-Code - Invite de commande
          </span>
        </div>
        <div className='ml-5 w-1/2 h-full flex justify-end gap-2'>
          <span className='h-full px-3 text-2xl'>-</span>
          <span className='h-full px-3 text-2xl'>x</span>
        </div>
      </article>
      <article className='mt-2 ml-2 flex flex-col '>
        <span>
          Site internet E-code
          <a href='https://github.com/KinderrKill/ECode-Front/blob/main/CHANGELOG.md'> [Version {APP_VERSION}]</a>
        </span>
        <span>
          &copy; {new Date().getFullYear()} <a href='https://github.com/kinderrkill'>Etienne S</a>. Tout droits réservés
        </span>
        <div ref={typingWriterRef} id='typing-writer' className='text-white mt-5 whitespace-pre-wrap text-left'></div>
      </article>
    </section>
  )
}
