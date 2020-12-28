export default {
  // main navigation - side menu
  menu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', text: 'ACS Machines', link: '/acs-machines' },
      { icon: 'mdi-near-me', text: 'Alarms', link: '/acs-machines/alarms' },
      { icon: 'mdi-swap-horizontal', text: 'Customer Assign', link: '/customer-assign' },
      { icon: 'mdi-city', text: 'Companies', link: '/customers/list' },
      { icon: 'mdi-account-multiple', text: 'Users', link: '/acs-admin/users/list' }
    ]
  }],

  superAdminMenu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', text: 'App Settings', link: '/app-settings/customize-application' },
      { icon: 'mdi-devices', text: 'Configurations', link: '/app-settings/configurations' }
    ]
  }],

  acsViewerMenu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', text: 'ACS Machines', link: '/acs-machines' },
      { icon: 'mdi-city', text: 'Companies', link: '/customers/list' },
      { icon: 'mdi-account-multiple', text: 'Users', link: '/acs-admin/users/list' }
    ]
  }],

  customerMenu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', text: 'Machines', link: '/dashboard/analytics' },
      { icon: 'mdi-near-me', text: 'Alarms', link: '/customers/alarms' },
      { icon: 'mdi-account-multiple', text: 'User Access', link: '/users/list' },
      { icon: 'mdi-speedometer', text: 'Threshold', regex: /^\/threshold/,
        items: [
          { text: 'Thresholds', link: '/threshold/list' },
          { text: 'Add Threshold', link: '/threshold/add' }
        ]
      },      
      { icon: 'mdi-swap-horizontal', text: 'Machine Mapping', link: '/machine-mapping' },
      { icon: 'mdi-shuffle-variant', text: 'Administration', link: '/locations-zones' }
    ]
  }],
  customerOperatorMenu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', text: 'Machines', link: '/dashboard/analytics' },
      { icon: 'mdi-account-multiple', text: 'User Access', link: '/users/list' },
      { icon: 'mdi-speedometer', text: 'Threshold', regex: /^\/threshold/,
        items: [
          { text: 'Thresholds', link: '/threshold/list' },
          { text: 'Add Threshold', link: '/threshold/add' }
        ]
      },
      { icon: 'mdi-swap-horizontal', text: 'Machine Mapping', link: '/machine-mapping' }
    ]
  }],

  // footer links
  footer: [{
    text: 'Copyright',
    key: 'menu.parent',
    href: 'https://aecinternet.com',
    target: '_blank'
  }]
}
