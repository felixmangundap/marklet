import { Router, Route } from 'preact-router';
import { lazy, Suspense, useEffect } from 'preact/compat';
import Helmet from 'preact-helmet';

import { useThemeStore } from './stores/useThemeStore';
import PublicRoute from './components/publicRoute';
import PrivateRoute from './components/privateRoute';
import NavBar from './components/navbar';

const Home = lazy(() => import('./pages/home'));
const Notes = lazy(() => import('./pages/notes'));

const App = () => {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //   }
  // });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
        title='Marklet'
        titleTemplate='Marklet - %s'
        defaultTitle='Lightweight Markdown Note Taking App'
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        base={{ target: '_blank', href: 'http://mysite.com/' }}
        meta={[
          { name: 'description', content: 'Marklet - Lightweight Markdown Note Taking App' },
          { property: 'og:type', content: 'article' }
        ]}
        link={[
          { rel: 'canonical', href: 'http://mysite.com/example' },
          { rel: 'icon', type: 'image/svg+xml', href: '../vite.svg' },
        ]}
      />
      <Router>
        <Route path='/' component={Home} />
        {/* <PublicRoute path='/home'>
          <Home />
        </PublicRoute>
        <PrivateRoute path='/notes'>
          <Notes />
        </PrivateRoute> */}
      </Router>
    </Suspense>
  )
};

export default App;
