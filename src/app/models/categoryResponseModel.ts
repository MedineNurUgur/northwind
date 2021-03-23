import { Category } from "./categoty";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel
{
    data:Category[];
}