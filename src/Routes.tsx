import MainLayout from "layouts/MainLayout";
import Starter from "pages/pages/Starter";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import ButtonExample from "pages/modules/components/ButtonExample";
import AccordionExample from "pages/modules/components/AccordionExample";
import AvatarExample from "pages/modules/components/AvatarExample";
import BadgeExample from "pages/modules/components/BadgeExample";
import BreadcrumbExample from "pages/modules/components/BreadcrumbExample";
import CardExample from "pages/modules/components/CardExample";
import BootstrapCarousel from "pages/modules/components/BootstrapCarousel";
import CollapseExample from "pages/modules/components/CollapseExample";
import DropdownExample from "pages/modules/components/DropdownExample";
import ListGroupExample from "pages/modules/components/ListGroupExample";
import ModalExample from "pages/modules/components/ModalExample";
import OffcanvasExample from "pages/modules/components/OffcanvasExample";
import ProgressbarExample from "pages/modules/components/ProgressbarExample";
import PlaceholderExample from "pages/modules/components/PlaceholderExample";
import PaginationExample from "pages/modules/components/PaginationExample";
import PopoversExample from "pages/modules/components/PopoversExample";
import SpinnerExample from "pages/modules/components/SpinnerExample";
import ToastsExample from "pages/modules/components/ToastsExample";
import TooltipExample from "pages/modules/components/TooltipExample";
import AlertsExample from "pages/modules/components/AlertsExample";
import FormControlExample from "pages/modules/forms/basic/FormControlExample";
import InputGroupExample from "pages/modules/forms/basic/InputGroupExample";
import SelectExample from "pages/modules/components/SelectExample";
import ChecksExample from "pages/modules/components/ChecksExample";
import RangeExample from "pages/modules/components/RangeExample";
import FloatingLabelExample from "pages/modules/components/FloatingLabelExample";
import FormLayoutExample from "pages/modules/components/FormLayoutExample";
import FormValidationExample from "pages/modules/components/FormValidationExample";
import BackgroundExample from "pages/modules/utilities/BackgroundExample";
import BorderExample from "pages/modules/utilities/BorderExample";
import ColorsExample from "pages/modules/utilities/ColorsExample";
import DisplayExample from "pages/modules/utilities/DisplayExample";
import FlexExample from "pages/modules/utilities/FlexExample";
import StackExample from "pages/modules/utilities/StackExample";
import FloatExample from "pages/modules/utilities/FloatExample";
import InteractionsExample from "pages/modules/utilities/InteractionsExample";
import OpacityExample from "pages/modules/utilities/OpacityExample";
import OverflowExample from "pages/modules/utilities/OverflowExample";
import PositionExample from "pages/modules/utilities/PositionExample";
import ShadowsExample from "pages/modules/utilities/ShadowsExample";
import SizingExample from "pages/modules/utilities/SizingExample";
import SpacingExample from "pages/modules/utilities/SpacingExample";
import VerticalAlignExample from "pages/modules/utilities/VerticalAlignExample";
import VisibilityExample from "pages/modules/utilities/VisibilityExample";
import BasicTableExample from "pages/modules/tables/BasicTableExample";
import GridExample from "pages/modules/utilities/GridExample";
import TypographyExample from "pages/modules/utilities/TypographyExample";
import Configuration from "pages/documentation/customization/Configuration";
import Styling from "pages/documentation/customization/Styling";
import DarkMode from "pages/documentation/customization/DarkMode";
import GettingStarted from "pages/documentation/GettingStarted";
import DesignFile from "pages/documentation/DesignFile";
import ChangeLog from "pages/documentation/ChangeLog";
import NavsExample from "pages/modules/components/NavsExample";
import TabsExample from "pages/modules/components/TabsExample";
import NavbarExample from "pages/modules/components/NavbarExample";
import ComingSoon from "pages/ComingSoon";
import Ecommerce from "pages/dashboard/ecommerce";
import EcommerceLayout from "layouts/EcommerceLayout";
import Homepage from "pages/apps/e-commerce/customer/Homepage";
import ProductDetails from "pages/apps/e-commerce/customer/ProductDetails";
import Cart from "pages/apps/e-commerce/customer/Cart";
import Checkout from "pages/apps/e-commerce/customer/checkout/Checkout";
import ProductsFilter from "pages/apps/e-commerce/customer/ProductsFilter";
import ShippingInfo from "pages/apps/e-commerce/customer/checkout/ShippingInfo";
import Profile from "pages/apps/e-commerce/customer/Profile";
import Wishlist from "pages/apps/e-commerce/customer/Wishlist";
import FavoriteStores from "pages/apps/e-commerce/customer/FavoriteStores";
import Invoice from "pages/apps/e-commerce/customer/Invoice";
import OrderTracking from "pages/apps/e-commerce/customer/OrderTracking";
import AddProduct from "pages/apps/e-commerce/admin/AddProduct";
import Products from "pages/apps/e-commerce/admin/Products";
import Customers from "pages/apps/e-commerce/admin/Customers";
import Orders from "pages/apps/e-commerce/admin/Orders";
import OrderDetails from "pages/apps/e-commerce/admin/OrderDetails";
import Refund from "pages/apps/e-commerce/admin/Refund";
import CustomerDetails from "pages/apps/e-commerce/admin/CustomerDetails";
import ProjectManagement from "pages/dashboard/ProjectManagement";
import CreateNew from "pages/apps/project-management/CreateNew";
import ProjectListView from "pages/apps/project-management/ProjectListView";
import ProjectDetails from "pages/apps/project-management/ProjectDetails";
import MainLayoutProvider from "providers/MainLayoutProvider";
import ProjectTodoList from "pages/apps/project-management/ProjectTodoList";
import ProjectBoardView from "pages/apps/project-management/ProjectBoardView";
import ProjectCardView from "pages/apps/project-management/ProjectCardView";
import Default from "pages/pages/landing/Default";
import CreateAnEvent from "pages/apps/events/CreateAnEvent";
import EventDetail from "pages/apps/events/EventDetail";
import Chat from "pages/apps/chat/Chat";
import ChatHomepage from "pages/apps/chat/ChatHomepage";
import ChatConversation from "pages/apps/chat/ChatConversation";
import FaqAccordion from "pages/faq/FaqAccordion";
import Inbox from "pages/apps/email/Inbox";
import EmailDetail from "pages/apps/email/EmailDetail";
import Compose from "pages/apps/email/Compose";
import Notification from "pages/notifications/Notifications";
import PricingColumn from "pages/pages/pricing/PricingColumn";
import SocialProfile from "pages/apps/social/SocialProfile";
import Settings from "pages/apps/social/Settings";
import Feed from "pages/apps/social/Feed";
import Error404 from "pages/error/Error404";
import Error403 from "pages/error/Error403";
import Error500 from "pages/error/Error500";
import AdvanceTableExample from "pages/modules/tables/AdvanceTableExample";
import SimpleSignIn from "pages/pages/authentication/simple/SignIn";
import SimpleSignUp from "pages/pages/authentication/simple/SignUp";
import SimpleSignOut from "pages/pages/authentication/simple/SignOut";
import SimpleResetPassword from "pages/pages/authentication/simple/ResetPassword";
import SimpleLockScreen from "pages/pages/authentication/simple/LockScreen";
import SimpleTwoFA from "pages/pages/authentication/simple/TwoFA";
import SimpleForgotPassword from "pages/pages/authentication/simple/ForgotPassword";
import SimpleAuthLayout from "layouts/SimpleAuthLayout";
import Showcase from "pages/Showcase";
import VerticalSidenav from "pages/pages/layouts/VerticalSidenav";
import DarkModeDemo from "pages/pages/layouts/DarkModeDemo";
import SidenavCollapse from "pages/pages/layouts/SidenavCollapse";
import Darknav from "pages/pages/layouts/Darknav";
import TopnavSlim from "pages/pages/layouts/TopnavSlim";
import NavbarTopSlim from "pages/pages/layouts/NavbarTopSlim";
import NavbarTop from "pages/pages/layouts/NavbarTop";
import NavbarHorizontalSlim from "pages/pages/layouts/NavbarHorizontalSlim";
import ComboNav from "pages/pages/layouts/ComboNav";
import ComboNavSlim from "pages/pages/layouts/ComboNavSlim";
import LightboxExample from "pages/modules/components/LightboxExample";
import EmojiButtonExample from "pages/modules/forms/advance/EmojiButtonExample";
import RatingExample from "pages/modules/forms/advance/RatingExample";
import CountupExample from "pages/modules/components/CountupExample";
import EditorExample from "pages/modules/forms/advance/EditorExample";
import SwiperCarousel from "pages/modules/components/SwiperCarousel";
import FileUploaderExample from "pages/modules/forms/advance/FileUploaderExample";
import AdvanceSelectExample from "pages/modules/forms/advance/AdvanceSelectExample";
import FontAwesome from "pages/modules/components/FontAwesome";
import FeatherIconExample from "pages/modules/components/FeatherIconsExample";
import Unicons from "pages/modules/components/Unicons";
import DatePickerExample from "pages/modules/forms/advance/DatePickerExample";
import ECharts from "pages/modules/charts/ECharts";
import GanttChart from "pages/modules/charts/GanttChart";
import Members from "pages/Members";
import DualNav from "pages/pages/layouts/DualNav";
import App from "App";
import Hyper_Analytics_Dashboard from "pages/modules/components/hyper/dashboard/Analytics";
import Hyper_Ecommerce_Dashboard from "pages/modules/components/hyper/dashboard/Ecommerce";
import Hyper_Project_Dashboard from "pages/modules/components/hyper/dashboard/Project";
import Hyper_E_Wallet_Dashboard from "pages/modules/components/hyper/dashboard/E-Wallet";
import Hyper_Ecommerce_Cart from "pages/apps/e-commerce/hyper_Cart";
import Hyper_Ecommerce_OrderDetails from "pages/apps/e-commerce/hyper_OrderDetails";
import Hyper_Ecommerce_ProductDetails from "pages/apps/e-commerce/hyper_ProductDetails";
import Hyper_Ecommerce_Checkout from "pages/apps/e-commerce/hyper_Checkout";
import Hyper_Calendar from "pages/apps/hyper_Calendar";
import Hyper_Chat from "pages/apps/hyper_chat";
import Hyper_Crm_Dashboard from "pages/apps/hyper_crm/Dashboard";
import Hyper_Crm_Project from "pages/apps/hyper_crm/Projects";
import Hyper_Crm_Order_List from "pages/apps/hyper_crm/OrderList";
import Hyper_Crm_Clients from "pages/apps/hyper_crm/Clients";
import Hyper_Crm_Management from "pages/apps/hyper_crm/Management";
import Hyper_Email_Inbox from "pages/apps/hyper_email/Inbox";
import Hyper_Email_Read_Email from "pages/apps/hyper_email/Detail";
import Hyper_Projects_Create from "pages/apps/hyper_projects/ProjectForm";
import Hyper_Projects_Project_List from "pages/apps/hyper_projects/List";
import Hyper_Projects_Project_Details from "pages/apps/hyper_projects/Detail";
import Hyper_Projects_Gantt from "pages/apps/hyper_projects/Gantt";
import Hyper_Social_Feed from "pages/apps/hyper_socialFeed";
import Hyper_Tasks_List from "pages/apps/hyper_tasks/List";
import Hyper_Tasks_Details from "pages/apps/hyper_tasks/Details";
import Hyper_Tasks_Kanban_Board from "pages/apps/hyper_tasks/Board";
import Hyper_File_Manager from "pages/apps/hyper_file_manager";
import Hyper_Profile_Profile from "pages/profile/profile";
import Hyper_Profile_Profile2 from "pages/profile/profile2";
import Hyper_Pages_Invoice from "pages/pages/hyper/Invoice";
import Hyper_Pages_Faq from "pages/pages/hyper/FAQ";
import Hyper_Pages_Pricing_Column from "pages/pages/hyper/Pricing";
import Hyper_Pages_Maintenance from "pages/pages/hyper/Maintenance";
import Hyper_Pages_Error404 from "pages/pages/hyper/error/PageNotFound";
import Hyper_Pages_Error404_Alt from "pages/pages/hyper/error/PageNotFoundAlt";
import Hyper_Pages_Error500 from "pages/pages/hyper/error/ServerError";
import Hyper_Pages_With_Preload from "pages/pages/hyper/PreLoader";
import Hyper_Pages_Timeline from "pages/pages/hyper/Timeline";
import Hyper_Pages_Landing from "pages/pages/hyper/landing";
import Hyper_UIkit_Accordion from "pages/modules/components/hyper/uikit/Accordions";
import Hyper_UIkit_Alerts from "pages/modules/components/hyper/uikit/Alerts";
import Hyper_UIkit_Avatars from "pages/modules/components/hyper/uikit/Avatars";
import Hyper_UIkit_Badges from "pages/modules/components/hyper/uikit/Badges";
import Hyper_UIkit_BreadCrumb from "pages/modules/components/hyper/uikit/Breadcrumb";
import Hyper_UIkit_Buttons from "pages/modules/components/hyper/uikit/Buttons";
import Hyper_UIkit_Cards from "pages/modules/components/hyper/uikit/Cards";
import Hyper_UIkit_Carousel from "pages/modules/components/hyper/uikit/Carousel";
import Hyper_UIkit_DropDowns from "pages/modules/components/hyper/uikit/Dropdowns";
import Hyper_UIkit_Embed_Video from "pages/modules/components/hyper/uikit/EmbedVideo";
import Hyper_UIkit_Grid from "pages/modules/components/hyper/uikit/Grid";
import Hyper_UIkit_List_Group from "pages/modules/components/hyper/uikit/ListGroups";
import Hyper_UIkit_Modal from "pages/modules/components/hyper/uikit/Modals";
import Hyper_UIkit_Notification from "pages/modules/components/hyper/uikit/Notifications";
import Hyper_UIkit_OffCanvas from "pages/modules/components/hyper/uikit/Offcanvas";
import Hyper_UIkit_Placeholder from "pages/modules/components/hyper/uikit/Placeholders";
import Hyper_UIkit_Pagination from "pages/modules/components/hyper/uikit/Paginations";
import Hyper_UIkit_PopOvers from "pages/modules/components/hyper/uikit/Popovers";
import Hyper_UIkit_Spinners from "pages/modules/components/hyper/uikit/Spinners";
import Hyper_UIkit_Ribbons from "pages/modules/components/hyper/uikit/Ribbons";
import Hyper_UIkit_Tabs from "pages/modules/components/hyper/uikit/Tabs";
import Hyper_UIkit_ToolTips from "pages/modules/components/hyper/uikit/Tooltips";
import Hyper_UIkit_Typography from "pages/modules/components/hyper/uikit/Typography";
import Hyper_UIkit_Drag_Drop from "pages/modules/components/hyper/uikit/DragDrop";
import Hyper_UIkit_Range_Sliders from "pages/modules/components/hyper/uikit/RangeSliders";
import Hyper_UIkit_Widget from "pages/modules/components/hyper/uikit/Widgets";
import Hyper_UIkit_Unicons from "pages/modules/hyper_icons/Unicons";
import Hyper_UIkit_Dripicons from "pages/modules/hyper_icons/Dripicons";
import Hyper_UIkit_Material_Design from "pages/modules/hyper_icons/MDIIcons";
import Hyper_Form_Basic from "components/forms/hyper/Basic";
import Hyper_Form_Advance from "components/forms/hyper/Advanced";
import Hyper_Form_Validation from "components/forms/hyper/Validation";
import Hyper_Form_Wizard from "components/forms/hyper/Wizard";
import Hyper_Form_File_U_load from "components/forms/hyper/FileUpload";
import Hyper_Form_Editors from "components/forms/hyper/Editors";
import Hyper_Form_apex_chart from "components/forms/hyper/charts/Apex";
import Hyper_Form_chartjs from "components/forms/hyper/charts/ChartJs";
import Hyper_UIkit_GoogleMaps from "components/forms/hyper/maps/GoogleMaps";
import Hyper_UIkit_VectorMaps from "components/forms/hyper/maps/VectorMaps";
import Hyper_Ecommerce_Sellers from "pages/apps/e-commerce/admin/hyper_Sellers";
import Hyper_Ecommerce_Customers from "pages/apps/e-commerce/admin/hyper_customers";
import Hyper_Ecommerce_Orders from "pages/apps/e-commerce/admin/hyper_orders";
import Hyper_Ecommerce_Products from "pages/apps/e-commerce/admin/hyper_products";

