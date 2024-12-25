import './App.css';
import Container from './Componants/Container';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App h-screen w-100 bg-slate-900 flex items-center justify-center">
      <Container />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
