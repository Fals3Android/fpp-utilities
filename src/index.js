import detect from './detect/detect';
import Promise from 'es6-promise';
Promise.polyfill();

// Minimum basic params are set here
const fppDetect = new detect(/* YOUR API_KEY HERE,  YOUR API_SECRET_HERE */);
const testImage = /* Example Image URL */;

// Detect API get faces example returns a faces array with various co-ordinates of faces detected
Promise.resolve(fppDetect.getFaces(testImage)).then(value => {
	console.log(value);
});
