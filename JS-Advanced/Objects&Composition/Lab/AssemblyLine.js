function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
            return car;
        },
        hasAudio(car) {
            car.currentTrack = {
                    name: null,
                    artist: null
            };
            car.nowPlaying = () => console.log(`Now playing ${currentTrack.name} by ${currentTrack.artist}`);
        },
        hasParktronic(car) {
            car.checkDistance = (number) => {
                if (number < 0.1) { 
                    console.log(`Beep! Beep! Beep!`);
                } else if (0.1 <= number) {
                    console.log(`Beep! Beep!`);
                } else if (0.25 <= number) {
                    console.log('Beep!');
                }
            }
        }
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);

myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
