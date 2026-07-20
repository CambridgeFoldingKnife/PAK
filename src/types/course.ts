export type CourseStatus = "open" | "upcoming" | "closed"

export interface Course {
  name: string
  status: CourseStatus
  module: string
  instructor: string
  part1: string
  part2: string
  location: string
  seats: number
  price: string
  earlyBird: string
}

export interface CoursesResponse {
  data: Course[]
}
