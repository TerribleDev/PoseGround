import React from 'react';
import styles from './App.module.scss';
import { Square, Circle } from './Shapes';

function App() {
  return (
    <div className={styles.container}>
      <Square />
      <Circle />
    </div>
  );
}

export default App;
