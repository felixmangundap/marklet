import { ReactNode } from "preact/compat";
import NavBar from "./navbar";
import EditorNavBar from "./editorNavbar";

type Props = {
  children: ReactNode;
  navBar?: NavBarType;
}

export enum NavBarType {
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
      case NavBarType.STANDARD:
      default:
        return <NavBar />;
    }
  }
  return (
    <div className='relative flex flex-col justify-center items-center w-dvw h-dvh bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white'>
      {getNavBar()}
      <div className='grow-1 w-full overflow-hidden'>
        {children}
      </div>
    </div>
  );
};

export default Container;