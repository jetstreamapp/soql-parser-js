import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';
import clsx from 'clsx';
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import styles from './CopyButton.module.css';

const COPIED_INDICATOR_DURATION = 1000;

export interface CopyButtonProps {
  code: string;
  /** Owns placement and visibility - see the caller's stylesheet */
  className?: string;
  style?: CSSProperties;
}

/**
 * Matches the copy button that Docusaurus renders on markdown code blocks, for the places where
 * code is rendered by our own components instead of by `@theme/CodeBlock`.
 */
export function CopyButton({ code, className, style }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  const copyCode = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // The button can sit inside clickable content, such as the playground query list
      event.stopPropagation();
      // navigator.clipboard is only defined in secure contexts, which covers both the deployed
      // site and the local dev server
      navigator.clipboard?.writeText(code).then(() => {
        setIsCopied(true);
        copyTimeout.current = window.setTimeout(() => setIsCopied(false), COPIED_INDICATOR_DURATION);
      });
    },
    [code],
  );

  return (
    <button
      type="button"
      className={clsx('clean-btn', styles.copyButton, { [styles.copyButtonCopied]: isCopied }, className)}
      style={style}
      title="Copy"
      aria-label={isCopied ? 'Copied' : 'Copy code to clipboard'}
      onClick={copyCode}
    >
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <IconCopy className={styles.copyButtonIcon} />
        <IconSuccess className={styles.copyButtonSuccessIcon} />
      </span>
    </button>
  );
}
