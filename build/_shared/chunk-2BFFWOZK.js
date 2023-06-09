import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/systemd.js
var require_systemd = __commonJS({
  "../../node_modules/refractor/lang/systemd.js"(exports, module) {
    module.exports = systemd;
    systemd.displayName = "systemd";
    systemd.aliases = [];
    function systemd(Prism) {
      ;
      (function(Prism2) {
        var comment = {
          pattern: /^[;#].*/m,
          greedy: true
        };
        var quotesSource = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;
        Prism2.languages.systemd = {
          comment,
          section: {
            pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,
            greedy: true,
            inside: {
              punctuation: /^\[|\]$/,
              "section-name": {
                pattern: /[\s\S]+/,
                alias: "selector"
              }
            }
          },
          key: {
            pattern: /^[^\s=]+(?=[ \t]*=)/m,
            greedy: true,
            alias: "attr-name"
          },
          value: {
            pattern: RegExp(
              /(=[ \t]*(?!\s))/.source + "(?:" + quotesSource + '|(?=[^"\r\n]))(?:' + (/[^\s\\]/.source + '|[ 	]+(?:(?![ 	"])|' + quotesSource + ")|" + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source) + ")*"
            ),
            lookbehind: true,
            greedy: true,
            alias: "attr-value",
            inside: {
              comment,
              quoted: {
                pattern: RegExp(/(^|\s)/.source + quotesSource),
                lookbehind: true,
                greedy: true
              },
              punctuation: /\\$/m,
              boolean: {
                pattern: /^(?:false|no|off|on|true|yes)$/,
                greedy: true
              }
            }
          },
          punctuation: /=/
        };
      })(Prism);
    }
  }
});

export {
  require_systemd
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-2BFFWOZK.js.map
