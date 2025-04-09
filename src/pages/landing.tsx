import { route } from 'preact-router';
import Helmet from 'preact-helmet';

import Button from "../components/button";
import Container, { NavBarType } from "../components/container";

const Landing = () => {

  const navigateToAuth = () => {
    route('/authPage');
  }

  return (
    <Container navBar={NavBarType.PUBLIC}>
      <Helmet title={''} />
      <div className='p-8 flex items-center h-full w-full relative'>
        <div className='grow-2 p-8 flex flex-col items-center justify-center'>
          <div className='font-bold text-xl text-zinc-700 dark:text-zinc-50 mb-2'>a quick and simple markdown booklet</div>
          <div className='text-xl text-zinc-700 dark:text-zinc-50 mb-4'>a markdown booklet. no bloat. no distractions. just clean markdown in the cloud.</div>
          <Button label='create a marklet' onClick={navigateToAuth} />
        </div>
      </div>
    </Container>
  );
};

export default Landing;