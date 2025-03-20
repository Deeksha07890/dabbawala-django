document.addEventListener("DOMContentLoaded", function () {
    let modules = document.querySelectorAll(".module");

    modules.forEach(module => {
        module.addEventListener("click", function () {
            let innerModule = this.querySelector(".inner-module");

            // Hide all other inner modules
            document.querySelectorAll(".inner-module").forEach(mod => {
                if (mod !== innerModule) {
                   
                }
            });

            // Toggle the clicked module
            if (innerModule.style.display === "block") {
                innerModule.style.display = "none";
            } else {
                innerModule.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContents", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-count");
        let count = 0;
        let increment = Math.ceil(target / 100);

        let updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = count + "+";
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + "+";
            }
        };

        updateCount();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
    let started = false; // To prevent multiple triggers

    function startCounter() {
        if (!started) {
            counters.forEach((counter) => {
                let target = +counter.getAttribute("data-target");
                let count = 0;
                let speed = target / 100; // Adjust speed dynamically

                let updateCount = setInterval(() => {
                    if (count < target) {
                        count += speed;
                        counter.innerText = Math.ceil(count);
                    } else {
                        counter.innerText = target + "+"; // Add + sign
                        clearInterval(updateCount);
                    }
                }, 30); // Speed of counting animation
            });
            started = true;
        }
    }

    // Detect when the section is visible on the screen
    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounter();
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(document.querySelector(".counter-section"));
});
