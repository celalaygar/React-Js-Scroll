
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  let properties = useRef()
  const [user, setUser] = useState();

  const showUser = () => {
    setUser(properties.current.value);

    setUser(properties.current.value);
  }


  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };
  return (
    <div className="container">
      <div className='row'>
        <div className="col-lg-5">
          hellooo qw
          <br />
          <p>Kullanıcı Adı: {user}</p>
          <input type="text" ref={properties} />
          <button onClick={showUser}>Kullanıcı Adını Göster</button>
        </div>
        <div className="col-lg-5">
          hellooo qw
          <br />
          <p>Kullanıcı Adı: {user}</p>
          <input type="text" ref={properties} />
          <button onClick={showUser}>Kullanıcı Adını Göster</button>
        </div>
        <div
          className="col-lg-7 border border-danger"
          onScroll={handleScroll}
          style={{ "width": "500px", "height": "400px", "overflowY": "scroll" }}
        >
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd<br />
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd<br />
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd<br />
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd<br />
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd<br />
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd12314 124
          qwrqwr21421 4
          ddd ddd
          qwrqwr1 241 24
          ddd ddd
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          qwrqwr555555555555555555555555
          ddd ddd
          qwrqwr
          ddd ddd2 4
          qwrqwr124124255
          ddd ddd
          qwrqwr
          ddd ddd125125
          qwrqwr
          ddd ddd
          qwrqwr12
          qwrqwr
          ddd ddd
          qwrqwr
          ddd ddd
          qwrqwr
        </div>
      </div>
    </div>
  );
}

export default App;
