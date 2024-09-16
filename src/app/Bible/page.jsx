"use client"
import React from 'react';
import './bible.css';
import { useTranslation } from 'react-i18next';
const ContributionBible = () => {
const {t}=useTranslation();
  return (
    <div className="contribution-container">
      <header className="contribution-header">
        <div className="header-content">
          <a href="/" className="">{t("Back")}</a>
        </div>
      </header>

      <div className="contribution-body">
        <h1>{t("WELCOME TO")}<br /><span>{t("THE CONTRIBUTION BIBLE")}</span></h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="What do you need help with?"
            className="search-input"
          />
        </div>
        <div className="bible-icon"></div>
      </div>
      <div className="allsection">
      <section className="content-cards">
        <div className="section">
          <h2>{t("Genral")}</h2>
        </div>
        <div className="section">
          <h2>{t("New content")}</h2>
        </div>
        <div className="section">
          <h2>{t("Image")}</h2>
        </div>
      </section>
      <section className="tall_bibles">
       <div className="bible movie">
        <div>
          <p>{t("Movie")}</p>
          <span></span>
          <p>{t("Bible")}</p>
        </div>
       </div>
       <div className="bible tv">
        <div>
          <p>{t("TV")}</p>
          <span></span>
          <p>{t("Bible")}</p>
        </div>
       </div>
       <div className="bible people">
        <div>
          <p>{t("PEOPLE")}</p>
          <span></span>
          <p>{t("Bible")}</p>
        </div>
       </div>
       <div className="bible collection">
        <div>
          <p>{t("COLLECTION")}</p>
          <span></span>
          <p>{t("Bible")}</p>
        </div>
       </div>
      </section>
      <section className="featured-articles">
        <h2>{t("FEATURED ARTICLES")}</h2>
        <div className="articles-grid">
          <div className="article">
            <span className="article-category movie">{t("MOVIE")}</span>
            <span className="article-title">{t("Video?")}</span>
          </div>
          <div className="article">
            <span className="article-category new-content">{t("NEW CONTENT")}</span>
            <span className="article-title">{t("Amateur Content")}</span>
          </div>
          <div className="article">
            <span className="article-category new-content">{t("NEW CONTENT")}</span>
            <span className="article-title">{t("Collections")}</span>
          </div>
          <div className="article">
            <span className="article-category image">{t("IMAGE")}</span>
            <span className="article-title">{t("Image Quality")}</span>
          </div>
          <div className="article">
            <span className="article-category tv">{t("TV")}</span>
            <span className="article-title">{t("Adding New Episodes")}</span>
          </div>
          <div className="article">
            <span className="article-category general">{t("GENERAL")}</span>
            <span className="article-title">{t("Website Translation")}</span>
          </div>
          <div className="article">
            <span className="article-category tv">{t("TV")}</span>
            <span className="article-title">{t("Regular Cast")}</span>
          </div>
          <div className="article">
            <span className="article-category general">{t("GENERAL")}</span>
            <span className="article-title">{t("Search Tips")}</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContributionBible;

