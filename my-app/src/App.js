import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from './Actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      {data.map((el) => {
        return <div key={el.id}>{el.title}</div>;
      })}
    </>
  );
}

export default App;
