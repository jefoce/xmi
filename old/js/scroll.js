const app = {
    item: document.body.querySelector('.app-container'),
    /** 
     * @param {number} isOn 
     */
    setBlur(isOn){
        if (this.item.dataset.blur !== isOn)
            this.item.dataset.blur = isOn;
    }
}


window.addEventListener('scroll', (e) => {
    app.setBlur(window.pageYOffset < 1 ? 0 : 1);
});