import {ClientModel} from "../../model/ClientModel";
import React, {useEffect, useState} from "react";
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import Operations from "../operations/Operations";
import {OperationModel} from "../../model/OperationModel";
import {ClientApi} from "../../service/api/ClientApi";
import {OperationApi} from "../../service/api/OperationApi";
import OperationExecution from "../OperationExecution/OperationExecution";

type HomeProps = {
    client: ClientModel,
    onGoBack: () => void
}

const Home = ({client, onGoBack}: HomeProps) => {
    const initOperations: OperationModel[] = [];
    const [operation, setOperation] = useState(OperationModel.emptyOperation())
    const [operations, setOperations] = useState(initOperations);

    useEffect(() => {
        const fetchData = async () => {
            const result = await OperationApi.fetchOperations();
            setOperations(result);
        };
        fetchData();
    }, []);

    const handleOnClickOperation = (operation: OperationModel) => {
        setOperation(operation);
    }

    return (
        <>
            <h1>{client.host}</h1>
            <Row>
                <Col md={3}>
                    <Operations
                        operation={operation}
                        operations={operations}
                        onClickOperation={handleOnClickOperation}
                    />
                </Col>
                <Col md={9}>
                    {
                        operation.id > 0 ? <OperationExecution operation={operation}/> : "Choose an operation"
                    }
                </Col>
            </Row>
            <Button className="mt-3" onClick={onGoBack}>Back</Button>
        </>
    )
}

export default Home;