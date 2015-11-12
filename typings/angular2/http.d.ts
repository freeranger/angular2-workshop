// Type definitions for Angular v2.0.0-local_sha.9fc24b9
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/http depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./angular2.d.ts"/>




/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
declare module ngHttp {  
  /**
   * Mock Connection to represent a {@link Connection} for tests.
   */
  class MockConnection implements Connection {
    
    constructor(req: Request);
    
    /**
     * Describes the state of the connection, based on `XMLHttpRequest.readyState`, but with
     * additional states. For example, state 5 indicates an aborted connection.
     */
    readyState: ReadyStates;
    
    /**
     * {@link Request} instance used to create the connection.
     */
    request: Request;
    
    /**
     * {@link ng.EventEmitter} of {@link Response}. Can be subscribed to in order to be notified when a
     * response is available.
     */
    response: any;
    
    /**
     * Sends a mock response to the connection. This response is the value that is emitted to the
     * {@link ng.EventEmitter} returned by {@link Http}.
     * 
     * #Example
     * 
     * ```
     * var connection;
     * backend.connections.subscribe(c => connection = c);
     * http.request('data.json').subscribe(res => console.log(res.text()));
     * connection.mockRespond(new Response('fake response')); //logs 'fake response'
     * ```
     */
    mockRespond(res: Response): void;
    
    /**
     * Not yet implemented!
     * 
     * Sends the provided {@link Response} to the `downloadObserver` of the `Request`
     * associated with this connection.
     */
    mockDownload(res: Response): void;
    
    /**
     * Emits the provided error object as an error to the {@link Response} {@link ng.EventEmitter}
     * returned
     * from {@link Http}.
     */
    mockError(err?: Error): void;
    
  }

    
  /**
   * A mock backend for testing the {@link Http} service.
   * 
   * This class can be injected in tests, and should be used to override providers
   * to other backends, such as {@link XHRBackend}.
   * 
   * #Example
   * 
   * ```
   * import {MockBackend, DefaultOptions, Http} from 'angular2/http';
   * it('should get some data', inject([AsyncTestCompleter], (async) => {
   *   var connection;
   *   var injector = Injector.resolveAndCreate([
   *     MockBackend,
   *     provide(Http, {useFactory: (backend, defaultOptions) => {
   *       return new Http(backend, defaultOptions)
   *     }, deps: [MockBackend, DefaultOptions]})]);
   *   var http = injector.get(Http);
   *   var backend = injector.get(MockBackend);
   *   //Assign any newly-created connection to local variable
   *   backend.connections.subscribe(c => connection = c);
   *   http.request('data.json').subscribe((res) => {
   *     expect(res.text()).toBe('awesome');
   *     async.done();
   *   });
   *   connection.mockRespond(new Response('awesome'));
   * }));
   * ```
   * 
   * This method only exists in the mock implementation, not in real Backends.
   */
  class MockBackend implements ConnectionBackend {
    
    constructor();
    
    /**
     * {@link ng.EventEmitter}
     * of {@link MockConnection} instances that have been created by this backend. Can be subscribed
     * to in order to respond to connections.
     * 
     * #Example
     * 
     * ```
     * import {MockBackend, Http, BaseRequestOptions} from 'angular2/http';
     * import {Injector} from 'angular2/core';
     * 
     * it('should get a response', () => {
     *   var connection; //this will be set when a new connection is emitted from the backend.
     *   var text; //this will be set from mock response
     *   var injector = Injector.resolveAndCreate([
     *     MockBackend,
     *     provide(Http, {useFactory: (backend, options) {
     *       return new Http(backend, options);
     *     }, deps: [MockBackend, BaseRequestOptions]}]);
     *   var backend = injector.get(MockBackend);
     *   var http = injector.get(Http);
     *   backend.connections.subscribe(c => connection = c);
     *   http.request('something.json').subscribe(res => {
     *     text = res.text();
     *   });
     *   connection.mockRespond(new Response({body: 'Something'}));
     *   expect(text).toBe('Something');
     * });
     * ```
     * 
     * This property only exists in the mock implementation, not in real Backends.
     */
    connections: any;
    
    /**
     * An array representation of `connections`. This array will be updated with each connection that
     * is created by this backend.
     * 
     * This property only exists in the mock implementation, not in real Backends.
     */
    connectionsArray: MockConnection[];
    
