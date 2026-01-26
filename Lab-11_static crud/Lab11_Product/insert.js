const dbConnect = require('./connect');
const abc = async () => {
    try {
        // Connect to the database
        const db = await dbConnect();

        // Insert a document into the database
        const result = await db.insertOne({
            name: 'G40',
            brand: 'Moto',
            price: 19230
        });

        console.log('Document inserted:', result);
    } catch (error) {
        console.error('Error:', error);
    }
};
abc();
