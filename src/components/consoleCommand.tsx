import { useEffect, useRef } from 'react';
import TypingWriter from '@/tools/typingWriter';
import { APP_VERSION } from '@/utils/constants';

import './_consoleCommand.scss';

export function ConsoleCommand() {
  const consoleCommandRef = useRef<HTMLDivElement>(null);

  // MouseEvent for rotate content panel
  useEffect(() => {
    const panel = document.querySelector<HTMLDivElement>('.console-command');
    if (!panel) return;

    window.onmousemove = (e) => {
      rotatePanel(e, panel);
    };

    function rotatePanel(event: MouseEvent, element: HTMLDivElement) {
      const x = event.clientX;
      const y = event.clientY;

      const middleX = window.innerWidth / 3;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 20;
      const offsetY = ((y - middleY) / middleY) * 20;

      element.style.setProperty('--rotateX', offsetX + 'deg');
      element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
    }
  }, []);

  const typingWriterRef = useRef<HTMLParagraphElement>(null);
  let writer: TypingWriter | null = null;

  useEffect(() => {
    if (typingWriterRef.current) {
      if (!writer) writer = new TypingWriter(document.getElementById('typing-writer') as HTMLParagraphElement);

      if (writer.isActive() || writer.isFinished()) return;

      writer
        .type('/start welcome.txt ')
        .pauseFor(1000)
        .clear()
        .type('Bonjour et bienvenue sur mon site internet !')
        .pauseFor(700)
        .type('\nLe site est encore en cours de développement...')
        .pauseFor(300)
        .type('\nJe compte intégrer pas mal de petites choses: articles, vidéos etc.')
        .pauseFor(500)
        .type('\nTout sera disponible demain !')
        .pauseFor(300)
        .deleteChar(8)
        .type('la semaine prochaine...')
        .pauseFor(500)
        .deleteChar(23, 20)
        .type("'when it's ready' !")
        .pauseFor(500)
        .type('\n\n')
        .pauseFor(2000)
        .start(true);
    }
  }, [typingWriterRef]);

  return (
    <div className='console-command' ref={consoleCommandRef}>
      <div className='brand'>
        <div className='brand__dot'>
          <span className='brand__dot dot-red'></span>
          <span className='brand__dot dot-orange'></span>
          <span className='brand__dot dot-green'></span>
        </div>
      </div>
      <div className='content'>
        <span>E-Code - Version {APP_VERSION}</span>
        <p>&copy; {new Date().getFullYear()} Étienne S. Tout droits réservés</p>
        <div ref={typingWriterRef} id='typing-writer' className='text-gray-300 mt-5 whitespace-pre-wrap'></div>
      </div>
    </div>
  );
}
