$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch(
            "https://wrcjdklqdvuabf2niyohibd2aq0kwgqz.lambda-url.us-east-1.on.aws/"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch views count");
        }

        let data = await response.json();

        // Validate and sanitize `data.views`
        const views = parseInt(data.views, 10); // Convert to integer
        if (isNaN(views) || views < 0) {
            counter.textContent = "👀 Views: 0"; // Fallback for invalid data
        } else {
            counter.textContent = `👀 Views: ${views}`;
        }
    } catch (error) {
        console.error("Error updating counter:", error);
        counter.textContent = "👀 Views: Error"; // Fallback for fetch failure
    }
}

updateCounter();