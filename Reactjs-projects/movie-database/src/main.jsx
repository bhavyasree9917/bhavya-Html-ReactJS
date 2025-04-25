import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store'; // Ensure the path is correct and store is the default export
import MovieDetails from './components/MovieDetails'; // Ensure the casing is correct for the component import

const App = () => {
  return (
    <Provider store={store}>
      <MovieDetails />
    </Provider>
  );
};

export default App;
