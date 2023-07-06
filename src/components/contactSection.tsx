import SectionHeader from './shared/sectionHeader';
import maltLogo from '../assets/images/malt-logo.webp';

export default function ContactSection() {
  return (
    <>
      <div className='background-image'>
        <SectionHeader id='contactMe' title='Travaillons ensemble'>
          Je suis disponible pour discuter de tout type de projet, de la création de sites web à la conception
          d'applications mobiles. Je suis impatient de travailler avec vous et de vous aider à réaliser votre projet
          avec succès
        </SectionHeader>
        {/* FORM */}
        <section className='pb-10'>
          <a href='https://www.malt.fr/profile/etiennesauvage' className='container mx-auto'>
            <img src={maltLogo} alt='' className='container mx-auto w-80 rounded-lg' />
          </a>
        </section>
      </div>
    </>
  );
}
