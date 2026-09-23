/* =========================================
   BIRTHDAY WEBSITE
   FOR VISVAAAAA ❤️
========================================= */


/* =========================================
   WAIT UNTIL HTML IS LOADED
========================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =========================================
     PASSWORD PROTECTION 🔐
  ========================================== */

  // 🔐 CHANGE YOUR PASSWORD HERE
  const correctPassword = "Visva@2029";


  const passwordScreen =
    document.getElementById("passwordScreen");

  const passwordInput =
    document.getElementById("passwordInput");

  const passwordButton =
    document.getElementById("passwordButton");

  const passwordError =
    document.getElementById("passwordError");


  /* =========================================
     WEBSITE ELEMENTS
  ========================================== */

  const openingScreen =
    document.getElementById("openingScreen");

  const birthdayScreen =
    document.getElementById("birthdayScreen");

  const openButton =
    document.getElementById("openButton");

  const music =
    document.getElementById("birthdayMusic");

  const musicButton =
    document.getElementById("musicButton");

  const heartsContainer =
    document.querySelector(".hearts-container");

  const secretButton =
    document.getElementById("secretButton");

  const secretMessage =
    document.getElementById("secretMessage");

  const typewriter =
    document.getElementById("typewriter");


  /* =========================================
     CHECK PASSWORD HTML
  ========================================== */

  if (
    !passwordScreen ||
    !passwordInput ||
    !passwordButton
  ) {

    console.error(
      "❌ Password HTML elements are missing!"
    );

    return;

  }


  /* =========================================
     PASSWORD LOGIN
  ========================================== */

  function unlockWebsite() {

    const enteredPassword =
      passwordInput.value.trim();


    if (enteredPassword === correctPassword) {

      console.log("✅ Correct password!");

      // Hide password screen
      passwordScreen.classList.add("hidden");


      // Show opening screen
      openingScreen.classList.remove("hidden");


      // Clear input
      passwordInput.value = "";

      if (passwordError) {
        passwordError.textContent = "";
      }


      // Start hearts
      startFloatingHearts();


    } else {

      console.log("❌ Wrong password!");

      if (passwordError) {

        passwordError.textContent =
          "Hmm... that's not the secret password. Try again, Paaaa ❤️";

      }


      passwordInput.classList.add(
        "wrong-password"
      );


      setTimeout(() => {

        passwordInput.classList.remove(
          "wrong-password"
        );

      }, 500);


      passwordInput.select();

    }

  }


  /* =========================================
     PASSWORD BUTTON
  ========================================== */

  passwordButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      unlockWebsite();

    }
  );


  /* =========================================
     ENTER KEY
  ========================================== */

  passwordInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        event.preventDefault();

        unlockWebsite();

      }

    }
  );


  /* =========================================
     SECRET MESSAGE
  ========================================== */

  const secretText = `
Paaaa...

It’s been 365 days of us.

365 days since you came into my life,
and somehow, in this one year,
you became one of the most beautiful parts of it.

I still remember our first meet,
our first outing,
the first time I fell for you,
our first long trip,
and all those little moments
that slowly became precious memories.

I never knew those moments
would mean this much to me someday.

But looking back, I realize
everything became a little more beautiful
after you stepped into my life.

You made these 365 days wonderful
just by being there,
through my happiest moments,
my hardest phases,
my silly days,
and even the moments when
I didn't know I needed you.

With you, even ordinary moments
became memories I want to keep forever.

I never really understood
what forever was supposed to feel like…

until you made me want one.

I want to see you,
hear you,
hold you,
feel your presence,
and experience thousands of little moments with you

not just for another 365 days,
but for as long as life lets me.
If I could choose one thing
for my future,

I wouldn't ask for a perfect life.

I'd just ask for more of you.

Happy 365 days of us, Paaa. ❤️

And never forget

You are loved.
More than I say.
More than I show.
More than you'll probably ever know.❤️
`;


  /* =========================================
     OPEN SURPRISE
  ========================================== */

  openButton.addEventListener(
    "click",
    function () {

      if (music) {

        music.volume = 0.45;

        music.play()
          .then(() => {

            if (musicButton) {
              musicButton.classList.add(
                "playing"
              );
            }

          })
          .catch(() => {

            console.log(
              "Music could not autoplay."
            );

          });

      }


      // Hide opening
      openingScreen.classList.add(
        "hidden"
      );


      // Show birthday
      birthdayScreen.classList.remove(
        "hidden"
      );


      // Confetti
      createConfetti();


      // Hearts
      startFloatingHearts();

    }
  );


  /* =========================================
     MUSIC BUTTON
  ========================================== */

  if (musicButton) {

    musicButton.addEventListener(
      "click",
      function () {

        if (music.paused) {

          music.play();

          musicButton.classList.add(
            "playing"
          );

        } else {

          music.pause();

          musicButton.classList.remove(
            "playing"
          );

        }

      }
    );

  }


  /* =========================================
     NEXT BUTTONS
  ========================================== */

  const nextButtons =
    document.querySelectorAll(
      "[data-next]"
    );


  nextButtons.forEach(button => {

    button.addEventListener(
      "click",
      function () {

        const nextScreenId =
          button.getAttribute(
            "data-next"
          );


        const nextScreen =
          document.getElementById(
            nextScreenId
          );


        if (!nextScreen) return;


        // Hide all screens
        document
          .querySelectorAll(".screen")
          .forEach(screen => {

            screen.classList.add(
              "hidden"
            );

          });


        // Show next screen
        nextScreen.classList.remove(
          "hidden"
        );


        // Scroll top
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  });


  /* =========================================
     SECRET MESSAGE BUTTON
  ========================================== */

  if (secretButton) {

    secretButton.addEventListener(
      "click",
      function () {

        secretButton.style.display =
          "none";


        secretMessage.classList.remove(
          "hidden"
        );


        typewriter.textContent = "";


        typeWriterEffect(
          secretText,
          typewriter,
          35
        );

      }
    );

  }


  /* =========================================
     TYPEWRITER
  ========================================== */

  function typeWriterEffect(
    text,
    element,
    speed
  ) {

    let index = 0;


    function type() {

      if (index < text.length) {

        element.textContent +=
          text.charAt(index);

        index++;


        setTimeout(
          type,
          speed
        );

      } else {

        setTimeout(() => {

          createConfetti();

          showFinalButton();

        }, 1500);

      }

    }


    type();

  }


  /* =========================================
     FINAL BUTTON
  ========================================== */

  function showFinalButton() {

    const button =
      document.createElement(
        "button"
      );


    button.className =
      "glow-button";


    button.textContent =
      "One Last Surprise ✨";


    button.style.marginTop =
      "40px";


    secretMessage.appendChild(
      button
    );


    button.addEventListener(
      "click",
      function () {

        document
          .querySelectorAll(".screen")
          .forEach(screen => {

            screen.classList.add(
              "hidden"
            );

          });


        document
          .getElementById(
            "finalScreen"
          )
          .classList.remove(
            "hidden"
          );


        createConfetti();

        startFloatingHearts();


        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =========================================
     FLOATING HEARTS ❤️
  ========================================== */

  let heartsStarted = false;


  function startFloatingHearts() {

    if (heartsStarted) return;

    heartsStarted = true;


    setInterval(() => {

      createHeart();

    }, 1200);

  }


  function createHeart() {

    if (!heartsContainer) return;


    const heart =
      document.createElement(
        "div"
      );


    heart.className =
      "floating-heart";


    const hearts = [
      "❤️",
      "💗",
      "💕",
      "💝",
      "💓",
      "🤍",
      "✨"
    ];


    heart.textContent =
      hearts[
      Math.floor(
        Math.random() *
        hearts.length
      )
      ];


    heart.style.left =
      Math.random() * 100 + "%";


    heart.style.fontSize =
      (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
      (6 + Math.random() * 5) + "s";


    heartsContainer.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 11000);

  }


  /* =========================================
     CONFETTI 🎉
  ========================================== */

  function createConfetti() {

    const container =
      document.querySelector(
        ".confetti-container"
      );


    if (!container) return;


    const symbols = [
      "✨",
      "💕",
      "💗",
      "⭐",
      "🤍",
      "❤️"
    ];


    for (let i = 0; i < 50; i++) {

      const confetti =
        document.createElement(
          "div"
        );


      confetti.textContent =
        symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
        ];


      confetti.style.position =
        "fixed";


      confetti.style.left =
        Math.random() * 100 + "vw";


      confetti.style.top =
        "-30px";


      confetti.style.fontSize =
        (12 + Math.random() * 20) + "px";


      confetti.style.zIndex =
        "150";


      confetti.style.pointerEvents =
        "none";


      const duration =
        2 + Math.random() * 3;


      confetti.animate(

        [
          {
            transform:
              "translateY(0) rotate(0deg)",
            opacity: 1
          },

          {
            transform:
              `translateY(110vh) rotate(${Math.random() * 720}deg)`,
            opacity: 0
          }

        ],

        {
          duration:
            duration * 1000,

          easing:
            "cubic-bezier(.2,.8,.3,1)",

          fill:
            "forwards"

        }

      );


      document.body.appendChild(
        confetti
      );


      setTimeout(() => {

        confetti.remove();

      }, duration * 1000 + 100);

    }

  }


  /* =========================================
     INITIAL STATE
  ========================================== */

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.add(
        "hidden"
      );

    });


  // Password screen is the first screen
  passwordScreen.classList.remove(
    "hidden"
  );


  console.log(
    "🔐 Birthday website loaded successfully!"
  );

});