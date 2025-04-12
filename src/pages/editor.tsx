import Container, { NavBarType } from "../components/container";
import MarkdownEditor from "../components/markdownEditor";

type Props = {
  id: string;
}

const Editor = ({ id }: Props) => {
  return (
    <Container navBar={NavBarType.EDITOR}>
      <MarkdownEditor id={id} />
    </Container>
  );
};

export default Editor;