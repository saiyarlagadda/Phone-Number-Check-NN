const { faker } = require('@faker-js/faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// // Function to generate a list of synthetic phone numbers
// function generatePhoneNumbers(count) {
//     const phoneNumbers = [];
//     for (let i = 0; i < count; i++) {
//         const phoneNumber = faker.phone.number();
//         phoneNumbers.push({ id: i + 1, phoneNumber });
//     }
//     return phoneNumbers;
// }

// Function to generate a list of synthetic phone numbers with a maximum of 11 digits
function generatePhoneNumbers(count) {
    const phoneNumbers = [];
    for (let i = 0; i < count; i++) {
        let phoneNumber;
        do {
            phoneNumber = faker.phone.number();
            phoneNumber = phoneNumber.replace(/\D/g, ''); // Remove all non-digit characters
        } while (phoneNumber.length > 11); // Ensure the phone number has a maximum of 11 digits

        phoneNumbers.push({ id: i + 1, phoneNumber });
    }
    return phoneNumbers;
}

// Generate 100 synthetic phone numbers
const phoneNumbers = generatePhoneNumbers(100);

console.log(phoneNumbers);


// Set up CSV writer
const csvWriter = createCsvWriter({
    path: 'phone_numbers.csv',
    header: [
        { id: 'id', title: 'ID' },
        { id: 'phoneNumber', title: 'Phone Number' }
    ]
});

// Write the phone numbers to CSV
csvWriter.writeRecords(phoneNumbers)
    .then(() => {
        console.log('CSV file was written successfully');
    })
    .catch((err) => {
        console.error('Error writing CSV file', err);
    });
