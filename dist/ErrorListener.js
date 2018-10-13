"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SyntaxErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
SyntaxErrorListener.INSTANCE = new SyntaxErrorListener();
exports.SyntaxErrorListener = SyntaxErrorListener;
