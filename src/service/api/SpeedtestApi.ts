import * as RequestService from "../request/RequestService";

export class SpeedtestApi {
    static getInternetSpeed = async () =>  {
        return (await RequestService.get("internet-speed")).payload;
    }

}