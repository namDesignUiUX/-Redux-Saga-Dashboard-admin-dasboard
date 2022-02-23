import { Action } from "@reduxjs/toolkit";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}
export interface ActionWithPayload<T> extends Action {
    payload?: T;
}