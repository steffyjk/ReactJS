import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/WelcomeClassComponent';
import Hello from './components/HelloJSX';

function App() {
  return (
    <div className="App">
      <Greet name="steffy" heroName="Queen">
        <p>This is children props</p>
      </Greet>
      <Greet name="stella" heroName="Star">
        <button>This is button</button>
      </Greet>
      <Greet name="alex" heroName="Defender"/>

      <Welcome name="steffy" heroName="Queen"/>
      <Welcome name="stella" heroName="Star"/>
      <Welcome name="alex" heroName="Defender"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
