import * as RequestService from "../request/RequestService";
import {AxiosResponse} from "axios";

export class OperationApi {
    /**
     * Fetches all clients.
     */
    static fetchOperations = (callback: (result: Promise<AxiosResponse>) => void) => callback(RequestService.get("operations"));

    /**
     * Execute an operation.
     *
     * @param cid client-id
     * @param oid operation-id
     * @param input input of the operation
     * @param callback callback that is executed, with the results
     */
    static executeOperation = (cid: number|undefined, oid: number|undefined, input: string, callback: (result: Promise<AxiosResponse>) => void) =>
        callback(RequestService.post(`execute?cid=${cid}&oid=${oid}`, {options: input}));
}