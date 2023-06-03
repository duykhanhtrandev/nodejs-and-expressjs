# WHAT IS HTTP?

- Hyper Text Transfer Protocol
- Communication between web servers & clients
- HTTP Requests / Responses
- Loading pages, form submit, Ajax calls

# WHAT IS HTTPS?

- Hyper Text Transfer Protocol Secure
- Data sent is encrypted
- SSL / TLS
- Install certificate on web host

## HTTP METHODS

```markdown
- GET
  Retries data from the server
- POST
  Submit data to the server
- PUT
  Update data already on the server
- DELETE
  Deletes data from the server
```

## HTTP HEADER FIELDS

![HTTP headers](https://cdn.tutsplus.com/cdn-cgi/image/width=590/net/uploads/legacy/511_http/request_header.png)

```markdown
1. General:

- Request URL
- Request Method
- Status Code
- Remote Address
- Referrer Policy

2. Response:

- Server
- Set-Cookie
- Content-Type
- Content-Length
- Date

3. Request:

- Cookies
- Accept-xxx
- Content-Type
- Content-Length
- Authorization
- User-Agent
- Referrer
```

## HTTP STATUS CODES

```markdown
- 1xx: Informational
  Request received / processing
- 2xx: Success
  Successfully Received, understood and accepted
- 3xx: Redirect
  Further action must be taken / redirect
- 4xx: Client Error
  Request does not have what it needs
- 5xx: Server Error
  Server failed to fulfil ab apparent valid request
```

## HTTP/2

![HTTP/2](https://media.licdn.com/dms/image/C5112AQGbckkA22sh-Q/article-inline_image-shrink_1000_1488/0/1538240552340?e=1691020800&v=beta&t=FKzJg54P1hKy2OPfC1PYhR6j-R-3Kup7mLv2qHVFcII)

- Major revision of HTTP
- Under the hood changes
- Respond with more data
- Reduce latency by enabling full request and response multiplexing
- Fast, efficient & secure
