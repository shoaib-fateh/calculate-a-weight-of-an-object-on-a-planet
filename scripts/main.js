/** @format */
const $ = (e) => document.querySelector(e);

class CalculateWeight {
	_mass = $('#mass').value;
	_planet = $('#planet').value;
	_description = $('.description');
	_image = $('.image img');
	_image_div = $('.image');

	_mass_err = `<h2>Mass is required</h2>`;
	_planet_err = `<h2>You did not choose a planet yet</h2>`;

	_weight = {
		mercury: 3.7,
		venus: 8.9,
		earth: 9.8,
		moon: 1.6,
		mars: 3.7,
		jupiter: 232.1,
		saturn: 9,
		uranus: 8.7,
		neptune: 11,
		pluto: 0.7,
	};

	weightObject_message(N) {
		return `<h2>The weight of the object on <b>${this._planet.toUpperCase()}</b></h2><div class="n">${N} N</div>`;
	}

	checkRequired() {
		if (this._mass == '' || this._planet == 'none') {
		} else if (this._mass == '') {
			this._description.innerHTML = this._mass_err;
			this._description.style.display = 'block';
			this._image_div.style.display = 'none';
		} else if (this._planet == 'none') {
			this._description.innerHTML = this._planet_err;
			this._description.style.display = 'block';
			this._image_div.style.display = 'none';
		} else {
			let N = this._weight[this._planet] * this._mass;
			N = String(N).split('.');
			if (N.length > 1) N = N[0] + '.' + N[1].slice(-2);
			let description = this.weightObject_message(N);

			this._description.innerHTML = description;
			this._description.style.display = 'block';
			this._image_div.style.display = 'block';
			this._image.attributes.src.value = `./images/${this._planet}.png`;
		}
	}
}

$('button').addEventListener('click', () => {
	try {
		let calculateWeight = new CalculateWeight();
		calculateWeight.checkRequired();
	} catch (err) {
		console.error(err);
	}
});
