"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SyntaxErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
SyntaxErrorListener.INSTANCE = new SyntaxErrorListener();
exports.SyntaxErrorListener = SyntaxErrorListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvRXJyb3JMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBO0lBR1MsV0FBVyxDQUNoQixVQUE4QixFQUM5QixlQUFrQixFQUNsQixJQUFZLEVBQ1osa0JBQTBCLEVBQzFCLEdBQVcsRUFDWCxDQUFtQztRQUVuQyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLGtCQUFrQixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7QUFYc0IsNEJBQVEsR0FBd0IsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBRG5GLGtEQWFDIn0=