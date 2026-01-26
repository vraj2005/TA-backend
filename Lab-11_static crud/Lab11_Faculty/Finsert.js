const dbConnect = require('./Fconnect');
const abc = async () => {
    try {
        // Connect to the database
        const db = await dbConnect();

        // Insert a document into the database
        const result = await db.insertOne({
            Name: 'Niraj Ahuja',
            Subjectcode:'2102CS55',
            Subjectname:'Java script',
            Branch: 'Computer'
        });

        console.log('Document inserted:', result);
    } catch (error) {
        console.error('Error:', error);
    }
};
abc();
