import antlr4 from "antlr4";
import LogicGrammarLexer from "./generated/LogicGrammarLexer.js";
//import CustomLogicVisitor from "./CustomLogicVisitor.js";
import LogicGrammarParser from "./generated/LogicGrammarParser.js";
//import CustomLogicListener from "./CustomLogicListener.js";
import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');
const chars = new antlr4.InputStream(input);

let huboErrorLexico = false;
let huboErrorSintactico = false;

const lexer = new LogicGrammarLexer(chars);

lexer.removeErrorListeners();
lexer.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    console.error(` Error léxico en línea ${line}, columna ${column}: ${msg}`);
    huboErrorLexico = true;
  }
});

const allTokens = [];
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  allTokens.push(token);
  token = lexer.nextToken();
}

const header = "| TOKEN             | LEXEMA             |";
const separator = "-".repeat(header.length);
console.log("\n" + separator);
console.log(header);
console.log(separator);

allTokens.forEach(token => {
  const tokenName = LogicGrammarLexer.symbolicNames[token.type] || "UNKNOWN";
  const lexeme = token.text;
  const line = "| " + tokenName.padEnd(17) + "| " + lexeme.padEnd(19) + "|";
  console.log(line);
});
console.log(separator);

if (huboErrorLexico) {
  console.log("\n  El análisis se detuvo por errores léxicos. No se realizó el análisis sintáctico.");
} else {
  const chars2 = new antlr4.InputStream(input);
  const lexer2 = new LogicGrammarLexer(chars2);
  const tokens2 = new antlr4.CommonTokenStream(lexer2);
  const parser2 = new LogicGrammarParser(tokens2);

  parser2.removeErrorListeners();
  parser2.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      console.error(` Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
      huboErrorSintactico = true;
    }
  });

  parser2.buildParseTrees = true;
  const tree = parser2.formula();

  if (!huboErrorSintactico) {
    console.log("\n Análisis sintáctico exitoso.\n");
    console.log("Árbol de derivación:\n" + tree.toStringTree(parser2.ruleNames) + "\n\r");
  } else {
    console.log("\n El análisis se completó con errores sintácticos.");
  }
}