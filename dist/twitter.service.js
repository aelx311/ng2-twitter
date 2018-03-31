var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthorizedRequestService } from './authorized-request.service';
import { OAuthService } from './oauth.service';
import { Sha1Service } from './sha1.service';
var TwitterService = (function () {
    function TwitterService(http) {
        this.http = http;
        this.authRequest = new AuthorizedRequestService(new OAuthService(new Sha1Service()), this.http);
    }
    TwitterService.prototype.get = function (url, query, oauthKey, oauthToken) {
        return this.authRequest.get(url, query, oauthKey, oauthToken);
    };
    TwitterService.prototype.post = function (url, params, oauthKey, oauthToken) {
        return this.authRequest.post(url, params, oauthKey, oauthToken);
    };
    TwitterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], TwitterService);
    return TwitterService;
}());
export { TwitterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3R3aXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTixJQUFJLEVBR0osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUNOLFlBQVksRUFHWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QztJQUdJLHdCQUNZLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBR2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx3QkFBd0IsQ0FDM0MsSUFBSSxZQUFZLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxFQUNuQyxJQUFJLENBQUMsSUFBSSxDQUNaLENBQUM7SUFDTixDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxLQUFVLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLE1BQVcsRUFBRSxRQUFrQixFQUFFLFVBQXNCO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQW5CUSxjQUFjO1FBRDFCLFVBQVUsRUFBRTt5Q0FLUyxJQUFJO09BSmIsY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLGNBQWMifQ==