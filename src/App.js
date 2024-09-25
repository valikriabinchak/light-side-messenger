import logo from './logo.svg';
import './App.css';
import AuthComponent from './components/auth';
import FooterComponent from './components/footer';
import MessengerComponent from './components/messenger';
import { socket } from './services/socket'

function App() {
  socket.connect();

  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <AuthComponent isRegistration={false} />
      
      <MessengerComponent></MessengerComponent>
      
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
