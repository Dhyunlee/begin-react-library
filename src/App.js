import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/text';

import './App.css';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <FontButton />
        <Text />
      </RecoilRoot>
    </div>
  );
}

export default App;