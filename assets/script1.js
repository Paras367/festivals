// Floating Krishna symbols
const icons = ["🥛", "🦚", "🎶", "🕉"];
for (let i=0; i<20; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = icons[Math.floor(Math.random()*icons.length)];
  p.style.left = Math.random()*100+"vw";
  p.style.animationDelay = Math.random()*10+"s";
  document.body.appendChild(p);
}

// Sticky sidebar / carousel inspiration (from external JS but self-coded)
document.addEventListener("DOMContentLoaded", function(){
  const sidebar = document.createElement("div");
  sidebar.innerHTML = "<p class='p-4 bg-yellow-100 rounded-xl glass shadow-xl'>Krishna Leela</p>";
  sidebar.style.position="sticky";
  sidebar.style.top="20px";
  sidebar.style.right="20px";
  sidebar.style.width="200px";
  document.body.appendChild(sidebar);
});
