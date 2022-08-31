import Head from 'next/head';

import Education from '@/components/About/Education';
import Introduction from '@/components/About/Introduction';
import Resume from '@/components/About/Resume';
import WorkExperience from '@/components/About/WorkExperience';

function about() {
  return (
    <>
      <Head>
        <title>About Me | Taufik Hidayat</title>
      </Head>
      <Introduction />
      <Education />
      <WorkExperience />
      <Resume src='https://drive.google.com/file/d/1NJcXYr5SZNkxt03KKaiDNNYoc2_cCWBj/preview' />
    </>
  );
}

export default about;
