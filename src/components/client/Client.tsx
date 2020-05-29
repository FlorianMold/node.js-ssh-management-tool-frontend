import {ClientModel} from "../../model/ClientModel";
import React from "react";
import {Card, Col, Row, Button} from "react-bootstrap";
import styles from "./Client.module.css";

type ClientProps = { clients: ClientModel[] }

const Client = ({clients}: ClientProps) => (
    <>
        <h1 className="text-center">Clients</h1>
        <div className="d-flex flex-column align-items-center">
            {
                clients.map(client =>
                    <Card style={{width: '18rem'}} className={"mb-2 " + styles.pointer} key={client.id}>
                        <Card.Body>
                            <Card.Title>{client.host}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
                            <Button variant="primary" className="float-right" onClick={() => console.log('hehehehh')}>Connect</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    </>
)

export default Client;