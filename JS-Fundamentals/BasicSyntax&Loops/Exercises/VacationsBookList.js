function readingBooks(numberOfPages, pagesPerHour, daysForReading) {

    numberOfPages = Number(numberOfPages);
    pagesPerHour = Number(pagesPerHour);
    daysForReading = Number(daysForReading);

    let fullTime = numberOfPages / pagesPerHour;
    let necessaryTime = fullTime / daysForReading;

    console.log(necessaryTime);


}