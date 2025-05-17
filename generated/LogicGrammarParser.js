// Generated from c:/Users/lhezr/52138/LogicGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicGrammarListener from './LogicGrammarListener.js';
import LogicGrammarVisitor from './LogicGrammarVisitor.js';

const serializedATN = [4,1,8,66,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,26,8,1,1,
2,3,2,29,8,2,1,2,1,2,1,2,1,2,1,2,3,2,36,8,2,1,3,3,3,39,8,3,1,3,1,3,1,3,1,
3,1,3,3,3,46,8,3,1,4,3,4,49,8,4,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,1,5,1,5,1,
5,1,5,3,5,62,8,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,69,0,14,1,0,0,0,2,
25,1,0,0,0,4,35,1,0,0,0,6,45,1,0,0,0,8,55,1,0,0,0,10,61,1,0,0,0,12,63,1,
0,0,0,14,15,3,2,1,0,15,1,1,0,0,0,16,26,3,4,2,0,17,26,3,6,3,0,18,26,3,8,4,
0,19,26,3,10,5,0,20,21,5,6,0,0,21,22,3,2,1,0,22,23,5,7,0,0,23,24,3,2,1,0,
24,26,1,0,0,0,25,16,1,0,0,0,25,17,1,0,0,0,25,18,1,0,0,0,25,19,1,0,0,0,25,
20,1,0,0,0,26,3,1,0,0,0,27,29,5,5,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,30,
1,0,0,0,30,31,5,4,0,0,31,36,3,2,1,0,32,33,5,5,0,0,33,34,5,4,0,0,34,36,5,
5,0,0,35,28,1,0,0,0,35,32,1,0,0,0,36,5,1,0,0,0,37,39,5,5,0,0,38,37,1,0,0,
0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,2,0,0,41,46,3,2,1,0,42,43,5,5,0,0,
43,44,5,2,0,0,44,46,5,5,0,0,45,38,1,0,0,0,45,42,1,0,0,0,46,7,1,0,0,0,47,
49,5,5,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,1,0,0,51,56,
3,2,1,0,52,53,5,5,0,0,53,54,5,1,0,0,54,56,5,5,0,0,55,48,1,0,0,0,55,52,1,
0,0,0,56,9,1,0,0,0,57,58,5,3,0,0,58,62,3,2,1,0,59,60,5,3,0,0,60,62,5,5,0,
0,61,57,1,0,0,0,61,59,1,0,0,0,62,11,1,0,0,0,63,64,5,5,0,0,64,13,1,0,0,0,
8,25,28,35,38,45,48,55,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicGrammarParser extends antlr4.Parser {

    static grammarFileName = "LogicGrammar.g4";
    static literalNames = [ null, "'\\u02C4'", "'\\u02C5'", "'-'", "'\\u2192'", 
                            null, "'('", "')'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "IMPLIES", "ID", 
                             "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "formula", "expr", "implicacion", "disyuncion", 
                         "conjuncion", "negacion", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicGrammarParser.ruleNames;
        this.literalNames = LogicGrammarParser.literalNames;
        this.symbolicNames = LogicGrammarParser.symbolicNames;
    }



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicGrammarParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicGrammarParser.RULE_expr);
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.implicacion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.disyuncion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 18;
	            this.conjuncion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 19;
	            this.negacion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 20;
	            this.match(LogicGrammarParser.LPAREN);
	            this.state = 21;
	            this.expr();
	            this.state = 22;
	            this.match(LogicGrammarParser.RPAREN);
	            this.state = 23;
	            this.expr();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implicacion() {
	    let localctx = new ImplicacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicGrammarParser.RULE_implicacion);
	    var _la = 0;
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 27;
	                this.match(LogicGrammarParser.ID);
	            }

	            this.state = 30;
	            this.match(LogicGrammarParser.IMPLIES);
	            this.state = 31;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.match(LogicGrammarParser.ID);
	            this.state = 33;
	            this.match(LogicGrammarParser.IMPLIES);
	            this.state = 34;
	            this.match(LogicGrammarParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disyuncion() {
	    let localctx = new DisyuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicGrammarParser.RULE_disyuncion);
	    var _la = 0;
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 37;
	                this.match(LogicGrammarParser.ID);
	            }

	            this.state = 40;
	            this.match(LogicGrammarParser.OR);
	            this.state = 41;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(LogicGrammarParser.ID);
	            this.state = 43;
	            this.match(LogicGrammarParser.OR);
	            this.state = 44;
	            this.match(LogicGrammarParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjuncion() {
	    let localctx = new ConjuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicGrammarParser.RULE_conjuncion);
	    var _la = 0;
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 47;
	                this.match(LogicGrammarParser.ID);
	            }

	            this.state = 50;
	            this.match(LogicGrammarParser.AND);
	            this.state = 51;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(LogicGrammarParser.ID);
	            this.state = 53;
	            this.match(LogicGrammarParser.AND);
	            this.state = 54;
	            this.match(LogicGrammarParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negacion() {
	    let localctx = new NegacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicGrammarParser.RULE_negacion);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(LogicGrammarParser.NOT);
	            this.state = 58;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(LogicGrammarParser.NOT);
	            this.state = 60;
	            this.match(LogicGrammarParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogicGrammarParser.RULE_primary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(LogicGrammarParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicGrammarParser.EOF = antlr4.Token.EOF;
LogicGrammarParser.AND = 1;
LogicGrammarParser.OR = 2;
LogicGrammarParser.NOT = 3;
LogicGrammarParser.IMPLIES = 4;
LogicGrammarParser.ID = 5;
LogicGrammarParser.LPAREN = 6;
LogicGrammarParser.RPAREN = 7;
LogicGrammarParser.WS = 8;

LogicGrammarParser.RULE_formula = 0;
LogicGrammarParser.RULE_expr = 1;
LogicGrammarParser.RULE_implicacion = 2;
LogicGrammarParser.RULE_disyuncion = 3;
LogicGrammarParser.RULE_conjuncion = 4;
LogicGrammarParser.RULE_negacion = 5;
LogicGrammarParser.RULE_primary = 6;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_formula;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_expr;
    }

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	disyuncion() {
	    return this.getTypedRuleContext(DisyuncionContext,0);
	};

	conjuncion() {
	    return this.getTypedRuleContext(ConjuncionContext,0);
	};

	negacion() {
	    return this.getTypedRuleContext(NegacionContext,0);
	};

	LPAREN() {
	    return this.getToken(LogicGrammarParser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(LogicGrammarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_implicacion;
    }

	IMPLIES() {
	    return this.getToken(LogicGrammarParser.IMPLIES, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicGrammarParser.ID);
	    } else {
	        return this.getToken(LogicGrammarParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterImplicacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitImplicacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitImplicacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisyuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_disyuncion;
    }

	OR() {
	    return this.getToken(LogicGrammarParser.OR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicGrammarParser.ID);
	    } else {
	        return this.getToken(LogicGrammarParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterDisyuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitDisyuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitDisyuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_conjuncion;
    }

	AND() {
	    return this.getToken(LogicGrammarParser.AND, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicGrammarParser.ID);
	    } else {
	        return this.getToken(LogicGrammarParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterConjuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitConjuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitConjuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_negacion;
    }

	NOT() {
	    return this.getToken(LogicGrammarParser.NOT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(LogicGrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterNegacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitNegacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitNegacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicGrammarParser.RULE_primary;
    }

	ID() {
	    return this.getToken(LogicGrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicGrammarListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicGrammarVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicGrammarParser.FormulaContext = FormulaContext; 
LogicGrammarParser.ExprContext = ExprContext; 
LogicGrammarParser.ImplicacionContext = ImplicacionContext; 
LogicGrammarParser.DisyuncionContext = DisyuncionContext; 
LogicGrammarParser.ConjuncionContext = ConjuncionContext; 
LogicGrammarParser.NegacionContext = NegacionContext; 
LogicGrammarParser.PrimaryContext = PrimaryContext; 
