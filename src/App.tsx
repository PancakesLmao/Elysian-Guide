import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import elysiaLogo from './assets/elysia.png'
import elysiaAvatar from './assets/ely.png'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="inline-flex">
        <a className="stack_icon" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className="stack_icon" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a className="stack_icon" href="https://elysiajs.com/" target="_blank">
          <img src={elysiaLogo} className="logo" alt="Elysia logo" />
        </a>
      </div>
      <h1>Vite + React + Elysia</h1>
      <img src={elysiaAvatar} className="ely_ava" alt="React logo" />
      <div className="card">
        <button className='sub_btn' onClick={() => setCount((count) => count + 1)}>
          Elycon: {count}
        </button>
      </div>
      <p className="read-the-docs">Click on each logo to learn more</p>
      <Footer />
    </>
  );
}

export default App
