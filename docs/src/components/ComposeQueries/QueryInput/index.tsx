import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface QueryInputProps {
  queryObj: string;
  onChange: (value: string) => void;
}

export default function QueryInput({ queryObj, onChange }: QueryInputProps): JSX.Element {
  return (
    <div>
      <label className="label">
        Query Object
        <textarea className={styles.textarea} value={queryObj} onChange={event => onChange(event.target.value)} />
      </label>
    </div>
  );
}
