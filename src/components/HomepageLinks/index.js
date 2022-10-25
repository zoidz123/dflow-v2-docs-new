import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { FaRocket, FaBook, FaTools } from "react-icons/fa";

const LinksList = [
  {
    title: "Quickstart",
    description: (
      <>
        Learn about DFlow's open and fair PFOF model and what this means for
        crypto users.
      </>
    ),
    call: "Learn More",
    destination: "/docs/dflow-intro",
    icon: <FaRocket />,
  },
  {
    title: "Integration Guides",
    description: (
      <>
        Ready to integrate? View DFlow guides for both order flow sources and
        market makers.
      </>
    ),
    call: "Get Started",
    destination: "/docs/category/integration-guides",
    icon: <FaBook />,
  },
  {
    title: "Technical Reference",
    description: (
      <>
        See the on-chain and off-chain components that make up DFlow Protocol.
      </>
    ),
    call: "View Reference",
    destination: "/docs/category/architecture",
    icon: <FaTools />,
  },
];

function Links({ title, description, call, destination, icon }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.cardFormat}>
        <div class="card-demo">
          <div class="card item shadow--lw">
            <div class={styles.iconFormat}>{icon}</div>
            <div class="card__header">
              <h3 class={styles.titleFormat}>{title}</h3>
            </div>
            <div class="card__body">
              <p class={styles.textFormat}>{description}</p>
            </div>
            <div class="card__footer">
              <Link
                class="button button--secondary button--block"
                to={destination}
              >
                {call}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageLinks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {LinksList.map((props, idx) => (
            <Links key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
