module.exports = [
  {
    name: "",
    content: [
      {
        label: "Dashboards",
        icon: "house-fill",
        path: "/pages/dashboard",
        submenu: [
          {
            label: "Default",
            path: "/pages/dashboard.html"
          },
          {
            label: "Analytics",
            path: "/pages/dashboard-analytics.html"
          },
          {
            label: "Wallet",
            path: "/pages/dashboard-wallet.html"
          },
        ]
      }, {
        label: "Pages",
        icon: "bar-chart-fill",
        path: "/pages/page",
        submenu: [
          {
            label: "Overview",
            path: "/pages/page-overview.html"
          },
          {
            label: "Table Listing",
            path: "/pages/page-table-listing.html"
          },
          {
            label: "Details",
            path: "/pages/page-details.html"
          },
          {
            label: "Create Form",
            path: "/pages/page-create-form.html"
          },
          {
            label: "Large List",
            path: "/pages/page-list.html"
          },
          {
            label: "Checklist",
            path: "/pages/page-checklist.html"
          },
          {
            label: "Collection",
            path: "/pages/page-collection.html"
          },
        ]
      }, {
        label: "Account",
        icon: "gear-fill",
        path: "/pages/account",
        submenu: [
          {
            label: "Settings",
            path: "/pages/account-general.html"
          },
          {
            label: "Password",
            path: "/pages/account-password.html"
          },
          {
            label: "Billing",
            path: "/pages/account-billing.html"
          },
          {
            label: "Notifications",
            path: "/pages/account-notifications.html"
          },
          {
            label: "Team",
            path: "/pages/account-team.html"
          },
          {
            label: "Login",
            path: "/pages/login.html"
          },
          {
            label: "Register",
            path: "/pages/register.html"
          },
        ]
      }, {
        label: "Other",
        icon: "file-break-fill",
        path: "/pages/other",
        submenu: [
          {
            label: "Pricing Plans",
            path: "/pages/other-pricing.html"
          },
          {
            label: "Terms of Service",
            path: "/pages/terms.html"
          },
          {
            label: "Error Page",
            path: "/pages/error.html"
          },
          {
            label: "Landing Page",
            path: "/index.html"
          }
        ]
      }
    ]
  }, {
    name: "Resources",
    content: [
      {
        label: "Documentation",
        icon: "book-fill",
        path: "/docs"
      }, {
        label: "Components",
        icon: "grid-1x2-fill",
        path: "/docs/components.html#alerts",
        submenu: [
          {
            label: "Alerts",
            path: "/docs/components.html#alerts"
          },
          {
            label: "Avatars",
            path: "/docs/components.html#avatars"
          },
          {
            label: "Badges",
            path: "/docs/components.html#badges"
          },
          {
            label: "Buttons",
            path: "/docs/components.html#buttons"
          },
          {
            label: "Button Group",
            path: "/docs/components.html#button-group"
          },
          {
            label: "Cards",
            path: "/docs/components.html#cards"
          },
          {
            label: "Dropdowns",
            path: "/docs/components.html#dropdowns"
          },
          {
            label: "Forms",
            path: "/docs/components.html#forms"
          },
          {
            label: "List Groups",
            path: "/docs/components.html#list-groups"
          },
        ]
      },
      {
        label: "Widgets",
        icon: "calendar2-plus-fill",
        badge: {
          color: 'warning',
          text: '🔥 Hot'
        },
        path: "/widgets.html"
      },
    ]
  }
]
