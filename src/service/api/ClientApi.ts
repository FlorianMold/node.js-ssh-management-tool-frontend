import * as RequestService from "../request/RequestService";

export class ClientApi {

    /**
     * Fetches all clients.
     */
    static fetchClients = async () => (await RequestService.get("clients")).payload;

}