import './App.css';
import Button from './components/Button';
import { GoBell } from 'react-icons/go';

function App() {

  const handleClick = () => {
    console.log("Yh there");
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline rounded onMouseMove ={handleClick}>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
