import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import sampleQueriesJson from '@site/static/sample-queries-json.json';

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
              {query}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
