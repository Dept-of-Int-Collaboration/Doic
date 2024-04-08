const universitiesData = [
    {
        sno: 1,
        universityName: 'Curtin University',
        country: 'Australia',
        openingMonth: 'January',
        closingMonth: 'October',
        link: 'https://scholarships.curtin.edu.au/Scholarship/?id=6861#linkid=um-intl-lg',
    },
    {
        sno: 2,
        universityName: 'Deakin University',
        country: 'Australia',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://www.deakin.edu.au/study/fees-and-scholarships/scholarships/find-a-scholarship/deakin-international-scholarship',
    },
    {
        sno: 3,
        universityName: 'University of Western Australia',
        country: 'Australia',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://www.uwa.edu.au/study/international-students/fees-and-scholarships/uwa-funded-scholarships/global-excellence-scholarship, https://www.uwa.edu.au/study/international-students/international-student-award',
    },
    {
        sno: 4,
        universityName: 'University of Queensland',
        country: 'Australia',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://scholarships.uq.edu.au/scholarships?type%5B160%5D=160&op=Browse+scholarships',
    },
    {
        sno: 5,
        universityName: 'International college of Hotel Management, Adelaide',
        country: 'Australia',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://www.ichm.edu.au/future-students/fees-and-payment/scholarships',
    },
    {
        sno: 6,
        universityName: 'CSIRO',
        country: 'Australia',
        openingMonth: 'Open',
        closingMonth: 'Till seats are filled',
        link: 'https://www.rmit.edu.au/students/careers-opportunities/scholarships/research/rmit-csiro-masters-by-research',
    },
    {
        sno: 7,
        universityName: 'International University of business agriculture and technology (IUBAT)',
        country: 'Bangladesh',
        openingMonth: 'NA',
        closingMonth: 'Decemenber 16',
        link: 'https://iubat.edu/sis/#:~:text=IUBAT%20Scholarships%20for%20International%20Students,student\'s%20account%20with%20the%20university.',
    },
    {
        sno: 8,
        universityName: 'University of Leicester',
        country: 'UK',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://le.ac.uk/study/international-students/scholarships',
    },
    {
        sno: 9,
        universityName: 'Ajman University',
        country: 'UAE',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://www.ajman.ac.ae/en/admissions/office-of-scholarship-financial-aid',
    },
    {
        sno: 10,
        universityName: 'Antalya academy of tourism',
        country: 'Turkey',
        openingMonth: 'NA',
        closingMonth: 'NA',
        link: 'https://antalya.edu.tr/en/departments/international-student-office/content/how-to-apply-1/scholarships-1',
    },
    {
        sno: 11,
        universityName: 'Chaing mai university',
        country: 'Thailand',
        openingMonth: 'June',
        closingMonth: 'NA',
        link: 'https://www.cmu.ac.th/en/content/D7ABB770-4C2B-41EE-825E-720939F6DFD4',
    },
    {
        sno: 12,
        universityName: 'HTMI hotel and tourism management institute',
        country: 'Switzerland',
        openingMonth: 'February',
        closingMonth: 'May',
        link: 'https://www.mastersportal.com/scholarships/1331/study-a-masters-in-europe-scholarships.html#content:eligibility',
    },
    {
        sno: 13,
        universityName: 'University of kwazulu natal',
        country: 'South Africa',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://studentfunding.ukzn.ac.za/scholarships-and-merit-awards-2018/',
    },
    {
        sno: 14,
        universityName: 'Prince Sultan University',
        country: 'South Arab',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://info.psu.edu.sa/MyScholarShip/',
    },
    {
        sno: 15,
        universityName: 'University of Tyumen',
        country: 'Russia',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.mastersportal.com/universities/21582/university-of-tyumen.html',
    },
    {
        sno: 16,
        universityName: 'Cranfield university',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.cranfield.ac.uk/funding/funding-opportunities/cranfield-scholarships',
    },
    {
        sno: 17,
        universityName: 'Nottingham Trent University',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.ntu.ac.uk/international/scholarships-and-fees/scholarships',
    },
    {
        sno: 18,
        universityName: 'University of South Wales',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.southwales.ac.uk/international/fees-scholarships/international-scholarships/',
    },
    {
        sno: 19,
        universityName: 'Plymouth university',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.plymouth.ac.uk/study/funding/international/postgraduate',
    },
    {
        sno: 20,
        universityName: 'University of the Creative Arts',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.uca.ac.uk/study-at-uca/scholarships/#d.en.122295',
    },
    {
        sno: 21,
        universityName: 'Florida International University',
        country: 'US',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://scholarships.fiu.edu/browse-scholarships/index.html, https://admissions.fiu.edu/international/cost-and-aid/',
    },
    {
        sno: 22,
        universityName: 'Illinois State University',
        country: 'US',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://illinoisstate.edu/admissions/international/graduate-scholarship/',
    },
    {
        sno: 23,
        universityName: 'University of Florida',
        country: 'US',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://admissions.ufl.edu/cost-and-aid/scholarships#graduate-scholarships',
    },
    {
        sno: 24,
        universityName: 'University of Missouri kansas city',
        country: 'US',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.umkc.edu/isao/future-students/scholarships.html',
    },
    {
        sno: 25,
        universityName: 'University of Denver',
        country: 'US',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.du.edu/admission-aid/undergraduate/international-applican',
    },
    {
        sno: 26,
        universityName: 'National University of Uzbekistan',
        country: 'Uzbekistan',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.nu.edu/admissions/financial-aid-and-scholarships/scholarships/types-of-awards/',
    },
    {
        sno: 27,
        universityName: 'University of Strathclyde Glasgow',
        country: 'UK',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.strath.ac.uk/engineering/studywithus/scholarships/internationalscholarships/',
    },
    {
        sno: 28,
        universityName: 'Technical University of Varna',
        country: 'Bulgaria',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://vum.bg/scholarships-tution-fees-and-funding/',
    },
    {
        sno: 29,
        universityName: 'Czech Technical University',
        country: 'Prague',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://international.cvut.cz/students/incoming-students/ctu-scholarships/',
    },
    {
        sno: 30,
        universityName: 'CESI',
        country: 'France',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.cesi.fr/en/international/support-funding/#:~:text=CESI%20Excellence,a%20maximum%20of%20%E2%82%AC2000.',
    },
    {
        sno: 31,
        universityName: 'Ecole Centrale de nantes',
        country: 'France',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.ec-nantes.fr/study/masters/scholarships-for-masters-programmes',
    },
    {
        sno: 32,
        universityName: 'Rennes school of business',
        country: 'France',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.rennes-sb.com/programmes/postgraduate/scholarships-master-programmes/',
    },
    {
        sno: 33,
        universityName: 'Aix Marseille university',
        country: 'France',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.univ-amu.fr/en/public/aix-marseille-universitys-insitut-mobility-plan-pmi-grants#:~:text=you%20up%20to%2010%20000,for%20one%20academic%20year.&text=Aix%2DMarseille%20Universit%C3%A9%20will%20take,accompany%20you%20throughout%20your%20stay.',
    },
    {
        sno: 34,
        universityName: 'Hochschule Bremen city university of applied sciences',
        country: 'Germany',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.hs-bremen.de/en/study/advice-and-support/finances/',
    },
    {
        sno: 35,
        universityName: 'Universita iuav di venezia',
        country: 'Italy',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.iuav.it/INTERNATIO/APPLICATIO/Get-Ready-/fees-and-f/study---Iu/index.htm#:~:text=Universit%C3%A0%20Iuav%20di%20Venezia%2C%20in,in%20bachelor\'s%20or%20master\'sdegrees.',
    },
    {
        sno: 36,
        universityName: 'Nouva Accademia di bella arti',
        country: 'Italy',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.naba.it/en/postgraduate-application/tuition-fee-scholarships-financial-aid',
    },
    {
        sno: 37,
        universityName: 'Curtin University',
        country: 'Malaysia',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://curtin.edu.my/study/scholarships/',
    },
    {
        sno: 38,
        universityName: 'Universiti teknologi petronas',
        country: 'Malaysia',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.utp.edu.my/Pages/The-University/YUTP/Type-of-Funds/Scholarship.aspx',
    },
    {
        sno: 39,
        universityName: 'Sunway university',
        country: 'Malaysia',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://my.sunway.edu.my/scholarships/',
    },
    {
        sno: 40,
        universityName: 'University of Malta',
        country: 'Malta',
        openingMonth: 'check website',
        closingMonth: 'check website',
        link: 'https://www.um.edu.mt/study/feesfunding/scholarships/masterresearchphd/',
    },
];

export default universitiesData;
