const menus = [
  {
    subMenu: 'Basic',
    links: [
      {
        to: '/member/',
        icon: 'ai-dashboard',
        name: 'Dashboard',
      },
      {
        to: '/member/informasi-terbaru/',
        icon: 'ai-info',
        name: 'Update Informasi',
      },
    ],
  },

  {
    subMenu: 'Kelas',
    links: [
      {
        to: '/member/kelas-saya',
        icon: 'ai-desktop-device',
        name: 'Kelas Saya',
      },
      {
        to: '/member/sertifikat',
        icon: 'ai-newspaper',
        name: 'Sertifikat',
      },
      {
        to: '/member/karya',
        icon: 'ai-folder',
        name: 'Karya Saya',
      },
      {
        to: '/member/event',
        icon: 'ai-schedule',
        name: 'Event',
      },
      {
        to: '/member/beri-review',
        icon: 'ai-thumbs-up',
        name: 'Review Kelas',
      },
    ],
  },

  {
    subMenu: 'Transaksi',
    links: [
      {
        to: '/member/source-code',
        icon: 'ai-briefcase',
        name: 'Source Code',
      },
      {
        to: '/member/transaksi',
        icon: 'ai-basket',
        name: 'Transaksi',
      },
    ],
  },
];

export default menus;
