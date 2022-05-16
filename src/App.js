import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Header from './components/RecoilExample/Header';
import CharacterCounter from './components/RecoilExample/CharacterCounter';

import './App.css';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <FontButton />
        <Header />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
