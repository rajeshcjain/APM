export interface IProduct{
    productId: number;
    productName: string; 
    productCode: string; 
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

}


/*
Here we can the class which implements the IProduct interface.

This will not be used as of now..This was just for the understanding of the Angular JS.

This function could have been defined in a seperate file as well.

*/

export class Product implements IProduct{

constructor(public productId: number,
    public productName: string, 
    public productCode: string, 
    public releaseDate: string,
    public description: string,
    public price: number,
    public starRating: number,
    public imageUrl: string){

    }

    calclateDiscoount(percentage: number):number{
        return this.price - (this.price*percentage/100);
    }


}