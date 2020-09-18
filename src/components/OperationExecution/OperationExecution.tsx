import {OperationModel} from "../../model/OperationModel";
import React, {useState} from "react";
import {Button} from "react-bootstrap";

type OperationExecutionProps = {
    operation: OperationModel,
    onExecuteOperation: (value: string) => void,
    operationResponse: [],
    operationExecuted: boolean
}

const OperationExecution = ({operation, onExecuteOperation, operationResponse, operationExecuted}: OperationExecutionProps) => {
    const [input, setInput] = useState("");

    const handleInputChange = (ev: any) => {
        setInput(ev.target.value);
    }

    const handleExecuteOperation = () => {
        onExecuteOperation(input);
    }

    return (
        <>
            <h2 className={"text-center"}>{operation.name}</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Value" value={input} onChange={handleInputChange}/>
                    <div className="input-group-append">
                        <Button variant={"primary"} onClick={() => handleExecuteOperation()}>Execute</Button>
                    </div>
            </div>
            {
                operationExecuted ? <div><b>{operation.name + ': ' + input}</b><br/><br/> <ul>{operationResponse.map(resp => <li>{resp}</li>)}</ul></div> : null
            }
        </>
    )
}

export default OperationExecution;