const API_KEY = `415b6a10d228d9d75c401f00572c41bd`;

const loadTempData = (getTempValues) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getTempValues}&appid=${API_KEY}&units=metric`)
	.then(response => response.json())
	.then(data => getTempValue(data))
	.catch(err => console.error(err));
}

const getTempValue = data => {
	document.getElementById('input-btn').addEventListener('click', () => {
		const getTempValueById = document.getElementById('take-area');
		const getTempValues = getTempValueById.value;
		document.getElementById('show-temp').innerText = data?.main?.temp;
		document.getElementById('show-area').innerText = data?.name;
		loadTempData(getTempValues);
		getTempValueById.value = '';
	});
}
loadTempData();
