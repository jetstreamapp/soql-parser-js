import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
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
    description: (
      <>
        <p className={styles.featuresSubHeading}>turn</p>
        <div>
          <pre>
            <code>{exampleSoql}</code>
          </pre>
        </div>
        <p className={styles.featuresSubHeading}>into</p>
        <pre>
          <code>{exampleCompose}</code>
        </pre>
      </>
    ),
  },
  {
    title: 'Compose',
    description: (
      <>
        <p className={styles.featuresSubHeading}>turn</p>
        <div>
          <pre>
            <code>{exampleCompose}</code>
          </pre>
        </div>
        <p className={styles.featuresSubHeading}>into</p>
        <pre>
          <code>{exampleSoql}</code>
        </pre>
      </>
    ),
  },
  {
    title: 'Battle Tested',
    description: (
      <>
        <p>
          Your SOQL query is parsed using a proper language parser,{' '}
          <a href="https://chevrotain.io/docs/features/blazing_fast.html" target="_blank">
            Chevrotain JS
          </a>
          , and aims to support every SOQL feature.
        </p>
        <p>
          This library has been powering{' '}
          <a href="https://getjetstream.app/" target="_blank">
            Jetstream
          </a>{' '}
          in production for many years and has parsed and composed millions of queries from thousands of users.
        </p>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <h2 className="text--center">{title}</h2>
        <p>{description}</p>
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
