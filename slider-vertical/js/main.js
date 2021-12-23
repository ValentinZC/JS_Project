class VerticalSlider {
    elem = 0
    play = null
    delay = 400
    lastEventCall = 0

    constructor(selector, rightSlide, leftSlide) {
        this.body = document.querySelector(selector);
        this.rightSlide = this.body.querySelector(rightSlide);
        this.leftSlide = this.body.querySelector(leftSlide);
        this.upBtn = this.body.querySelector('.up-button');
        this.downBtn = this.body.querySelector('.down-button');
        this.slides = Array.from(this.leftSlide.querySelectorAll('div'));
        this.paginators = this.body.querySelector('.pagination')
        this.leftSlide.style.top = `-${(this.slides.length - 1) * 100}vh`;
        this.#createPaginator()
        this.#initControls();
        this.autoplay();
    }

    #initControls() {
        this.body.addEventListener("wheel", e => this.#throttling(e.wheelDelta > 100 ? 'down' : 'up'))
        this.upBtn.addEventListener('click', () => this.#throttling('up'))
        this.downBtn.addEventListener('click', () => this.#throttling('down'))
        this.paginators.addEventListener('click', (e) => {
            if(e.target.classList.contains('pagination-item')) {
                this.#throttling(e.target.dataset.idx)
            }
        })
    }

    changeSlide(direction) {
        this.sliderHeight = this.body.clientHeight;
        this.autoplay()
        this.clearPagination()

        if (direction === 'up') {
            this.elem < this.slides.length - 1 ? this.elem++ : this.elem = 0
        }
        if (direction === 'down') {
            this.elem > 0 ? this.elem-- : this.elem = this.slides.length - 1
        }
        if(!isNaN(direction)) {
            this.elem = direction
        }
        this.rightSlide.style.transform = `translateY(-${this.elem * this.sliderHeight}px)`
        this.leftSlide.style.transform = `translateY(${this.elem * this.sliderHeight}px)`
        this.addActivePagination(this.elem)
    }

    #createPaginator(){
        for(let i = 0; i < this.slides.length; i++) {
            const paginatorItem = document.createElement('span')
            paginatorItem.setAttribute('class', 'pagination-item')
            paginatorItem.setAttribute('data-idx', i)
            this.paginators.append(paginatorItem)
        }
        this.paginators.firstElementChild.classList.add('active')
    }

    clearPagination(){
        Array
            .from(this.paginators.querySelectorAll('.pagination-item'))
            .forEach(el => {
                if(el.classList.contains('active')) el.classList.remove('active')
            })
    }

    addActivePagination(idx){
        let items = Array.from(this.paginators.querySelectorAll('.pagination-item'))
        items[idx].classList.add('active')
    }

    autoplay() {
        this.stop()
        this.play = setTimeout(() => this.changeSlide('up'), 3000)
    }

    stop() {
        clearTimeout(this.play)
    }

    #throttling(direction) {
        let now = Date.now()
        if(now > this.lastEventCall + this.delay) {
            this.changeSlide(direction)
            this.lastEventCall = now
        }
    }
}

new VerticalSlider('.slider-container', '.right-slider', '.left-slider')