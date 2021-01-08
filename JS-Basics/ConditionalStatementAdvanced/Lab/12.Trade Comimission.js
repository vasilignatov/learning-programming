function commission(city, sales,) {
    sales = Number(sales);
    let commission = 0;

    if (sales > 10000) {
        switch (city) {
            case "Sofia":
                commission = 0.12;
                break;
            case "Varna":
                commission = 0.13;
                break;
            case "Plovdiv":
                commission = 0.145;
                break
            default:
                console.log('error');
                break;
        }

    } else if (sales <= 10000 && sales > 1000) {
        switch (city) {
            case "Sofia":
                commission = 0.08;
                break;
            case "Varna":
                commission = 0.10;
                break;
            case "Plovdiv":
                commission = 0.12;
                break
            default:
                console.log('error');
                break;
        }

    } else if (sales <= 1000 && sales > 500) {
        switch (city) {
            case "Sofia":
                commission = 0.07;
                break;
            case "Varna":
                commission = 0.075;
                break;
            case "Plovdiv":
                commission = 0.08;
                break
            default:
                console.log('error');
                break;
        }

    } else if (sales <= 500 && sales > 0) {
        switch (city) {
            case "Sofia":
                commission = 0.05;
                break;
            case "Varna":
                commission = 0.045;
                break;
            case "Plovdiv":
                commission = 0.055;
                break
            default:
                console.log('error');
                break;
        }
    } else {
        console.log('error');
    }
    if (commission !== 0) {
        console.log((sales * commission).toFixed(2));
    }
}
commission('Plovdiv', '10000.01')



