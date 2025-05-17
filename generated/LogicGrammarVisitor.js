// Generated from c:/Users/lhezr/52138/LogicGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LogicGrammarParser.

export default class LogicGrammarVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LogicGrammarParser#formula.
	visitFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#implicacion.
	visitImplicacion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#disyuncion.
	visitDisyuncion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#conjuncion.
	visitConjuncion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#negacion.
	visitNegacion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicGrammarParser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}



}