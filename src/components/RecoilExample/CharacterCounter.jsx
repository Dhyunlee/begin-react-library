import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from './CounterStore';
import { fontSizeLabelState, fontSizeState } from './fontSizeStore';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  const onChange = event => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:
      <span style={{ fontSize }}>{text}</span>
      <br />
      <span>fontsize: {fontSizeLabel}</span>
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

export default CharacterCounter;
