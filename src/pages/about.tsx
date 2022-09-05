import { NextSeo } from 'next-seo';

import Education from '@/components/About/Education';
import Introduction from '@/components/About/Introduction';
import Resume from '@/components/About/Resume';
import WorkExperience from '@/components/About/WorkExperience';

const About = () => {
  return (
    <>
      <NextSeo title='About Me' />
      <Introduction />
      <Education />
      <WorkExperience />
      <Resume link='https://drive.google.com/file/d/1NJcXYr5SZNkxt03KKaiDNNYoc2_cCWBj' />
    </>
  );
};

export default About;
