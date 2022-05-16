import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeLabelState, fontSizeState } from './store';

function Text() {
  const [fontSize, setFontSize] =
    useRecoilState(fontSizeState);

  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  return (
    <div>
      <p style={{ fontSize }}>
        텍스트의 크기가 달라지고 있나요? <br />
      </p>
      <p>
        현재 폰트 크기:
        <span style={{ fontSize }}>{fontSizeLabel}</span>
      </p>
    </div>
  );
}

export default Text;
