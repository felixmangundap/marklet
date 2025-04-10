import NavBar from "./navbar";
import EditorNavBar from "./editorNavbar";
import PublicNavBar from "./publicNavbar";

type Props = {
  children: preact.ComponentChildren;
  navBar?: NavBarType;
  id?: string;
}

export enum NavBarType {
  PUBLIC = 'public',
  STANDARD = 'standard',
  EDITOR = 'editor',
  NONE = 'none',
}

const Container = ({ children, navBar }: Props) => {

  const getNavBar = () => {
    switch (navBar) {
      case NavBarType.NONE:
        return;
      case NavBarType.EDITOR:
        return <EditorNavBar />;
      case NavBarType.PUBLIC:
        return <PublicNavBar />;
      case NavBarType.STANDARD:
      default:
        return <NavBar />;
    }
  }
  return (
    <div className='relative flex flex-col justify-center items-center w-dvw h-dvh bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white'>
      {getNavBar()}
      <div className='grow-1 w-full overflow-hidden flex'>
        {children}
      </div>
    </div>
  );
};

export default Container;