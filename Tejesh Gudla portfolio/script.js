/* SPAN THE TEXT */
/*home section*/
var typed = new Typed(" .auto-type", {
  strings: ["Frontend Developer", "Web Designer", "UI/UX Devloper"],
  typrSpeed: 200,
  backSpeed: 150,
  looped: true,
});
/* About me section*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/*                                        skills section                                                 */

const circles = document.querySelectorAll(".circle1");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var rotate = 360 / dots;
  var points = "";
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
/*                                                                  contact me page                                                                        */

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwNvxxyItuM8APbyuJcnXlcXpIebvzGGv0Y1jYE9y0cezcfNDcHvoDuxR2o9KakTVcR/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Your Message has been sent successfully!');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for your Message!"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
