import { Route, route } from 'preact-router';
import { ReactNode } from 'preact/compat';

import useAuthStore from '../stores/useAuthStore';

type Props = {
  path: string;
  children: ReactNode;
}

const PrivateRoute = ({ path, children }: Props) => {
  const { currentUser, loading } = useAuthStore();

  return (
    <Route
      path={path}
      component={() => {
        if (loading) return <p>Loading...</p>;
        if (!loading && !currentUser) {
          route('/', true);
          return null;
        }

        return currentUser ? children : null;
      }}
    />
  )
};

export default PrivateRoute;