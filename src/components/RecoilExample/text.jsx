import { useRecoilState } from 'recoil';
import { fontSizeState } from './store';

function Text() {
  const [fontSize, setFontSize] =
    useRecoilState(fontSizeState);
  return (
    <p style={{ fontSize }}>
      텍스트의 크기가 달라지고 있나요? <br />
      현재 글자 크기:{fontSize}
    </p>
  );
}

export default Text;
