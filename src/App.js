import './App.css';
import img from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descritpoion = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={img} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {descritpoion} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, descritpoion }) {
  return (
    <li>
      <img src={image} alt={{ title }} />
      <h3>{title}</h3>
      <p>{descritpoion}</p>1{' '}
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* Sposób pierwszy wpisanie numeru indexu z tablicy */}
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        image={CORE_CONCEPTS[0].image}
        descritpoion={CORE_CONCEPTS[0].descritpoion}
      />
      {/* Sposób drugi przekazanie spreed operatorem dancyh */}
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} />
    </div>
  );
}

export default App;
