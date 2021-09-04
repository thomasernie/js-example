import express from 'express';
const app = express();
const port = 3002;
app.use(express.json());
function studentDetails(data) {
    const branchStudent = data.branchStudent;
    const branches = data.branches;
    const students = data.students;
    const branchStudentMap = branchStudent.map(branchDatas => {
        return {
            ...branchDatas,
            branchName: branches.find(branch => {
                const branchName = branchDatas.branchId === branch.id;
                return branchName
            })?.name,
            studentName: students.find(student => {
                const studentName = branchDatas.studentId === student.id;
                return studentName
            })?.studentName,
        }
    })
    return branchStudentMap;
};

app.post('/data', (req, res) => {
    res.send(studentDetails(req.body));
})

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})