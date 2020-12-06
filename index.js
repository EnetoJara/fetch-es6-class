"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch = void 0;
var defheaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
var Fetch = /** @class */ (function () {
    function Fetch() {
    }
    return Fetch;
}());
exports.Fetch = Fetch;
Fetch.prototype.request = function request(req, config) {
    return fetch(req, config)
        .then(function (res) {
        if (res.status > 210) {
            throw res;
        }
        return res.json();
    })
        .then(function (done) { return done; });
};
Fetch.prototype.get = function get(url, headers) {
    if (headers === void 0) { headers = defheaders; }
    var auxConfig = {
        headers: headers,
        cache: "default",
        method: "get",
    };
    return this.request(url, auxConfig);
};
Fetch.prototype.post = function post(url, body, headers) {
    if (headers === void 0) { headers = defheaders; }
    var auxConfig = {
        headers: headers,
        cache: "default",
        method: "post",
        body: JSON.stringify(body),
    };
    return this.request(url, auxConfig);
};
Fetch.prototype.delete = function (url, headers) {
    if (headers === void 0) { headers = defheaders; }
    var auxConfig = {
        headers: headers,
        cache: "reload",
        method: "delete",
    };
    return this.request(url, auxConfig);
};
Fetch.prototype.put = function put(url, body, headers) {
    if (headers === void 0) { headers = defheaders; }
    var auxConfig = {
        headers: headers,
        cache: "default",
        method: "post",
        body: JSON.stringify(body),
    };
    return this.request(url, auxConfig);
};
Fetch.prototype.patch = function patch(url, body, headers) {
    if (headers === void 0) { headers = defheaders; }
    var auxConfig = {
        headers: headers,
        cache: "default",
        method: "post",
        body: JSON.stringify(body),
    };
    return this.request(url, auxConfig);
};
//# sourceMappingURL=fetch.js.map