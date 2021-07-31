window.addEventListener('load' , ()=>{
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationtimezone = document.querySelector('.location-timezone');
	//let icon = document.querySelector('.icon');
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position =>{
			 //console.log(position);  printing position to see if we are getting coordinates
			 long = position.coords.longitude;
			 lat = position.coords.latitude;
			// console.log(lat,long);  printed coordinates
			const proxy ="https://cors-anywhere.herokuapp.com/";
			const api =`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6936f02b5ee07454cb075b2a6332064d`;

			fetch(api)
			.then(response =>{
				return response.json();
			})
			.then(data =>{
				//console.log(data);
				const {temp}= data.main;   // give data from main complete no need for complete access keyword
				let description = data.weather[0].description;  // as descrption was in another class distionary
				//var iconCode = data.weather[0].icon;
				//var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
				//set DOM elements from API
				temperatureDegree.textContent = temp;
				temperatureDescription.textContent = description;
				locationtimezone.textContent = data.sys.timezone;
				//icon.textContent = $(".icon").html("<img src='" + iconUrl  + "'>");
				//icon.textContent = html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
			});
		});
	}

	

});