import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Header from './components/RecoilExample/Header';
import CharacterCounter from './components/RecoilExample/CharacterCounter';

import './App.css';
import TodoList from './components/RecoilExample/Todos/TodoList';
import TodoItemCreator from './components/RecoilExample/Todos/TodoItemCreator';
import TodoItem from './components/RecoilExample/Todos/TodoItem';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        {/* <FontButton />
        <Header />
        <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
