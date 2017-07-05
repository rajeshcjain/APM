
import { Component,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl : 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

/*
This compoenet is a netsted component of products and as we want it to be independent of products so that it can be
used by other components as well;so we put it inside shared folder.
 */
export class StarComponent implements OnChanges{
   
   //This @Input() container is used for getting the value from the external container to 
   // rating;So from product-list.component.html will send the data to this rating here.
   //Please see the product-list.component.html for details.
    @Input() rating: number;
    starWidth:number;
    /*
    If the nested container wants to send the data to outer container then it is being done through Event.
    The data is sent through EventEmitter.@Output() is used to speciy that it will be used as the output.
    Here ratingClicked is of type EventEmitter.
    */
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

/*
Now whenever we get the updated value of the rating then star component value changes and hence the value of StarComponent changes
and on each change the ngOnChanges() function is triggered.
*/
    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
    }

    onClick():void{
        //To emit the data we use the emit function of EventEmitter and we use `` rather then '' as `` will allow us to 
        // concatinate the rating with the sting with the $ sign.
        this.ratingClicked.emit(`The rating is ${this.rating}`);
    }

}