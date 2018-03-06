import fetch from 'isomorphic-fetch';

export default class analyze {
	constructor(apiKey, apiSecret) {
		this.key = apiKey;
		this.secret = apiSecret;
		this.endpoint = 'https://api-us.faceplusplus.com/facepp/v3/face/analyze';
	}

	analyzeFace(faceTokens) {
		let tokenParams = faceTokens.join(',');
		let params = '?api_key=' + this.key + '&api_secret=' + this.secret + '&face_tokens=' + tokenParams + '&return_attributes=' + 'smiling';
		
		let data = fetch(this.endpoint + params, { method: 'POST' })
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => { 
			// console.log(response.faces[0].attributes);
			// console.log(response.faces[1].attributes);
			return response;
		})

		return data;
	}
}