Node External Logger
====================

Simple web logger with AJAX transport powered by NodeJS.

Install
-------

```bash
git clone https://github.com/dnbard/node-external-logger.git
cd ./node-external-logger
```

Run
---

Run Logger on default(3000) port:
```bash
node index.js
```

Run Logger on custom port:
```bash
PORT=XXXX node index.js
```

Report
------

Just make POST request to `http://localhost:3000/log` with log message in the request body:
Request:
```
POST http://localhost:3000/log
BODY Log Message
```
Result in Logger terminal:
```
14:42:18 Log Message
```

Request:
```
POST http://localhost:3000/log/Namespace
BODY Log Message
```
Result in Logger terminal:
```
14:42:18 *Namespace* Log Message
```

Request:
```
POST http://localhost:3000/error/Namespace
BODY Log Message
```
Result in Logger terminal:
```
14:42:18 **Namespace** Log Message
```