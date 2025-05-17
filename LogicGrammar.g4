grammar LogicGrammar;

// Gramática
formula: expr;

expr: implicacion 
	| disyuncion 
	| conjuncion 
	| negacion
	| LPAREN expr RPAREN expr
	;

implicacion: 
	(ID)? IMPLIES expr 
	| ID IMPLIES ID
	;

disyuncion:
	 (ID)? OR expr 
	| ID OR ID
	 ;

conjuncion: 
	(ID)? AND expr 
	|ID AND ID
	;

negacion: 
	NOT expr 
	| NOT ID
	;

primary: ID;

// Lexemas
AND: '\u02C4';  // ⋀
OR: '\u02C5';   // ⋁
NOT: '-';
IMPLIES: '\u2192'; // →
ID: [a-zA-Z][a-zA-Z0-9]*; // Ejemplo: p, q1, var1
LPAREN: '(';
RPAREN: ')';
WS: [ \t\r\n]+ -> skip; // Ignorar espacios y tabs
