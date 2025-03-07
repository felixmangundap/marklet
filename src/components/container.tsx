import { ReactNode } from "preact/compat";
import NavBar from "./navbar";
import EditorNavBar from "./editorNavbar";

type Props = {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='relative flex flex-col justify-center items-center w-dvw h-dvh bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white'>
      {/* <NavBar /> */}
      <EditorNavBar />
      <div className='grow-1 w-full overflow-hidden'>
        {children}
      </div>
    </div>
  );
};

export default Container;