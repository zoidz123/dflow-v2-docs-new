import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageLinks from "../components/HomepageLinks";
import CardLinks from "../components/CardLinks";
import styles from "./index.module.css";
import SearchBarWrapper from "../theme/SearchBar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="black-text">Welcome to the Docs</h1>
        <p className="hero__subtitle black-text">
          Explore guides and resources to integrate DFlow
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`DFlow Docs`} description="">
      <HomepageHeader />
      <hr
        style={{
          color: "#D3D3D3",
          backgroundColor: "#D3D3D3",
          height: 0.5,
          borderColor: "#D3D3D3",
        }}
      />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
