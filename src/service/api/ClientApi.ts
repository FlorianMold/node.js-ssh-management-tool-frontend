import * as RequestService from "../request/RequestService";
import {Client} from "../../model/Client";
import {HttpResponse} from "../request/http/HttpResponse";

export class ClientApi {

static fetchClients = async () => (await RequestService.get("clients")).payload;

}