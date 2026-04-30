export type StudentId = string

export interface Student {
  id: StudentId
  slug: string
  name: string
  kelas: string
  photo?: string
  bio?: string
  quote?: string
  hobbies?: string[]
  joinedYear?: string
}

export const students: Student[] = [
  {
    id: 'ahmad-fauzi',
    slug: 'ahmad-fauzi',
    name: 'Ahmad Fauzi',
    kelas: 'Kelas 5',
    bio: "Hafiz cilik yang istiqamah menambah hafalan setiap subuh.",
    quote: "Al-Qur'an adalah teman terbaik di dunia dan akhirat.",
    hobbies: ["Tahfidz", "Membaca"],
  },
  {
    id: 'rizka-aulia',
    slug: 'rizka-aulia',
    name: 'Rizka Aulia',
    kelas: 'Kelas 6',
    bio: "Penyuka angka dan pemecah masalah matematika tingkat olimpiade.",
    quote: "Setiap soal adalah teka-teki yang menunggu dipecahkan.",
    hobbies: ["Matematika", "Catur"],
  },
  {
    id: 'nadia-putri',
    slug: 'nadia-putri',
    name: 'Nadia Putri',
    kelas: 'Kelas 5',
    bio: "Penulis muda yang menyuarakan kepedulian lingkungan lewat cerpen.",
    quote: "Kata-kata bisa menanam pohon di hati pembaca.",
    hobbies: ["Menulis", "Membaca novel"],
  },
  {
    id: 'farel-hendra',
    slug: 'farel-hendra',
    name: 'Farel Hendra',
    kelas: 'Kelas 6',
    bio: "Pencinta sains, sering eksperimen di laboratorium sekolah.",
    quote: "Sains adalah cara mengenal ciptaan Allah lebih dekat.",
    hobbies: ["Eksperimen", "Membaca buku sains"],
  },
  {
    id: 'zahra-nabila',
    slug: 'zahra-nabila',
    name: 'Zahra Nabila',
    kelas: 'Kelas 4',
    bio: "Seniwati kaligrafi, fokus pada gaya naskh dan tsuluts.",
    quote: "Setiap huruf yang ditulis adalah doa yang mengalir.",
    hobbies: ["Kaligrafi", "Menggambar"],
  },
  {
    id: 'dinda-rahayu',
    slug: 'dinda-rahayu',
    name: 'Dinda Rahayu',
    kelas: 'Kelas 5',
    bio: "Orator muda yang lantang menyuarakan nilai kebangsaan.",
    quote: "Berani berbicara adalah langkah awal mengubah dunia.",
    hobbies: ["Pidato", "Drama"],
  },
  {
    id: 'kevin-santoso',
    slug: 'kevin-santoso',
    name: 'Kevin Santoso',
    kelas: 'Kelas 6',
    bio: "Penggemar bahasa Inggris dan film dokumenter.",
    quote: "Belajar bahasa adalah membuka jendela dunia.",
    hobbies: ["Bahasa Inggris", "Public speaking"],
  },
  {
    id: 'anisa-permata',
    slug: 'anisa-permata',
    name: 'Anisa Permata',
    kelas: 'Kelas 4',
    bio: "Pembaca puisi penuh penghayatan, lembut tapi memukau.",
    quote: "Puisi adalah bahasa hati yang paling jujur.",
    hobbies: ["Puisi", "Sastra"],
  },
  {
    id: 'bilal-yusuf',
    slug: 'bilal-yusuf',
    name: 'Bilal Yusuf',
    kelas: 'Kelas 6',
    bio: "Hafiz 5 juz dengan tajwid terbaik se-kabupaten.",
    quote: "Tujuanku menjadi penghafal Qur'an yang istiqamah.",
    hobbies: ["Tahfidz", "Tilawah"],
  },
  {
    id: 'arya-bagas',
    slug: 'arya-bagas',
    name: 'Arya Bagas',
    kelas: 'Kelas 6',
    bio: "Sprinter andalan dengan catatan waktu terbaik se-kabupaten.",
    quote: "Lari adalah caraku berdialog dengan diri sendiri.",
    hobbies: ["Atletik", "Sepak bola"],
  },
  {
    id: 'satria-wibawa',
    slug: 'satria-wibawa',
    name: 'Satria Wibawa',
    kelas: 'Kelas 5',
    bio: "Pesilat muda dengan disiplin tinggi dan teknik memukau.",
    quote: "Beladiri mengajarkan rendah hati dalam keberanian.",
    hobbies: ["Pencak silat", "Tapak Suci"],
  },
  {
    id: 'syifa-aulia',
    slug: 'syifa-aulia',
    name: 'Syifa Aulia',
    kelas: 'Kelas 6',
    bio: "Perenang gaya bebas dengan stamina dan teknik di atas rata-rata.",
    quote: "Air mengajarkan ketenangan saat menghadapi tekanan.",
    hobbies: ["Renang", "Yoga"],
  },
  {
    id: 'rafi-saputra',
    slug: 'rafi-saputra',
    name: 'Rafi Saputra',
    kelas: 'Kelas 5',
    bio: "Pemain bulu tangkis dengan smash tajam dan refleks cepat.",
    quote: "Setiap kok yang dipukul adalah latihan fokus.",
    hobbies: ["Bulu tangkis", "Lari pagi"],
  },
  {
    id: 'laila-fitri',
    slug: 'laila-fitri',
    name: 'Laila Fitri',
    kelas: 'Kelas 4',
    bio: "Atlet tenis meja dengan smash presisi tingkat kecamatan.",
    quote: "Konsentrasi adalah senjata utama di meja hijau.",
    hobbies: ["Tenis meja", "Membaca"],
  },
  {
    id: 'haris-maulana',
    slug: 'haris-maulana',
    name: 'Haris Maulana',
    kelas: 'Kelas 6',
    bio: "Pemanah muda dengan ketenangan dan akurasi tingkat provinsi.",
    quote: "Memanah adalah seni menahan napas dan melepas dengan ikhlas.",
    hobbies: ["Panahan", "Pramuka"],
  },
]

export const studentBySlug = (slug: string): Student | undefined =>
  students.find(s => s.slug === slug)

export const studentById = (id: StudentId): Student | undefined =>
  students.find(s => s.id === id)

export const studentInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase()
}
