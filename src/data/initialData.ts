import {
  TeamMember,
  SurveyQuestion,
  PracticalSolution,
  RoadmapStep,
  LegalArticle,
} from '../types';

import heroImage from '../assets/images/eco_school_initiative_1792937625075.jpg';
import solutionImage from '../assets/images/eco_sorting_action_1792937624484.jpg';

export const HERO_IMAGE_PATH = heroImage || '/assets/images/eco_school_initiative_1792937625075.jpg';
export const SOLUTION_IMAGE_PATH = solutionImage || '/assets/images/eco_sorting_action_1792937624484.jpg';
export const HERO_FALLBACK_PATH = '/assets/images/eco_school_initiative_1792937625075.jpg';
export const SOLUTION_FALLBACK_PATH = '/assets/images/eco_sorting_action_1792937624484.jpg';

export const SCHOOL_INFO = {
  schoolName: '98-sonli umumiy o‘rta ta’lim maktabi',
  grade: '9-“D” sinf',
  disciplines: '“Tarbiya” hamda “Davlat va huquq asoslari” fanlari',
  slogan: '“TOZA MAKTAB — FAOL FUQAROLARDAN BOSHLANADI!”',
  creator: 'Akramov Anvar',
  topic: 'Maktabdagi ekologik muammolar va ularni hal etish yo‘llari'
};

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'anvar',
    order: 1,
    name: 'Akramov Anvar',
    role: 'Taqdimotchi',
    task: 'Loyihani tanishtiradi, asosiy natijalarni tushuntiradi va jamoa bilan birgalikda himoya qiladi.',
    photoUrl: '/assets/aistudio/image_3827b844.png',
    bio: '9-“D” sinfdoshlarimiz nomidan loyihani himoya qiladi, tozalik tashabbuslarimizni ustozlarimizga tushuntirib beradi.',
    skills: ['Spiker']
  },
  {
    id: 'feruz',
    order: 2,
    name: 'Ergashev Feruz',
    role: 'Koordinator',
    task: 'Jamoa ishlarini tashkil qiladi, vazifalarni taqsimlaydi va ish rejasini nazorat qiladi.',
    photoUrl: '/assets/aistudio/image_b9da82fe.png',
    bio: 'Jamoamiz ishlarini tartibga soldi, maktab ma’muriyati bilan kelishib, saralash qutilarini qayerga qo‘yishni hal qildi.',
    skills: ['Koordinator']
  },
  {
    id: 'ayubxon',
    order: 3,
    name: 'Fayzullayev Ayubxon',
    role: 'Tadqiqotchi',
    task: 'Qonunlar va qoidalarni o‘rganib, to‘g‘ri ma’lumot to‘playdi.',
    photoUrl: '/assets/aistudio/image_f1163eb6.png',
    bio: 'Davlat va huquq asoslari darsimizdan foydalanib, Konstitutsiyamizning 49- va 62-moddalaridagi burchlarimizni topib berdi.',
    skills: ['Tadqiqotchi']
  },
  {
    id: 'akbar',
    order: 4,
    name: 'Abdusalomov Akbar',
    role: 'So‘rov koordinatori',
    task: '13 ta o‘quvchi o‘rtasida anonim so‘rovnoma o‘tkazdi.',
    photoUrl: '/assets/aistudio/image_38121e8a.png',
    bio: 'Sinfimizdagi 13 nafar o‘quvchiga 7 ta oddiy savol yozilgan anketalarni tarqatib, har bir fikrni xolis yig‘ib chiqdi.',
    skills: ['So‘rov koordinatori']
  },
  {
    id: 'jaloliddin',
    order: 5,
    name: 'Yusupov Jaloliddin',
    role: 'Analitik',
    task: 'So‘rov natijalarini hisoblab, chiroyli diagrammalar tuzdi.',
    photoUrl: '/assets/aistudio/image_d8f2b7fc.png',
    bio: 'Yig‘ilgan anketalardagi har bir javobni aniq foizlarda hisoblab, televizorda hammaga yaqqol ko‘rinadigan diagrammalar chizdi.',
    skills: ['Analitik']
  }
];

export const SURVEY_TOTAL_RESPONDENTS = 13;

