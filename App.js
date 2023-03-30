import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracks } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { tracks, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Music App</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
