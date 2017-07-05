import { Pipe,PipeTransform } from '@angular/core'

import { IProduct } from './product'

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPiple implements PipeTransform{

    transform(products : IProduct[],filterBy : string): IProduct[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        /*
        Here we are declaring the anonymous callback function that will be used for filtering.
        */
        return filterBy ? products.filter(function(product){

            /*
            This code snippet will remove the code item filtered and put it in list
            */
            return product.productName.toLocaleLowerCase().indexOf(filterBy) == -1;
        }):products;
    }
}