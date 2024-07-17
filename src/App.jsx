

import { useState } from 'react';

// local
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
    </>
  )
}

export default App
