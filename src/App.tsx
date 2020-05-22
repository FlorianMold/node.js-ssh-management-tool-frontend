import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ClientApi} from "./service/api/ClientApi";
import {Client} from "./model/Client";

const App = () => {
  const init: Client[] = [];
  const [clients, setClients] = useState(init);

  useEffect(() => {
    const fetchData = async () => {
      const result = await ClientApi.fetchClients();

      setClients(result);
    };

    fetchData();
  }, [])

  return (
    <div className="App">
      {
        clients.map((value: Client) => value.host)
      }
    </div>
  );
}

export default App;
