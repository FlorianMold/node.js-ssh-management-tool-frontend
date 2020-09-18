import * as RequestService from "../request/RequestService";
import {AxiosResponse} from "axios";

export class ClientApi {

    /**
     * Fetches all clients.
     */
    static fetchClients = (callback: (result: Promise<AxiosResponse>) => void) => callback(RequestService.get("clients"));

}