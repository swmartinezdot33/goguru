// File: init.js
(function() {
    const files = {
        css: 'https://swmartinezdot33.github.io/ghl-custom-code/custom.css',
        js: 'https://swmartinezdot33.github.io/ghl-custom-code/custom.js'
    };

    function loadResource(type, url) {
        const element = document.createElement(type === 'css' ? 'link' : 'script');
        
        if (type === 'css') {
            element.rel = 'stylesheet';
            element.href = url;
        } else {
            element.src = url;
            element.defer = true;
        }
        
        document.head.appendChild(element);
        
        return new Promise((resolve, reject) => {
            element.onload = resolve;
            element.onerror = reject;
        });
    }

    // Load resources
    Promise.all([
        loadResource('css', files.css),
        loadResource('js', files.js)
    ]).then(() => {
        console.log('Custom code loaded successfully');
    }).catch(error => {
        console.error('Error loading custom code:', error);
    });
})();
