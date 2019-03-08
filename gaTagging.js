onclick='return triggerGA(this)' data-action='Clicked TOC0' data-label='Clicked text link'




let triggerGA = (e) => {
    event.preventDefault(e)
   if(e.href) {
         if(e.href.includes('/men')) {
         setCk(1, 1000)
    }
    else if (e.href.includes('/women')) {
         setCk(0, 1000)
    }
    else if (e.href.includes('/girls') || e.href.includes('/boys')) {
         setCk(2, 1000)
    }
    else if (e.href.includes('/baby')) {
         setCk(3, 1000)
    }
   }
    dataLayer.push({
        'event': 'eventTracking',
        'eventCategory': 'home page',
        'eventAction': e.dataset.action,
        'eventLabel': `${e.dataset.label}: ${e.href ? e.href.split('/us/en/')[1] : ''}`,
        'eventCallback': function() {
          if(e.href) {
            location.href=e.href;      	
          }
        }, eventTimeout: 1000
    })
}