import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Highlight } from '../Utilities/Highlight';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const exampleSoql = `SELECT Name
FROM Account
WHERE Industry = 'media'
ORDER BY BillingPostalCode ASC NULLS LAST
LIMIT 125`;

const exampleCompose = JSON.stringify(
  {
    fields: [
      {
        type: 'Field',
        field: 'Name',
      },
    ],
    sObject: 'Account',
    where: {
      left: {
        field: 'Industry',
        operator: '=',
        literalType: 'STRING',
        value: "'media'",
      },
    },
    orderBy: [
      {
        field: 'BillingPostalCode',
        order: 'ASC',
        nulls: 'LAST',
      },
    ],
    limit: 125,
  },
  null,
  2,
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Parse',
    icon: '{ }',
    description: (
      <>
        <p className={styles.featureTagline}>SOQL string to structured AST</p>
        <div className={styles.codeBlock}>
          <Highlight code={exampleSoql} language="sql" />
        </div>
        <div className={styles.arrow}>&#8595;</div>
        <div className={styles.codeBlock}>
          <Highlight code={exampleCompose} language="json" />
        </div>
      </>
    ),
  },
  {
    title: 'Compose',
    icon: '< >',
    description: (
      <>
        <p className={styles.featureTagline}>AST back to SOQL string</p>
        <div className={styles.codeBlock}>
          <Highlight code={exampleCompose} language="json" />
        </div>
        <div className={styles.arrow}>&#8595;</div>
        <div className={styles.codeBlock}>
          <Highlight code={exampleSoql} language="sql" />
        </div>
      </>
    ),
  },
  {
    title: 'Battle Tested',
    icon: '////',
    description: (
      <>
        <p className={styles.featureTagline}>Production-proven reliability</p>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>0</span>
            <span className={styles.statLabel}>Runtime Dependencies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>330+</span>
            <span className={styles.statLabel}>Test Cases</span>
          </div>
        </div>
        <p>
          Built on a hand-rolled recursive descent parser for maximum performance and a tiny bundle size. Aims to support every SOQL
          feature.
        </p>
        <p>
          Powering{' '}
          <a href="https://getjetstream.app/" target="_blank">
            Jetstream
          </a>{' '}
          in production for many years — billions of queries parsed and composed from thousands of users.
        </p>
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h2 className={styles.featureTitle}>{title}</h2>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
