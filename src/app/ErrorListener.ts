/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the CPAL v1.0
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
import { ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';

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
