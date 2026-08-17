import { Language, Highlight as PrismaHighlight, themes } from 'prism-react-renderer';
import { useColorMode } from '@docusaurus/theme-common';
import { CopyButton } from './CopyButton';
import styles from './Highlight.module.css';

interface HighlightProps {
  code: string;
  language: Language;
  /** Disable where the code is a control rather than content, such as a query picker */
  showCopyButton?: boolean;
  classNames?: {
    pre?: string;
  };
}

export function Highlight({ code, language, showCopyButton = true, classNames = {} }: HighlightProps) {
  const { colorMode } = useColorMode();

  const theme = colorMode === 'light' ? themes.github : themes.shadesOfPurple;

  return (
    <PrismaHighlight theme={theme} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.container}>
          <pre
            className={classNames?.pre}
            style={{
              ...style,
              margin: 0,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
          {showCopyButton && (
            // The code theme colors keep the button legible over code that scrolls beneath it
            <CopyButton code={code} className={styles.copyButton} style={{ background: style.backgroundColor, color: style.color }} />
          )}
        </div>
      )}
    </PrismaHighlight>
  );
}
