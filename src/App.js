import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPostRequest } from './store';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.api);

  const handleClick = () => {
    const requestData = { /* payload data */ };
    dispatch(sendPostRequest(requestData));
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Sending...' : 'Send POST Request'}
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
