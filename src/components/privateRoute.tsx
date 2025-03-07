import { route } from 'preact-router';
import { ReactNode, useEffect } from 'preact/compat';

import useAuthStore from '../stores/useAuthStore';

type Props = {
  path: string;
  children: ReactNode;
}

const PrivateRoute = ({ path, children } : Props) => {
  const { currentUser, loading } = useAuthStore();

  useEffect(() => {
    if (!loading && !currentUser) {
      route('/login', true);
    }
  }, [currentUser, loading]);

  if (loading) return <div>Loading...</div>; // Show a loader while checking auth state

  return currentUser ? children : null;
};

export default PrivateRoute;