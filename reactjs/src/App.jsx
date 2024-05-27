import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import Chats from './page/Chats';

function App() {
  const [ethAddress, setETHAddress] = useState('');

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/test"
            element={
              <h1>Test</h1>} />
          <Route
            path="/chats"
            element={
              <Chats />} />
          <Route
            path="/"
            element={
            <Home
              ethAddress={ethAddress}
              setETHAddress={setETHAddress}/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
