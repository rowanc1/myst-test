import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/dockerfile.js
var require_dockerfile = __commonJS({
  "../../node_modules/highlight.js/lib/languages/dockerfile.js"(exports, module) {
    function dockerfile(hljs) {
      return {
        name: "Dockerfile",
        aliases: ["docker"],
        case_insensitive: true,
        keywords: "from maintainer expose env arg user onbuild stopsignal",
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          {
            beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
            starts: {
              end: /[^\\]$/,
              subLanguage: "bash"
            }
          }
        ],
        illegal: "</"
      };
    }
    module.exports = dockerfile;
  }
});

export {
  require_dockerfile
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-PJKJVBTJ.js.map