import Register from "pages/authentication/Register";
import UserList from "pages/apps/user-managment/user/UserList/UserList";
import UserView from "pages/apps/user-managment/user/UserView/UserView";
import RoleList from "pages/apps/user-managment/role/RoleList/RoleList";
import RoleView from "pages/apps/user-managment/role/RoleView/RoleView";
import Permission from "pages/apps/user-managment/Permission/Permission";
const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/",
        element: (
          <MainLayoutProvider>
            <MainLayout />
          </MainLayoutProvider>
        ),
        children: [
          {
            index: true,
            element: <Ecommerce />,
          },
          {
            path: "/dashboard/project-management",
            element: <ProjectManagement />,
          },
          {
            path: "/pages/starter",
            element: <Starter />,
          },
          {
            path: "/pages/profile",
            children: [
              {
                path: "profile",
                element: <Hyper_Profile_Profile />,
              },
              {
                path: "profile-2",
                element: <Hyper_Profile_Profile2 />,
              },
            ],
          },
          {
            path: "/pages/notifications",
            element: <Notification />,
          },
          {
            path: "/pages/members",
            element: <Members />,
          },
          {
            path: "/pages/with-preload",
            element: <Hyper_Pages_With_Preload />,
          },
          {
            path: "/pages/timeline",
            element: <Hyper_Pages_Timeline />,
          },
          {
            path: "/pages/faq/",
            children: [
              {
                path: "faq-accordion",
                element: <FaqAccordion />,
              },
              {
                path: "faq-accordion-2",
                element: <Hyper_Pages_Faq />,
              },
            ],
          },

          {
            path: "/apps/e-commerce/admin/",
            children: [
              {
                path: "add-product",
                element: <AddProduct />,
              },
              {
                path: "products",
                element: <Products />,
              },
              {
                path: "products-2",
                element: <Hyper_Ecommerce_Products />,
              },
              {
                path: "customers",
                element: <Customers />,
              },
              {
                path: "customers-2",
                element: <Hyper_Ecommerce_Customers />,
              },
              {
                path: "sellers",
                element: <Hyper_Ecommerce_Sellers />,
              },
              {
                path: "orders",
                element: <Orders />,
              },
              {
                path: "orders-2",
                element: <Hyper_Ecommerce_Orders />,
              },
              {
                path: "order-details",
                element: <OrderDetails />,
              },
              {
                path: "refund",
                element: <Refund />,
              },
              {
                path: "customer-details",
                element: <CustomerDetails />,
              },
              {
                path: "order-detials-2",
                element: <Hyper_Ecommerce_OrderDetails />,
              },
            ],
          },
          {
            path: "/apps/project-management/",
            children: [
              {
                path: "create-new",
                element: <CreateNew />,
              },
              {
                path: "create-new-2",
                element: <Hyper_Projects_Create />,
              },
              {
                path: "project-list-view",
                element: <ProjectListView />,
              },
              {
                path: "project-list-view-2",
                element: <Hyper_Projects_Project_List />,
              },
              {
                path: "project-card-view",
                element: <ProjectCardView />,
              },
              {
                path: "project-board-view",
                element: <ProjectBoardView />,
              },
              {
                path: "todo-list",
                element: <ProjectTodoList />,
              },
              {
                path: "project-details",
                element: <ProjectDetails />,
              },
              {
                path: "project-details-2",
                element: <Hyper_Projects_Project_Details />,
              },
              {
                path: "gantt",
                element: <Hyper_Projects_Gantt />,
              },
            ],
          },
          {
            path: '/apps/user-management/',
            children: [
              {
                path: 'user',
                children: [
                  {
                    path: 'list',
                    element: <UserList />
                  },
                  {
                    path: 'view',
                    element: <UserView />
                  }
                ]
              },
              {
                path: 'role',
                children: [
                  {
                    path: 'list',
                    element: <RoleList />
                  },
                  {
                    path: 'view',
                    element: <RoleView />
                  }
                ]
              },
              {
                path: 'permission',
                element: <Permission />
              }
            ]
          },
          {
            path: "/apps/events/",
            children: [
              {
                path: "create-an-event",
                element: <CreateAnEvent />,
              },
              {
                path: "event-detail",
                element: <EventDetail />,
              },
            ],
          },
          {
            path: "/apps/",
            children: [
              {
                path: "chat",
                element: <Chat />,
                children: [
                  {
                    index: true,
                    element: <ChatHomepage />,
                  },
                  {
                    path: ":userId/conversation",
                    element: <ChatConversation />,
                  },
                ],
              },
              {
                path: "chat-2",
                element: <Hyper_Chat />,
              },
            ],
          },
          {
            path: "/apps/social/",
            children: [
              {
                path: "profile",
                element: <SocialProfile />,
              },
              {
                path: "settings",
                element: <Settings />,
              },
              {
                path: "feed",
                element: <Feed />,
              },
              {
                path: "feed-2",
                element: <Hyper_Social_Feed />,
              },
            ],
          },
          {
            path: "/apps/tasks/",
            children: [
              {
                path: "list",
                element: <Hyper_Tasks_List />,
              },
              {
                path: "details",
                element: <Hyper_Tasks_Details />,
              },
              {
                path: "kanban-board",
                element: <Hyper_Tasks_Kanban_Board />,
              },
              {
                path: "feed-2",
                element: <Hyper_Social_Feed />,
              },
            ],
          },
          {
            path: "/apps/email/",
            children: [
              {
                path: "inbox",
                element: <Inbox />,
              },
              {
                path: "inbox-2",
                element: <Hyper_Email_Inbox />,
              },
              {
                path: "email-detail",
                element: <EmailDetail />,
              },
              {
                path: "compose",
                element: <Compose />,
              },
              {
                path: "read-email",
                element: <Hyper_Email_Read_Email />,
              },
            ],
          },
          {
            path: "/apps/",
            children: [
              {
                path: "calendar",
                element: <Hyper_Calendar />,
              },
            ],
          },
          {
            path: "/apps/",
            children: [
              {
                path: "file-manager",
                element: <Hyper_File_Manager />,
              },
            ],
          },
          {
            path: "/pages/pricing/",
            children: [
              {
                path: "pricing-column",
                element: <PricingColumn />,
              },
              {
                path: "pricing-column-2",
                element: <Hyper_Pages_Pricing_Column />,
              },
            ],
          },
          {
            path: "/pages/invoice",
            element: <Hyper_Pages_Invoice />,
          },
          {
            path: "/pages/maintenance",
            element: <Hyper_Pages_Maintenance />,
          },
          {
            path: "/pages/demo/",
            children: [
              {
                path: "vertical-sidenav",
                element: <VerticalSidenav />,
              },
              {
                path: "dark-mode",
                element: <DarkModeDemo />,
              },
              {
                path: "sidenav-collapse",
                element: <SidenavCollapse />,
              },
              {
                path: "darknav",
                element: <Darknav />,
              },
              {
                path: "topnav-slim",
                element: <TopnavSlim />,
              },
              {
                path: "navbar-top-slim",
                element: <NavbarTopSlim />,
              },
              {
                path: "navbar-top",
                element: <NavbarTop />,
              },
              {
                path: "horizontal-slim",
                element: <NavbarHorizontalSlim />,
              },
              {
                path: "combo-nav",
                element: <ComboNav />,
              },
              {
                path: "combo-nav-slim",
                element: <ComboNavSlim />,
              },
              {
                path: "dual-nav",
                element: <DualNav />,
              },
            ],
          },
          {
            path: "/modules/",
            children: [
              {
                path: "tables",
                children: [
                  {
                    path: "basic-tables",
                    element: <BasicTableExample />,
                  },
                  {
                    path: "basic-tables-2",
                    element: <BasicTableExample />,
                  },
                  {
                    path: "advance-tables",
                    element: <AdvanceTableExample />,
                  },
                ],
              },
              {
                path: "charts",
                children: [
                  {
                    path: "e-charts",
                    element: <ECharts />,
                  },
                  {
                    path: "gantt-chart",
                    element: <GanttChart />,
                  },
                  {
                    path: "apex-chart",
                    element: <Hyper_Form_apex_chart />,
                  },
                  {
                    path: "chartjs",
                    element: <Hyper_Form_chartjs />,
                  },
                ],
              },
              {
                path: "icons",
                children: [
                  {
                    path: "font-awesome",
                    element: <FontAwesome />,
                  },
                  {
                    path: "feather",
                    element: <FeatherIconExample />,
                  },
                  {
                    path: "unicons",
                    element: <Unicons />,
                  },
                  {
                    path: "unicons-2",
                    element: <Hyper_UIkit_Unicons />,
                  },
                  {
                    path: "dripicons",
                    element: <Hyper_UIkit_Dripicons />,
                  },
                  {
                    path: "material-design",
                    element: <Hyper_UIkit_Material_Design />,
                  },
                ],
              },
              {
                path: "components",
                children: [
                  {
                    path: "accordion",
                    element: <AccordionExample />,
                  },
                  {
                    path: "accordion-2",
                    element: <Hyper_UIkit_Accordion />,
                  },
                  {
                    path: "avatar",
                    element: <AvatarExample />,
                  },
                  {
                    path: "avatar-2",
                    element: <Hyper_UIkit_Avatars />,
                  },
                  {
                    path: "alerts",
                    element: <AlertsExample />,
                  },
                  {
                    path: "alerts-2",
                    element: <Hyper_UIkit_Alerts />,
                  },
                  {
                    path: "button",
                    element: <ButtonExample />,
                  },
                  {
                    path: "button-2",
                    element: <Hyper_UIkit_Buttons />,
                  },
                  {
                    path: "badge",
                    element: <BadgeExample />,
                  },
                  {
                    path: "badge-2",
                    element: <Hyper_UIkit_Badges />,
                  },
                  {
                    path: "breadcrumb",
                    element: <BreadcrumbExample />,
                  },
                  {
                    path: "breadcrumb-2",
                    element: <Hyper_UIkit_BreadCrumb />,
                  },
                  {
                    path: "card",
                    element: <CardExample />,
                  },
                  {
                    path: "card-2",
                    element: <Hyper_UIkit_Cards />,
                  },
                  {
                    path: "carousel/bootstrap",
                    element: <BootstrapCarousel />,
                  },
                  {
                    path: "carousel/swiper",
                    element: <SwiperCarousel />,
                  },
                  {
                    path: "carousel/carousel",
                    element: <Hyper_UIkit_Carousel />,
                  },
                  {
                    path: "collapse",
                    element: <CollapseExample />,
                  },
                  {
                    path: "dropdown",
                    element: <DropdownExample />,
                  },
                  {
                    path: "dropdown-2",
                    element: <Hyper_UIkit_DropDowns />,
                  },
                  {
                    path: "embed-video",
                    element: <Hyper_UIkit_Embed_Video />,
                  },
                  {
                    path: "list-group",
                    element: <ListGroupExample />,
                  },
                  {
                    path: "list-group-2",
                    element: <Hyper_UIkit_List_Group />,
                  },
                  {
                    path: "countup",
                    element: <CountupExample />,
                  },
                  {
                    path: "modal",
                    element: <ModalExample />,
                  },
                  {
                    path: "modal-2",
                    element: <Hyper_UIkit_Modal />,
                  },
                  {
                    path: "notification",
                    element: <Hyper_UIkit_Notification />,
                  },
                  {
                    path: "offcanvas",
                    element: <OffcanvasExample />,
                  },
                  {
                    path: "offcanvas-2",
                    element: <Hyper_UIkit_OffCanvas />,
                  },
                  {
                    path: "progress-bar",
                    element: <ProgressbarExample />,
                  },
                  {
                    path: "placeholder",
                    element: <PlaceholderExample />,
                  },
                  {
                    path: "placeholder-2",
                    element: <Hyper_UIkit_Placeholder />,
                  },
                  {
                    path: "pagination",
                    element: <PaginationExample />,
                  },
                  {
                    path: "pagination-2",
                    element: <Hyper_UIkit_Pagination />,
                  },
                  {
                    path: "popovers",
                    element: <PopoversExample />,
                  },
                  {
                    path: "popovers-2",
                    element: <Hyper_UIkit_PopOvers />,
                  },
                  {
                    path: "spinners",
                    element: <SpinnerExample />,
                  },
                  {
                    path: "spinners-2",
                    element: <Hyper_UIkit_Spinners />,
                  },
                  {
                    path: "ribbon",
                    element: <Hyper_UIkit_Ribbons />,
                  },
                  {
                    path: "toast",
                    element: <ToastsExample />,
                  },
                  {
                    path: "tooltips",
                    element: <TooltipExample />,
                  },
                  {
                    path: "tooltips-2",
                    element: <Hyper_UIkit_ToolTips />,
                  },
                  {
                    path: "navs-and-tabs/navs",
                    element: <NavsExample />,
                  },
                  {
                    path: "navs-and-tabs/tabs",
                    element: <TabsExample />,
                  },
                  {
                    path: "navs-and-tabs/tabs-2",
                    element: <Hyper_UIkit_Tabs />,
                  },
                  {
                    path: "navs-and-tabs/navbar",
                    element: <NavbarExample />,
                  },
                  {
                    path: "pictures/lightbox",
                    element: <LightboxExample />,
                  },
                  {
                    path: "hyper/dashboard/Analytics/index",
                    element: <Hyper_Analytics_Dashboard />,
                  },
                  {
                    path: "hyper/dashboard/Ecommerce/index",
                    element: <Hyper_Ecommerce_Dashboard />,
                  },
                  {
                    path: "hyper/dashboard/Project/index",
                    element: <Hyper_Project_Dashboard />,
                  },
                  {
                    path: "hyper/dashboard/E-Wallet/index",
                    element: <Hyper_E_Wallet_Dashboard />,
                  },
                ],
              },
              {
                path: "forms",
                children: [
                  {
                    path: "form-control",
                    element: <FormControlExample />,
                  },
                  {
                    path: "form-control-2",
                    element: <Hyper_Form_Basic />,
                  },
                  {
                    path: "input-group",
                    element: <InputGroupExample />,
                  },
                  {
                    path: "select",
                    element: <SelectExample />,
                  },
                  {
                    path: "checks",
                    element: <ChecksExample />,
                  },
                  {
                    path: "range",
                    element: <RangeExample />,
                  },
                  {
                    path: "floating-labels",
                    element: <FloatingLabelExample />,
                  },
                  {
                    path: "layout",
                    element: <FormLayoutExample />,
                  },
                  {
                    path: "editor",
                    element: <EditorExample />,
                  },
                  {
                    path: "form-advance",
                    element: <Hyper_Form_Advance />,
                  },
                  {
                    path: "advance-select",
                    element: <AdvanceSelectExample />,
                  },
                  {
                    path: "date-picker",
                    element: <DatePickerExample />,
                  },
                  {
                    path: "emoji-button",
                    element: <EmojiButtonExample />,
                  },
                  {
                    path: "file-uploader",
                    element: <FileUploaderExample />,
                  },
                  {
                    path: "rating",
                    element: <RatingExample />,
                  },
                  {
                    path: "validation",
                    element: <FormValidationExample />,
                  },
                  {
                    path: "validation-2",
                    element: <Hyper_Form_Validation />,
                  },
                  {
                    path: "wizard",
                    element: <Hyper_Form_Wizard />,
                  },
                  {
                    path: "file-upload",
                    element: <Hyper_Form_File_U_load />,
                  },
                  {
                    path: "editors",
                    element: <Hyper_Form_Editors />,
                  },
                ],
              },
              {
                path: "utilities",
                children: [
                  {
                    path: "background",
                    element: <BackgroundExample />,
                  },
                  {
                    path: "borders",
                    element: <BorderExample />,
                  },
                  {
                    path: "colors",
                    element: <ColorsExample />,
                  },
                  {
                    path: "display",
                    element: <DisplayExample />,
                  },
                  {
                    path: "grid",
                    element: <GridExample />,
                  },
                  {
                    path: "grid-2",
                    element: <Hyper_UIkit_Grid />,
                  },
                  {
                    path: "flex",
                    element: <FlexExample />,
                  },
                  {
                    path: "stack",
                    element: <StackExample />,
                  },
                  {
                    path: "float",
                    element: <FloatExample />,
                  },
                  {
                    path: "interactions",
                    element: <InteractionsExample />,
                  },
                  {
                    path: "opacity",
                    element: <OpacityExample />,
                  },
                  {
                    path: "overflow",
                    element: <OverflowExample />,
                  },
                  {
                    path: "position",
                    element: <PositionExample />,
                  },
                  {
                    path: "shadows",
                    element: <ShadowsExample />,
                  },
                  {
                    path: "sizing",
                    element: <SizingExample />,
                  },
                  {
                    path: "spacing",
                    element: <SpacingExample />,
                  },
                  {
                    path: "typography",
                    element: <TypographyExample />,
                  },
                  {
                    path: "typography-2",
                    element: <Hyper_UIkit_Typography />,
                  },
                  {
                    path: "drag-and-drop",
                    element: <Hyper_UIkit_Drag_Drop />,
                  },
                  {
                    path: "range-sliders",
                    element: <Hyper_UIkit_Range_Sliders />,
                  },
                  {
                    path: "vertical-align",
                    element: <VerticalAlignExample />,
                  },
                  {
                    path: "visibility",
                    element: <VisibilityExample />,
                  },
                ],
              },
              {
                path: "maps/google-map",
                element: <Hyper_UIkit_GoogleMaps />,
              },
              {
                path: "maps/vector-map",
                element: <Hyper_UIkit_VectorMaps />,
              },
              {
                path: "widgets",
                element: <Hyper_UIkit_Widget />,
              },
            ],
          },
          {
            path: "/documentation",
            children: [
              {
                path: "getting-started",
                element: <GettingStarted />,
              },
              {
                path: "design-file",
                element: <DesignFile />,
              },
              {
                path: "customization",
                children: [
                  {
                    path: "configuration",
                    element: <Configuration />,
                  },
                  {
                    path: "styling",
                    element: <Styling />,
                  },
                  {
                    path: "dark-mode",
                    element: <DarkMode />,
                  },
                ],
              },
            ],
          },
          {
            path: "changelog",
            element: <ChangeLog />,
          },
          {
            path: "*",
            element: <ComingSoon />,
          },
          {
            path: "/apps/crm",
            children: [
              {
                path: "dashboard",
                element: <Hyper_Crm_Dashboard />,
              },
              {
                path: "project",
                element: <Hyper_Crm_Project />,
              },
              {
                path: "order-list",
                element: <Hyper_Crm_Order_List />,
              },
              {
                path: "clients",
                element: <Hyper_Crm_Clients />,
              },
              {
                path: "management",
                element: <Hyper_Crm_Management />,
              },
            ],
          },
        ],
      },
      {
        element: <EcommerceLayout />,
        path: "/apps/e-commerce/customer/",
        children: [
          {
            path: "homepage",
            element: <Homepage />,
          },
          {
            path: "product-details",
            element: <ProductDetails />,
          },
          {
            path: "product-details-2",
            element: <Hyper_Ecommerce_ProductDetails />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "checkout-2",
            element: <Hyper_Ecommerce_Checkout />,
          },
          {
            path: "shipping-info",
            element: <ShippingInfo />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "products-filter",
            element: <ProductsFilter />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "favorite-stores",
            element: <FavoriteStores />,
          },
          {
            path: "order-tracking",
            element: <OrderTracking />,
          },
          {
            path: "invoice",
            element: <Invoice />,
          },
          {
            path: "shopping-cart",
            element: <Hyper_Ecommerce_Cart />,
          },
        ],
      },
      {
        path: "/landing/",
        children: [
          {
            path: "default",
            element: <Default />,
          },
          {
            path: "alternate",
            element: <Hyper_Pages_Landing />,
          },
        ],
      },
      {
        path: "/pages/errors/",
        children: [
          {
            path: "404",
            element: <Error404 />,
          },
          {
            path: "404-2",
            element: <Hyper_Pages_Error404 />,
          },
          {
            path: "404-3",
            element: <Hyper_Pages_Error404_Alt />,
          },
          {
            path: "403",
            element: <Error403 />,
          },
          {
            path: "500",
            element: <Error500 />,
          },
          {
            path: "500-2",
            element: <Hyper_Pages_Error500 />,
          },
        ],
      },
      {
        element: <SimpleAuthLayout />,
        path: "/pages/authentication/simple/",
        children: [
          {
            path: "sign-in",
            element: <SimpleSignIn />,
          },
          {
            path: "sign-up",
            element: <SimpleSignUp />,
          },
          {
            path: "sign-out",
            element: <SimpleSignOut />,
          },
          {
            path: "forgot-password",
            element: <SimpleForgotPassword />,
          },
          {
            path: "reset-password",
            element: <SimpleResetPassword />,
          },
          {
            path: "lock-screen",
            element: <SimpleLockScreen />,
          },
          {
            path: "2FA",
            element: <SimpleTwoFA />,
          },
        ],
      },
      {
        path: "showcase",
        element: <Showcase />,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
