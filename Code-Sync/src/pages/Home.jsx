import React from 'react'
import {v4 as uuidV4} from 'uuid';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
    
        toast.success("Created a new room");
      };

      const joinRoom = () => {
        if (!roomId || !username) {
          toast.error('ROOM ID & Username is required!!');
          return;
        }
        navigate(`/editor/${roomId}`, {
            state: {
              username,
            },
          });
    }
  return (
    <div className='homePageWrapper'>
        <div className="formWrapper">
            <img className="homePageLogo" src="src/Code-Sync.svg" alt="code-sync-logo" />
            <h4 className="mainLabel">Paste Invitation ROOM ID </h4>
            <div className="inputGroup">
                <input type="text" className='inputBox' onChange={(e) => setRoomId(e.target.value)} value={roomId} placeholder='ROOM ID' />
                <input type="text" className='inputBox' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='USERNAME' />
                <button onClick={joinRoom} className='btn joinBtn'>Join</button>
                <span className='createInfo'>If you don't have invite then create &nbsp;
                <a onClick={createNewRoom}className="createNewBtn">
              new room
                </a>
                </span>
            </div>
        </div>
        <footer>
        <h4>
          Built with ❤️ by &nbsp;
          <a href="https://github.com/gautam-adhikari"> Gautam Adhikari</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home