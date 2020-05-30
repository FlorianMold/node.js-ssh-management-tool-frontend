import {ClientModel} from "../../model/ClientModel";
import React from "react";
import {Button} from "react-bootstrap";

type HomeProps = {
    client: ClientModel,
    onGoBack: () => void
}

const Home = ({client, onGoBack}: HomeProps) => {
    return (
        <>
            <h1>{client.host}</h1>
            <Button onClick={onGoBack}>Back</Button>
        </>
    )
}

export default Home;