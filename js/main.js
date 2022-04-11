const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');

const stopVideos = function () {
	const videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			const src = video.src;
			video.src = src;
		}
	});
};


buttonsModal.forEach((item, i) => {
	item.addEventListener('click', () => {
		modalWindow.classList.add('active');
	});
});

modalWindow.addEventListener('click', () => {
	modalWindow.classList.remove('active');
	stopVideos();
});
