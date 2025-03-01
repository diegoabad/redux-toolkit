import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './slice/countSlice';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>CONTADOR - REDUX</h1>
      <p>Contador: {count}</p>
      {/* {error && <p>{}</p>}
      {loading && <p>Cargando Usuario...</p>}
      <p>User: {user?.name}</p> */}
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Incrementar</button>
      {/* <button onClick={handleLogin}>Login</button> */}
    </>
  );
}

export default App;
