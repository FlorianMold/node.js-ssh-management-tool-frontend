import {OperationModel} from "../../model/OperationModel";
import React from "react";

type OperationExecutionProps = {
    operation: OperationModel
}

const OperationExecution = ({operation}: OperationExecutionProps) => {
    return (
        <div>{operation.name}</div>
    )
}

export default OperationExecution;