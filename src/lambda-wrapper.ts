const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');
const eventNormalizer = require('@middy/http-event-normalizer');
const headerNormalizer = require('@middy/http-header-normalizer');
const httpCors = require('@middy/http-cors');
const urlEncodePathParser = require('@middy/http-urlencode-path-parser');


// wrap successful execution with what is expected out gateway manager
const wrapSuccess = () => ({
    after: (handler: any, next: any) => {
        let res = handler.response;
        if (!res || typeof res !== 'object' || (!res.statusCode && !res.body)) {
            handler.response = {
                statusCode: 200,
                body: res ? JSON.stringify(res) : ''
            };
        }
    }
});

// wrap failure
const wrapFailure = () => ({
    onError: (handler: any, next: any) => {
        handler.response = handler.response || {};
        if ((handler.response.statusCode || 0) < 400) {
            handler.response.statusCode = handler.error.statusCode ? handler.error.statusCode : 500;
            handler.response.body = handler.error.toString();
        }
    }
});

// manage boiler plate code with middy
const wrapper = (handler: any) => 
{
   return middy(handler)
        .use(eventNormalizer())
        .use(headerNormalizer())
        .use(httpCors())
        .use(jsonBodyParser()) 
        .use(urlEncodePathParser())
        .use(wrapSuccess()) 
        .use(wrapFailure());
}

module.exports = {wrapSuccess, wrapFailure, wrapper}