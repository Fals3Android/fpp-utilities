import detect from './detect/detect';
import analyze from './analyze/analyze';
import Promise from 'es6-promise';
Promise.polyfill();

/* Keys */
const API_KEY = 'D7B7lvFDSOtA3zyGzM9sydtn9X5N_S2a';
const API_SECRET = 'kqaiKOPloL9aF0lFEcBbYfYeJZgp9rB2';

/* Detect API */
const fppDetect = new detect(API_KEY, API_SECRET);
const testImage = 'https://cdn.pixabay.com/photo/2014/06/18/13/44/emotions-371238_1280.jpg';

// Detect API get faces example returns a faces array with various co-ordinates of faces detected
let getFaceTokens = Promise.resolve(fppDetect.getFaces(testImage)).then(value => {
	let data = value.faces;
	var faceTokens = data.map((key, i) => {
		return key.face_token
	});
	return faceTokens;
});

/* Analyze API */
const fppAnalyze = new analyze(API_KEY, API_SECRET);

Promise.resolve(getFaceTokens).then(faceTokens => {
	Promise.resolve(fppAnalyze.analyzeFace(faceTokens)).then(faceAttribues => {
		console.log(faceAttribues);
	});
});