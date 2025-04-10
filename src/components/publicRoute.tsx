import { Route, route } from 'preact-router';

import useAuthStore from '../stores/useAuthStore';
import Container from './container';

type Props = {
  path: string;
  children: (props: any) => preact.VNode;
  [x:string]: any;
}

const PublicRoute = (props : Props) => {
  const { path, children } = props;
  const { currentUser, loading } = useAuthStore();

  return (
    <Route
      path={path}
      component={() => {
        if (loading) return <Container><p>Loading...</p></Container>;
        if (!loading && currentUser) {
          route('/dashboard', true);
          return null;
        }

        return !currentUser ? children(props) : null;
      }}
    />
  )
};

export default PublicRoute;