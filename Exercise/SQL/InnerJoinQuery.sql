SELECT branchstudent.id,branchstudent.branchid,branchstudent.studentid,branch.name AS branchName,student.name
AS studentName 
FROM branchstudent
INNER JOIN branch ON branchstudent.branchid = branch.id
INNER JOIN student ON branchstudent.studentid = student.id;