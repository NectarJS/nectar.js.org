import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Performance and Speed",
    imageUrl: "img/speedometer.svg",
    description: (
      <>
        With NectarJS's AOT compiler, your JavaScript code will outperform all
        other JavaScript engines and run with its full potential, without any
        bytecode or VM.
      </>
    ),
  },
  {
    title: "One Language for All",
    imageUrl: "img/js_logo.svg",
    description: (
      <>
        With NectarJS, you can create almost anything, from device drivers to
        desktop applications, with one language : JavaScript. NectarJS complies
        with ECMA Standards to provide best-class support for JavaScript.
      </>
    ),
  },
  {
    title: "Supports various platforms and lanaguages",
    imageUrl: "img/platforms.svg",
    description: (
      <>
        Your code can now run various platforms such as Intel, AMD, ARM,
        Arduino, Android, Windows, Linux and much more. NectarJS also aim to
        support languages that compile to JavaScript like TypeScript, Brython,
        etc.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`NectarJS`}
      description="JavaScript native compiler. No bytecode no VM, just pure native binaries."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={styles.container + " container"}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.heroBG}></div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
