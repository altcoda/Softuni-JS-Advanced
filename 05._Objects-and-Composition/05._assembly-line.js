function assemblyLine() {

    return {
      hasClima: (object) => {
        object.temp = 21;
        object.tempSettings = 21;
        object.adjustTemp = function() {
          if (this.temp < this.tempSettings) {
            this.temp++;
          } else if (this.temp > this.tempSettings) {
            this.temp--;
          }
        }
      },
      hasAudio: (object) => {
        object.currentTrack = {
          name: null,
          artist: null
        }
        object.nowPlaying = function() {
          if (this.currentTrack) {
            console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`)
          }
        }
      },
      hasParktronic: (object) => {
        object.checkDistance = function(distance) {
          console.log(
            distance < 0.1 ?
            'Beep! Beep! Beep!' :
            distance >= 0.1 && distance < 0.25 ?
            'Beep! Beep!' :
            distance >= 0.25 && distance < 0.5 ?
            'Beep!' :
            ''
          )
        }
      }
    }
  
}
