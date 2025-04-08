import Container, { NavBarType } from "../components/container";
import MarkdownEditor from "../components/markdownEditor";

const Editor = () => {
  return (
    <Container navBar={NavBarType.EDITOR}>
      <MarkdownEditor />
    </Container>
  );
};

export default Editor;