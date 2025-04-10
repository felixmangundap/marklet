import { Router } from 'preact-router';
import { lazy, Suspense, useEffect } from 'preact/compat';
import Helmet from 'preact-helmet';

import { useThemeStore } from './stores/useThemeStore';
import PublicRoute from './components/publicRoute';
import PrivateRoute from './components/privateRoute';

const Landing = lazy(() => import('./pages/landing'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Editor = lazy(() => import('./pages/editor'));
const Preview = lazy(() => import('./pages/preview'));
const AuthPage = lazy(() => import('./pages/auth'));

const App = () => {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

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
          {() => <Landing />}
        </PublicRoute>
        <PublicRoute path='/authPage'>
          {() => <AuthPage />}
        </PublicRoute>
        <PrivateRoute path='/note/:id'>
          {(props: any) => <Editor {...props} />}
        </PrivateRoute>
        <PrivateRoute path='/preview/:id'>
          {(props: any) => <Preview {...props} />}
        </PrivateRoute>
        <PrivateRoute path='/dashboard'>
          {() => <Dashboard />}
        </PrivateRoute>
      </Router>
    </Suspense>
  )
};

export default App;
