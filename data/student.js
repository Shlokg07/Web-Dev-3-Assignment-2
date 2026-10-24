/**
 * Data Store: In-Memory Students Dataset
 * Lab Assignment 2 - Student Management REST API
 * Student: Shlok Garg (Roll No: 2501730178 | B.Tech CSE AI-ML Sec F)
 * 
 * Restrictions Adhered:
 *   - No Database (MongoDB / MySQL)
 *   - No Mongoose ORM
 *   - In-memory JavaScript Array & JSON data structures
 */

let students = [
  {
    id: 1,
    name: "Rahul",
    course: "BCA"
  },
  {
    id: 2,
    name: "Priya",
    course: "BTech"
  },
  {
    id: 3,
    name: "Amit",
    course: "BCA"
  }
];

module.exports = students;