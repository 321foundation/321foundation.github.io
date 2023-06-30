$(document).ready(function () {
    const resourcelist = [
        {
            "title": "A lost generation: fears long-running school closures will harm children around the world",
            "link": "https://telegraph.co.uk/global-health/climate-and-people/lost-generation-fears-indias-long-running-school-closures-will/",
            "image": "./img/resources/lost-gen.jpg",
            "date": 'JAN 2022',
            "author": 'Joe Wallen'
        },
        {
            "title": "Technology can be a powerful force for educational equity if we want it to be",
            "link": "https://wendykopp-tfall.medium.com/technology-can-be-a-powerful-force-for-educational-equity-if-we-want-it-to-be-3c26d2ad012f",
            "image": "./img/resources/educational-equity.jpg",
            "date": 'JUN 2021',
            "author": 'Wendy Kopp'
        },
        {
            "title": "The Class of Covid: India's year-long closure of schools takes its toll on children's education",
            "link": "https://www.telegraph.co.uk/global-health/science-and-disease/class-covid-indias-year-long-closure-schools-takes-toll-childrens/",
            "image": "./img/resources/class-covid.jpg",
            "date": 'APR 2021',
            "author": 'The Telegraph'
        },
        {
            "title": "Invest now to repair 'huge' learning loss, educators urge",
            "link": "https://www.ft.com/content/b3d0cc12-61de-4143-91a6-ab9f98bbc7a9",
            "image": "./img/resources/invest-now.jpg",
            "date": 'APR 2021',
            "author": 'Financial TImes'
        },
        {
            "title": "Ugam and 321 Education Foundation bridge the learning gap for underprivileged children in India",
            "link": "https://indiaeducationdiary.in/ugam-and-321-education-foundation-bridge-the-learning-gap-for-underprivileged-children-in-india/",
            "image": "./img/resources/ugam-partnership.jpg",
            "date": 'NOV 2020',
            "author": 'India Education Diary Bureau'
        },
        {
            "title": "30 Successful social entrepreneurs share lessons learned from failure",
            "link": "https://blog.movingworlds.org/30-social-entrepreneurs-lessons-from-failure/?utm_campaign=Advice_from_socents&utm_content=Part_two&utm_medium=Social&utm_source=LinkedIn",
            "image": "./img/resources/social-entrepreneurs.jpg",
            "date": 'NOV 2020',
            "author": 'MovingWorlds'
        },
        {
            "title": "Budget private schools fear closure, pay teachers in rations as funds dry up amid pandemic",
            "link": "https://theprint.in/india/education/budget-private-schools-fear-closure-pay-teachers-in-rations-as-funds-dry-up-amid-pandemic/481997/",
            "image": "./img/resources/private-schools.png",
            "date": 'AUG 2020',
            "author": 'The Print'
        },
        {
            "title": "321 Education Foundation Is Challenging India\'s Primary Education System",
            "link": "https://www.jumpstartmag.com/321-education-foundation/",
            "image": "./img/resources/primary-education.jpg",
            "date": 'APR 2020',
            "author": 'JumpStart'
        },
        {
            "title": "321 CEO, Gaurav Singh, explains what it takes to build teacher capacity",
            "link": "http://www.teacherplus.org/building-teacher-capacity/",
            "image": "./img/resources/building-teacher-capacity.jpg",
            "date": 'MAR 2020',
            "author": 'Teacher Plus'
        },
        {
            "title": "321 Foundation in Top 100 social Innovations of the world",
            "link": "https://hundred.org/en/innovations/321-education-foundation",
            "image": "./img/resources/hundred-innovations.jpg",
            "date": 'MAR 2020',
            "author": 'Hundred.org'
        }
    ];
    const updatelist = [
        {
            "title": "3.2.1 Foundation Annual Report 2020-21",
            "link": "https://drive.google.com/file/d/1gNJGC4FTEuNoJ3nkIfTtZovWhLRM1nMh/view",
            "image": "./img/resources/annual-report.jpg",
            "date": 'AUG 2021',
            "author": '3.2.1 Foundation'
        },
        {
            "title": "Why India must support Its teachers if it wants to help students",
            "link": "https://www.thequint.com/news/education/this-teachers-day-support-the-teacher-to-help-students",
            "image": "./img/resources/support-teachers.jpg",
            "date": 'SEP 2020',
            "author": 'Mohit Gurnani'
        },
        {
            "title": "How can teachers better engage students online?",
            "link": "https://www.linkedin.com/pulse/how-can-teachers-better-engage-students-online-radhika-murthy/?trackingId=%2BMt2okDJZNLBSyrXdLCY7w%3D%3D",
            "image": "./img/resources/better-engagement.jpg",
            "date": 'AUG 2020',
            "author": 'Radhika Murthy'
        },
        {
            "title": "321's Learning Showcases - What we have learned from our \"learning exhibitions\"",
            "link": "https://www.linkedin.com/pulse/321s-learning-showcases-what-we-have-learned-from-our-gunjali-singh/?trackingId=XjsSteSt9MyJPNh2xyLlwQ%3D%3D",
            "image": "./img/resources/learning-showcase.jpg",
            "date": 'JUN 2020',
            "author": 'Gunjali Singh'
        },
        {
            "title": "Tripled the number of students at grade level proficiency! See our Impact report!",
            "link": "https://bit.ly/321Impact_C",
            "image": "./img/resources/grade-level-proficiency.jpg",
            "date": 'JUN 2020',
            "author": '321 Education'
        },
        {
            "title": "See how 321 came to the rescue of our schools when Covid brought everything to a standstill!",
            "link": "https://drive.google.com/file/d/1r6-JecB6EjIeLRDC_EIicZkO6kIkGVHp/view?usp=sharing",
            "image": "./img/resources/covid-321-schools.jpg",
            "date": 'JUN 2020',
            "author": '321 Education'
        }
    ];

    function addResources() {
        let resources_html_content = '';
        for (let i=0; i < resourcelist.length;i++){
            resources_html_content += `<div class="card-container swiper-slide"><a href="` + resourcelist[i]['link'] + `" target="_blank"><div class="card col-xs-12 nopad"><div class="imgcont col-xs-12 nopad" style="background-image: url('` + resourcelist[i]['image'] + `')"><p class="date p3 nomar">` + resourcelist[i]['date'] + `</p></div><div class="content col-xs-12  pad25"><h3 class="fw7 nomart p3xs">` + resourcelist[i]['title'] + `</h3><p class="p3 fw5">` + resourcelist[i]['author'] + `</p></div></div></a></div>`;
        }
        $('#resources #items').html(resources_html_content);
    }
    function addUpdates() {
        let updates_html_content = '';
        for (let i=0; i < updatelist.length;i++){
            updates_html_content += `<div class="card-container swiper-slide"><a href="` + updatelist[i]['link'] + `" target="_blank"><div class="card col-xs-12 nopad"><div class="imgcont col-xs-12 nopad" style="background-image: url('` + updatelist[i]['image'] + `')"><p class="date p3 nomar">` + updatelist[i]['date'] + `</p></div><div class="content col-xs-12  pad25"><h3 class="fw7 nomart p3xs">` + updatelist[i]['title'] + `</h3><p class="p3 fw5">` + updatelist[i]['author'] + `</p></div></div></a></div>`;
        }
        $('#updates #items').html(updates_html_content);
    }
    function addSlider() {
        const swiper1 = new Swiper('#resources .swiper-container', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            nextButton: '.resources.swiper-button-next',
            prevButton: '.resources.swiper-button-prev',
            grabCursor: true,
            navigation: {
                nextEl: '.resources.swiper-button-next',
                prevEl: '.resources.swiper-button-prev',
            },
            pagination: '.resources-pagination',
            paginationClickable: true,
            speed: 2000,
            breakpoints: {
                768: {
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                    freeMode: true,
                    loop: false,
                }
            },
        });
        const swiper2 = new Swiper('#updates .swiper-container', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            nextButton: '.updates.swiper-button-next',
            prevButton: '.updates.swiper-button-prev',
            grabCursor: true,
            navigation: {
                nextEl: '.updates.swiper-button-next',
                prevEl: '.updates.swiper-button-prev',
            },
            pagination: '.updates-pagination',
            paginationClickable: true,
            speed: 2000,
            breakpoints: {
                768: {
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                    freeMode: true,
                    loop: false,
                }
            },
        });
    }

    addResources();
    addUpdates();
    addSlider();
});