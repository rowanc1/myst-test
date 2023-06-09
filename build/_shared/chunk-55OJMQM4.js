import {
  __commonJS
} from "/myst-test/build/_shared/chunk-7D2LYYYY.js";

// ../../node_modules/refractor/lang/nim.js
var require_nim = __commonJS({
  "../../node_modules/refractor/lang/nim.js"(exports, module) {
    module.exports = nim;
    nim.displayName = "nim";
    nim.aliases = [];
    function nim(Prism) {
      Prism.languages.nim = {
        comment: {
          pattern: /#.*/,
          greedy: true
        },
        string: {
          pattern: /(?:\b(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")/,
          greedy: true
        },
        char: {
          pattern: /'(?:\\(?:\d+|x[\da-fA-F]{0,2}|.)|[^'])'/,
          greedy: true
        },
        function: {
          pattern: /(?:(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
          greedy: true,
          inside: {
            operator: /\*$/
          }
        },
        identifier: {
          pattern: /`[^`\r\n]+`/,
          greedy: true,
          inside: {
            punctuation: /`/
          }
        },
        number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
        keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
        operator: {
          pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|in|is|isnot|mod|not|notin|of|or|shl|shr|xor)\b)/m,
          lookbehind: true
        },
        punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
      };
    }
  }
});

export {
  require_nim
};
//# sourceMappingURL=/myst-test/build/_shared/chunk-55OJMQM4.js.map
