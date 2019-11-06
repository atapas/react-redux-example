import React from 'react';
import GamePage from './GamePage';
import FetchGITUser from './FetchGitUser';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
    <div className="App">
      <GamePage />
      <FetchGITUser />
    </div>  
  );
}

export default App;
