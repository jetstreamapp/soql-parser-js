import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground} />
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Open Source SOQL Toolkit</p>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>
            Parse, compose, and format SOQL queries with zero runtime dependencies.
          </p>
          <div className={styles.heroInstall}>
            <code>npm install @jetstreamapp/soql-parser-js</code>
          </div>
          <div className={styles.buttons}>
            <Link className={clsx('button button--lg', styles.buttonPrimary)} to="/docs/overview">
              Get Started
            </Link>
            <Link className={clsx('button button--lg', styles.buttonSecondary)} to="/playground">
              Playground
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Javascript SOQL parser and builder.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
