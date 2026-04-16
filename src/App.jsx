import Entry from './components/Entry.jsx';
import Header from './components/Header';
import { entries } from './data.js';
import './App.css';

const App = () => {
  const entryElements = entries.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <main className="app">
      <Header />

      {entryElements}
    </main>
  );
};

export default App;
