import { route } from 'preact-router';
import { ReactNode, useEffect } from 'preact/compat';

import useAuthStore from '../stores/useAuthStore';

type Props = {
  path: string;
  children: ReactNode;
}

const PublicRoute = ({ path, children } : Props) => {
  const { currentUser, loading } = useAuthStore();

  useEffect(() => {
    if (!loading && !currentUser) {
      route('/dashboard', true);
    }
  }, [currentUser, loading]);

  if (loading) return <div>Loading...</div>;

  return !currentUser ? children : null;
};

export default PublicRoute;