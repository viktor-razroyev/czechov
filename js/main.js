jQuery(document).ready(function(){


    $("#feedbacksSlider").owlCarousel({
        items: 3
    });

    $("#aboutFeatures").owlCarousel({
        items: 6,
        rewindNav: false
    });

    var aboutFeaturesSlider = $("#aboutFeatures").data('owlCarousel');

    $("#aboutFeaturesPrevious").on('click', function(){
        aboutFeaturesSlider.prev();

        return false;
    });

    $("#aboutFeaturesNext").on('click', function(){
        aboutFeaturesSlider.next();

        return false;
    });

    // Яндекс карта
    var infrastructureMap;

    ymaps.ready(init);

    function init () {

        infrastructureMap = new ymaps.Map('infrastructureMap', {
            center: [55.149967,37.458121],
            zoom: 16,
            controls: []
        });
        infrastructureMap.behaviors.disable("scrollZoom");

        var markVivat = new ymaps.Placemark([55.147048,37.459435], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[0,0], [113, 113]],
            iconImageSize: [113, 113],
            iconImageOffset: [-56, -56]
        }),
        markSchool = new ymaps.Placemark([55.148535,37.460883], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[0,114], [28, 142]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        markDetsad = new ymaps.Placemark([55.148418,37.456126], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[58,114], [86, 142]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        markPoliclinic = new ymaps.Placemark([55.14875,37.463078], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[0,143], [28, 171]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        markApteka = new ymaps.Placemark([55.149291,37.462649], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[29,143], [57, 171]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        shopCollection = new ymaps.GeoObjectCollection(null, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[29,114], [57, 142]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        shopCoords = [[55.149134,37.450318],[55.148848,37.452371],[55.147165,37.461641],[55.148947,37.467327]],
        supermarketCollection = new ymaps.GeoObjectCollection(null, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapIcons.png',
            iconImageClipRect: [[58,143], [86, 171]],
            iconImageSize: [28, 28],
            iconImageOffset: [-14, -14]
        }),
        supermarketCoords = [[55.150016,37.45471],[55.147042,37.454002],[55.149979,37.460889],[55.146526,37.462906]];

        for (var i = 0, l = shopCoords.length; i < l; i++) {
            shopCollection.add(new ymaps.Placemark(shopCoords[i]));
        }

        for (var i = 0, l = shopCoords.length; i < l; i++) {
            supermarketCollection.add(new ymaps.Placemark(supermarketCoords[i]));
        }

        infrastructureMap.geoObjects
            .add(markVivat)
            .add(markSchool)
            .add(shopCollection)
            .add(markDetsad)
            .add(markPoliclinic)
            .add(markApteka)
            .add(supermarketCollection);
    }
    // Ход строительства слайдер
    $("#buildingProcessSlider").owlCarousel({
        items: 1,
        addClassActive: true,
        slideSpeed: 700,
        mouseDrag: false,
        touchDrag: false,
        rewindNav: false,
        beforeMove: function(slider){
            $("#buildingProcessSlider").addClass('moving');
        },
        afterMove: function(slider){
            $("#buildingProcessSlider").removeClass('moving');
        },
        beforeUpdate: buildingProcessSliderResize,
        beforeInit: buildingProcessSliderResize
    });
    function buildingProcessSliderResize(slider){
        var $this = slider,
            $thisOuter = $this.parent(),
            thisParentWidth = $this.parent().width(),
            thisImgWidth = $("#buildingProcessSlider").find('img')[0].width;

        $this.find('.buildingProcessSliderItem').css('width', thisImgWidth+'px');
        $this.css('width', (thisImgWidth+thisParentWidth-160)/2+'px');
    }


    var buildingProcessSlider = $("#buildingProcessSlider").data('owlCarousel');

    $("#buildingProcessPrevious").on('click', function(){
        buildingProcessSlider.prev();

        return false;
    });

    $("#buildingProcessNext").on('click', function(){
        buildingProcessSlider.next();

        return false;
    });
});