import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CustomTheme from "../views/CustomTheming.vue";
import AlertView from "../views/AlertView.vue";
import BadgeView from "../views/BadgeView.vue";
// import ProgressView from '../views/ProgressBarView.vue'
import ProgressView from "../views/ImportProgressView.vue";
// import TableView from "../views/NewTableView.vue";
import LabelView from "../views/LabelView.vue";
import DividerComponent from "../components/DividerComponent.vue";
import tree from "../views/TreeView.vue";
import AccordionView from "../views/AccordionView.vue";
import TimelineView from "../views/TimelineView.vue";
import SearchView from "../views/SearchView.vue";
import CardsView from "../views/CardsView.vue";
import ErrorpageView from "../views/ErrorpageView.vue";
import LayoutView from "../views/LayoutView.vue";
import Breadcrumb from "../views/BreadcrumbView.vue";
import Pagination from "../views/PaginationView.vue";
import DottedPagination from "../views/DottedPaginationView.vue";
import SideBarView from "../views/SideBarView.vue";
import InputView from "../views/InputView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import FileUploadView from "../views/FileUploadView.vue";
import ModalwindowView from "../views/ModalwindowView.vue";
import TooltipView from "../views/TooltipView.vue";
import SelectView from "../views/SelectView.vue";
import loaderView from "../views/LoaderView.vue";
import ColorView from "../views/ColorView.vue";
import Calendar from "../views/CalendarView.vue";
import Tabs from "../views/TabsView.vue";
// import NewTable from "../views/NewTableView.vue";
import DashboardViewNew from "../views/DashboardViewNew.vue";
import IconographyView from "../views/IconographyView.vue";
import TypographyView from "../views/TypographyView.vue";
import Slider from "../views/SliderView.vue";
import ButtonView from "../views/ButtonView.vue";
import Stepper from "../views/StepperView.vue";
import CarouselView from "../views/CarouselView";
import DraggableView from "../views/DraggableView";
import InputItemsView from "../views/InputItemsView";
import QuickStartView from "../views/QuickStartView";
import InstallationView from "../views/InstallationView";
import tag from "../views/TagView.vue";
import RatingView from "../views/RatingView.vue";
import TreeSelectView from "../views/TreeSelectView.vue";
import TexteditorView from "../views/TexteditorView";
import DataviewView from "../views/DataviewView.vue";
import ImagegalleryView from "../views/ImagegalleryView.vue";
import SpeeddialView from "../views/SpeeddialView.vue";
import SwitchView from "../views/SwitchView.vue";
import ColorpaletteView from "../views/ColorpaletteView.vue";
import DrawerView from "../views/DrawerView.vue";
import CodeEditorView from "../views/CodeEditorView.vue";
import ContextMenuView from "../views/ContextMenuView.vue";
import Table from "../views/TableView.vue";
import Customdropdown from "../views/CustomdropdownView.vue";
import Accessibility from "../views/Accessibility.vue"

