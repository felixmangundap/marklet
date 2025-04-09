import { Router } from 'preact-router';
import { lazy, Suspense, useEffect } from 'preact/compat';
import Helmet from 'preact-helmet';

import { useThemeStore } from './stores/useThemeStore';
import PublicRoute from './components/publicRoute';
import PrivateRoute from './components/privateRoute';
import Editor from './pages/editor';
import AuthPage from './pages/auth';

const Landing = lazy(() => import('./pages/landing'));
const Notes = lazy(() => import('./pages/notes'));

const App = () => {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
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
        title='a markdown booklet'
        titleTemplate='marklet - %s'
        defaultTitle='Lightweight Markdown Note Taking App'
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        base={{ target: '_blank', href: '/' }}
        meta={[
          { name: 'description', content: 'Marklet - Lightweight Markdown Note Taking App' },
          { property: 'og:type', content: 'article' }
        ]}
        link={[
          // { rel: 'canonical', href: 'http://mysite.com/example' },
          { rel: 'icon', type: 'image/svg+xml', href: '../m_icon.svg' },
        ]}
      />
      <Router>
        <PublicRoute path='/'>
          <Landing />
        </PublicRoute>
        <PublicRoute path='/authPage'>
          <AuthPage />
        </PublicRoute>
        <PrivateRoute path='/noteEditor'>
          <Editor />
        </PrivateRoute>
        <PrivateRoute path='/dashboard'>
          <Notes />
        </PrivateRoute>
      </Router>
    </Suspense>
  )
};

export default App;
