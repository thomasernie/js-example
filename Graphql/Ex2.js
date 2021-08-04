import { buildSchema } from "graphql";

const schema = buildSchema(`
type Course {
    id: ID
    cousename: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssist]
}
type teachingAssists {
      firstName: String
      lastname: String
      experiance: Int
}
enum Stack {
    WEB
    MOBILE
    OTHER
}
  type Query {
      getCourse(id: ID): Course
  }
  input CouseInput{
  id: ID
    cousename: String!
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssist]
  }
  input TeachingAssistInput{
  firstName: String
      lastname: String
      experiance: Int
  }
  type Mutation{
      createCourse(input: CourseInput): Course
  }
`)
export default schema;