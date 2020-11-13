var images                = document.images,
    images__total__count  = images.length,
    images__loaded__count = 0,
    preloader             = document.getElementById('preloader'),
    perc__display         = document.getElementById('load_perc');

for (var i = 0; i < images__total__count; i++)
{
    image__clone = new Image();
    image__clone.onload  = image__loaded;
    image__clone.onerror = image__loaded;
    image__clone.src     = images[i].src;

}

function image__loaded (){
    images__loaded__count++;
    perc__display.innerHTML = (( (100/ images__total__count) * images__loaded__count) << 0) + '';
    if (images__loaded__count >= images__total__count)
    {
        setTimeout(function(){
            if(!preloader.classList.contains('done'))
            {
                preloader.classList.add('done')
            }
        }, 1000);
    }
}

// function disableStylesheet(ss) {
// 	if (typeof ss === "number")
// 		document.styleSheets[ss].disabled = true; 
// 	else {
// 		var sheets = document.querySelectorAll(ss);
// 		for(var i = 0; i < sheets.length; i++)
// 			sheets[i].disabled = true;
// 	}
// }