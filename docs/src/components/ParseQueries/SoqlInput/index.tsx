import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface SoqlInputProps {
  soql: string;
  onChange: (value: string) => void;
}

export default function SoqlInput({ soql, onChange }: SoqlInputProps): JSX.Element {
  return (
    <div>
      <label className="label">
        SOQL Query
        <textarea className={styles.textarea} value={soql} onChange={event => onChange(event.target.value)} />
      </label>
    </div>
  );
}
