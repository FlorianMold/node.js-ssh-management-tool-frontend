import {OperationModel} from "../../model/OperationModel";
import React, {useState} from "react";
import {Button} from "react-bootstrap";

type OperationExecutionProps = {
    operation: OperationModel,
    handleExecuteOperation: (value: string) => void,
    operationResponse: string,
    operationExecuted: boolean
}

const OperationExecution = ({operation, handleExecuteOperation, operationResponse, operationExecuted}: OperationExecutionProps) => {
    const [input, setInput] = useState("");

    const handleInputChange = (ev: any) => {
        setInput(ev.target.value);
    }

    return (
        <>
            <h2 className={"text-center"}>{operation.name}</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Value" value={input} onChange={handleInputChange}/>
                    <div className="input-group-append">
                        <Button variant={"primary"} onClick={() => handleExecuteOperation(input)}>Execute</Button>
                    </div>
            </div>
            {
                operationExecuted ? <div>{operation.name + ' ' + input} {operationResponse}</div> : null
            }
        </>
    )
}

export default OperationExecution;