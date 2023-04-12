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
    <ul>
      {data.map((el) => {
        return (
          <li key={el.id} className="bg-pink-50 w-80 flex">
            <div className="w-8 text-center">{el.completed ? '✅' : '⬜'}</div>
            <div className="w-56">{el.title}</div>
            <div className="w-8 text-center">✏️</div>
            <div className="w-8 text-center">🗑️</div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
