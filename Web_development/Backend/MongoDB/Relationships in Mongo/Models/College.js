const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/ManyToManyRelations')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Define the Student schema
const studentSchema = new Schema({
    name: String,
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const Student = mongoose.model('Student', studentSchema);

// Define the Course schema
const courseSchema = new Schema({
    title: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const Course = mongoose.model('Course', courseSchema);

const addData = async () => {
    // Create new courses
    const course1 = new Course({ title: 'Math 101' });
    const course2 = new Course({ title: 'History 101' });
    
    await course1.save();
    await course2.save();

    // Create new students
    const student1 = new Student({ name: 'Alice', courses: [course1._id, course2._id] });
    const student2 = new Student({ name: 'Bob', courses: [course1._id] });

    await student1.save();
    await student2.save();

    // Update courses to include references to students
    course1.students.push(student1._id, student2._id);
    course2.students.push(student1._id);
    
    await course1.save();
    await course2.save();
};

const findData = async () => {
    // Find a student and populate their courses
    const student = await Student.findOne({ name: 'Alice' }).populate('courses');
    console.log(student);

    // Find a course and populate its students
    const course = await Course.findOne({ title: 'Math 101' }).populate('students');
    console.log(course);
};

addData().then(() => {
    console.log('Data added successfully');
    return findData();
}).then(() => {
    console.log('Data retrieved successfully');
}).catch(err => {
    console.log('Error: ', err);
});
