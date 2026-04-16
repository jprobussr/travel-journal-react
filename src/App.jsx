import Entry from './components/Entry.jsx';
import Header from './components/Header';
import { entries } from './data.js';
import './App.css'




const App = () => {
  console.log(entries);
  
  return (
    <main className='app'>
      <Header />
      <Entry />
    </main>
  )
}

export default App