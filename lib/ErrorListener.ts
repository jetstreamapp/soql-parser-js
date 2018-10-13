import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';

export class SyntaxErrorListener implements ANTLRErrorListener<any> {
  public static readonly INSTANCE: SyntaxErrorListener = new SyntaxErrorListener();

  public syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
  }
}
