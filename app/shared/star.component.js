"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StarComponent = (function () {
    function StarComponent() {
        /*
        If the nested container wants to send the data to outer container then it is being done through Event.
        The data is sent through EventEmitter.@Output() is used to speciy that it will be used as the output.
        Here ratingClicked is of type EventEmitter.
        */
        this.ratingClicked = new core_1.EventEmitter();
    }
    /*
    Now whenever we get the updated value of the rating then star component value changes and hence the value of StarComponent changes
    and on each change the ngOnChanges() function is triggered.
    */
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    StarComponent.prototype.onClick = function () {
        //To emit the data we use the emit function of EventEmitter and we use `` rather then '' as `` will allow us to 
        // concatinate the rating with the sting with the $ sign.
        this.ratingClicked.emit("The rating is " + this.rating);
    };
    return StarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = __decorate([
    core_1.Component({
        selector: 'ai-star',
        templateUrl: 'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.css']
    })
    /*
    This compoenet is a netsted component of products and as we want it to be independent of products so that it can be
    used by other components as well;so we put it inside shared folder.
     */
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map