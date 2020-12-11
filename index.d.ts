export interface RequestConfig {
    /**
     * A BodyInit object or null to set request's body.
     */
    body?: BodyInit | null;
    /**
     * A string indicating how the request will interact with the browser's cache to set request's cache.
     */
    cache?: RequestCache;
    /**
     * A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
     */
    credentials?: RequestCredentials;
    /**
     * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
     */
    headers?: HeadersInit;
    /**
     * A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
     */
    integrity?: string;
    /**
     * A boolean to set request's keepalive.
     */
    keepalive?: boolean;
    /**
     * A string to set request's method.
     */
    method?: string;
    /**
     * A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
     */
    mode?: RequestMode;
    /**
     * A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
     */
    redirect?: RequestRedirect;
    /**
     * A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
     */
    referrer?: string;
    /**
     * A referrer policy to set request's referrerPolicy.
     */
    referrerPolicy?: ReferrerPolicy;
    /**
     * An AbortSignal to set request's signal.
     */
    signal?: AbortSignal | null;
    /**
     * Can only be null. Used to disassociate request from any Window.
     */
    window?: unknown;
}
declare type RequestInfo = Request | string;
export declare class Fetch {
/**
     * Request Method. use this method in case you need to send a request with specific configurarions.
     *
     * @param {Request|string} req - it can be a string or a request.
     * @param {object} config - Request config obj.
     * @returns {Promise<Response>} promise with yow response.
     * @example
     * const api = new Fetch();
     * api.request("https://www.mi-pagina-web.com/api/un-path",{
     *    cache: "default",
     *    mode:"CORS",
     *    method:"put",
     *    headers: {
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     * }
     * })
     */
    request: (req: RequestInfo, config: RequestConfig) => Promise<Response>;
    /**
     * The HTTP GET method requests a representation of the specified resource.
     * Requests using GET should only be used to request data (they shouldn't incude data).
     *
     * If you need to send a token on each request, you need to pass a second parameter with yow headers.
     * @param {string} url - endpont.
     * @param {HeaderInit} [headers] - HTTP Headers.
     * @returns {Promise<Response>} promise with yow response.
     * @example
     * const api = new Fetch();
     * api.get("www.domain.com");
     * // or
     * api.get("www.domain.com", {
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     *      "Authorization":"Bearer I_am_yow_token"
     * })
     */
    get: (url: string, headers?: HeadersInit) => Promise<Response>;
    /**
     * The HTTP DELETE request method deletes the specified resource.
     *
     * If you need to send a token on each request, you need to pass a second parameter with yow headers.
     * @template R - response object.
     * @param {string} url - endpont.
     * @param {HeaderInit} [headers] - HTTP Headers.
     * @returns the status code of the request.
     * @example
     * const api = new Fetch();
     * api.delete("www.domain.com");
     * // or
     * api.delete("www.domain.com", {
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     *      "Authorization":"Bearer I_am_yow_token"
     * })
     */
    delete: (url: string, headers?: HeadersInit) => Promise<number>;
    /**
     * The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
     * The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), where successive identical POST may have additional effects, like passing an order several times.
     * A POST request is typically sent via an HTML form and results in a change on the server. In this case, the content type is selected by putting the adequate string in the enctype attribute of the <form> element or the formenctype attribute of the <input> or <button> elements:
     *
     * * application/x-www-form-urlencoded: the keys and values are encoded in key-value tuples separated by '&', with a '=' between the key and the value. Non-alphanumeric characters in both keys and values are percent encoded: this is the reason why this type is not suitable to use with binary data (use multipart/form-data instead).
     * * multipart/form-data: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the Content-Disposition header of each part.
     * * text/plain
     *
     * If you need to send a token on each request, you need to pass a second parameter with yow headers.
     * @template B - body object.
     * @param {string} url - endpont.
     * @param {HeaderInit} [headers] - HTTP Headers.
     * @returns if status code is 200 it returns the response, else void
     * @example
     * const api = new Fetch();
     * api.post("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * });
     * // or
     * api.post("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * },{
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     *      "Authorization":"Bearer I_am_yow_token"
     * })
     */
    post: <B>(url: string, body: B, headers?: HeadersInit)=> Promise<Response|void>;
    /**
     * The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
     * The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical POST requests may have additional effects, akin to placing an order several times.
     *
     * If you need to send a token on each request, you need to pass a second parameter with yow headers.
     * @template B - body object.
     * @param {string} url - endpont.
     * @param {HeaderInit} [headers] - HTTP Headers.
     * @returns the status code of the request.
     * @example
     * const api = new Fetch();
     * api.put("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * });
     * // or
     * api.put("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * },{
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     *      "Authorization":"Bearer I_am_yow_token"
     * })
     */
    put: <B>(url: string, body: B, headers?: HeadersInit) => Promise<Response|void>;
    /**
     * The *HTTP PATCH* request method applies partial modifications to a resource.
     * *PATCH* is somewhat analogous to the *update* concept found in `CRUD` (in general, *HTTP* is different than `CRUD`, and the two should not be confused).
     * A *PATCH* request is considered a set of instructions on how to modify a resource.
     * Contrast this with *PUT*; which is a complete representation of a resource.
     * A *PATCH* is not necessarily idempotent, although it can be.
     * Contrast this with *PUT*; which is always idempotent. The word *idempotent* means that any number of repeated, identical requests will leave the resource in the same state.
     * For example if an *auto-incrementing* counter field is an integral part of the resource,
     * then a *PUT* will naturally overwrite it (since it overwrites everything), but not necessarily so for *PATCH*.
     * *PATCH* (like *POST*) may have side-effects on other resources.
     *
     * @template B - body object.
     * @param {string} url - endpont.
     * @param {HeaderInit} [headers] - HTTP Headers.
     * @example
     * const api = new Fetch();
     * api.put("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * });
     * // or
     * api.put("www.domain.com", {
     *  username: "trollmon",
     * password: "trollmon_password"
     * },{
     *      "Content-Type": "application/json",
     *      "Accept": "application/json",
     *      "Authorization":"Bearer I_am_yow_token"
     * })
     * @returns if status code is 200 it returns the response, else void
     */
    patch: <B>(url: string, body: B, headers?: HeadersInit) => Promise<Response|void>;

    /**
     * **HTTP GET METHOD**
     *
     * We first check if this url is already fetched if so, we just return it, else we trigger the **HTTP** request then we cached the result if it doesnt have an error.
     *
     * @param {string} url - endpoint.
     * @param {string} cacheName - identifier of our cache.
     * @param {HeadersInit} [headers] - http headers.
     */
    cacheFirst: (url: string, cacheName: string,headers?: HeadersInit)=>Promise<Response>;
}
export {};
