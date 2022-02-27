import { Action } from "@reduxjs/toolkit";

export interface ActionWithPayload<T> extends Action {
    payload?: T;
}
export interface MessagesPayload {
    message?: IMessages;
}
export interface IMessages {
    isOpen?: boolean;
    requesting?: boolean,
    successful?: boolean,
    messages?: any[],
    errors?: any[],
}