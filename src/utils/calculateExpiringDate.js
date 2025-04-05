function calculateExpiringDate(product) {
    // Set the current date
    const currentDate = new Date();

    // Calculate the expiring date using the current day
    switch (product.unit) {
        case 'hours':
            currentDate.setHours(currentDate.getHours() + product.quantity);
            return currentDate

        case 'days':
            currentDate.setDate(currentDate.getDate() + product.quantity);
            return currentDate

        case 'weeks':
            currentDate.setDate(currentDate.getDate() + (product.quantity*7));
            return currentDate

        case 'months': {
            currentDate.setMonth(currentDate.getMonth() + product.quantity);
            return currentDate
        }

        default:
            break;
    }
}

export default calculateExpiringDate