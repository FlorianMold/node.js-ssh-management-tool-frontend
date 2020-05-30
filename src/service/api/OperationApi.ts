import {OperationModel} from "../../model/OperationModel";

export class OperationApi {

    static fetchOperations = async () => [
        new OperationModel(1, "ls"),
        new OperationModel(2, "cat"),
    ];

}