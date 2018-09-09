var msImages = new MomentumSlider({
    // Element to append the slider
    el: '.slider-container',
    cssClass: 'ms--images',
    //  generate 4 images
    range: [0,3],
    rangeContent: function(){
        return ' <div class="ms-slide__imagecontainer"><div class="ms-slide__image></div></div>"';
    },
    sync: [msNumbers, msTitles, msLinks],
    style : {
        '.ms-slide__image': {
            transform: [{scale: [1.5,1]}]
        }
    }
});

// Get pagination items
var pagination = document.querySelector('.pagination');
var paginationItems = [].slice.call(pagination.children);

// Update initialization for images slider
var msImages = new MomentumSlider({
    // MORE OPTIONS

    // Update pagination if slider change
    change : function(newIndex, oldIndex){
        if(typeof oldIndex != 'undefined'){
            paginationItems[oldIndex].classList.remove('pagination__item--active');
        }
        paginationItems[newIndex].classList.add('pagination__item--remove');
    }
});

// Select corresponding slider item when a pagination button is clicked
pagination.addEventListener('click', function(e){
    if(e.target.matches('.pagination__button')){
        var index = paginationItems.indexOf(e.target.parentNode);
        msImages.select(index);
    }
});