    /**
     * {@link ng.EventEmitter} of {@link MockConnection} instances that haven't yet been resolved (i.e.
     * with a `readyState`
     * less than 4). Used internally to verify that no connections are pending via the
     * `verifyNoPendingRequests` method.
     * 
     * This property only exists in the mock implementation, not in real Backends.
     */
    pendingConnections: any;
    
    /**
     * Checks all connections, and raises an exception if any connection has not received a response.
     * 
     * This method only exists in the mock implementation, not in real Backends.
     */
    verifyNoPendingRequests(): void;
    
    /**
     * Can be used in conjunction with `verifyNoPendingRequests` to resolve any not-yet-resolve
     * connections, if it's expected that there are connections that have not yet received a response.
     * 
     * This method only exists in the mock implementation, not in real Backends.
     */
    resolveAllConnections(): void;
    
    /**
     * Creates a new {@link MockConnection}. This is equivalent to calling `new
     * MockConnection()`, except that it also will emit the new `Connection` to the `connections`
     * emitter of this `MockBackend` instance. This method will usually only be used by tests
     * against the framework itself, not by end-users.
     */
    createConnection(req: Request): Connection;
    
  }

    
  /**
   * Creates `Request` instances from provided values.
   * 
   * The Request's interface is inspired by the Request constructor defined in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#request-class),
   * but is considered a static value whose body can be accessed many times. There are other
   * differences in the implementation, but this is the most significant.
   * 
   * `Request` instances are typically created by higher-level classes, like {@link Http} and
   * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
   * One such example is when creating services that wrap higher-level services, like {@link Http},
   * where it may be useful to generate a `Request` with arbitrary headers and search params.
   * 
   * ```typescript
   * import {Injectable, Injector} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, Http, Request, RequestMethods} from 'angular2/http';
   * 
   * @Injectable()
   * class AutoAuthenticator {
   *   constructor(public http:Http) {}
   *   request(url:string) {
   *     return this.http.request(new Request({
   *       method: RequestMethods.Get,
   *       url: url,
   *       search: 'password=123'
   *     }));
   *   }
   * }
   * 
   * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
   * var authenticator = injector.get(AutoAuthenticator);
   * authenticator.request('people.json').subscribe(res => {
   *   //URL should have included '?password=123'
   *   console.log('people', res.json());
   * });
   * ```
   */
  class Request {
    
    constructor(requestOptions: RequestOptions);
    
    /**
     * Http method with which to perform the request.
     */
    method: RequestMethods;
    
    /**
     * {@link Headers} instance
     */
    headers: Headers;
    
    /**
     * Url of the remote resource
     */
    url: string;
    
    /**
     * Returns the request's body as string, assuming that body exists. If body is undefined, return
     * empty
     * string.
     */
    text(): String;
    
  }

    
  /**
   * Creates `Response` instances from provided values.
   * 
   * Though this object isn't
   * usually instantiated by end-users, it is the primary object interacted with when it comes time to
   * add data to a view.
   * 
   * #Example
   * 
   * ```
   * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
   * ```
   * 
   * The Response's interface is inspired by the Response constructor defined in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
   * can be accessed many times. There are other differences in the implementation, but this is the
   * most significant.
   */
  class Response {
    
    constructor(responseOptions: ResponseOptions);
    
    /**
     * One of "basic", "cors", "default", "error, or "opaque".
     * 
     * Defaults to "default".
     */
    type: ResponseTypes;
    
    /**
     * True if the response's status is within 200-299
     */
    ok: boolean;
    
    /**
     * URL of response.
     * 
     * Defaults to empty string.
     */
    url: string;
    
    /**
     * Status code returned by server.
     * 
     * Defaults to 200.
     */
    status: number;
    
    /**
     * Text representing the corresponding reason phrase to the `status`, as defined in [ietf rfc 2616
     * section 6.1.1](https://tools.ietf.org/html/rfc2616#section-6.1.1)
     * 
     * Defaults to "OK"
     */
    statusText: string;
    
    /**
     * Non-standard property
     * 
     * Denotes how many of the response body's bytes have been loaded, for example if the response is
     * the result of a progress event.
     */
    bytesLoaded: number;
    
