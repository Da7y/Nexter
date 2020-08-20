const UIController = (() => {
    const DOMstrings = {
        bg: '.navigation__background',
        nav: '.navigation__nav',
        navBtn: '.navigation__toggle',
    }

    return {
        navToggle: () => {
            $(DOMstrings.bg).toggleClass('navigation__bg--active');
            $(DOMstrings.nav).toggleClass('navigation__nav--active');
            $(DOMstrings.navBtn).toggleClass('close');
        },

        getDOMstrings: () => {
            return DOMstrings;
        }
    }

})();

const appCtrl = ((UIController) => {
    const setupEventListeners = () => {
        const DOM = UIController.getDOMstrings();
        $(DOM.bg).click(navCtrl);
        $(DOM.navBtn).click(navCtrl);
        $(DOM.nav).click(navCtrl);
    }

    const navCtrl = () => {
        UIController.navToggle();
    }

    return {
        init: () => {
            setupEventListeners()
        }
    }

})(UIController);

appCtrl.init();