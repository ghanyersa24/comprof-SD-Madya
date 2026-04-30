import imgPrestasi from '~/assets/images/prestasi.jpeg'
import imgPrestasiPortrait from '~/assets/images/prestasi_portrait.png'
import imgTahfidz from '~/assets/images/tahfidz.png'
import imgPembelajaran from '~/assets/images/pembelajaran.png'
import imgGaleriKegiatan from '~/assets/images/galeri_kegiatan.png'
import imgFutsal from '~/assets/images/futsal.png'
import imgTapakSuci from '~/assets/images/tapak_suci.png'
import imgHizbulWathan from '~/assets/images/hizbul_wathan.png'
import imgMarchingBand from '~/assets/images/marching_band.png'
import type { StudentId } from './students'

export type AchievementCategory = 'AKADEMIK' | 'OLAHRAGA'
export type AchievementLevel =
  | 'Tingkat Kecamatan'
  | 'Tingkat Kabupaten'
  | 'Tingkat Provinsi'
  | 'Tingkat Nasional'

export interface Achievement {
  id: number
  title: string
  category: AchievementCategory
  level: AchievementLevel
  year: string
  description: string
  studentIds: StudentId[]
  teamLabel?: string
  image: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Borong Juara FLS3N Tingkat Kecamatan',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2026',
    description: 'Meraih juara di berbagai bidang seni pada Festival & Lomba Seni Siswa Nasional tingkat kecamatan Ambulu.',
    studentIds: ['nadia-putri', 'zahra-nabila', 'dinda-rahayu', 'anisa-permata'],
    teamLabel: 'Tim FLS3N SDM',
    image: imgPrestasi,
  },
  {
    id: 2,
    title: "Juara 1 Tahfidz Qur'an 2 Juz",
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: "Meraih predikat terbaik dalam kategori 2 Juz tingkat Provinsi Jawa Timur.",
    studentIds: ['ahmad-fauzi'],
    image: imgTahfidz,
  },
  {
    id: 3,
    title: 'Juara 1 Olimpiade Matematika',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2024',
    description: 'Meraih juara pertama dalam kompetisi olimpiade matematika tingkat Kabupaten Jember.',
    studentIds: ['rizka-aulia'],
    image: imgPembelajaran,
  },
  {
    id: 4,
    title: 'Juara 1 Lomba Menulis Cerpen',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Karya cerpen bertema lingkungan hidup berhasil meraih juara pertama tingkat kabupaten.',
    studentIds: ['nadia-putri'],
    image: imgGaleriKegiatan,
  },
  {
    id: 5,
    title: 'Juara 2 Olimpiade IPA',
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2022',
    description: 'Finalis terbaik olimpiade ilmu pengetahuan alam tingkat Provinsi Jawa Timur.',
    studentIds: ['farel-hendra'],
    image: imgPembelajaran,
  },
  {
    id: 6,
    title: 'Juara 1 Lomba Kaligrafi',
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2024',
    description: 'Meraih emas dalam lomba kaligrafi kategori naskh pada kompetisi seni Islam tingkat provinsi.',
    studentIds: ['zahra-nabila'],
    image: imgTahfidz,
  },
  {
    id: 7,
    title: 'Juara 2 Cerdas Cermat PAI',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Tim cerdas cermat pendidikan agama Islam berhasil meraih peringkat kedua se-kabupaten.',
    studentIds: ['bilal-yusuf', 'farel-hendra', 'kevin-santoso'],
    teamLabel: 'Tim Kelas 6',
    image: imgGaleriKegiatan,
  },
  {
    id: 8,
    title: 'Juara 1 Pidato Bahasa Indonesia',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Tampil memukau dengan tema nilai-nilai kebangsaan dalam lomba pidato tingkat kecamatan.',
    studentIds: ['dinda-rahayu'],
    image: imgMarchingBand,
  },
  {
    id: 9,
    title: 'Juara 3 Olimpiade Bahasa Inggris',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2022',
    description: 'Berhasil masuk tiga besar dalam kompetisi bahasa Inggris antar SD se-kabupaten.',
    studentIds: ['kevin-santoso'],
    image: imgPembelajaran,
  },
  {
    id: 10,
    title: 'Juara 1 Lomba Baca Puisi',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2025',
    description: 'Penampilan ekspresif dan penuh penghayatan mengantarkan menjadi juara pertama.',
    studentIds: ['anisa-permata'],
    image: imgGaleriKegiatan,
  },
  {
    id: 11,
    title: "Juara 1 Tahfidz Qur'an 5 Juz",
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2025',
    description: "Prestasi luar biasa menghafal 5 juz Al-Qur'an dengan tajwid terbaik se-kabupaten.",
    studentIds: ['bilal-yusuf'],
    image: imgTahfidz,
  },
  {
    id: 12,
    title: 'Juara 2 Lomba Sains Kreatif',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Proyek inovasi daur ulang sampah plastik meraih penghargaan kedua tingkat kecamatan.',
    studentIds: ['nadia-putri', 'dinda-rahayu', 'satria-wibawa', 'rafi-saputra'],
    teamLabel: 'Tim Kelas 5',
    image: imgPembelajaran,
  },
  {
    id: 13,
    title: 'Borong Juara O2SN Tingkat Kecamatan',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2026',
    description: 'Meraih berbagai medali dalam Olimpiade Olahraga Siswa Nasional tingkat kecamatan Ambulu.',
    studentIds: ['arya-bagas', 'satria-wibawa', 'syifa-aulia', 'rafi-saputra', 'laila-fitri', 'haris-maulana'],
    teamLabel: 'Tim O2SN SDM',
    image: imgPrestasiPortrait,
  },
  {
    id: 14,
    title: 'Juara 1 Atletik 100m Putra O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2024',
    description: 'Meraih emas lari 100 meter putra dengan catatan waktu terbaik se-kabupaten.',
    studentIds: ['arya-bagas'],
    image: imgPrestasiPortrait,
  },
  {
    id: 15,
    title: 'Juara 1 Pencak Silat Putra',
    category: 'OLAHRAGA',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: 'Tampil gagah dan penuh teknik memukau untuk meraih emas pencak silat tingkat provinsi.',
    studentIds: ['satria-wibawa'],
    image: imgTapakSuci,
  },
  {
    id: 16,
    title: 'Juara 2 Renang Gaya Bebas O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Catatan waktu terbaik kedua dalam nomor renang 50 meter gaya bebas putri.',
    studentIds: ['syifa-aulia'],
    image: imgGaleriKegiatan,
  },
  {
    id: 17,
    title: 'Juara 1 Bulu Tangkis Putra O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2025',
    description: 'Mendominasi pertandingan bulu tangkis putra dengan teknik smash yang tajam.',
    studentIds: ['rafi-saputra'],
    image: imgHizbulWathan,
  },
  {
    id: 18,
    title: 'Juara 3 Futsal O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2022',
    description: 'Tim futsal bermain dengan semangat juara dan berhasil meraih posisi ketiga tingkat kabupaten.',
    studentIds: ['arya-bagas', 'satria-wibawa', 'rafi-saputra', 'haris-maulana'],
    teamLabel: 'Tim Futsal SDM',
    image: imgFutsal,
  },
  {
    id: 19,
    title: 'Juara 1 Tenis Meja Putri O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Menguasai meja dengan smash presisi untuk meraih gelar juara putri tingkat kecamatan.',
    studentIds: ['laila-fitri'],
    image: imgPrestasiPortrait,
  },
  {
    id: 20,
    title: 'Juara 2 Panahan Tingkat Provinsi',
    category: 'OLAHRAGA',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: 'Keahlian memanah yang mengagumkan mengantarkan pada peringkat kedua tingkat provinsi.',
    studentIds: ['haris-maulana'],
    image: imgHizbulWathan,
  },
]

export const achievementsByStudentId = (id: StudentId): Achievement[] =>
  achievements.filter(a => a.studentIds.includes(id))