    /**
     * Non-standard property
     * 
     * Denotes how many bytes are expected in the final response body.
     */
    totalBytes: number;
    
    /**
     * Headers object based on the `Headers` class in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#headers-class).
     */
    headers: Headers;
    
    /**
     * Not yet implemented
     */
    blob(): any;
    
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    json(): Object;
    
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     */
    text(): string;
    
    /**
     * Not yet implemented
     */
    arrayBuffer(): any;
    
  }

    
  /**
   * Interface for options to construct a Request, based on
   * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
   */
  type RequestOptionsArgs = {
    url?: string;
    method?: string | RequestMethods;
    search?: string | URLSearchParams;
    headers?: Headers;
    // TODO: Support Blob, ArrayBuffer, JSON, URLSearchParams, FormData
    body?: string;
  }

    
  /**
   * Interface for options to construct a Response, based on
   * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
   */
  type ResponseOptionsArgs = {
    // TODO: Support Blob, ArrayBuffer, JSON
    body?: string | Object | FormData;
    status?: number;
    statusText?: string;
    headers?: Headers;
    type?: ResponseTypes;
    url?: string;
  }

    
  /**
   * Abstract class from which real connections are derived.
   */
  abstract class Connection {
    
    readyState: ReadyStates;
    
    request: Request;
    
    response: any;
    
  }

    
  /**
   * Abstract class from which real backends are derived.
   * 
   * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
   * {@link Request}.
   */
  abstract class ConnectionBackend {
    
    createConnection(request: any): Connection;
    
  }

    
  class BrowserXhr {
    
    constructor();
    
    build(): any;
    
  }

    
  /**
   * Subclass of {@link RequestOptions}, with default values.
   * 
   * Default values:
   *  * method: {@link RequestMethods RequestMethods.Get}
   *  * headers: empty {@link Headers} object
   * 
   * This class could be extended and bound to the {@link RequestOptions} class
   * when configuring an {@link Injector}, in order to override the default options
   * used by {@link Http} to create and send {@link Request Requests}.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
   * 
   * ```typescript
   * import {provide, bootstrap} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
   * import {App} from './myapp';
   * 
   * class MyOptions extends BaseRequestOptions {
   *   search: string = 'coreTeam=true';
   * }
   * 
   * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})]);
   * ```
   * 
   * The options could also be extended when manually creating a {@link Request}
   * object.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
   * 
   * ```
   * import {BaseRequestOptions, Request, RequestMethods} from 'angular2/http';
   * 
   * var options = new BaseRequestOptions();
   * var req = new Request(options.merge({
   *   method: RequestMethods.Post,
   *   url: 'https://google.com'
   * }));
   * console.log('req.method:', RequestMethods[req.method]); // Post
   * console.log('options.url:', options.url); // null
   * console.log('req.url:', req.url); // https://google.com
   * ```
   */
  class BaseRequestOptions extends RequestOptions {
    
    constructor();
    
  }

    
  /**
   * Creates a request options object to be optionally provided when instantiating a
   * {@link Request}.
   * 
   * This class is based on the `RequestInit` description in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#requestinit).
   * 
   * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
   * class, which sub-classes `RequestOptions`.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
   * 
   * ```typescript
   * import {RequestOptions, Request, RequestMethods} from 'angular2/http';
   * 
   * var options = new RequestOptions({
   *   method: RequestMethods.Post,
   *   url: 'https://google.com'
   * });
   * var req = new Request(options);
   * console.log('req.method:', RequestMethods[req.method]); // Post
   * console.log('options.url:', options.url); // https://google.com
   * ```
   */
  class RequestOptions {
    
    constructor({method, headers, body, url, search}?: RequestOptionsArgs);
    
    /**
     * Http method with which to execute a {@link Request}.
     * Acceptable methods are defined in the {@link RequestMethods} enum.
     */
    method: RequestMethods | string;
    
    /**
     * {@link Headers} to be attached to a {@link Request}.
     */
    headers: Headers;
    
    /**
     * Body to be used when creating a {@link Request}.
     */
    body: string;
    
    /**
     * Url with which to perform a {@link Request}.
     */
    url: string;
    
