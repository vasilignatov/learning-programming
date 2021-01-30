function fishTank(length, width, height, percent) {
    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);

    const volume = Number(length * width * height) / 1000;
    
    let waterVolume = volume - (volume * percent / 100);
    console.log(waterVolume);
    
}