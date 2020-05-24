import React, {useEffect, useState} from 'react';
import './App.css';
import {ClientApi} from "./service/api/ClientApi";
// @ts-ignore
import theme from "@rebass/preset";
import Client from "./component/Client";
import {ClientModel} from "./model/ClientModel";
import { ThemeProvider } from "emotion-theming";

const App = () => {
    const init: ClientModel[] = [];
    const [clients, setClients] = useState(init);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ClientApi.fetchClients();

            setClients(result);
        };

        {
            clients.map((value: ClientModel) => value.host)
        }

        fetchData();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Client clients={clients}/>
        </ThemeProvider>
    );
}

export default App;