    /**
     * Search parameters to be included in a {@link Request}.
     */
    search: URLSearchParams;
    
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     * 
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     * 
     * Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     * 
     * ```typescript
     * import {RequestOptions, Request, RequestMethods} from 'angular2/http';
     * 
     * var options = new RequestOptions({
     *   method: RequestMethods.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethods[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    merge(options?: RequestOptionsArgs): RequestOptions;
    
  }

    
  /**
   * Subclass of {@link ResponseOptions}, with default values.
   * 
   * Default values:
   *  * status: 200
   *  * headers: empty {@link Headers} object
   * 
   * This class could be extended and bound to the {@link ResponseOptions} class
   * when configuring an {@link Injector}, in order to override the default options
   * used by {@link Http} to create {@link Response Responses}.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
   * 
   * ```typescript
   * import {provide, bootstrap} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
   * 'angular2/http';
   * import {App} from './myapp';
   * 
   * class MyOptions extends BaseResponseOptions {
   *   headers:Headers = new Headers({network: 'github'});
   * }
   * 
   * bootstrap(App, [HTTP_PROVIDERS, provide(ResponseOptions, {useClass: MyOptions})]);
   * ```
   * 
   * The options could also be extended when manually creating a {@link Response}
   * object.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
   * 
   * ```
   * import {BaseResponseOptions, Response} from 'angular2/http';
   * 
   * var options = new BaseResponseOptions();
   * var res = new Response(options.merge({
   *   body: 'Angular2',
   *   headers: new Headers({framework: 'angular'})
   * }));
   * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
   * console.log('res.text():', res.text()); // Angular2;
   * ```
   */
  class BaseResponseOptions extends ResponseOptions {
    
    constructor();
    
  }

    
  /**
   * Creates a response options object to be optionally provided when instantiating a
   * {@link Response}.
   * 
   * This class is based on the `ResponseInit` description in the [Fetch
   * Spec](https://fetch.spec.whatwg.org/#responseinit).
   * 
   * All values are null by default. Typical defaults can be found in the
   * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
   * 
   * This class may be used in tests to build {@link Response Responses} for
   * mock responses (see {@link MockBackend}).
   * 
   * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
   * 
   * ```typescript
   * import {ResponseOptions, Response} from 'angular2/http';
   * 
   * var options = new ResponseOptions({
   *   body: '{"name":"Jeff"}'
   * });
   * var res = new Response(options);
   * 
   * console.log('res.json():', res.json()); // Object {name: "Jeff"}
   * ```
   */
  class ResponseOptions {
    
    constructor({body, status, headers, statusText, type, url}?: ResponseOptionsArgs);
    
    /**
     * String or Object representing the body of the {@link Response}.
     */
    body: string | Object;
    
    /**
     * Http {@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     */
    status: number;
    
    /**
     * Response {@link Headers headers}
     */
    headers: Headers;
    
    url: string;
    
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     * 
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     * 
     * Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     * 
     * ```typescript
     * import {ResponseOptions, Response} from 'angular2/http';
     * 
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    merge(options?: ResponseOptionsArgs): ResponseOptions;
    
  }

    
  /**
   * Creates {@link XHRConnection} instances.
   * 
   * This class would typically not be used by end users, but could be
   * overridden if a different backend implementation should be used,
   * such as in a node backend.
   * 
   * #Example
   * 
   * ```
   * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from 'angular2/http';
   * @Component({
   *   viewProviders: [
   *     HTTP_PROVIDERS,
   *     provide(Http, {useFactory: (backend, options) => {
   *       return new Http(backend, options);
   *     }, deps: [MyNodeBackend, BaseRequestOptions]})]
   * })
   * class MyComponent {
   *   constructor(http:Http) {
   *     http('people.json').subscribe(res => this.people = res.json());
   *   }
   * }
   * ```
   */
  class XHRBackend implements ConnectionBackend {
    
    constructor(_browserXHR: BrowserXhr, _baseResponseOptions: ResponseOptions);
    
    createConnection(request: Request): XHRConnection;
    
  }

    
  /**
   * Creates connections using `XMLHttpRequest`. Given a fully-qualified
   * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
   * request.
   * 
   * This class would typically not be created or interacted with directly inside applications, though
   * the {@link MockConnection} may be interacted with in tests.
   */
  class XHRConnection implements Connection {
    
