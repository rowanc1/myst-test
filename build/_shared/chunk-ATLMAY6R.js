import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/accesslog.js
var require_accesslog = __commonJS({
  "../../node_modules/highlight.js/lib/languages/accesslog.js"(exports, module) {
    function source(re) {
      if (!re)
        return null;
      if (typeof re === "string")
        return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map((x) => source(x)).join("");
      return joined;
    }
    function either(...args) {
      const joined = "(" + args.map((x) => source(x)).join("|") + ")";
      return joined;
    }
    function accesslog(_hljs) {
      const HTTP_VERBS = [
        "GET",
        "POST",
        "HEAD",
        "PUT",
        "DELETE",
        "CONNECT",
        "OPTIONS",
        "PATCH",
        "TRACE"
      ];
      return {
        name: "Apache Access Log",
        contains: [
          {
            className: "number",
            begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
            relevance: 5
          },
          {
            className: "number",
            begin: /\b\d+\b/,
            relevance: 0
          },
          {
            className: "string",
            begin: concat(/"/, either(...HTTP_VERBS)),
            end: /"/,
            keywords: HTTP_VERBS,
            illegal: /\n/,
            relevance: 5,
            contains: [
              {
                begin: /HTTP\/[12]\.\d'/,
                relevance: 5
              }
            ]
          },
          {
            className: "string",
            begin: /\[\d[^\]\n]{8,}\]/,
            illegal: /\n/,
            relevance: 1
          },
          {
            className: "string",
            begin: /\[/,
            end: /\]/,
            illegal: /\n/,
            relevance: 0
          },
          {
            className: "string",
            begin: /"Mozilla\/\d\.\d \(/,
            end: /"/,
            illegal: /\n/,
            relevance: 3
          },
          {
            className: "string",
            begin: /"/,
            end: /"/,
            illegal: /\n/,
            relevance: 0
          }
        ]
      };
    }
    module.exports = accesslog;
  }
});

export {
  require_accesslog
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-ATLMAY6R.js.map
