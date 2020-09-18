import {requestInstance} from "./request";
import {AxiosResponse} from "axios";


/**
 * Performs a get-request.
 *
 * @param resource resource to be requested.
 * @param params request-params
 */
export const get = async (resource: string, params?: object): Promise<AxiosResponse> => {
    return await requestInstance.get(resource, params);
}

/**
 * Performs a post-request.
 *
 * @param resource resource that is requested.
 * @param payload payload of the request.
 */
export const post = async (resource: string, payload: any): Promise<AxiosResponse> => {
    return await requestInstance.post(resource, payload);
}

/**
 * Performs a put-request.
 *
 * @param resource resource that is requested.
 * @param payload payload of the request.
 */
export const put = async (resource: string, payload: any): Promise<AxiosResponse> => {
    return await requestInstance.put(resource, payload);
}

/**
 * Performs a patch-request.
 *
 * @param resource resource that is requested.
 * @param payload payload of the request.
 */
export const patch = async (resource: string, payload: any): Promise<AxiosResponse> => {
    return await requestInstance.patch(resource, payload);
}

/**
 * Performs a delete request.
 *
 * @param resource resource to be deleted.
 */
export const remove = async (resource: string): Promise<AxiosResponse> => {
    return await requestInstance.delete(resource);
}

