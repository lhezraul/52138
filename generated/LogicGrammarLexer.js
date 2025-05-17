// Generated from c:/Users/lhezr/52138/LogicGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,43,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,5,4,
28,8,4,10,4,12,4,31,9,4,1,5,1,5,1,6,1,6,1,7,4,7,38,8,7,11,7,12,7,39,1,7,
1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,3,2,0,65,90,97,122,3,0,
48,57,65,90,97,122,3,0,9,10,13,13,32,32,44,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,25,1,0,0,0,11,32,1,0,0,
0,13,34,1,0,0,0,15,37,1,0,0,0,17,18,5,708,0,0,18,2,1,0,0,0,19,20,5,709,0,
0,20,4,1,0,0,0,21,22,5,45,0,0,22,6,1,0,0,0,23,24,5,8594,0,0,24,8,1,0,0,0,
25,29,7,0,0,0,26,28,7,1,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,
30,1,0,0,0,30,10,1,0,0,0,31,29,1,0,0,0,32,33,5,40,0,0,33,12,1,0,0,0,34,35,
5,41,0,0,35,14,1,0,0,0,36,38,7,2,0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,
0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,6,7,0,0,42,16,1,0,0,0,3,0,29,39,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "LogicGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\u02C4'", "'\\u02C5'", "'-'", "'\\u2192'", 
                         null, "'('", "')'" ];
	static symbolicNames = [ null, "AND", "OR", "NOT", "IMPLIES", "ID", "LPAREN", 
                          "RPAREN", "WS" ];
	static ruleNames = [ "AND", "OR", "NOT", "IMPLIES", "ID", "LPAREN", "RPAREN", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicGrammarLexer.EOF = antlr4.Token.EOF;
LogicGrammarLexer.AND = 1;
LogicGrammarLexer.OR = 2;
LogicGrammarLexer.NOT = 3;
LogicGrammarLexer.IMPLIES = 4;
LogicGrammarLexer.ID = 5;
LogicGrammarLexer.LPAREN = 6;
LogicGrammarLexer.RPAREN = 7;
LogicGrammarLexer.WS = 8;