export const INITIAL_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    question: 'Maktabimiz hududi qanchalik toza deb hisoblaysiz?',
    type: 'choice',
    options: [
      { label: 'Yaxshi (umuman toza, lekin ayrim joylarda chiqindi uchraydi)', count: 8, percentage: 61.5 },
      { label: 'Qoniqarli (ba’zi tanaffuslarda chiqindi to‘planadi)', count: 4, percentage: 30.8 },
      { label: 'A’lo (har doim ideal ozoda)', count: 1, percentage: 7.7 }
    ]
  },
  {
    id: 2,
    question: 'Chiqindilarni maxsus qutiga tashlashga qanchalik amal qilasiz?',
    type: 'choice',
    options: [
      { label: 'Doimo amal qilaman (quti uzoqda bo‘lsa ham olib boraman)', count: 10, percentage: 76.9 },
      { label: 'Faqat yaqin atrofda quti bo‘lsa tashlayman', count: 2, percentage: 15.4 },
      { label: 'Ba’zan e’tiborsiz bo‘lib qolaman', count: 1, percentage: 7.7 }
    ]
  },
  {
    id: 3,
    question: 'Maktabimizda chiqindini saralash (qog‘oz, plastik) qutilari yetarlimi?',
    type: 'choice',
    options: [
      { label: 'Umuman yo‘q (barcha chiqindi bitta umumiy qutiga tashlanadi)', count: 11, percentage: 84.6 },
      { label: 'Qisman bor (faqat ayrim xonalarda)', count: 2, percentage: 15.4 }
    ]
  },
  {
    id: 4,
    question: 'Maktabni tozalash, hasharlar va gul ekishda ixtiyoriy qatnashasizmi?',
    type: 'choice',
    options: [
      { label: 'Albatta, jon deb qatnashaman (har doim tayyorman)', count: 12, percentage: 92.3 },
      { label: 'Faqat darsdan keyin vaqtim bo‘lsa qatnashaman', count: 1, percentage: 7.7 }
    ]
  },
  {
    id: 5,
    question: 'Maktabimizdagi eng asosiy ekologik kamchilik nima deb o‘ylaysiz?',
    type: 'choice',
    options: [
      { label: 'Alohida saralash (qog‘oz va plastik) qutilari yo‘qligi', count: 7, percentage: 53.8 },
      { label: 'Yo‘laklar va hovlida qutilar soni kamligi', count: 4, percentage: 30.8 },
      { label: 'Ayrim o‘quvchilarning mas’uliyatsizligi va beparvoligi', count: 2, percentage: 15.4 }
    ]
  },
  {
    id: 6,
    question: 'Maktabni doim toza saqlash uchun eng to‘g‘ri amaliy taklifingiz?',
    type: 'choice',
    options: [
      { label: 'Rangli saralash qutilarini (Ko‘k va Sariq) o‘rnatish', count: 9, percentage: 69.2 },
      { label: 'Har bir qavat va burchakda ko‘proq quti qo‘yish', count: 3, percentage: 23.1 },
      { label: 'Sinflar o‘rtasida ozodalik musobaqasini tashkil etish', count: 1, percentage: 7.7 }
    ]
  },
  {
    id: 7,
    question: 'O‘quvchilar maktab ekologiyasiga qanday eng katta hissa qo‘sha oladi?',
    type: 'choice',
    options: [
      { label: 'Shaxsiy ibrat ko‘rsatib, o‘zidan keyin joyini toza qoldirish', count: 9, percentage: 69.2 },
      { label: 'Beparvo tengdoshlarini tozalikka chaqirish va ogohlantirish', count: 3, percentage: 23.1 },
      { label: 'Maktab ekologik ko‘ngillilar guruhiga qo‘shilish', count: 1, percentage: 7.7 }
    ]
  }
];

