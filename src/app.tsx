import { Router, Route } from 'preact-router';
import { lazy, Suspense, useEffect } from 'preact/compat';
// import { onAuthStateChanged } from "firebase/auth";

import { useThemeStore } from './stores/useThemeStore';
// import { auth } from './server/firebase';

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
      <Router>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={Notes} /> */}
      </Router>
    </Suspense>
  )
};

export default App;
