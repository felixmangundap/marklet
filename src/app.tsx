import { Router, Route } from 'preact-router';
import { lazy, Suspense } from 'preact/compat';

const Home = lazy(() => import('./pages/home'));
const Notes = lazy(() => import('./pages/notes'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/notes" component={Notes} />
    </Router>
  </Suspense>
);

export default App;
