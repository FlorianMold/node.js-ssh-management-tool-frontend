import React, {useEffect, useState} from 'react';
import './App.css';
import {ClientApi} from "./service/api/ClientApi";
import Client from "./components/client/Client";
import {ClientModel} from "./model/ClientModel";
import {Container} from "react-bootstrap";

const App = () => {
    const init: ClientModel[] = [];
    const [clients, setClients] = useState(init);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ClientApi.fetchClients();

            setClients(result);
        };
        fetchData();
    }, [])

    return (
        <Container className={"mt-4"}>
            <Client clients={clients}/>
        </Container>
    );
}

export default App;
