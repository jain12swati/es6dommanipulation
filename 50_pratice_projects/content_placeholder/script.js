const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name1 = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated_bg");

const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1693421385607-8f034601ad6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="card-header">';
    title.innerHTML = `${"Lorem ipsum dolor sit amet."}`;
    excerpt.innerHTML = `${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur."}`;
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="">';
    name1.innerHTML = `${"John Doe"}`;
    date.innerHTML = `${"Oct 8, 2023"}`;

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));


}