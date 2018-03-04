import fetch from 'isomorphic-fetch';

export default class detect {
	constructor(apiKey, apiSecret) {
		this.key = apiKey;
		this.secret = apiSecret;
		this.endpoint = 'https://api-us.faceplusplus.com/facepp/v3/detect';
	}

	getFaces(imgUrl) {
		let params = '?api_key=' + this.key + '&api_secret=' + this.secret + '&image_url=' + imgUrl;
		
		let data = fetch(this.endpoint + params, { method: 'POST' })
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => { 
			return response;
		})

		return data;
	}
}