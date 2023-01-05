import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import UserData from './component/UserData';
import { useEffect, useState } from 'react';


function App() {
  // this state used for store data.....
  const [data, setData] = useState({});
  // this state used for show loader.....
  const [loading, setLoading] = useState(false);

// function used for fetch user data.......
  function getUserData() {
    setLoading(true)
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((response) => response.json())
        .then((userInfo) => {
          setData(userInfo)
          setLoading(false);
        });
    }, 500)
  }

  return (
    <div className="App">
      <Navbar getUserData={getUserData} />
      {/* condition used for showing data after loading */}
      {
        loading ?
          <img src='/images/loading_img.png' className='loading-img'/>
          :
          <UserData userdata={data} />
      }
    </div>
  );
}

export default App;
