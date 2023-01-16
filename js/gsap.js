
const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

let flag = true;

// Включить-выключить анимацию
const noAnimate = document.querySelectorAll('.no-animate');

if(window.innerWidth < 1000) {
    flag = false;
  } else {
      flag = true;
  }


function animate() {
    if(!flag) {
        return;
    }

    // services-icon-wrp при загрузке
    gsap.fromTo('.services-icon-wrp',
        {
            x: 150 + '%',
        },
        {
            x: 0,
            duration: 1.5,
            ease: "back.out(1.2)",
            delay: 2,
        },
    )

    // ДЛЯ СЕКЦИИ ABOUT===================
    gsap.fromTo('.gsap-title-about',
    {
        x: 30 + '%',
        opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.about',
            start: "-15% 70%",
            end: "center 70%",
            scrub: 2,
        },
    })

    gsap.fromTo('.about__title-wrp>span',
    {
        x: -130 + '%',
    },
    {
    scrollTrigger: {
        trigger: '.about',
        start: "-15% 70%",
        end: "center 70%",
        scrub: 1,
    },
    x: -30 + '%',
    duration: 1.5,
    opacity: 1,
    }
    )

    // ДЛЯ СЕКЦИИ WHYWE=======================
    gsap.fromTo('.whywe-line',
        {
            x: -130 + '%',
        },
        {
            scrollTrigger: {
                trigger: '.whywe',
                start: "-15% 70%",
                end: "center 70%",
                scrub: 1,
            },
            x: -30 + '%',
            duration: 1.5,
            opacity: 1,
        }
    )

    gsap.fromTo('.gsap-title',
    {
        x: 50 + '%',
        opacity: 0,
    },

    {
    scrollTrigger: {
        trigger: '.whywe',
        start: "-55% 70%",
        end: "center 70%",
        scrub: 2,
    },
    x: 0,
    opacity: 1,
    })

    // карточки
    gsap.fromTo('.whywe__cont-item',
    {
        perspective: 600,
        rotateX: 90 + 'deg'
    },
    {
        perspective: 0,
        rotateX: 0 + 'deg',
        scrollTrigger: {
            trigger: '.whywe',
            start: "-20% center",
            end: "30% 50%",
            scrub: 3,
        },
    })

    // ДЛЯ СЕКЦИИ OURSHOP ===================
    // заголовок ourshop
    gsap.fromTo('.title-ourshop',
        {
            x: 50 + '%',
            opacity: 0,
        },

        {
        scrollTrigger: {
            trigger: '.ourshop',
            start: "-55% 70%",
            end: "center 70%",
            scrub: 2,
        },
        x: 0,
        opacity: 1,
        }
    )

    // линия ourshop
    gsap.fromTo('.ourshop-line',
        {
            x: -130 + '%',
        },
        {
            scrollTrigger: {
                trigger: '.ourshop',
                // markers: true,
                start: "-15% 70%",
                end: "center 70%",
                scrub: 1,
            },
            x: -30 + '%',
            duration: 1.5,
            opacity: 1,
        }
    )

     // текст ourshop
     gsap.fromTo('.ourshop__text',
     {
         y: 200,
         opacity: 0,
     },

     {
        scrollTrigger: {
            trigger: '.ourshop',
            start: "-15% 70%",
            end: "center 70%",
            scrub: 2,
        },
        y: 0,
        opacity: 1,
     }
 )

    // картинки ourshop==================
    gsap.fromTo('.ourshop__galery-item',

    {
        y: 20,
        opacity: 0,
    },

    {
        scrollTrigger: {
            trigger: '.ourshop',
            // markers: true,
            start: "30% 70%",
            end: "center 70%",
            scrub: 3,
        },
        y: 0,
        opacity: 1,
        stagger: 1,
    }
    )

    // список ourshop
    gsap.fromTo('.ourshop__list-wrp>li',

    {
        x: -10,
        y: -10,
        opacity: 0,
    },

    {
        scrollTrigger: {
            trigger: '.ourshop',
            // markers: true,
            start: "30% 70%",
            end: "center 70%",
            scrub: 1,
        },
        x: 10,
        y: 0,
        duration: 0.2,
        opacity: 1,
        stagger: .2,
    }
    )

    // ДЛЯ СЕКЦИИ OURSHOP ===================
    gsap.fromTo('.map-title',
    {
        x: 50 + '%',
        opacity: 0,
    },

    {
    scrollTrigger: {
        trigger: '.map',
        start: "-55% 70%",
        end: "center 70%",
        scrub: 2,
    },
    x: 0,
    opacity: 1,
    }
)

// линия ourshop
gsap.fromTo('.map-line',
    {
        x: -130 + '%',
    },
    {
        scrollTrigger: {
            trigger: '.map',
            start: "-15% 70%",
            end: "center 70%",
            scrub: 1,
        },
        x: -30 + '%',
        duration: 1.5,
        opacity: 1,
    }
)

}
animate();


