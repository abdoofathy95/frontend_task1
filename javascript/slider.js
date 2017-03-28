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
			visibleSlides = Math.min(Math.max(parseInt(visibleSlides), 1), slideCount);
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
					previousButton.addClass('vertical-center');
					previousButton.addClass('arrow--round');
					previousButton.addClass('arrow--default-style');

					nextButton.addClass('vertical-center');
					nextButton.addClass('arrow--round');
					nextButton.addClass('arrow--default-style');
				} else if (style == 'bottom') {
					let bar = $('<div class=\"bottom-bar\"></div>');
					bar.addClass('horizontal-center');
					slider.append(bar);
					previousButton.addClass('vertical-bottom');
					previousButton.addClass('arrow--bottom-style');

					nextButton.addClass('vertical-bottom');
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

		let dots = slider.attr('data-dots');
		if (dots == null) {
			dots = 'false';
		}

		let dotClass = 'navigation-dot--default';
		let dotSelectedClass = 'navigation-dot--default-selected';
		if (dots == 'true') {
			let navigation = $(`<div class="navigation horizontal-center vertical-bottom"></div>`);
			let navigationDots = $(`<ul class="navigation-dots"></ul>`);

			let dotCount = slideCount;
			if (visibleSlides > 1) {
				dotCount = (slideCount - visibleSlides) + 1;
			}

			let dotStyle = slider.attr('data-dots-style');
			if (dotStyle == 'hollow') {
				dotClass = 'navigation-dot--hollow';
				dotSelectedClass = 'navigation-dot--hollow-selected';
			}

			for (let i = 0; i < dotCount; i++) {
				let listItem = $(`<li></li>`);
				let navigationDot = $(`<div class="navigation-dot" data-navigation-dot-index="${i}"></div>`);
				if (i == 0) {
					navigationDot.addClass(dotSelectedClass);
				} else {
					navigationDot.addClass(dotClass);
				}

				listItem.append(navigationDot);
				navigationDots.append(listItem);
			}

			navigation.append(navigationDots);
			slider.append(navigation);
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

		let dot = slider.find('.navigation-dot');
		dot.click(function() {
			let i = $(this).attr('data-navigation-dot-index');

			animateSlide(index, i, leftMultiplier);
		});

		function previousSlide(){
			let oldIndex = index;
			index = (index - 1);

			if (index < 0) {
				index = slideCount - ((visibleSlides == 0) ? 1 : visibleSlides);
			}

			animateSlide(oldIndex, index, leftMultiplier);
		};

		function nextSlide() {
			let oldIndex = index;
			index = (index + 1);

			if (index + visibleSlides >= slideCount + 1) {
				index = 0;
			}

			animateSlide(oldIndex, index, leftMultiplier);
		};

		function deselectDot(index) {
			let navigationDot = slider.find('[data-navigation-dot-index]').get(index);
			$(navigationDot).removeClass(dotSelectedClass);
			$(navigationDot).addClass(dotClass);
		};

		function selectDot(index) {
			let navigationDot = slider.find('[data-navigation-dot-index]').get(index);
			$(navigationDot).removeClass(dotClass);
			$(navigationDot).addClass(dotSelectedClass);
		};

		function animateSlide(oldIndex, newIndex, multiplier) {
			index = newIndex;
			deselectDot(oldIndex);
			selectDot(newIndex);
			left = -(newIndex * multiplier) + '%';
			container.css('left', left);
		};
	};
});
