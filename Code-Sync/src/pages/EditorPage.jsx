import React, { useState } from 'react'
import logo from '../assets/Code-Sync.svg'
import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {
  const [clients, setClients] = useState([
    {socketId : 1, username: 'Gautam A'},
    {socketId : 2, username: 'Ayush T'},
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src={logo} alt="logo" className="logoImage" />
        </div>
        <h3>Connected</h3>
        <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
          <button className="btn copyBtn">
          Copy ROOM ID
        </button>
        <button className="btn leaveBtn" >
          Leave
        </button>         
    </div>
      <div className="editorWrap">
        <Editor/>
      </div>
    </div>
  );
}

export default EditorPage;