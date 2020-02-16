import { HttpClient } from '@angular/common/http';
import { OAuthService, OAuthKey, OAuthToken } from './oauth.service';
export declare class AuthorizedRequestService {
    private oauth;
    private http;
    constructor(oauth: OAuthService, http: HttpClient);
    get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken): import("rxjs").Observable<Object>;
    post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken): import("rxjs").Observable<Object>;
}
