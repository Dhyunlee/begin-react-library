import { useRecoilState } from 'recoil';
import { fontSizeState } from './fontSizeStore';

const ContainerStyle = {
  margin: '30px 0',
  padding: '10px',
  background: '#cfcfd4',
  fontWeight: 'bolder',
};

function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <header style={ContainerStyle}>
      <span style={{ fontSize }}>
        텍스트의 크기가 달라지고 있나요? <br />
      </span>
    </header>
  );
}

export default Text;
