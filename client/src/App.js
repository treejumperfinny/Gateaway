
import './App.css';
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setUser } from './slicers/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/api/me")
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json()
      })
      .then((user) => { dispatch(setUser(user)) })
  }, [dispatch])



  return (
    <>
      <Navbar />

      <div className="App">
        <Outlet />
        {/* <h1 class="title">
          Welcome!
        </h1>
        <p>We are still under construction.</p> */}
      </div>
    </>
  );
}

export default App;
