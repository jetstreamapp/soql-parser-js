import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blazing fast',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Soql Parser JS is built using{' '}
        <a href="https://chevrotain.io/docs/" target="_blank">
          Chevrotain
        </a>
        , which is faster and lighter-weight than other comparable parsing frameworks.
      </>
    ),
  },
  {
    title: 'Battle tested',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Soql Parser JS powers{' '}
        <a href="https://getjetstream.app/" target="_blank">
          Jetstream
        </a>{' '}
        and has been used in production for years and has been invoked millions of times. In addition, this library includes a ton of
        test-cases of parsing queries and turning those back into soql queries and confirming the results match the original soql query. You
        can have confidence that your parsed query will not lose any fidelity.
      </>
    ),
  },
  {
    title: 'Written with TypeScript',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Soql Parser JS is written using TypeScript - you get type completion in your project.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
