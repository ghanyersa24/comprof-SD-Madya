export interface ApiStudent {
  id: number
  name: string
  slug: string
  grade: string
  enrolled_year: string | null
  graduated_year: string | null
  bio: string | null
  quote: string | null
  hobbies: string[] | null
  photo: string | null
  is_active: boolean
  achievements?: ApiAchievement[]
}

export interface ApiTeacher {
  id: number
  name: string
  slug: string
  position: string | null
  subject: string | null
  bio: string | null
  photo: string | null
  email: string | null
  phone: string | null
  is_active: boolean
}

export interface ApiAchievement {
  id: number
  title: string
  category: string
  level: string | null
  rank: string | null
  year: string | null
  description: string | null
  image: string | null
  student_id: number | null
  student?: Pick<ApiStudent, 'id' | 'name' | 'slug'> | null
  is_active: boolean
}

export interface ApiActivity {
  id: number
  title: string
  slug: string
  description: string | null
  image: string | null
  category: string
  date: string | null
  is_active: boolean
  galleries?: ApiGallery[]
}

export interface ApiGallery {
  id: number
  title: string
  image: string | null
  description: string | null
  category: string
  activity_id: number | null
  activity?: Pick<ApiActivity, 'id' | 'title' | 'slug'> | null
  is_active: boolean
}
