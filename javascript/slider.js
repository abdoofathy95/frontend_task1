$(document).ready(function() {

	let sliders = $('.slider');

	$.each(sliders, function(index, slider){
		layoutSlider($(slider));
	});

	function layoutSlider(slider){
		let container = slider.find('.container');
		let slides = slider.find('.slide');
		let slideCount = slider.find('.slide').length;
		slides.css('width', (100 / slideCount)+ '%');

		// Handles the number of visible slides in each frame
		let visibleSlides = slider.attr('data-visible-slides');
		let leftMultiplier = 100;
		if (visibleSlides != null) {
			visibleSlides = Math.min(parseInt(visibleSlides), slideCount);
			container.css('width', `${(100 * slideCount/visibleSlides)}%`);
			leftMultiplier = 100/visibleSlides;
		} else {
			visibleSlides = 1;
			container.css('width', (100 * slideCount)+ '%');
		}

		// Adds arrows to the slider
		let hasArrows = slider.attr('data-arrows');
		if (hasArrows != null) {
			if (hasArrows == "true") {
				
				let previousButton = $(`<button class="arrow" id="previous"><i class="fa fa-angle-left"></i></button>`);
				
				let nextButton = $(`<button class="arrow" id="next"><i class="fa fa-angle-right"></i></button>`);
				
				previousButton.addClass('arrow--left');
				nextButton.addClass('arrow--right');
				
				let arrowColor = slider.attr('data-arrow-color');
				if (arrowColor == null) {
					arrowColor = 'black';
				}
				previousButton.css('color', arrowColor);
				nextButton.css('color', arrowColor);
				
				let style = slider.attr('data-style');
				if (style == null) {
					style = 'default';
				}
				
				if (style == 'default') {
					previousButton.addClass('arrow--center');
					previousButton.addClass('arrow--round');
					previousButton.addClass('arrow--default-style');
					
					nextButton.addClass('arrow--center');
					nextButton.addClass('arrow--round');
					nextButton.addClass('arrow--default-style');
				} else if (style == 'bottom') {
					previousButton.addClass('arrow--bottom');
					previousButton.addClass('arrow--bottom-style');
					
					nextButton.addClass('arrow--bottom');
					nextButton.addClass('arrow--bottom-style');
				}
				
				slider.append(previousButton);
				slider.append(nextButton);
			}
		}

		// Shrinks each slide to white space around it in all directions
		let slideShrink = slider.attr('data-slide-shrink');
		if (slideShrink != null) {
			slideShrink = parseInt(slideShrink);

			slides.css('transform', `scale(${1 - slideShrink/100})`);
		}

		let previous = slider.find('#previous');
		let next = slider.find('#next');
		let left;
		let index = 0;
		
		let autoplay = slider.attr('data-autoplay');
		if (autoplay == null) {
			autoplay == 'false';
		}
		if (autoplay == 'true') {
			setInterval(nextSlide, 5000);
		}

		previous.click(function() {
			previousSlide();
		});

		next.click(function() {
			nextSlide();
		});
		
		function previousSlide(){
			index = (index - 1);

			if (index < 0) {
				index = slideCount - ((visibleSlides == 0) ? 1 : visibleSlides);
			}

			animateSlide(index, leftMultiplier);
		};
		
		function nextSlide() {
			index = (index + 1);

			if (index + visibleSlides >= slideCount + 1) {
				index = 0;
			}

			animateSlide(index, leftMultiplier);
		};

		function animateSlide(index, multiplier) {
			left = -(index * multiplier) + '%';
			container.css('left', left);
		};
	};
});
