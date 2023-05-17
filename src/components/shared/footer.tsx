import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import discordIcon from '../../assets/icons/discord.svg';

interface SocialNetwork {
  icon: string;
  link: string;
  alt: string;
}

export default function Footer() {
  const socialNetwork = [
    {
      icon: githubIcon,
      link: 'https://github.com/KinderrKill/',
      alt: 'Github Icon by Font Awesome',
    },
    {
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/etienne-sauvage-840292b4/',
      alt: 'Linkedin Icon by Luc Chaffard on IconScout',
    },

    {
      icon: youtubeIcon,
      link: 'https://www.youtube.com/@KinderrKill',
      alt: 'Youtube Logo Icon by Juraj Sedlák on IconScout',
    },
    {
      icon: discordIcon,
      link: 'https://discord.gg/x2WwPnYk5c',
      alt: 'Discord Logo Icon by Icon Mafia on IconScout',
    },
  ];

  return (
    <div className='bg-third pb-3 flex flex-col items-center justify-center'>
      <div className='flex gap-10 my-5'>
        {socialNetwork.map((item: SocialNetwork, index: number) => (
          <a href={item.link} key={index} className='hover:scale-105 transition-all'>
            <img src={item.icon} alt={item.alt} className='w-8 h-8 rounded-lg' />
          </a>
        ))}
      </div>
      <span>
        Crafted with &#10084; by <a href='https://github.com/KinderrKill'>Étienne S.</a>| Design par{' '}
        <a href='https://gioco-design.fr/'>Gioco</a>
      </span>
    </div>
  );
}
