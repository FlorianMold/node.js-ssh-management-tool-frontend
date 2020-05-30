import {ClientModel} from "../../model/ClientModel";
import React from "react";
import {Card, Button} from "react-bootstrap";

type ClientProps = {
    clients: ClientModel[],
    onClickClient(client: ClientModel): void
}

const Client = ({clients, onClickClient}: ClientProps) => (
    <>
        <h1 className="text-center">Clients</h1>
        <div className="d-flex flex-column align-items-center">
            {
                clients.map(client =>
                    <Card style={{width: '18rem'}} className="mb-2" key={client.id}>
                        <Card.Body>
                            <Card.Title>{client.host}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
                            <Button variant="primary" className="float-right" onClick={() => onClickClient(client)}>Connect</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    </>
)

export default Client;