export const PRACTICAL_SOLUTIONS: PracticalSolution[] = [
  {
    id: 'toza-maktab',
    title: '“Toza maktab” tashabbusi',
    shortDesc: 'Yo‘laklar, oshxona atrofi va sinfxonalarda kundalik ozodalik nazorati.',
    targetProblem: 'Katta tanaffus paytida va dars tugagach qadoqlar yerda qolib ketishi.',
    participants: '9-“D” sinf o‘quvchilari va sinfdoshlar kengashi.',
    requiredResources: 'Chiqindi qutilari, eslatma burchagi, gigiyena vositalari.',
    necessaryPermissions: 'Sinf rahbari va xo‘jalik bo‘limi bilan to‘liq kelishilgan.',
    expectedResult: 'Yo‘laklardagi mayda chiqindilar 75% ga kamayadi, tanaffusdan so‘ng sinflar ozoda qoladi.',
    evaluationMethod: 'Har juma kuni sinflararo ozodalik reytingi va ko‘rik.',
    legalityScore: 9.8,
    utilityScore: 9.5,
    feasibilityScore: 9.8
  },
  {
    id: 'chiqindini-sarala',
    title: '“Chiqindini sarala” (Asosiy tanlangan reja)',
    shortDesc: 'Maktabda qog‘oz va plastikni alohida rangli qutilarga yig‘ish hamda qayta ishlashga topshirish tizimi.',
    targetProblem: 'Har kuni o‘nlab plastik idishlar va yuzlab qog‘oz varaqlarining umumiy axlatga aralashib ketishi.',
    participants: 'Loyiha jamoasi, barcha 9-sinflar, maktab o‘quvchilar kengashi va ma’muriyat.',
    requiredResources: 'Ko‘k rangli quti (Qog‘oz uchun) va Sariq rangli quti (Plastik uchun), ma’lumot beruvchi ko‘rgazmali yorliqlar.',
    necessaryPermissions: 'Maktab direktori va xo‘jalik mudirining rasmiy qo‘llab-quvvatlashi.',
    expectedResult: 'Oyiga 50 kg dan ortiq makulatura va 20 kg plastik saralanib, qayta ishlashga topshiriladi. Maktab chiqindixonasiga yuk sezilarli kamayadi.',
    evaluationMethod: 'Qayta ishlashga topshirilgan xomashyo vazni va oylik sinf hisoboti.',
    legalityScore: 10.0,
    utilityScore: 9.9,
    feasibilityScore: 9.6
  },
  {
    id: 'yashil-maktab',
    title: '“Yashil maktab” tashabbusi',
    shortDesc: 'Maktab hovlisidagi daraxtlarni asrash, sinfxonalarda xona gullarini ko‘paytirish va parvarish qilish.',
    targetProblem: 'Sinfxonalarda kislorod yetishmasligi, hovlidagi yashil maydonlarning qarovsiz qolishi.',
    participants: 'Biologiya to‘garagi a’zolari, ota-onalar va ko‘ngillilar.',
    requiredResources: 'Gul tuvaklari, manzarali o‘simliklar, sug‘orish idishlari.',
    necessaryPermissions: 'Maktab ma’muriyati va biologiya fani o‘qituvchilari.',
    expectedResult: 'Sinflarda toza va kislorodga boy havo ta’minlanadi, 30 dan ortiq yangi gul tuvaklari parvarishlanadi.',
    evaluationMethod: 'Ko‘kalamzorlik pasporti va oylik tekshiruv.',
    legalityScore: 9.7,
    utilityScore: 9.4,
    feasibilityScore: 9.3
  }
];

