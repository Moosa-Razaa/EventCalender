import { AxiosError } from "axios";
import { axiosClient } from "./axiosSettings";

export enum APIMETHOD
{
    GET,
    POST,
    DELETE,
    PUT,
    PATCH
}

function GetRequest(extendedUrl: string)
{
    axiosClient.get(extendedUrl)
    .then((response) => response)
    .catch((error) => error);
}

function PostRequest<T extends object>(extendedUrl: string, body?: T)
{
    axiosClient.post(extendedUrl, body)
    .then((response) => response)
    .catch((error) => error);
}

function DeleteRequest<T extends object>(extendedUrl: string, body?: T)
{
    axiosClient.delete(extendedUrl, body)
    .then((response) => response)
    .catch((error) => error);
}

function PutRequest<T extends object>(extendedUrl: string, body?: T)
{
    axiosClient.put(extendedUrl, body)
    .then((response) => response)
    .catch((error) => error);
}

function PatchRequest<T extends object>(extendedUrl: string, body?: T)
{
    axiosClient.patch(extendedUrl, body)
    .then((response) => response)
    .catch((error) => error);
}

export function ApiCall<T extends object>(url: string, methodType: APIMETHOD, body?: T)
{
    switch(methodType)
    {
        case APIMETHOD.GET:
            return GetRequest(url);
        
        case APIMETHOD.POST:
            return PostRequest(url, body);

        case APIMETHOD.DELETE:
            return DeleteRequest(url, body);

        case APIMETHOD.PATCH:
            return PatchRequest(url, body);

        case APIMETHOD.PUT:
            return PutRequest(url, body);

        default:
            return AxiosError;
    }    
}