    constructor(req: Request, browserXHR: BrowserXhr, baseResponseOptions?: ResponseOptions);
    
    request: Request;
    
    /**
     * Response {@link ng.EventEmitter} which emits a single {@link Response} value on load event of
     * `XMLHttpRequest`.
     */
    response: any;
    
    readyState: ReadyStates;
    
  }

    
  abstract class JSONPBackend extends ConnectionBackend {
    
  }

    
  abstract class JSONPConnection implements Connection {
    
    readyState: ReadyStates;
    
    request: Request;
    
    response: any;
    
    finished(data?: any): void;
    
  }

    
  /**
   * Performs http requests using `XMLHttpRequest` as the default backend.
   * 
   * `Http` is available as an injectable class, with methods to perform http requests. Calling
   * `request` returns an {@link ng.Observable} which will emit a single {@link Response} when a
   * response is received.
   * 
   * #Example
   * 
   * ```typescript
   * import {Http, HTTP_PROVIDERS} from 'angular2/http';
   * @Component({
   *   selector: 'http-app',
   *   viewProviders: [HTTP_PROVIDERS],
   *   templateUrl: 'people.html'
   * })
   * class PeopleComponent {
   *   constructor(http: Http) {
   *     http.get('people.json')
   *       // Call map on the response observable to get the parsed people object
   *       .map(res => res.json())
   *       // Subscribe to the observable to get the parsed people object and attach it to the
   *       // component
   *       .subscribe(people => this.people = people);
   *   }
   * }
   * ```
   * 
   * 
   * #Example
   * 
   * ```
   * http.get('people.json').observer({next: (value) => this.people = people});
   * ```
   * 
   * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
   * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
   * the {@link XHRBackend} provider, as in the following example:
   * 
   * #Example
   * 
   * ```typescript
   * import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';
   * var injector = Injector.resolveAndCreate([
   *   BaseRequestOptions,
   *   MockBackend,
   *   provide(Http, {useFactory:
   *       function(backend, defaultOptions) {
   *         return new Http(backend, defaultOptions);
   *       },
   *       deps: [MockBackend, BaseRequestOptions]})
   * ]);
   * var http = injector.get(Http);
   * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
   * ```
   */
  class Http {
    
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions);
    
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    request(url: string | Request, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `get` http method.
     */
    get(url: string, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `post` http method.
     */
    post(url: string, body: string, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `put` http method.
     */
    put(url: string, body: string, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `delete` http method.
     */
    delete(url: string, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `patch` http method.
     */
    patch(url: string, body: string, options?: RequestOptionsArgs): any;
    
    /**
     * Performs a request with `head` http method.
     */
    head(url: string, options?: RequestOptionsArgs): any;
    
  }

    
  class Jsonp extends Http {
    
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions);
    
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    request(url: string | Request, options?: RequestOptionsArgs): any;
    
  }

    
  /**
   * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
   * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
   * 
   * The only known difference between this `Headers` implementation and the spec is the
   * lack of an `entries` method.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
   * 
   * ```
   * import {Headers} from 'angular2/http';
   * 
   * var firstHeaders = new Headers();
   * firstHeaders.append('Content-ng.Type', 'image/jpeg');
   * console.log(firstHeaders.get('Content-ng.Type')) //'image/jpeg'
   * 
   * // Create headers from Plain Old JavaScript Object
   * var secondHeaders = new Headers({
   *   'X-My-Custom-Header': 'Angular'
   * });
   * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
   * 
   * var thirdHeaders = new Headers(secondHeaders);
   * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
   * ```
   */
  class Headers {
    
    constructor(headers?: Headers | {[key: string]: any});
    
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    append(name: string, value: string): void;
    
    /**
     * Deletes all header values for the given name.
     */
    delete(name: string): void;
    
    forEach(fn: (values: string[], name: string, headers: Map<string, string[]>) => void): void;
    
    /**
     * Returns first header that matches given name.
     */
    get(header: string): string;
    
    /**
     * Check for existence of header by given name.
     */
    has(header: string): boolean;
    
    /**
     * Provides names of set headers
     */
    keys(): string[];
    
    /**
     * Sets or overrides header value for given name.
     */
    set(header: string, value: string | string[]): void;
    
    /**
     * Returns values of all headers.
     */
    values(): string[][];
    
    /**
     * Returns list of header values for a given name.
     */
    getAll(header: string): string[];
    
    /**
     * This method is not implemented.
     */
    entries(): void;
    
  }

    
  /**
   * Acceptable response types to be associated with a {@link Response}, based on
   * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
   */
  enum ResponseTypes {
    
    Basic,
    
    Cors,
    
    Default,
    
    Error,
    
    Opaque
  }
  

    
  /**
   * All possible states in which a connection can be, based on
   * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
   * additional "CANCELLED" state.
   */
  enum ReadyStates {
    
    Unsent,
    
    Open,
    
    HeadersReceived,
    
    Loading,
    
    Done,
    
    Cancelled
  }
  

    
  /**
   * Supported http methods.
   */
  enum RequestMethods {
    
    Get,
    
    Post,
    
    Put,
    
    Delete,
    
    Options,
    
    Head,
    
    Patch
  }
  

    
  /**
   * Map-like representation of url search parameters, based on
   * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
   * with several extensions for merging URLSearchParams objects:
   *   - setAll()
   *   - appendAll()
   *   - replaceAll()
   */
  class URLSearchParams {
    
    constructor(rawParams?: string);
    
    paramsMap: Map<string, string[]>;
    
    rawParams: string;
    
    clone(): URLSearchParams;
    
    has(param: string): boolean;
    
    get(param: string): string;
    
    getAll(param: string): string[];
    
    set(param: string, val: string): void;
    
    setAll(searchParams: URLSearchParams): void;
    
    append(param: string, val: string): void;
    
    appendAll(searchParams: URLSearchParams): void;
    
    replaceAll(searchParams: URLSearchParams): void;
    
    toString(): string;
    
    delete(param: string): void;
    
  }

    
  /**
   * Provides a basic set of injectables to use the {@link Http} service in any application.
   * 
   * The `HTTP_PROVIDERS` should be included either in a component's injector,
   * or in the root injector when bootstrapping an application.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/snj7Nv?p=preview))
   * 
   * ```
   * import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, Http} from 'angular2/http';
   * 
   * @Component({
   *   selector: 'app',
   *   providers: [HTTP_PROVIDERS],
   *   template: `
   *     <div>
   *       <h1>People</h1>
   *       <ul>
   *         <li *ng-for="#person of people">
   *           {{person.name}}
   *         </li>
   *       </ul>
   *     </div>
   *   `,
   *   directives: [NgFor]
   * })
   * export class App {
   *   people: Object[];
   *   constructor(http:Http) {
   *     http.get('people.json').subscribe(res => {
   *       this.people = res.json();
   *     });
   *   }
   *   active:boolean = false;
   *   toggleActiveState() {
   *     this.active = !this.active;
   *   }
   * }
   * 
   * bootstrap(App)
   *   .catch(err => console.error(err));
   * ```
   * 
   * The primary public API included in `HTTP_PROVIDERS` is the {@link Http} class.
   * However, other providers required by `Http` are included,
   * which may be beneficial to override in certain cases.
   * 
   * The providers included in `HTTP_PROVIDERS` include:
   *  * {@link Http}
   *  * {@link XHRBackend}
   *  * `BrowserXHR` - Private factory to create `XMLHttpRequest` instances
   *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
   *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
   * 
   * There may be cases where it makes sense to extend the base request options,
   * such as to add a search string to be appended to all URLs.
   * To accomplish this, a new provider for {@link RequestOptions} should
   * be added in the same injector as `HTTP_PROVIDERS`.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/aCMEXi?p=preview))
   * 
   * ```
   * import {provide, bootstrap} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
   * 
   * class MyOptions extends BaseRequestOptions {
   *   search: string = 'coreTeam=true';
   * }
   * 
   * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
   *   .catch(err => console.error(err));
   * ```
   * 
   * Likewise, to use a mock backend for unit tests, the {@link XHRBackend}
   * provider should be bound to {@link MockBackend}.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/7LWALD?p=preview))
   * 
   * ```
   * import {provide, Injector} from 'angular2/angular2';
   * import {HTTP_PROVIDERS, Http, Response, XHRBackend, MockBackend} from 'angular2/http';
   * 
   * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
   * 
   * var injector = Injector.resolveAndCreate([
   *   HTTP_PROVIDERS,
   *   MockBackend,
   *   provide(XHRBackend, {useExisting: MockBackend})
   * ]);
   * var http = injector.get(Http);
   * var backend = injector.get(MockBackend);
   * 
   * // Listen for any new requests
   * backend.connections.observer({
   *   next: connection => {
   *     var response = new Response({body: people});
   *     setTimeout(() => {
   *       // Send a response to the request
   *       connection.mockRespond(response);
   *     });
   *   });
   * 
   * http.get('people.json').observer({
   *   next: res => {
   *     // Response came from mock backend
   *     console.log('first person', res.json()[0].name);
   *   }
   * });
   * ```
   */
  let HTTP_PROVIDERS: any[];
  

    
  /**
   * @deprecated
   */
  let HTTP_BINDINGS: any;
  

    
  /**
   * Provides a basic set of providers to use the {@link Jsonp} service in any application.
   * 
   * The `JSONP_PROVIDERS` should be included either in a component's injector,
   * or in the root injector when bootstrapping an application.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/vmeN4F?p=preview))
   * 
   * ```
   * import {Component, NgFor, View} from 'angular2/angular2';
   * import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
   * 
   * @Component({
   *   selector: 'app',
   *   providers: [JSONP_PROVIDERS],
   *   template: `
   *     <div>
   *       <h1>People</h1>
   *       <ul>
   *         <li *ng-for="#person of people">
   *           {{person.name}}
   *         </li>
   *       </ul>
   *     </div>
   *   `,
   *   directives: [NgFor]
   * })
   * export class App {
   *   people: Array<Object>;
   *   constructor(jsonp:Jsonp) {
   *     jsonp.request('people.json').subscribe(res => {
   *       this.people = res.json();
   *     })
   *   }
   * }
   * ```
   * 
   * The primary public API included in `JSONP_PROVIDERS` is the {@link Jsonp} class.
   * However, other providers required by `Jsonp` are included,
   * which may be beneficial to override in certain cases.
   * 
   * The providers included in `JSONP_PROVIDERS` include:
   *  * {@link Jsonp}
   *  * {@link JSONPBackend}
   *  * `BrowserJsonp` - Private factory
   *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
   *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
   * 
   * There may be cases where it makes sense to extend the base request options,
   * such as to add a search string to be appended to all URLs.
   * To accomplish this, a new provider for {@link RequestOptions} should
   * be added in the same injector as `JSONP_PROVIDERS`.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/TFug7x?p=preview))
   * 
   * ```
   * import {provide, bootstrap} from 'angular2/angular2';
   * import {JSONP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
   * 
   * class MyOptions extends BaseRequestOptions {
   *   search: string = 'coreTeam=true';
   * }
   * 
   * bootstrap(App, [JSONP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
   *   .catch(err => console.error(err));
   * ```
   * 
   * Likewise, to use a mock backend for unit tests, the {@link JSONPBackend}
   * provider should be bound to {@link MockBackend}.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/HDqZWL?p=preview))
   * 
   * ```
   * import {provide, Injector} from 'angular2/angular2';
   * import {JSONP_PROVIDERS, Jsonp, Response, JSONPBackend, MockBackend} from 'angular2/http';
   * 
   * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
   * var injector = Injector.resolveAndCreate([
   *   JSONP_PROVIDERS,
   *   MockBackend,
   *   provide(JSONPBackend, {useExisting: MockBackend})
   * ]);
   * var jsonp = injector.get(Jsonp);
   * var backend = injector.get(MockBackend);
   * 
   * // Listen for any new requests
   * backend.connections.observer({
   *   next: connection => {
   *     var response = new Response({body: people});
   *     setTimeout(() => {
   *       // Send a response to the request
   *       connection.mockRespond(response);
   *     });
   *   });
   * 
   * jsonp.get('people.json').observer({
   *   next: res => {
   *     // Response came from mock backend
   *     console.log('first person', res.json()[0].name);
   *   }
   * });
   * ```
   */
  let JSONP_PROVIDERS: any[];
  

    
  /**
   * @deprecated
   */
  let JSON_BINDINGS: any;
  

  
}

declare module "angular2/http" {
  export = ngHttp;
}


