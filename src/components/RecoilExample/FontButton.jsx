import { useRecoilState } from 'recoil';
import { fontSizeState } from './fontSizeStore';

function FontButton() {
  const [fontSize, setFontSize] =
    useRecoilState(fontSizeState);

  const handleLargeSize = () => {
    setFontSize(size => size + 1);
  };

  const handSmallSize = () => {
    setFontSize(size => size - 1);
  };

  return (
    <>
      <button
        onClick={handleLargeSize}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>

      <button onClick={handSmallSize} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}

export default FontButton;
