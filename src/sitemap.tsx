import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  Icon,
  UilChartPie,
  UilCube,
  UilDocumentLayoutRight,
  UilFilesLandscapesAlt,
  UilPuzzlePiece,
} from "@iconscout/react-unicons";

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: "font-awesome" | "feather" | "unicons";
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: "dashboard",
    horizontalNavLabel: "home",
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: "home",
        icon: "pie-chart",
        active: true,
        flat: true,
        pages: [
          {
            name: "e-commerce",
            path: "/",
            pathName: "default-dashboard",
            topNavIcon: "shopping-cart",
            active: true,
          },
          {
            name: "user-management",
            path: "/dashboard/user-management",
            pathName: "user-management-dashbaord",
            topNavIcon: "clipboard",
            active: true,
          },
          {
            name: "CRM",
            path: "dashboard/crm",
            pathName: "crm",
            topNavIcon: "phone",
          },
          {
            name: "social-feed",
            path: "/apps/social/feed",
            pathName: "social-feed",
            topNavIcon: "share-2",
            active: true,
          },
        ],
      },
    ],
  },
  {
    label: "apps",
    icon: UilCube,
    pages: [
      {
        name: "e-commerce",
        active: true,
        icon: "shopping-cart",
        pages: [
          {
            name: "admin",
            active: true,
            pages: [
              {
                name: "add-product",
                path: "/apps/e-commerce/admin/add-product",
                pathName: "e-commerce-add-product",
                active: true,
              },
              {
                name: "products",
                path: "/apps/e-commerce/admin/products",
                pathName: "e-commerce-products",
                active: true,
              },
              {
                name: "hyper_products",
                path: "/apps/e-commerce/admin/products-2",
                pathName: "e-commerce-products-2",
                active: true,
              },
              {
                name: "customers",
                path: "/apps/e-commerce/admin/customers",
                pathName: "e-commerce-customers",
                active: true,
              },
              {
                name: "hyper_customers",
                path: "/apps/e-commerce/admin/customers-2",
                pathName: "e-commerce-customers-2",
                active: true,
              },
              {
                name: "hyper_sellers",
                path: "/apps/e-commerce/admin/sellers",
                pathName: "e-commerce-customers",
                active: true,
              },
              {
                name: "customer-details",
                path: "/apps/e-commerce/admin/customer-details",
                pathName: "e-commerce-customer-details",
                active: true,
              },
              {
                name: "orders",
                path: "/apps/e-commerce/admin/orders",
                pathName: "e-commerce-orders",
                active: true,
              },
              {
                name: "hyper_orders",
                path: "/apps/e-commerce/admin/orders-2",
                pathName: "e-commerce-orders-2",
                active: true,
              },
              {
                name: "order-details",
                path: "/apps/e-commerce/admin/order-details",
                pathName: "e-commerce-order-details",
                active: true,
              },
              {
                name: "Hyper_order_details",
                path: "/apps/e-commerce/admin/order-detials-2",
                pathName: "e-commerce-order-details-2",
                active: true,
              },
              {
                name: "refund",
                path: "/apps/e-commerce/admin/refund",
                pathName: "e-commerce-refund",
                active: true,
              },
            ],
          },
          {
            name: "customer",
            active: true,
            pages: [
              {
                name: "homepage",
                path: "apps/e-commerce/customer/homepage",
                pathName: "e-commerce-fe-home",
                active: true,
              },
              {
                name: "product-details",
                path: "apps/e-commerce/customer/product-details",
                pathName: "e-commerce-fe-product-details",
                active: true,
              },
              {
                name: "Hyper_product-details",
                path: "apps/e-commerce/customer/product-details-2",
                pathName: "e-commerce-fe-product-details",
                active: true,
              },
              {
                name: "products-filter",
                path: "apps/e-commerce/customer/products-filter",
                pathName: "e-commerce-fe-product-filter",
                active: true,
              },
              {
                name: "cart",
                path: "apps/e-commerce/customer/cart",
                pathName: "e-commerce-fe-cart",
                active: true,
              },
              {
                name: "checkout",
                path: "apps/e-commerce/customer/checkout",
                pathName: "e-commerce-fe-checkout",
                active: true,
              },
              {
                name: "Hyper_checkout",
                path: "apps/e-commerce/customer/checkout-2",
                pathName: "e-commerce-fe-checkout",
                active: true,
              },
              {
                name: "shipping-info",
                path: "apps/e-commerce/customer/shipping-info",
                pathName: "e-commerce-fe-shipping-info",
                active: true,
              },
              {
                name: "profile",
                path: "apps/e-commerce/customer/profile",
                pathName: "e-commerce-fe-profile",
                active: true,
              },
              {
                name: "favorite-stores",
                path: "apps/e-commerce/customer/favorite-stores",
                pathName: "e-commerce-fe-favorite-stores",
                active: true,
              },
              {
                name: "wishlist",
                path: "apps/e-commerce/customer/wishlist",
                pathName: "e-commerce-fe-wishlist",
                active: true,
              },
              {
                name: "order-tracking",
                path: "apps/e-commerce/customer/order-tracking",
                pathName: "e-commerce-fe-order-tracking",
                active: true,
              },
              {
                name: "invoice",
                path: "apps/e-commerce/customer/invoice",
                pathName: "e-commerce-fe-invoice",
                active: true,
              },
              {
                name: "Hyper_shopping_cart",
                path: "/apps/e-commerce/customer/shopping-cart",
                pathName: "e-commerce-fe-shopping-cart",
                active: true,
              },
            ],
          },
        ],
      },
      {
        name: "CRM",
        icon: "phone",
        active: true,
        pages: [
          {
            name: "leads",
            path: "/crm/leads",
            pathName: "crm-leads",
          },
          {
            name: "lead details",
            path: "apps/crm/lead-details",
            pathName: "crm-lead-details",
          },
          {
            name: "reports",
            path: "apps/crm/reports",
            pathName: "crm-reports",
          },
          {
            name: "add-contact",
            path: "apps/crm/add-contact",
            pathName: "crm-add-contact",
          },
          {
            name: "hyper_project",
            path: "apps/crm/project",
            pathName: "crm-project",
            active: true,
          },
          {
            name: "hyper_order_list",
            path: "apps/crm/order-list",
            pathName: "crm-order-list",
            active: true,
          },
          {
            name: "hyper_clients",
            path: "apps/crm/clients",
            pathName: "crm-clients",
            active: true,
          },
          {
            name: "hyper_management",
            path: "apps/crm/management",
            pathName: "crm-management",
            active: true,
          },
        ],
      },
      {
        name: "project-management",
        icon: "clipboard",
        active: true,
        pages: [
          {
            name: "create new",
            path: "/apps/project-management/create-new",
            pathName: "project-management-create-new",
            active: true,
          },
          {
            name: "hyper_create_new",
            path: "/apps/project-management/create-new-2",
            pathName: "project-management-create-new-2",
            active: true,
          },
          {
            name: "project-list-view",
            path: "/apps/project-management/project-list-view",
            pathName: "project-management-project-list-view",
            active: true,
          },
          {
            name: "hyper_project_list_view",
            path: "/apps/project-management/project-list-view-2",
            pathName: "project-management-project-list-view-2",
            active: true,
          },
          {
            name: "project-card-view",
            path: "/apps/project-management/project-card-view",
            pathName: "project-management-project-card-view",
            active: true,
          },
          {
            name: "project-board-view",
            path: "/apps/project-management/project-board-view",
            pathName: "project-management-project-board-view",
            active: true,
          },
          {
            name: "todo-list",
            path: "/apps/project-management/todo-list",
            pathName: "project-management-todo-list",
            active: true,
          },
          {
            name: "project-details",
            path: "/apps/project-management/project-details",
            pathName: "project-management-project-details",
            active: true,
          },
          {
            name: "hyper_project_details_2",
            path: "/apps/project-management/project-details-2",
            pathName: "project-management-project-details-2",
            active: true,
          },
          {
            name: "hyper_gantt",
            path: "/apps/project-management/gantt",
            pathName: "project-management-gantt",
            active: true,
          },
        ],
      },
      {
        name: "user-management",
        active: true,
        icon: "users",
        pages: [
          {
            name: "User",
            active: true,
            pages: [
              {
                name: "Users List",
                path: "/apps/user-management/user/list",
                pathName: "user-management-user-list",
                active: true,
              },
              {
                name: "View User",
                path: "/apps/user-management/user/view",
                pathName: "user-management-user-view",
                active: true,
              },
            ]
          },
          {
            name: "Role",
            active: true,
            pages: [
              {
                name: "Roles List",
                path: "/apps/user-management/role/list",
                pathName: "user-management-role-list",
                active: true,
              },
              {
                name: "View Role",
                path: "/apps/user-management/role/view",
                pathName: "user-management-role-view",
                active: true,
              }
            ]
          },
          {
            name: "Permission",
            path: "/apps/user-management/permission",
            pathName: "user-management-permission",
            active: true,
          },
        ],
      },
      {
        name: "chat",
        icon: "message-square",
        active: true,
        pages: [
          {
            name: "chat-1",
            path: "/apps/chat",
            pathName: "app-chat",
            active: true,
          },
          {
            name: "hyper_chat",
            path: "/apps/chat-2",
            pathName: "app-chat",
            active: true,
          },
        ],
      },
      {
        name: "email",
        icon: "mail",
        active: true,
        pages: [
          {
            name: "inbox",
            path: "/apps/email/inbox",
            pathName: "email-inbox",
            active: true,
          },
          {
            name: "hyper_inbox",
            path: "/apps/email/inbox-2",
            pathName: "email-inbox-2",
            active: true,
          },
          {
            name: "email-detail",
            path: "/apps/email/email-detail",
            pathName: "email-detail",
            active: true,
          },
          {
            name: "compose",
            path: "/apps/email/compose",
            pathName: "email-compose",
            active: true,
          },
          {
            name: "Hyper_read_email",
            path: "/apps/email/read-email",
            pathName: "email-read-email",
            active: true,
          },
        ],
      },
      {
        name: "events",
        icon: "bookmark",
        active: true,
        pages: [
          {
            name: "create an event",
            path: "/apps/events/create-an-event",
            pathName: "create-an-event",
            active: true,
          },
          {
            name: "Event detail",
            path: "/apps/events/event-detail",
            pathName: "event-detail",
            active: true,
          },
        ],
      },
      {
        name: "social",
        icon: "share-2",
        active: true,
        pages: [
          {
            name: "profile",
            path: "/apps/social/profile",
            pathName: "social-profile",
            active: true,
          },
          {
            name: "settings",
            path: "/apps/social/settings",
            pathName: "settings",
            active: true,
          },
          {
            name: "feed",
            path: "/apps/social/feed",
            pathName: "feed",
            active: true,
          },
          {
            name: "hyper_feed",
            path: "/apps/social/feed-2",
            pathName: "feed-2",
            active: true,
          },
        ],
      },
      {
        name: "tasks",
        icon: "clipboard",
        active: true,
        pages: [
          {
            name: "hyper_list",
            path: "/apps/tasks/list",
            pathName: "tasks-list",
            active: true,
          },
          {
            name: "hyper_details",
            path: "/apps/tasks/details",
            pathName: "tasks-details",
            active: true,
          },
          {
            name: "hyper_kanban_board",
            path: "/apps/tasks/kanban-board",
            pathName: "tasks-kanban-board",
            active: true,
          },
        ],
      },
      {
        name: "hyper_calendar",
        icon: "calendar",
        path: "/apps/calendar",
        pathName: "app-calendar",
        active: true,
      },
      {
        name: "hyper_file_manager",
        icon: "file",
        path: "/apps/file-manager",
        pathName: "app-file-manager",
        active: true,
      },
    ],
  },
  {
    label: "pages",
    icon: UilFilesLandscapesAlt,
    pages: [
      {
        name: "starter",
        icon: "compass",
        path: "/pages/starter",
        pathName: "starter-page",
        active: true,
      },
      {
        name: "profile",
        icon: "user",
        active: true,
        pages: [
          {
            name: "hyper_profile",
            path: "/pages/profile/profile",
            pathName: "profile-profile",
            active: true,
          },
          {
            name: "hyper_profile#2",
            path: "pages/profile/profile-2",
            pathName: "profile-profile2",
            active: true,
          },
        ],
      },
      {
        name: "faq",
        icon: "help-circle",
        active: true,
        pages: [
          {
            name: "faq-accordion",
            path: "/pages/faq/faq-accordion",
            pathName: "faq-accordion",
            active: true,
          },
          {
            name: "hyper_faq_accordion_2",
            path: "/pages/faq/faq-accordion-2",
            pathName: "faq-accordion-2",
            active: true,
          },
          {
            name: "faq-tab",
            path: "pages/faq/faq-tab",
            pathName: "faq-tab",
          },
        ],
      },
      {
        name: "landing",
        icon: "globe",
        active: true,
        pages: [
          {
            name: "default",
            path: "/landing/default",
            pathName: "landing-default",
            active: true,
          },
          {
            name: "hyper_alternate",
            path: "/landing/alternate",
            pathName: "landing-alternate",
            active: true,
          },
        ],
      },
      {
        name: "pricing",
        icon: "tag",
        active: true,
        pages: [
          {
            name: "pricing-column",
            path: "/pages/pricing/pricing-column",
            pathName: "pricing-column",
            active: true,
          },
          {
            name: "hyper_pricing_column",
            path: "/pages/pricing/pricing-column-2",
            pathName: "pricing-column-2",
            active: true,
          },
          {
            name: "pricing-grid",
            path: "pages/pricing/pricing-grid",
            pathName: "pricing-grid",
          },
        ],
      },
      {
        name: "hyper_invoice",
        icon: "edit",
        path: "/pages/invoice",
        pathName: "invoice-page",
        active: true,
      },
      {
        name: "hyper_maintenance",
        icon: "truck",
        path: "/pages/maintenance",
        pathName: "maintenance-page",
        active: true,
      },
      {
        name: "notifications",
        icon: "bell",
        path: "/pages/notifications",
        pathName: "notifications-page",
        active: true,
      },
      {
        name: "members",
        icon: "users",
        path: "/pages/members",
        pathName: "members-page",
        active: true,
      },
      {
        name: "hyper_with_Preload",
        icon: "clipboard",
        path: "/pages/with-preload",
        pathName: "with-preload-page",
        active: true,
      },
      {
        name: "hyper_timeline",
        icon: "clock",
        path: "/pages/timeline",
        pathName: "timeline-page",
        active: true,
      },
      {
        name: "errors",
        icon: "alert-triangle",
        active: true,
        pages: [
          {
            name: "403",
            path: "pages/errors/403",
            pathName: "error403",
            active: true,
          },
          {
            name: "404",
            path: "pages/errors/404",
            pathName: "error404",
            active: true,
          },
          {
            name: "hyper_404",
            path: "pages/errors/404-2",
            pathName: "error404-2",
            active: true,
          },
          {
            name: "hyper_404#2",
            path: "pages/errors/404-3",
            pathName: "error404-3",
            active: true,
          },
          {
            name: "500",
            path: "pages/errors/500",
            pathName: "error500",
            active: true,
          },
          {
            name: "hyper_500",
            path: "pages/errors/500-2",
            pathName: "error500-2",
            active: true,
          },
        ],
      },
      {
        name: "authentication",
        icon: "lock",
        active: true,
        pages: [
          {
            name: "simple",
            active: true,
            pages: [
              {
                name: "sign-in",
                path: "/pages/`authentica`tion/simple/sign-in",
                pathName: "simple-signin",
                active: true,
              },
              {
                name: "sign-up",
                path: "/pages/authentication/simple/sign-up",
                pathName: "simple-signup",
                active: true,
              },
              {
                name: "sign-out",
                path: "/pages/authentication/simple/sign-out",
                pathName: "simple-signout",
                active: true,
              },
              {
                name: "forgot-password",
                path: "/pages/authentication/simple/forgot-password",
                pathName: "simple-forgot-password",
                active: true,
              },
              {
                name: "reset-password",
                path: "/pages/authentication/simple/reset-password",
                pathName: "simple-reset-password",
                active: true,
              },
              {
                name: "lock-screen",
                path: "/pages/authentication/simple/lock-screen",
                pathName: "simple-lock-screen",
                active: true,
              },
              {
                name: "2FA",
                path: "/pages/authentication/simple/2FA",
                pathName: "simple-2FA",
                active: true,
              },
            ],
          },
          {
            name: "split",
            pages: [
              {
                name: "sign-in",
                path: "pages/authentication/split/sign-in",
                pathName: "split-signin",
              },
              {
                name: "sign-up",
                path: "pages/authentication/split/sign-up",
                pathName: "split-signup",
              },
              {
                name: "sign-out",
                path: "pages/authentication/split/sign-out",
                pathName: "split-signout",
              },
              {
                name: "forgot-password",
                path: "pages/authentication/split/forgot-password",
                pathName: "split-forgot-password",
              },
              {
                name: "reset-password",
                path: "pages/authentication/split/reset-password",
                pathName: "split-reset-password",
              },
              {
                name: "lock-screen",
                path: "pages/authentication/split/lock-screen",
                pathName: "split-lock-screen",
              },
            ],
          },
          {
            name: "Card",

            pages: [
              {
                name: "sign-in",
                path: "pages/authentication/card/sign-in",
                pathName: "card-signin",
              },
              {
                name: "sign-up",
                path: "pages/authentication/card/sign-up",
                pathName: "card-signup",
              },
              {
                name: "sign-out",
                path: "pages/authentication/card/sign-out",
                pathName: "card-signout",
              },
              {
                name: "forgot-password",
                path: "pages/authentication/card/forgot-password",
                pathName: "card-forgot-password",
              },
              {
                name: "reset-password",
                path: "pages/authentication/card/reset-password",
                pathName: "card-reset-password",
              },
              {
                name: "lock-screen",
                path: "pages/authentication/card/lock-screen",
                pathName: "card-lock-screen",
              },
            ],
          },
        ],
      },
      {
        name: "layouts",
        icon: "layout",
        active: true,
        pages: [
          {
            name: "vertical-sidenav",
            path: "/pages/demo/vertical-sidenav",
            pathName: "demo-vertical-sidenav",
            active: true,
          },
          {
            name: "dark-mode",
            path: "/pages/demo/dark-mode",
            pathName: "demo-dark-mode",
            active: true,
          },
          {
            name: "sidenav-collapse",
            path: "/pages/demo/sidenav-collapse",
            pathName: "demo-sidenav-collapse",
            active: true,
          },
          {
            name: "darknav",
            path: "/pages/demo/darknav",
            pathName: "demo-darknav",
            active: true,
          },
          {
            name: "topnav-slim",
            path: "/pages/demo/topnav-slim",
            pathName: "demo-topnav-slim",
            active: true,
          },
          {
            name: "navbar-top-slim",
            path: "/pages/demo/navbar-top-slim",
            pathName: "demo-navbar-top-slim",
            active: true,
          },
          {
            name: "navbar-top",
            path: "/pages/demo/navbar-top",
            pathName: "demo-navbar-top",
            active: true,
          },
          {
            name: "horizontal-slim",
            path: "/pages/demo/horizontal-slim",
            pathName: "demo-horizontal-slim",
            active: true,
          },
          {
            name: "combo-nav",
            path: "/pages/demo/combo-nav",
            pathName: "demo-combo-nav",
            active: true,
          },
          {
            name: "combo-nav-slim",
            path: "/pages/demo/combo-nav-slim",
            pathName: "demo-combo-nav-slim",
            active: true,
          },
          {
            name: "dual-nav",
            path: "/pages/demo/dual-nav",
            pathName: "demo-dual-nav",
            active: true,
          },
        ],
      },
    ],
  },
  {
    label: "modules",
    active: true,
    icon: UilPuzzlePiece,
    megaMenu: true, // works for navbar top
    pages: [
      {
        name: "forms",
        icon: "file-text",
        active: true,
        pages: [
          {
            name: "basic",
            active: true,
            pages: [
              {
                name: "form-control",
                path: "/modules/forms/form-control",
                pathName: "form-control",
                active: true,
              },
              {
                name: "hyper_form-control",
                path: "/modules/forms/form-control-2",
                pathName: "form-control-2",
                active: true,
              },
              {
                name: "input-group",
                path: "/modules/forms/input-group",
                pathName: "form-input-group",
                active: true,
              },
              {
                name: "select",
                path: "/modules/forms/select",
                pathName: "form-select",
                active: true,
              },
              {
                name: "checks",
                path: "/modules/forms/checks",
                pathName: "form-checks",
                active: true,
              },
              {
                name: "range",
                path: "/modules/forms/range",
                pathName: "form-range",
                active: true,
              },
              {
                name: "floating-labels",
                path: "/modules/forms/floating-labels",
                pathName: "floating-labels",
                active: true,
              },
              {
                name: "layout",
                path: "/modules/forms/layout",
                pathName: "form-layout",
                active: true,
              },
              {
                name: "basic-elements",
                path: "/modules/forms/basic-elements",
                pathName: "basic-elements",
                active: true,
              },
            ],
          },
          {
            name: "advance",
            active: true,
            pages: [
              {
                name: "hyper_form_advance",
                path: "/modules/forms/form-advance",
                pathName: "form-advance",
                active: true,
              },
              {
                name: "advance-select",
                path: "/modules/forms/advance-select",
                pathName: "advance-select",
                active: true,
              },
              {
                name: "date-picker",
                path: "/modules/forms/date-picker",
                pathName: "date-picker",
                active: true,
              },
              {
                name: "editor",
                path: "/modules/forms/editor",
                pathName: "editor",
                active: true,
              },
              {
                name: "emoji-button",
                path: "/modules/forms/emoji-button",
                pathName: "emoji-button",
                active: true,
              },
              {
                name: "file-uploader",
                path: "/modules/forms/file-uploader",
                pathName: "file-uploader",
                active: true,
              },
              {
                name: "rating",
                path: "/modules/forms/rating",
                pathName: "rating",
                active: true,
              },
            ],
          },
          {
            name: "validation",
            path: "/modules/forms/validation",
            pathName: "forms-validation",
            active: true,
          },
          {
            name: "hyper_validation",
            path: "/modules/forms/validation-2",
            pathName: "forms-validation-2",
            active: true,
          },
          {
            name: "hyper_wizard",
            path: "/modules/forms/wizard",
            pathName: "forms-wizard",
            active: true,
          },
          {
            name: "hyper_file_upload",
            path: "/modules/forms/file-upload",
            pathName: "forms-file-upload",
            active: true,
          },
          {
            name: "hyper_editors",
            path: "/modules/forms/editors",
            pathName: "forms-editors",
            active: true,
          },
        ],
      },

      {
        name: "icons",
        icon: "grid",
        active: true,
        pages: [
          {
            name: "feather",
            path: "modules/icons/feather",
            pathName: "icons-feather",
            active: true,
          },
          {
            name: "font awesome",
            path: "modules/icons/font-awesome",
            pathName: "icons-font-awesome",
            active: true,
          },
          {
            name: "unicons",
            path: "modules/icons/unicons",
            pathName: "icons-unicons",
            active: true,
          },
          {
            name: "hyper_unicons",
            path: "modules/icons/unicons-2",
            pathName: "icons-unicons-2",
            active: true,
          },
          {
            name: "hyper_dripicons",
            path: "modules/icons/dripicons",
            pathName: "icons-dripicons",
            active: true,
          },
          {
            name: "hyper_material_Design",
            path: "modules/icons/material-design",
            pathName: "icons-material-design",
            active: true,
          },
        ],
      },
      {
        name: "tables",
        icon: "columns",
        active: true,
        pages: [
          {
            name: "Basic tables",
            path: "/modules/tables/basic-tables",
            pathName: "basic-tables",
            active: true,
          },
          {
            name: "Advance tables",
            path: "/modules/tables/advance-tables",
            pathName: "advance-tables",
            active: true,
          },
        ],
      },
      {
        name: "charts",
        icon: "bar-chart-2",
        active: true,
        pages: [
          {
            name: "ECharts",
            path: "/modules/charts/e-charts",
            pathName: "e-charts",
            active: true,
          },
          {
            name: "gantt-chart",
            path: "/modules/charts/gantt-chart",
            pathName: "gantt-chart",
            active: true,
          },
          {
            name: "hyper_apex-chart",
            path: "/modules/charts/apex-chart",
            pathName: "apex-chart",
            active: true,
          },
          {
            name: "hyper_chartjs",
            path: "/modules/charts/chartjs",
            pathName: "chartjs",
            active: true,
          },
        ],
      },
      {
        name: "components",
        icon: "package",
        active: true,
        pages: [
          {
            name: "accordion",
            pathName: "components-accordion",
            path: "/modules/components/accordion",
            active: true,
          },
          {
            name: "hyper_accordion",
            pathName: "components-accordion-2",
            path: "/modules/components/accordion-2",
            active: true,
          },
          {
            name: "avatar",
            pathName: "components-avatar",
            path: "/modules/components/avatar",
            active: true,
          },
          {
            name: "hyper_avatar",
            pathName: "components-avatar-2",
            path: "/modules/components/avatar-2",
            active: true,
          },
          {
            name: "alerts",
            pathName: "components-alerts",
            path: "/modules/components/alerts",
            active: true,
          },
          {
            name: "hyper_alerts",
            pathName: "components-alerts-2",
            path: "/modules/components/alerts-2",
            active: true,
          },
          {
            name: "badge",
            pathName: "components-badge",
            path: "/modules/components/badge",
            active: true,
          },
          {
            name: "hyper_badge",
            pathName: "components-badge-2",
            path: "/modules/components/badge-2",
            active: true,
          },
          {
            name: "breadcrumb",
            pathName: "components-breadcrumb",
            path: "/modules/components/breadcrumb",
            active: true,
          },
          {
            name: "hyper_breadcrumb",
            pathName: "components-breadcrumb-2",
            path: "/modules/components/breadcrumb-2",
            active: true,
          },
          {
            name: "buttons",
            pathName: "components-buttons",
            path: "/modules/components/button",
            active: true,
          },
          {
            name: "hyper_buttons",
            pathName: "components-buttons-2",
            path: "/modules/components/button-2",
            active: true,
          },
          {
            name: "card",
            pathName: "components-card",
            active: true,
            path: "/modules/components/card",
          },
          {
            name: "hyper_card",
            pathName: "components-card-2",
            path: "/modules/components/card-2",
            active: true,
          },
          {
            name: "hyper_notification",
            pathName: "components-notification",
            path: "/modules/components/notification",
            active: true,
          },
          {
            name: "carousel",
            active: true,
            pages: [
              {
                name: "bootstrap",
                path: "/modules/components/carousel/bootstrap",
                pathName: "components-bs-carousel",
                active: true,
              },
              {
                name: "swiper",
                path: "/modules/components/carousel/swiper",
                pathName: "swiper-carousel",
                active: true,
              },
              {
                name: "hyper_carousel",
                path: "/modules/components/carousel/carousel",
                pathName: "carousel-carousel",
                active: true,
              },
            ],
          },
          {
            name: "collapse",
            pathName: "components-bs-collapse",
            path: "/modules/components/collapse",
            active: true,
          },
          {
            name: "dropdown",
            pathName: "components-bs-dropdown",
            path: "/modules/components/dropdown",
            active: true,
          },
          {
            name: "hyper_dropdown",
            pathName: "components-bs-dropdown-2",
            path: "/modules/components/dropdown-2",
            active: true,
          },
          {
            name: "hyper_embed_Video",
            pathName: "embed-video",
            path: "/modules/components/embed-video",
            active: true,
          },
          {
            name: "list-group",
            pathName: "components-bs-list-group",
            path: "/modules/components/list-group",
            active: true,
          },
          {
            name: "hyper_list_group",
            pathName: "components-bs-list-group-2",
            path: "/modules/components/list-group-2",
            active: true,
          },
          {
            name: "countup",
            pathName: "components-countup",
            path: "/modules/components/countup",
            active: true,
          },
          {
            name: "modals",
            pathName: "components-modal",
            path: "/modules/components/modal",
            active: true,
          },
          {
            name: "hyper_modals",
            pathName: "components-modal-2",
            path: "/modules/components/modal-2",
            active: true,
          },
          {
            name: "navs-_and_-Tabs",
            active: true,
            pages: [
              {
                name: "navs",
                pathName: "components-navs",
                path: "/modules/components/navs-and-tabs/navs",
                active: true,
              },
              {
                name: "navbar",
                pathName: "navbar",
                path: "/modules/components/navs-and-tabs/navbar",
                active: true,
              },
              {
                name: "tabs",
                pathName: "components-tabs",
                path: "/modules/components/navs-and-tabs/tabs",
                active: true,
              },
              {
                name: "hyper_tabs",
                pathName: "components-tabs-2",
                path: "/modules/components/navs-and-tabs/tabs-2",
                active: true,
              },
            ],
          },
          {
            name: "pictures",
            active: true,
            pages: [
              {
                name: "Lightbox",
                pathName: "lightbox",
                path: "/modules/components/pictures/lightbox",
                active: true,
              },
            ],
          },
          {
            name: "offcanvas",
            pathName: "components-offcanvas",
            path: "/modules/components/offcanvas",
            active: true,
          },
          {
            name: "hyper_offcanvas",
            pathName: "components-offcanvas-2",
            path: "/modules/components/offcanvas-2",
            active: true,
          },
          {
            name: "progress-bar",
            pathName: "basic-progress-bar",
            path: "/modules/components/progress-bar",
            active: true,
          },
          {
            name: "placeholder",
            pathName: "components-placeholder",
            path: "/modules/components/placeholder",
            active: true,
          },
          {
            name: "hyper_placeholder",
            pathName: "components-placeholder-2",
            path: "/modules/components/placeholder-2",
            active: true,
          },
          {
            name: "pagination",
            path: "/modules/components/pagination",
            pathName: "components-pagination",
            active: true,
          },
          {
            name: "hyper_pagination",
            path: "/modules/components/pagination-2",
            pathName: "components-pagination-2",
            active: true,
          },
          {
            name: "popovers",
            path: "/modules/components/popovers",
            pathName: "components-popovers",
            active: true,
          },
          {
            name: "hyper_popovers",
            path: "/modules/components/popovers-2",
            pathName: "components-popovers-2",
            active: true,
          },
          {
            name: "spinners",
            path: "/modules/components/spinners",
            pathName: "components-spinners",
            active: true,
          },
          {
            name: "hyper_spinners",
            path: "/modules/components/spinners-2",
            pathName: "components-spinners-2",
            active: true,
          },
          {
            name: "hyper_ribbon",
            path: "/modules/components/ribbon",
            pathName: "components-ribbon",
            active: true,
          },
          {
            name: "toast",
            path: "/modules/components/toast",
            pathName: "components-toast",
            active: true,
          },
          {
            name: "tooltips",
            path: "/modules/components/tooltips",
            pathName: "components-bs-tooltips",
            active: true,
          },
          {
            name: "hyper_tooltips",
            path: "/modules/components/tooltips-2",
            pathName: "components-bs-tooltips-2",
            active: true,
          },
          {
            name: "Dashboards",
            active: true,
            pages: [
              {
                name: "Hyper_Analytics",
                path: "/modules/components/hyper/dashboard/Analytics/index",
                pathName: "components-bs-Dashboards",
                active: true,
              },
              {
                name: "Hyper_Ecommerce",
                path: "/modules/components/hyper/dashboard/Ecommerce/index",
                pathName: "swiper-carousel",
                active: true,
              },
              {
                name: "Hyper_Projects",
                path: "/modules/components/hyper/dashboard/Project/index",
                pathName: "swiper-carousel",
                active: true,
              },
              {
                name: "Hyper_E-Wallet",
                path: "/modules/components/hyper/dashboard/E-Wallet/index",
                pathName: "swiper-carousel",
                active: true,
              },
              {
                name: "hyper_CRM_Dashboard",
                path: "apps/crm/dashboard",
                pathName: "crm-dashboard",
                active: true,
              },
            ],
          },
        ],
      },
      {
        name: "utilities",
        icon: "tool",
        active: true,
        pages: [
          {
            name: "background",
            path: "/modules/utilities/background",
            pathName: "utilities-background",
            active: true,
          },
          {
            name: "borders",
            path: "/modules/utilities/borders",
            pathName: "utilities-borders",
            active: true,
          },
          {
            name: "colors",
            path: "/modules/utilities/colors",
            pathName: "utilities-colors",
            active: true,
          },
          {
            name: "display",
            path: "/modules/utilities/display",
            pathName: "utilities-display",
            active: true,
          },
          {
            name: "grid#1",
            path: "/modules/utilities/grid",
            pathName: "utilities-grid",
            active: true,
          },
          {
            name: "grid#2",
            pathName: "utilities-grid-2",
            path: "/modules/utilities/grid-2",
            active: true,
          },
          {
            name: "flex",
            path: "/modules/utilities/flex",
            pathName: "utilities-flex",
            active: true,
          },
          {
            name: "stack",
            path: "/modules/utilities/stack",
            pathName: "utilities-stack",
            active: true,
          },
          {
            name: "float",
            path: "/modules/utilities/float",
            pathName: "utilities-float",
            active: true,
          },
          {
            name: "interactions",
            path: "/modules/utilities/interactions",
            pathName: "utilities-interactions",
            active: true,
          },
          {
            name: "opacity",
            path: "/modules/utilities/opacity",
            pathName: "utilities-opacity",
            active: true,
          },
          {
            name: "overflow",
            path: "/modules/utilities/overflow",
            pathName: "utilities-overflow",
            active: true,
          },
          {
            name: "position",
            path: "/modules/utilities/position",
            pathName: "utilities-position",
            active: true,
          },
          {
            name: "shadows",
            path: "/modules/utilities/shadows",
            pathName: "utilities-shadows",
            active: true,
          },
          {
            name: "sizing",
            path: "/modules/utilities/sizing",
            pathName: "utilities-sizing",
            active: true,
          },
          {
            name: "spacing",
            path: "/modules/utilities/spacing",
            pathName: "utilities-spacing",
            active: true,
          },
          {
            name: "Typography",
            path: "/modules/utilities/typography",
            pathName: "utilities-typography",
            active: true,
          },
          {
            name: "hyper_typography",
            path: "/modules/utilities/typography-2",
            pathName: "utilities-typography-2",
            active: true,
          },
          {
            name: "hyper_drag_and_Drop",
            path: "/modules/utilities/drag-and-drop",
            pathName: "utilities-drag-and-drop",
            active: true,
          },
          {
            name: "hyper_range_Sliders",
            path: "/modules/utilities/range-sliders",
            pathName: "utilities-range-sliders",
            active: true,
          },
          {
            name: "vertical-align",
            path: "/modules/utilities/vertical-align",
            pathName: "utilities-vertical-align",
            active: true,
          },
          {
            name: "visibility",
            path: "/modules/utilities/visibility",
            pathName: "utilities-visibility",
            active: true,
          },
        ],
      },
      {
        name: "maps",
        icon: "map",
        active: true,
        pages: [
          {
            name: "hyper_google_maps",
            path: "/modules/maps/google-map",
            pathName: "google-maps",
            active: true,
          },
          {
            name: "hyper_vector_maps",
            path: "/modules/maps/vector-map",
            pathName: "vector-maps",
            active: true,
          },
        ],
      },
      {
        name: "multi-level",
        icon: "layers",
        active: true,
        pages: [
          {
            name: "level-two",
            active: true,
            pages: [
              {
                name: "item-1",
                path: "#!",
                active: true,
              },
              {
                name: "item-2",
                path: "#!",
                active: true,
              },
            ],
          },
          {
            name: "level-three",
            active: true,
            pages: [
              {
                name: "item-3",
                path: "#!",
                active: true,
              },
              {
                name: "item-4",
                path: "#!",
                active: true,
                pages: [
                  {
                    name: "item-5",
                    path: "#!",
                    active: true,
                  },
                  {
                    name: "item-6",
                    path: "#!",
                    active: true,
                  },
                ],
              },
            ],
          },
          {
            name: "level-four",
            active: true,
            pages: [
              {
                name: "item-6",
                path: "#!",
                active: true,
              },
              {
                name: "item-7",
                active: true,
                pages: [
                  {
                    name: "item-8",
                    path: "#!",
                    active: true,
                  },
                  {
                    name: "item-9",
                    active: true,
                    pages: [
                      {
                        name: "item-10",
                        path: "#!",
                        active: true,
                      },
                      {
                        name: "item-11",
                        path: "#!",
                        active: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "hyper_widgets",
        icon: "layout",
        path: "/modules/widgets",
        pathName: "modules-widgets",
        active: true,
      },
    ],
  },
  {
    label: "documentation",
    icon: UilDocumentLayoutRight,
    active: true,
    pages: [
      {
        name: "getting-started",
        icon: "life-buoy",
        path: "/documentation/getting-started",
        pathName: "getting-started",
        active: true,
      },
      {
        name: "customization",
        icon: "settings",
        dropdownInside: true,
        active: true,
        pages: [
          {
            name: "configuration",
            path: "/documentation/customization/configuration",
            pathName: "doc-configuration",
            active: true,
          },
          {
            name: "styling",
            path: "/documentation/customization/styling",
            pathName: "doc-styling",
            active: true,
          },
          {
            name: "dark-mode",
            path: "/documentation/customization/dark-mode",
            pathName: "doc-styling",
            active: true,
          },
          // {
          //   name: 'plugin',
          //   path: 'documentation/customization/plugin',
          //   pathName: 'doc-plugin'
          // }
        ],
      },
      {
        name: "design-file",
        icon: "figma",
        path: "/documentation/design-file",
        pathName: "doc-design-file",
        active: true,
      },
      {
        name: "changelog",
        icon: "git-merge",
        path: "/changelog",
        pathName: "changelog",
        active: true,
      },
      {
        name: "showcase",
        icon: "monitor",
        path: "/showcase",
        pathName: "showcase",
        active: true,
      },
    ],
  },
];
