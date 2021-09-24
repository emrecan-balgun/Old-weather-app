import './App.css';
import Container from './components/Container'
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <LocationProvider>
      <Container/>
    </LocationProvider>
  );
}

export default App;
