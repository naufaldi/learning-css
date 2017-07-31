    $(function(){
    var filterList={
        init : function(){
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.website' // show app tab on first load
                }
            });
        }
    };
    filterList.init();
});