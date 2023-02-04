import { Car } from "./car";
import { ResponseModel } from "./ResponseModel";

// extends ResponseModel
export interface  carResponseModel extends ResponseModel  {
    data:Car[]
}