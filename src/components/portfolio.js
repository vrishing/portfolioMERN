import React from "react";
import "./styles.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div class="divnav">
            <h1>Vrishin Gattu</h1>
            <div class="nav-bar">
                <nav class="nav1">
                    <ul type="none">
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Research Papers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                    </ul>
                </nav>
            </div><br/>
            <div class="divnav2">
                <nav class="nav2">
                    <ul type="none">
                        <li><a href="#">in</a></li>
                        <li><a href="#"><img src="https://clipground.com/images/github-logo-png-7.jpg" class="gitimg"/></a></li>
                    </ul>
                </nav>
            </div>
        </div>
            <br/>
            <div class="imgclass">
                <img src="https://tse3.mm.bing.net/th?id=OIP.OLFqtB32zMc1Zbnk8PalywHaHa&pid=Api&P=0&h=220" class="imgdiv"></img><br/>
                <h6>Hello, I'm Tarun LaRK, currently a student at VIT-AP (VIT-Andhra Pradesh) in my Junior Year. I'm a passionate individual with a keen interest in the world of coding and technology. My journey in this exciting field began as a curious exploration and has evolved into a profound fascination. I find immense joy in solving complex problems and bringing ideas to life through programming.

When I'm not immersed in the world of code, you'll often find me pursuing various hobbies. I have a penchant for exploring the world of photography, capturing the beauty of everyday life, and unraveling the unique stories behind each photograph. My camera is my trusted companion on adventures that range from serene landscapes to vibrant street scenes.

Another hobby that keeps me on my toes is hiking. I believe that every experience, whether in the world of technology or amidst the wonders of nature, contributes to my personal and intellectual growth, making each day an exciting journey.</h6>
            </div>
      <footer>
        <p>Copyright © 2023 Tarun LaRK</p>
      </footer>
    </div>
  );
};

export default Portfolio;