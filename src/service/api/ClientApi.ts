import * as RequestService from "../request/RequestService";
import {ClientModel} from "../../model/ClientModel";

export class ClientApi {

    /**
     * Fetches all clients.
     */
    //static fetchClients = async () => (await RequestService.get("clients")).payload;

    static fetchClients = async () => [
        new ClientModel(1, "localhost", "florian"),
        new ClientModel(2, "localhost", "florian"),
        new ClientModel(3, "localhost", "florian")

    ];

}