export const SIX_TASKS = [
  '1. Maktabdagi chiqindi to‘planadigan nuqtalarni aniqlash va xaritaga tushirish',
  '2. 13 nafar o‘quvchi o‘rtasida 7 savolli anonim so‘rovnoma o‘tkazish',
  '3. Konstitutsiya va maktab nizomidagi ekologik burch va huquqlarni o‘rganish',
  '4. To‘plangan javoblar asosida aniq va ko‘rgazmali diagrammalar tuzish',
  '5. 3 ta taklifdan eng samarali “Chiqindini sarala” rejasini tanlash',
  '6. Maktab rahbariyati bilan kelishib, saralash qutilarini amalda o‘rnatish'
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: 1,
    title: 'Muammoni aniqlash va xaritalash',
    responsible: 'Akramov Anvar va Ergashev Feruz',
    deadline: '1-bosqich',
    tasks: ['Maktab hovlisi, yo‘laklari va oshxona atrofi kuzatildi, chiqindi to‘planadigan 3 ta asosiy joy xaritaga olindi.'],
    expectedOutput: 'Muammolar xaritasi va asosiy ehtiyojlar ro‘yxati to‘liq shakllantirildi.',
    status: 'Bajarildi'
  },
  {
    stepNumber: 2,
    title: '13 nafar o‘quvchi o‘rtasida so‘rovnoma',
    responsible: 'Abdusalomov Akbar va Yusupov Jaloliddin',
    deadline: '2-bosqich',
    tasks: ['9-“D” sinfdagi 13 nafar o‘quvchiga 7 ta oddiy savol tarqatildi va har bir javob xolis sanab chiqildi.'],
    expectedOutput: 'Aniq dalillar va foizlarga ega bo‘lgan statistik hisobot tayyorlandi.',
    status: 'Bajarildi'
  },
  {
    stepNumber: 3,
    title: 'Eng samarali yechimni tanlash',
    responsible: 'Butun jamoa (5 nafar a’zo)',
    deadline: '3-bosqich',
    tasks: ['3 ta taklif chuqur tahlil qilindi va qog‘oz hamda plastikni saralash eng maqbul yechim deb tanlandi.'],
    expectedOutput: '“Chiqindini sarala” amaliy loyihasi to‘liq ishlab chiqildi.',
    status: 'Bajarildi'
  },
  {
    stepNumber: 4,
    title: 'Maktab rahbariyati bilan kelishish',
    responsible: 'Ergashev Feruz va Fayzullayev Ayubxon',
    deadline: '4-bosqich',
    tasks: ['Maktab direktori va xo‘jalik mudiriga rasmiy taklif kiritildi, saralash qutilari qo‘yiladigan joylar tasdiqlandi.'],
    expectedOutput: 'Maktab ma’muriyatidan to‘liq rasmiy ruxsat va ko‘mak olindi.',
    status: 'Bajarildi'
  },
  {
    stepNumber: 5,
    title: 'Saralash qutilarini o‘rnatish va amaliyot',
    responsible: '9-“D” sinf jamoasi va barcha ko‘ngillilar',
    deadline: '5-bosqich',
    tasks: ['Ko‘k (Qog‘oz) va Sariq (Plastik) qutilar o‘rnatildi, sinfdoshlarga saralash qoidalari tushuntirildi.'],
    expectedOutput: 'Maktabimizda toza, saralangan va namunali ekologik muhit yaratildi.',
    status: 'Bajarildi'
  }
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    title: 'Qulay atrof-muhitga bo‘lgan konstitutsiyaviy huquq',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi',
    article: '49-modda',
    description: 'Har kim qulay atrof-muhitga, uning holati to‘g‘risidagi ishonchli axborotga ega bo‘lish huquqiga ega.',
    relevanceToSchool: 'Har bir o‘quvchining toza, ozoda va sog‘lom maktab muhitida sifatli ta’lim olishga to‘liq qonuniy haqi bor.',
    url: ''
  },
  {
    title: 'Tabiatni asrash har bir fuqaroning qat’iy burchi',
    source: 'O‘zbekiston Respublikasi Konstitutsiyasi',
    article: '62-modda',
    description: 'Fuqarolar atrof tabiiy muhitga ehtiyotkorona munosabatda bo‘lishga majburdirlar.',
    relevanceToSchool: 'Chiqindini yerga tashlamaslik va maktab hududini ozoda saqlash — shaxsiy xohish emas, balki har birimizning fuqarolik burchimizdir.',
    url: ''
  },
  {
    title: 'Maktab mulkini va sanitariya qoidalarini asrash',
    source: '“Ta’lim to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni',
    article: '48-modda',
    description: 'Ta’lim oluvchilar ta’lim tashkilotining mol-mulkiga ehtiyotkorona munosabatda bo‘lishi, sanitariya-gigiyena qoidalariga qat’iy rioya etishi shart.',
    relevanceToSchool: 'Sinfxonalarni, parta va jihozlarni, yo‘laklarni ozoda tutish har bir o‘quvchining qonuniy majburiyatidir.',
    url: ''
  }
];

export const OFFICIAL_SOURCES = [
  {
    title: 'O‘zbekiston Respublikasi Konstitutsiyasi (49- va 62-moddalar)',
    org: 'Oliy Majlis · Qonunchilik ma’lumotlari milliy bazasi'
  },
  {
    title: '“Ta’lim to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni (48-modda)',
    org: 'Maktabgacha va maktab ta’limi vazirligi'
  },
  {
    title: '9-sinf “Davlat va huquq asoslari” hamda “Tarbiya” darsliklari',
    org: 'Respublika ta’lim markazi o‘quv-uslubiy dasturi'
  }
];
