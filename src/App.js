import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import { Header } from './components/Header/Header.jsx';
import './App.css';
import { TabButton } from './components/TabButton.jsx/TabButton.jsx';

function App() {
  function handleSelect() {
    console.log('hello');
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        {/* Sposób pierwszy wpisanie numeru indexu z tablicy */}
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            image={CORE_CONCEPTS[0].image}
            descritpoion={CORE_CONCEPTS[0].descritpoion}
          />
          {/* Sposób drugi przekazanie spreed operatorem dancyh */}
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}> components</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>
        {/* <DynamicContent /> */}
      </section>
    </div>
  );
}

export default App;
