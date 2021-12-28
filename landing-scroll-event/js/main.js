const animItems = document.querySelectorAll('._anim-items')
console.log(animItems)
if(animItems.length){
    window.addEventListener('scroll', animFromScroll)

    function animFromScroll() {
        animItems.forEach(animItem => {
            const animHeight = animItem.offsetHeight;
            const animOffset = offset(animItem).top;
            const animStart = 4;
            let animPoint

            animHeight < window.innerHeight
                ? animPoint =  window.innerHeight - animHeight / animStart
                : animPoint =  window.innerHeight - window.innerHeight / animStart;

            if((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animHeight)){
                animItem.classList.add('_active')
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }

        })
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animFromScroll();
    }, 300)
}