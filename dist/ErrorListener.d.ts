import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
export declare class SyntaxErrorListener implements ANTLRErrorListener<any> {
    static readonly INSTANCE: SyntaxErrorListener;
    syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void;
}
