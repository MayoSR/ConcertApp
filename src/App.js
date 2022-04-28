import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <div className='max-w-[1024px] w-full pt-4'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
