import { Headers } from '@angular/http';
var AuthorizedRequestService = (function () {
    function AuthorizedRequestService(oauth, http) {
        this.oauth = oauth;
        this.http = http;
    }
    AuthorizedRequestService.prototype.get = function (url, query, oauthKey, oauthToken) {
        var _this = this;
        var authHeader = new Headers();
        authHeader.append('Authorization', this.oauth.createHeaderString('GET', url, query, oauthKey, oauthToken, this.oauth.createNonce(10), this.oauth.createTimestamp()));
        var requestUrl = url;
        var queryArray = [];
        Object.keys(query).forEach(function (k) {
            queryArray.push({
                key: _this.oauth.fixedEncodeURIComponent(k),
                val: _this.oauth.fixedEncodeURIComponent(query[k])
            });
        });
        if (queryArray.length > 0) {
            requestUrl += '?';
            requestUrl += queryArray.map(function (param) {
                return param.key + '=' + param.val;
            }).join('&');
        }
        return this.http.get(requestUrl, { headers: authHeader });
    };
    AuthorizedRequestService.prototype.post = function (url, params, oauthKey, oauthToken) {
        var _this = this;
        var authHeader = new Headers();
        authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        authHeader.append('Authorization', this.oauth.createHeaderString('POST', url, params, oauthKey, oauthToken, this.oauth.createNonce(10), this.oauth.createTimestamp()));
        var paramArray = [];
        Object.keys(params).forEach(function (k) {
            paramArray.push({
                key: _this.oauth.fixedEncodeURIComponent(k),
                val: _this.oauth.fixedEncodeURIComponent(params[k])
            });
        });
        paramArray = this.oauth.sortAlphabetically(paramArray);
        var body = paramArray.map(function (param) {
            return param.key + '=' + param.val;
        }).join('&');
        return this.http.post(url, body, { headers: authHeader });
    };
    return AuthorizedRequestService;
}());
export { AuthorizedRequestService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXplZC1yZXF1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLE9BQU8sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUNDLGtDQUNTLEtBQW1CLEVBQ25CLElBQVU7UUFEVixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQU07SUFDakIsQ0FBQztJQUVILHNDQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVSxFQUFFLFFBQWtCLEVBQUUsVUFBc0I7UUFBdkUsaUJBb0JDO1FBbkJBLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlKLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLFVBQVUsR0FBUyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsR0FBRyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ3hCLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDbEIsVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFTO2dCQUN0QyxPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx1Q0FBSSxHQUFKLFVBQUssR0FBVyxFQUFFLE1BQVcsRUFBRSxRQUFrQixFQUFFLFVBQXNCO1FBQXpFLGlCQW1CQztRQWxCQSxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBR2hLLElBQUksVUFBVSxHQUFTLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDZixHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFTO1lBQ3BDLE9BQU8sS0FBSyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDIn0=