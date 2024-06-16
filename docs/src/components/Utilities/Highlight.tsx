import { Language, Highlight as PrismaHighlight, themes } from 'prism-react-renderer';
import { useColorMode } from '@docusaurus/theme-common';

interface HighlightProps {
  code: string;
  language: Language;
  classNames?: {
    pre?: string;
  };
}

export function Highlight({ code, language, classNames = {} }: HighlightProps) {
  const { colorMode } = useColorMode();

  const theme = colorMode === 'light' ? themes.github : themes.shadesOfPurple;

  return (
    <PrismaHighlight theme={theme} code={code} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
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
      )}
    </PrismaHighlight>
  );
}
