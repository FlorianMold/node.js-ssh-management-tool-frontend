import {ClientModel} from "../../model/ClientModel";
import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import Operations from "../operations/Operations";
import {OperationModel} from "../../model/OperationModel";
import {OperationApi} from "../../service/api/OperationApi";
import OperationExecution from "../OperationExecution/OperationExecution";

type HomeProps = {
    client: ClientModel | null,
    onGoBack: () => void
}

const Home = ({client, onGoBack}: HomeProps) => {
    const [operation, setOperation] = useState<OperationModel | null>(null)
    const [operations, setOperations] = useState([]);
    const [operationResponse, setOperationResponse] = useState<any>({});
    const [operationExecuted, setOperationExecuted] = useState(false);

    useEffect(() => {
        OperationApi.fetchOperations(async result => {
            const data = (await result).data
            setOperations(data)
        });
    }, []);

    const handleOnClickOperation = (operation: OperationModel) => {
        setOperation(operation);
        setOperationResponse("");
        setOperationExecuted(false);
    }

    const onExecuteOperation = (input: string) => {
        OperationApi.executeOperation(client?.id, operation?.id, input, async (result) => {
            const data = (await result).data
            setOperationResponse(data);
            setOperationExecuted(true);
        });
    }

    return (
        <>
            <h1>{client?.host}</h1>
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
                        operation ?
                            <OperationExecution
                                operation={operation}
                                onExecuteOperation={onExecuteOperation}
                                operationResponse={operationResponse}
                                operationExecuted={operationExecuted}
                            />
                            :
                            "Choose an operation"
                    }
                </Col>
            </Row>
            <Button className="mt-3" onClick={onGoBack}>Back</Button>
        </>
    )
}

export default Home;