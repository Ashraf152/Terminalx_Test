import { CartResponse } from "../logic/api/response-body/cart-response-body";
import { WishlistResponse } from "../logic/api/response-body/wishlist-response-body";

export const parseBodyToJSON = (object: Object)=>{
    const str= JSON.stringify(object)
    return JSON.parse(str)
}

export async function wrapWishlistResponse(responseJson: any): Promise<WishlistResponse | null> {
        return await responseJson.json()
}

export function flipBirthDate(birthday: string): string {
    const [year, month, day] = birthday.split('-');
    const flippedBirthdate = `${day}/${month}/${year}`;
    return flippedBirthdate;
}
export async function wrapCartResponse(responseJson: any): Promise<CartResponse | null> {
    return await responseJson.json()
}

export function pricesplit(price:string ){
    return parseFloat(price.split(" ")[0])
}