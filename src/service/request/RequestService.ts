import {requestInstance} from "./request";
import {HttpRequestPayload} from "./http/HttpRequestPayload";
import {HttpResponse} from "./http/HttpResponse";

export const get = async (resource: string, params?: object): Promise<HttpResponse> => {
    return new HttpResponse(await requestInstance.get(resource, params));
}

export const post = async (resource: string, payload: HttpRequestPayload): Promise<HttpResponse> => {
    return new HttpResponse(await requestInstance.post(resource, payload));
}

export const put = async (resource: string, payload: HttpRequestPayload): Promise<HttpResponse> => {
    return new HttpResponse(await requestInstance.put(resource, payload));
}

export const patch = async (resource: string, payload: HttpRequestPayload): Promise<HttpResponse> => {
    return new HttpResponse(await requestInstance.patch(resource, payload));
}

export const remove = async (resource: string): Promise<HttpResponse> => {
    return new HttpResponse(await requestInstance.delete(resource));
}

