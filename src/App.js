import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './component/header/header';
import Main from './component/main/main';
import { fetchPositions } from './store/positionsSlice';
import { fetchUsers } from './store/usersSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPositions());
    dispatch(
      fetchUsers({
        page: 1,
        count: 6,
      })
    );
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
