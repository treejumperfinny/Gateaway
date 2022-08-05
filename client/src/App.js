
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

      <div className="App container">
        <Outlet />
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p> 
            <strong>GateAway</strong> by <a href="https://github.com/treejumperfinny">Aya R</a>. Made with ❤️ in Ohio.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
