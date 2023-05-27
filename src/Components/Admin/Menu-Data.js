const menus = [
  {
    subMenu: 'Basic',
    links: [
      {
        to: '/admin-academy/',
        icon: 'ai-dashboard',
        name: 'Dashboard',
      },
      {
        to: '/admin-academy/informasi/',
        icon: 'ai-info',
        name: 'Update Informasi',
      },
    ],
  },
  {
    subMenu: 'E-Course',
    links: [
      {
        to: '/admin-academy/ecourses',
        icon: 'ai-desktop-device',
        name: 'E-Course',
      },
      {
        to: '/admin-academy/instructor-ecourse',
        icon: 'ai-people-multiple',
        name: 'Instructor',
      },
      {
        to: '/admin-academy/manajemen-event',
        icon: 'ai-schedule',
        name: 'Event',
      },
      {
        to: '/admin-academy/members',
        icon: 'ai-people-group',
        name: 'Member Platform',
      },
      {
        to: '/admin-academy/review-ecourse',
        icon: 'ai-thumbs-up',
        name: 'Review',
      },
      {
        to: '/admin-academy/vouchers/',
        icon: 'ai-percentage',
        name: 'Voucher',
      },
    ],
  },
  {
    subMenu: 'Resource',
    links: [
      {
        to: '/admin-academy/source-code',
        icon: 'ai-briefcase',
        name: 'Source Code',
      },
      {
        to: '/admin-academy/artikel',
        icon: 'ai-newspaper',
        name: 'Artikel',
      },
    ],
  },
  {
    subMenu: 'Manajemen Platform',
    links: [
      {
        to: '/admin-academy/users',
        icon: 'ai-people-multiple',
        name: 'User',
      },
      {
        to: '/admin-academy/profil',
        icon: 'ai-gear',
        name: 'My Profile',
      },
    ],
  },
];

export default menus;
