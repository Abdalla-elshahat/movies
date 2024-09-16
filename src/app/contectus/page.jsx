"use client"
import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('Get In Touch');

  const categories = [
    'Our History',
    'Get In Touch',
    'Logos & Attribution',
    'General',
    'Account',
    'Website'
  ];

  function links(ca) {
    switch(ca) {
      case 'Our History':
        window.open("https://www.themoviedb.org/about","_self");
        break;
      case 'Logos & Attribution':
        window.open("https://www.themoviedb.org/logos-attribution","_self");
        break;
      // Add more cases as needed
      default:
        console.log("No valid category selected");
        break;
    }
  }
  
  const content = {
    'Get In Touch': (
      <div>
        <h2>Get In Touch</h2>
        <div className="faq-item">
          <h3>General Support</h3>
          <p>If you're looking for some help using TMDB, the best place to get support is our <a href="#">forums</a>.</p>
        </div>
        <div className="faq-item">
          <h3>Contact Sales</h3>
          <p>If you or your business would like to talk to our sales team about using TMDB commercially, <a href="#">click here</a>.</p>
        </div>
        <div className="faq-item">
          <h3>General Inquiry</h3>
          <p>If you have something else (non sales related) to go over, feel free to contact us directly with <a href="#">this form</a>.</p>
        </div>
      </div>
    ),
    'General': (
      <div>
        <h2>General FAQ</h2>
        <div className="faq-item">
          <h3>Where did all of your data come from?</h3>
          <p>You! Since starting this project in 2008, we've been lucky enough to have users just like you add and edit missing/incorrect data. Think of TMDB as a very specialised version of Wikipedia where everything is editable but very specialised around only movie, TV and actor data. We started with an initial data contribution from a project called omdb with only 10,000 movies in 2009. Everything added and edited since then has been users just like you!
In October 2013, we finally added TV. Since we didn't want to start with an empty database we opted to bring an intial import of data from Freebase. Unfortunately, Freebase is no longer online and was shut down in 2016. <a href="#">forums</a>.</p>
        </div>
        <div className="faq-item">
          <h3>How many movies are on TMDB?</h3>
          <p>As of this writing, we currently have 1,062,723 movies. <a href="#">click here</a>.</p>
        </div>
        <div className="faq-item">
          <h3>How many TV shows are on TMDB?</h3>
          <p>As of this writing, we currently have 181,157 tv shows.<a href="#">this form</a>.</p>
        </div>
        <div className="faq-item">
          <h3>How many TV episodes are on TMDB?</h3>
          <p>As of this writing, we currently have 4,771,363 tv episodes.<a href="#">this form</a>.</p>
        </div>
        <div className="faq-item">
          <h3>How many people are on TMDB?</h3>
          <p>As of this writing, we currently have 3,692,291 people.<a href="#">this form</a>.</p>
        </div>
        <div className="faq-item">
          <h3>Is TMDB on Twitter or Facebook?</h3>
          <p>We sure are! You can check us out on <a href="">Twitter</a> and <a href="">Facebook</a> .<a href="#">this form</a>.</p>
        </div>
  
      </div>
    ),
    'Account': (
      <div>
      <h2>Account FAQ</h2>
      <div className="faq-item">
        <h3>Where do I signup?</h3>
        <p>Signing up for an account on TMDB is completely free to do and can be done by going <a href="#">here</a>. The only information we will ask for is a valid email address.</p>
      </div>
      <div className="faq-item">
        <h3>What are the benefits of signing up?</h3>
        <p>There’s lots of things you can do on TMDB with a registered account. Signing up for an account will not only let you edit movie data but also rate movies and images, add movies to your favourite and personal watchlists as well as create and share new lists. You will also be able to take part in the discussion area.</p>
      </div>
      <div className="faq-item">
        <h3>Can I import an exported list from IMDb?</h3>
        <p>Yes, you can! We currently support syncing an exported list to either your watchlist, favourite or rated lists. To use an exported file from IMDb, go to the bottom of one of your lists and click "export this list". IMDb will create a CSV file for you. When you login to TMDB, click the "Import List" link from your account page. Drag and drop your CSV file and voila, syncing will begin.</p>
      </div>
      <div className="faq-item">
        <h3>Can I have my own avatar?</h3>
        <p>There's a chance your avatar appeared automatically; if it did, that must mean you have an account at Gravatar. We support both <a href="#">Gravatar</a> and uploading a custom image. Whatever is easiest for you.</p>
      </div>
      <div className="faq-item">
        <h3>Can I delete my account?</h3>
        <p>Yes, of course. From your account settings page, click the "Delete Account" link.</p>
      </div>
      <div className="faq-item">
        <h3>What are the benefits of connecting my account to Twitter and/or Facebook?</h3>
        <p>Connecting your account to social media allows you to share your activity and reviews with your friends and followers.</p>
      </div>
    </div>
    ),
     'Website': (
      <div>
        <h2>Website FAQ</h2>
        <div className="faq-item">
          <h3>How can I contact TMDB?</h3>
          <p>You can find our contact links <a href="#">here</a>.</p>
        </div>
        <div className="faq-item">
          <h3>Do I have to have an account?</h3>
          <p>No, you do not. You will need an account if you would like to access certain account features like rating movies and maintaining your favorites and/or watchlist. You will also need an account to edit data.</p>
        </div>
        <div className="faq-item">
          <h3>Does it cost to use the site?</h3>
          <p>No, it is free to use our website.</p>
        </div>
        <div className="faq-item">
          <h3>Can I help out with the website translations?</h3>
          <p>Yes, you can! We use a service called Locale for this. Our project page can be found <a href="#">here</a>, and everyone can contribute!</p>
        </div>
        <div className="faq-item">
          <h3>How can I use the data?</h3>
          <p>Our data can be used in many different ways. A good showcase can be found on our <a href="#">apps page</a>. You are strictly prohibited from scraping data from the website.</p>
        </div>
        <div className="faq-item">
          <h3>How do I add a title?</h3>
          <p>Click the "Add New Movie" link in the top right corner of the website once you are signed up and logged in.</p>
        </div>
        <div className="faq-item">
          <h3>How do I add or correct information?</h3>
          <p>A series of "Edit" links will appear throughout the website once you are signed up and logged in. Click on any one of these links to help us build our database.</p>
        </div>
        <div className="faq-item">
          <h3>How do I correct a title?</h3>
          <p>A series of "Edit" links will appear throughout the website once you are signed up and logged in. Click on the "Edit" link next to the "Movie Facts" or "TV Show Facts" and you'll be taken to the "Primary Facts" edits page. From here, you will see fields to edit the original and translated titles.</p>
        </div>
        <div className="faq-item">
          <h3>How do I add a title in pre-production?</h3>
          <p>Following the same steps above to get to the "Primary Facts" edit page, you will see a dropdown for the "Movie" or "TV Show" status and then set the field to "Planned".</p>
        </div>
        <div className="faq-item">
          <h3>How do I add a title still in production?</h3>
          <p>Following the same steps above to get to the "Primary Facts" edit page, you will see a dropdown for the "Movie" or "TV Show" status and then set the field to "In Production".</p>
        </div>
        <div className="faq-item">
          <h3>When will my updates be posted?</h3>
          <p>Edits are posted immediately on the website. They can take up to 12 hours to propagate to the API.</p>
        </div>
        <div className="faq-item">
          <h3>Can I watch videos on TMDB?</h3>
          <p>Most of our movies and TV shows have trailers, clips, and featurettes which can be viewed on TMDB. However, we do not stream or play any of the actual movies or TV shows.</p>
        </div>
        <div className="faq-item">
          <h3>Why can't I find what I am looking for?</h3>
          <p>There are two common scenarios. First, the media has not been added to our database yet. Second, it could be a misspelling, typo, or foreign language issue. Movies and TV shows support translated titles as well as what we call "Alternative Titles". A lot of times the issue is simply that the translated or alternative title hasn't been added.</p>
        </div>
        <div className="faq-item">
          <h3>Do you have social features?</h3>
          <p>We support connecting your Twitter and Facebook accounts for easy sharing of movies and TV shows.</p>
        </div>
        <div className="faq-item">
          <h3>How do you calculate a content score?</h3>
          <p>The content score is calculated with a series of validations we do on movies and TV shows to gauge their completeness. For movies, we check for: a director, a writer, four or more cast members, an overview, a poster, a backdrop, a release date, and a trailer. For TV shows, we check for: a creator, four or more cast members, an overview, a poster, a backdrop, an air date, and genres.</p>
        </div>
        <div className="faq-item">
          <h3>Where does your data come from?</h3>
          <p>You! Every title since 2009 has been added by users like yourself.</p>
        </div>
        <div className="faq-item">
          <h3>Why are there titles in foreign languages?</h3>
          <p>TMDb supports movies and data from every corner of the globe. It is part of what makes us unique and such a powerful tool.</p>
        </div>
        <div className="faq-item">
          <h3>Can I use your logo?</h3>
          <p>Yes, as long as you are using our data and/or images. We have logos for attribution available <a href="#">here</a>.</p>
        </div>
        <div className="faq-item">
          <h3>What's the leaderboard?</h3>
          <p>The leaderboard is a page where you can see the top 100 contributors (based on number of edits) for the previous 7 days. If you don't see your name listed, get contributing!</p>
        </div>
      </div>
    )
    // Add other category content here...
  };

  return (
    <div className="faq-container">
      <div className="faq-sidebar">
        <h2>FAQ</h2>
        <ul>
          {categories.map((category, index) => (
            <li 
              key={index} 
              className={selectedCategory === category ? 'active' : ''} 
              onClick={() =>{ setSelectedCategory(category);links(category)} }>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-content">
        {content[selectedCategory]}
      </div>
    </div>
  );
}

export default FAQ;
