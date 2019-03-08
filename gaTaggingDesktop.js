$('.elemClicked').unbind('click').click( function(event) {
  dataLayer.push({
      'event': 'eventTracking',
      'eventCategory': 'mens jeans page',
      'eventAction': 'clicked lineup cta',
      'eventLabel': 'clicked lineup cta',
      'eventCallback': function() {
        if(event.href) {
          location.href=event.href;      	
        }
      }, eventTimeout: 1000
  })
})