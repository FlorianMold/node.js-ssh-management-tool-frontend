import React, {useEffect, useState} from 'react';
import './App.css';
import {ClientApi} from "./service/api/ClientApi";
import Client from "./components/client/Client";
import {ClientModel} from "./model/ClientModel";
import {Container} from "react-bootstrap";
import Home from "./components/home/Home";

const App = () => {
    const [clients, setClients] = useState<ClientModel[]>([]);
    const [page, setPage] = useState("clients");
    const [client, setClient] = useState<ClientModel | null>(null);

    useEffect(() => {
        ClientApi.fetchClients(async result => {
            const data = (await result).data;
            setClients(data);
        });
    }, []);

    /**
     * Handles the click on a client.
     *
     * @param client client that was clicked on.
     */
    const handleClickClient = (client: ClientModel) => {
        setClient(client);
        setPage("home");
    }

    /**
     * Handles the click on the back-button in Home-view.
     */
    const handleGoBack = () => {
        setClient(null);
        setPage("clients");
    }

    let shownPage;
    switch (page) {
        case "clients":
            shownPage = <Client clients={clients} onClickClient={handleClickClient}/>;
            break;
        case "home":
            shownPage = (<Home client={client} onGoBack={handleGoBack} />)
            break;
        default:
            shownPage = <div>Error</div>
            break;
    }

    return (
        <Container className={"mt-4"}>
            {shownPage}
        </Container>
    );
}

export default App;
