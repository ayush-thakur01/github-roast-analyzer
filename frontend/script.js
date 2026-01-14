async function analyze() {
  const u = document.getElementById("username").value.trim();
  if (!u) return alert("Enter username");

  const res = await fetch(`/analyze/${username}`));
  const data = await res.json();
if (data.internshipReadiness) {
  document.getElementById("readinessLevel").innerText =
    `Status: ${data.internshipReadiness.level}`;

  document.getElementById("readinessMessage").innerText =
    data.internshipReadiness.message;
}
if (data.mainWeakness) {
  document.getElementById("weaknessLabel").innerText =
    `Area: ${data.mainWeakness.label}`;

  document.getElementById("weaknessMessage").innerText =
    data.mainWeakness.message;
}

  console.log("TIMELINE DATA ", data.timelineAdvice);


  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `Score: ${data.score} (${data.tone})`;
  document.getElementById("message").innerText = data.message;

  // Breakdown bars
  const b = document.getElementById("breakdown");
  b.innerHTML = "";
  Object.entries(data.breakdown).forEach(([k,v])=>{
    b.innerHTML += `
      <div class="small">${k}: ${v}</div>
      <div class="bar"><div class="fill" style="width:${Math.min(v*4,100)}%"></div></div>
    `;
  });

  // Advice
  const a = document.getElementById("advice");
  a.innerHTML = "";
  data.advice.forEach(x=>{
    const li=document.createElement("li"); li.innerText=x; a.appendChild(li);
  });

  // Timeline
  const t = document.getElementById("timeline");
  t.innerHTML="";
  Object.entries(data.timelineAdvice).forEach(([k,arr])=>{
    t.innerHTML += `<h4>${k.replace("_"," ")}</h4><ul>${arr.map(i=>`<li>${i}</li>`).join("")}</ul>`;
  });
}
