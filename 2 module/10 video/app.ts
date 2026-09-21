// amaliyot

// Interface for User and Course

// enum Role {
//     ADMIN,
//     STUDENT,
// }
// interface IUser {
//     id: number
//     name: string
//     role: Role
// }
// interface ICourse {
//     id: number
//     title: string
//     description: string
//     students: IUser[]
// }

// // Role checking
// function isAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
// return user.role === Role.ADMIN
// }
// // Courses list
// const courses: ICourse [] = []

// // Add course
// function addCourse(user: IUser, course: ICourse) {
// if (isAdmin(user)) {
// courses.push(course)
// console.log(`Course added ${course.title}`)
// } else {
// console.log('Only admin can add course')
// }
// }



// Enroll student
// function enrollStudent(user: IUser, courseId: number) {
//     const course = courses.find(course => course.id === courseId)

//     if (!course) {
//         console.log('Course not found')
//         return
//     }
//     if (user.role === Role.STUDENT) {
//         course.students.push(user)
//         console.log(`Student enrolled ${user.name}`)
//     } else {
//         console.log('Only student can enroll')
//     }
// }


// const admin: IUser = { id: 1, name: 'Admin', role: Role.ADMIN }