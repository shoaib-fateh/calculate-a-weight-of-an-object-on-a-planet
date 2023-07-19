/** @format */

const $ = (e) => document.querySelector(e);

$('button').addEventListener('click', () => {
	const mass = $('#mass').value;
	const planet = $('#planet').value;

	if (mass == '') {
		$('.description').innerHTML = `<h2>Mass is required</h2>`;
		$('.description').style.display = 'block';
		$('.image').style.display = 'none';
	} else if (planet == 'none') {
		$('.description').innerHTML = `<h2>You did not choose a planet yet</h2>`;
		$('.description').style.display = 'block';
		$('.image').style.display = 'none';
	} else {
		let W = {
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

		let N = W[planet] * mass;

		N = String(N).split('.');

		if (N.length > 1) N = N[0] + '.' + N[1].slice(-2);

		let description = `
        <h2>The weight of the object on <b>${planet.toUpperCase()}</b></h2>
        <div class="n">${N} N</div>
    `;

		$('.description').innerHTML = description;
		$('.description').style.display = 'block';
		$('.image').style.display = 'block';

		$('.image img').attributes.src.value = `./images/${planet}.png`;
	}
});
