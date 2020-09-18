import {Col, ListGroup} from "react-bootstrap";
import React from "react";
import {OperationModel} from "../../model/OperationModel";
import styles from "./Operations.module.css"

type OperationsProps = {
    operation: OperationModel | null,
    operations: OperationModel[],
    onClickOperation: (operation: OperationModel) => void
}

const Operations = ({operation, operations, onClickOperation}: OperationsProps) => {
    return (
        <ListGroup as="ul">
            {
                operations.map(value => {
                        return operation?.id === value.id ?
                            <ListGroup.Item
                                className={styles.listItem}
                                active
                                key={value.id}
                                as="li"
                                onClick={() => onClickOperation(value)}>
                                {value.name}
                            </ListGroup.Item>
                            :
                            <ListGroup.Item
                                className={styles.listItem}
                                key={value.id}
                                as="li"
                                onClick={() => onClickOperation(value)}>
                                {value.name}
                            </ListGroup.Item>
                    }
                )
            }
        </ListGroup>
    )
}

export default Operations;