import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import sampleQueriesJson from '@site/static/sample-queries-json.json';
import { Highlight } from '../Utilities/Highlight';

const sampleQueries: string[] = sampleQueriesJson;

export interface SoqlListProps {
  isOpen?: boolean;
  selected?: string;
  onSelected: (selected: string) => void;
  onToggleOpen: () => void;
}

export default function SoqlList({ isOpen = true, selected, onSelected, onToggleOpen }: SoqlListProps): JSX.Element {
  return (
    <div className={clsx(styles.container, { [styles.collapsed]: !isOpen })}>
      <button className={styles.collapseIcon} onClick={onToggleOpen} title="Toggle sidebar">
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {sampleQueries.map((query, i) => (
            <li
              key={query + i}
              className={clsx(styles.listItem, { [styles.selected]: selected === query })}
              onClick={() => onSelected(query)}
            >
              {/* These are pickers, not output - a copy button would cover the wrapped query text */}
              <Highlight code={query} language="sql" showCopyButton={false} classNames={{ pre: 'wrap-text' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
