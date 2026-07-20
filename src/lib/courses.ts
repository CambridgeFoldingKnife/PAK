import type { CoursesResponse } from "@/types/course"

export async function fetchCourses(): Promise<CoursesResponse> {
  const res = await fetch("/api/courses")

  if (!res.ok) {
    throw new Error(`Failed to load courses: ${res.status}`)
  }

  return res.json() as Promise<CoursesResponse>
}
