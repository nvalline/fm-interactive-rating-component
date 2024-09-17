"use strict";
const content = document.getElementById('content');
const header = document.getElementById('header');
const section = document.getElementById('card');
const updatePage = (rating) => {
    section.classList.add('thank-you');
    header.innerHTML = `
    <img
			src="./images/illustration-thank-you.svg"
			alt="thank you graphic"
		/>
		<div>
			<p>You selected <span id="rating">${rating}</span> out of 5</p>
		</div>
  `;
    content.classList.add('content');
    content.innerHTML = `
    <h1>Thank you!</h1>
		<p>
			We appreciate you taking the time to give a rating. If you ever need
			more support, don't hesitate to get in touch!
		</p>
  `;
};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const rating = formData.get('rating');
        updatePage(rating);
    };
});