const routes = [
  {
    path: "/customdropdown",
    name: "customdropdown",
    component: Customdropdown,
  },
  {
    path: "/table",
    name: "table",
    component: Table,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/test2",
    name: "test2",
    component: TestView2,
  },
  {
     path:"/accessibility",
     name:"accessibility",
     component:Accessibility,
  },
  {
    path: "/code-editor",
    name: "code-editor",
    component: CodeEditorView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/installation",
    name: "installation",
    component: InstallationView,
  },
  {
    path: "/custom_theming",
    name: "custom_theming",
    component: CustomTheme,
  },
  {
    path: "/drawer",
    name: "drawer",
    component: DrawerView,
  },
  {
    path: "/quickstart",
    name: "quickstart",
    component: QuickStartView,
  },
  //design guide
  {
    path: "/colors",
    name: "color",
    component: ColorView,
  },
  {
    path: "/typography",
    name: "typography",
    component: TypographyView,
  },
  {
    path: "/icons",
    name: "icon",
    component: IconographyView,
  },
  {
    path: "/layout",
    name: "layout",
    component: LayoutView,
  },
  {
    path: "/tree_select",
    name: "treeSelect",
    component: TreeSelectView,
  },
  {
    path: "/label",
    name: "label",
    component: LabelView,
  },
  {
    path: "/carousel",
    name: "carousel",
    component: CarouselView,
  },
  {
    path: "/intro",
    name: "intro",
    component: HomeView,
  },
  {
    path: "/structure",
    name: "structure",
    component: HomeView,
  },
  {
    path: "/customize",
    name: "customize",
    component: HomeView,
  },
  {
    path: "/layout",
    name: "layout",
    component: LayoutView,
  },
  {
    path: "/sidebar",
    name: "SideBar",
    component: SideBarView,
  },
  {
    path: "/input",
    name: "Input",
    component: InputView,
  },
  {
    path: "/select",
    name: "select",
    component: SelectView,
  },
  {
    path: "/texteditor",
    name: "Texteditor",
    component: TexteditorView,
  },
  {
    path: "/stepper",
    name: "stepper",
    component: Stepper,
  },
  {
    path: "/dotted_pagination",
    name: "dottedPagination",
    component: DottedPagination,
  },
  {
    path: "/tag",
    name: "tag",
    component: tag,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/errorpage",
    name: "errorpage",
    component: ErrorpageView,
  },
  {
    path: "/slider",
    name: "slider",
    component: Slider,
  },
  {
    path: "/badge",
    name: "badge",
    component: BadgeView,
  },
  {
    path: "/buttons",
    name: "button",
    component: ButtonView,
    meta: {
      scrollTop: 0,
    },
  },
  {
    path: "/tree",
    name: "tree",
    component: tree,
  },
  {
    path: "/cards",
    name: "cards",
    component: CardsView,
  },
  {
    path: "/colorpalette",
    name: "Colorpalette",
    component: ColorpaletteView,
  },
  {
    path: "/accordion",
    name: "accordion",
    component: AccordionView,
  },
  {
    path: "/pagination",
    name: "pagination",
    component: AccordionView,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: TimelineView,
  },
  {
    path: "/context_menu",
    name: "context-menu",
    component: ContextMenuView,
  },
  {
    path: "/breadcrumb",
    name: "breadcrumb",
    component: Breadcrumb,
  },
  {
    path: "/divider",
    name: "divider",
    component: DividerComponent,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup_page",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login_page",
    name: "login",
    component: LoginView,
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalwindowView,
  },
  {
    path: "/rating",
    name: "rating",
    component: RatingView,
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: TooltipView,
  },
  {
    path: "/loaders",
    name: "loader",
    component: loaderView,
  },

  {
    path: "/alert",
    name: "alert",
    component: AlertView,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
  // {
  //   path: '/table',
  //   name: 'table',
  //   component: NewTable
  // },
  {
    path: "/progress_bar",
    name: "importProgressBar",
    component: ProgressView,
  },

  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/upload",
    name: "fileUpload",
    component: FileUploadView,
  },

  {
    path: "/cards",
    name: "cards",
    component: CardsView,
  },
  {
    path: "/errorpage",
    name: "errorPage",
    component: ErrorpageView,
  },
  {
    path: "/layout",
    name: "layout",
    component: LayoutView,
  },
  {
    path: "/breadcrumb",
    name: "breadcrumb",
    component: Breadcrumb,
  },
  {
    path: "/pagination",
    name: "pagination",
    component: Pagination,
  },
  {
    path: "/sidebar",
    name: "sideBar",
    component: SideBarView,
  },
  {
    path: "/input_fields",
    name: "inputFields",
    component: InputView,
  },
  {
    path: "/input_items",
    name: "inputItems",
    component: InputItemsView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardViewNew,
  },
  {
    path: "/draggables",
    name: "draggables",
    component: DraggableView,
  },
  {
    path: "/dataview",
    name: "dataview",
    component: DataviewView,
  },
  // {
  //   path: '/colorpicker',
  //   name: 'ColorPicker',
  //   component:  () => import( '../views/ColorPicker.vue')
  // },
  {
    path: "/imagegallery",
    name: "imagegallery",
    component: ImagegalleryView,
  },
  {
    path: "/speeddial",
    name: "speeddial",
    component: SpeeddialView,
  },
  {
    path: "/switch",
    name: "switch",
    component: SwitchView,
  },
  // {
  //   path: '/dashboard/view',
  //   name: 'dashboardpageview',
  //   component: DashboardpageView
  // },
];
const scrollBehavior = (to, from, savedPosition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ left: 0, top: 0 });
    }, 500);
  });
};
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  let p = document.getElementById("comp-body");
  if (p) {
    p.scrollTop = 0;
  }

  return next();
});

// router.beforeEach((to,from,next) => {
//   console.log(to);
//     if(to.name !== 'home')
//     {
//       router.push('/')
//     }
// });

export default router;
