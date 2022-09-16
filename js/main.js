/*************************/
/* Skill Bar Animations */
/***********************/

// 1) Remove the animation-ending class (starts with anition-ending class, encase JS is disabled.)
const skillBars = document.querySelectorAll('.skill-bar-anim-end');
skillBars.forEach(skillBar =>{
    skillBar.classList.remove('skill-bar-anim-end');

    // 2) Setup observer that triggers when the browser's viewport 'scrolls into' a skillbar
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBar.classList.add('skill-bar-anim-end');
            return;
        }
    
        skillBar.classList.remove('skill-bar-anim-end');
        });
    });
  
    // 3) Start observer
    observer.observe(skillBar.parentNode);
  
});


/* X Factor Bar Animation */
const xfBar = document.querySelector('.xf-anim-end');
xfBar.classList.remove('xf-anim-end');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        xfBar.classList.add('xf-anim-end');
        return;
    }

    xfBar.classList.remove('xf-anim-end');
    });
});

observer.observe(xfBar.parentNode);