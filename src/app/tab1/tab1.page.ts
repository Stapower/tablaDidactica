import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	constructor(private nativeAudio: NativeAudio) { }

	topic;

	selectedCountry = "esp";

	selectFlag(country) {
		this.selectedCountry = country;
		this.lenguage = country;
	}

	back() {
		this.topic = null;
	}



	perro_esp = "https://firebasestorage.googleapis.com/v0/b/pps1-251a8.appspot.com/o/assets%2Faudios%2Fperro_esp.mp3?alt=media&token=b3b553c5-dda9-4349-850e-dd47d9d082ff";
	perro_esp_local= "assets/audio/perro_esp.mp3";
	firstPath = "assets/audio/";
	lenguage = "esp";
	extension = ".aac";
	selectTopic(topic) {
		//colores
		//animales
		//numeros
		this.topic = topic;

	}

	playAudio(evento) {
		var key = "uniqueId1";
		console.log(evento);
		
		/*this.nativeAudio.preloadSimple(key, this.firstPath + evento + "_" + this.lenguage + this.extension).then(
			() => this.nativeAudio.play('uniqueId1')
		  ).finally( () => this.nativeAudio.unload('uniqueId1'));
		*/

		this.nativeAudio.preloadSimple(key, this.firstPath + evento + "_" + this.lenguage + this.extension).then(() => {
			this.nativeAudio.play(key, () => this.nativeAudio.unload(key));
		});

		  

		//this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(this.onSuccess);
		//this.nativeAudio.play('uniqueId1').then();
		//this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
		//this.nativeAudio.loop('uniqueId2').then(this.onSuccess);
		//this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(this.onSuccess);
		//this.nativeAudio.stop('uniqueId1').then(this.onSuccess);
		
	}

	onSuccess(){
		console.log("OnSuccess");
		this.nativeAudio.unload('uniqueId1').then();
	}







}
