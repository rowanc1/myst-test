import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/highlight.js/lib/languages/angelscript.js
var require_angelscript = __commonJS({
  "../../node_modules/highlight.js/lib/languages/angelscript.js"(exports, module) {
    function angelscript(hljs) {
      var builtInTypeMode = {
        className: "built_in",
        begin: "\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)"
      };
      var objectHandleMode = {
        className: "symbol",
        begin: "[a-zA-Z0-9_]+@"
      };
      var genericMode = {
        className: "keyword",
        begin: "<",
        end: ">",
        contains: [builtInTypeMode, objectHandleMode]
      };
      builtInTypeMode.contains = [genericMode];
      objectHandleMode.contains = [genericMode];
      return {
        name: "AngelScript",
        aliases: ["asc"],
        keywords: "for in|0 break continue while do|0 return if else case switch namespace is cast or and xor not get|0 in inout|10 out override set|0 private public const default|0 final shared external mixin|10 enum typedef funcdef this super import from interface abstract|0 try catch protected explicit property",
        illegal: "(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])",
        contains: [
          {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 0
          },
          {
            className: "string",
            begin: '"""',
            end: '"""'
          },
          {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 0
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "string",
            begin: "^\\s*\\[",
            end: "\\]"
          },
          {
            beginKeywords: "interface namespace",
            end: /\{/,
            illegal: "[;.\\-]",
            contains: [
              {
                className: "symbol",
                begin: "[a-zA-Z0-9_]+"
              }
            ]
          },
          {
            beginKeywords: "class",
            end: /\{/,
            illegal: "[;.\\-]",
            contains: [
              {
                className: "symbol",
                begin: "[a-zA-Z0-9_]+",
                contains: [
                  {
                    begin: "[:,]\\s*",
                    contains: [
                      {
                        className: "symbol",
                        begin: "[a-zA-Z0-9_]+"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          builtInTypeMode,
          objectHandleMode,
          {
            className: "literal",
            begin: "\\b(null|true|false)"
          },
          {
            className: "number",
            relevance: 0,
            begin: "(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)"
          }
        ]
      };
    }
    module.exports = angelscript;
  }
});

export {
  require_angelscript
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-QLFOXZRN.js.map
