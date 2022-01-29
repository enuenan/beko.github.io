setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        markers: false,
    });
    // Logo Scale
    $(".section.is--hero").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".nav_logo");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });
        tl.from(targetElement, {
            y: "-90%",
            width: "100%",
            duration: 1,
        });
    });
    // Header Text Hide
    $(".header_text-move").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "-100% top",
                end: "30% top",
                scrub: 0.8,
            },
        });
        tl.to(targetElement, {
            y: "100%",
            duration: 1,
        });
    });
    // Sticky Circle Grow
    $(".sticky-circle_wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".sticky-circle_element");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
        tl.fromTo(
            targetElement, {
                width: "35em",
                height: "35em",
                borderRadius: "35em",
                duration: 1,
            }, {
                width: "100vw",
                height: "100vh",
                borderRadius: "0em",
                duration: 1,
            }
        );
    });
    // Light to Dark Color Change
    $(".grid_wrapper:nth-child(odd)").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $("body, .section.is--nav");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                // can also use "20px 80%"
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
        tl.fromTo(
            targetElement, {
                backgroundColor: "#081f39",
                color: "#01426a",
                duration: 1,
            }, {
                backgroundColor: "#01426a",
                color: "#081f39",
                duration: 1,
            }
        );
    });
    // Dark to Light Color Change
    $(".grid_wrapper:nth-child(even), .sticky-circle_wrap").each(function (
        index
    ) {
        let triggerElement = $(this);
        let targetElement = $("body, .section.is--nav");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                // can also use "20px 80%"
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
        tl.fromTo(
            targetElement, {
                backgroundColor: "#01426a",
                color: "#081f39",
                duration: 1,
            }, {
                backgroundColor: "#081f39",
                color: "#01426a",
                duration: 1,
            }
        );
    });
    // Grid Title Change
    $(".grid_text-item").eq(0).addClass("is--active");
    $(".grid_wrapper").each(function (index) {
        let triggerElement = $(this);
        let myIndex = $(this).index();
        let targetElement = $(".grid_text-item").eq(myIndex);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom bottom",
                onEnter: () => {
                    $(".grid_text-item").removeClass("is--active");
                    targetElement.addClass("is--active");
                },
                onEnterBack: () => {
                    $(".grid_text-item").removeClass("is--active");
                    targetElement.addClass("is--active");
                },
            },
        });
    });

    // Grid Image Move 1
    $(".grid_item:nth-child(3n+1)").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
        tl.to(targetElement, {
            y: "-20%",
            duration: 1,
        });
    });
    // Grid Image Move 2
    $(".grid_item:nth-child(3n+2)").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            },
        });
        tl.to(targetElement, {
            y: "-60%",
            duration: 1,
        });
    });
    // Grid Image Move 3
    $(".grid_item:nth-child(3n+3)").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                // trigger element - viewport
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            },
        });
        tl.to(targetElement, {
            y: "-60%",
            duration: 1,
        });
    });

}, 1000);