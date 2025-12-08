const dbConnect = require('./Sconnect');
const abc = async () => {
    try {
        // Connect to the database
        const db = await dbConnect();

        // Insert a document into the database
        const result = await db.insertOne({
            name: 'Vraj',
            rollno: 225,
            enrollmentNo:21020201106,
            Branch: 'Computer'
        });

        console.log('Document inserted:', result);
    } catch (error) {
        console.error('Error:', error);
    }
};
abc();
