export type SiteInfo = {
  name: string;
  address: string;
  fullAddress: string[];
  phone: string;
  phone2: string;
  email: string;
  email2: string;
  hours: string;
};

export type IconId =
  | "mapPin" | "phone" | "clock" | "facebook" | "instagram" | "twitter" | "youtube"
  | "chevronDown" | "menu" | "close" | "chevronRight" | "mailSolid" | "owl"
  | "sun" | "moon" | "mapPinLine" | "phoneLine" | "mail" | "xLogo" | "pinterest"
  | "arrowRight" | "user" | "calendar" | "users" | "chat" | "check" | "chefHat"
  | "forkKnife" | "trophy" | "cloche" | "tableIcon" | "leaf" | "arrowLeft"
  | "plus" | "chevronLeft" | "plate" | "bowl" | "fish" | "cake";

export type SocialLink = { icon: IconId; label: string; href?: string };
export type StaticImageAssets = Record<string, string>;
export type HeaderContent = {
  brandAriaLabel: string; logoAlt: string; navAriaLabel: string;
  bookTableLabel: string; openMenuLabel: string; closeMenuLabel: string;
  socials: SocialLink[];
  contactIcons: { address: IconId; phone: IconId; hours: IconId };
  icons: { dropdown: IconId; menu: IconId; close: IconId };
  submenuLabelPrefix: string;
};
export type FooterContent = {
  logoAlt: string; description: string; quickLinksTitle: string; quickLinks: NavItem[];
  openingHoursTitle: string; contactTitle: string; copyrightText: string;
  socials: SocialLink[];
  contactIcons: { address: IconId; phone: IconId; email: IconId };
  quickLinkIcon: IconId; addressLines: string[];
};
export type BookingPageContent = {
  title: string; eyebrow: string; headingStart: string; headingEnd: string; intro: string;
  formEyebrow: string; formTitle: string; formIntro: string;
  openingHours: { icon: IconId; title: string; days: string; time: string; tone: string; animation: string }[];
};
export type FormContent = {
  success: { messageTitle: string; messageText: string; bookingTitle: string; bookingText: string; resetLabel: string; icon: IconId };
  submit: { sendingLabel: string; contactLabel: string; bookingLabel: string; icon: IconId };
  contact: { name: string; email: string; phone: string; subject: string; subjectIcon: IconId; message: string; subjects: string[] };
  booking: { name: string; email: string; phone: string; date: string; time: string; guestCount: string; request: string; times: string[]; guestCountOptions: number; guestSingular: string; guestPlural: string; icons: { name: IconId; email: IconId; phone: IconId; date: IconId; time: IconId; guests: IconId; request: IconId; dropdown: IconId } };
};
export type ContactPageContent = {
  title: string; eyebrow: string; headingStart: string; headingEnd: string; intro: string;
  socialTitle: string; formEyebrow: string; formHeadingFirst: string; formHeadingSecond: string;
  mapTitle: string; mapUrl: string;
  cards: { icon: IconId; title: string; lines?: string[]; small?: boolean; useSitePhones?: boolean; useSiteEmails?: boolean }[];
  socials: SocialLink[];
};
export type AchievementContent = {
  eyebrow: string; titleFirst: string; titleSecond: string; description: string;
  items: { icon: IconId; value: number; suffix: string; label: string }[];
};
export type WhyChooseContent = {
  eyebrow: string; title: string; highlight: string; description: string; menuLinkLabel: string;
  menuLinkIcon: IconId;
  features: { icon: IconId; title: string; text: string }[];
};
export type GalleryGridContent = {
  filters: string[]; tags: string[];
  labels: { open: string; close: string; next: string; previous: string; viewer: string };
  icons: { open: IconId; close: IconId; next: IconId; previous: IconId };
};
export type HomeCopyBlock = {
  script: string; eyebrow: string; titleStart: string; titleHighlight: string;
  titleEnd?: string; description: string; viewLabel?: string;
};
export type AboutIntroContent = {
  eyebrow: string; titleStart: string; titleHighlight: string; titleEnd: string;
  paragraphs: string[]; readMoreLabel: string; imageAlt: string;
};
export type SimpleIntroContent = {
  eyebrow: string; titleStart: string; titleHighlight: string; description: string;
};
export type PageIntroContent = SimpleIntroContent & { title: string; titleEnd?: string };
export type BlogDetailContent = {
  categories: string[]; benefits: string[];
  latestPosts: { title: string; img: string; date: string }[];
  copy: { date: string; author: string; tags: string; titleStart: string; titleHighlight: string; intro: string; firstSectionTitle: string; firstSectionText: string; secondSectionTitle: string; secondSectionText: string; thirdSectionTitle: string; thirdSectionText: string; quote: string; quoteAuthor: string; categoriesTitle: string; latestPostsTitle: string; promoEyebrow: string; promoTitle: string; promoButton: string };
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type OpeningHour = [day: string, hours: string];
export type MenuCategory = { title: string; img: string };
export type Chef = { name: string; role: string; img: string };
export type Testimonial = { name: string; city: string; img: string; text: string };
export type BlogPost = { date: string; cat: string; title: string; text: string; img: string };
export type SpecialIcon = "plate" | "cloche" | "bowl" | "leaf";
export type Special = { title: string; text: string; img: string; icon: SpecialIcon };
export type Dish = { name: string; desc: string; price: number; img?: string };

export type CategoryData = {
  common: {
    site: SiteInfo;
    navigation: NavItem[];
    openingHours: OpeningHour[];
    assets: StaticImageAssets;
    iconIds: IconId[];
    header: HeaderContent;
    footer: FooterContent;
    bookingPage: BookingPageContent;
    forms: FormContent;
    contactPage: ContactPageContent;
    galleryGrid: GalleryGridContent;
    menuPage: { title: string; sectionTitle: string; intro: string; seafoodIcon: IconId; seafoodKicker: string; seafoodTitle: string; dessertIcon: IconId; dessertKicker: string; dessertTitle: string; sectionIcon: IconId; specialEyebrow: string; specialTitleStart: string; specialTitleHighlight: string; specialDescription: string };
    homeHero: { eyebrow: string; lineOne: string; highlight: string; lineTwo: string; menuLabel: string; bookingLabel: string; scrollLabel: string };
    aboutIntro: AboutIntroContent;
    blogIntro: SimpleIntroContent;
    testimonialIntro: SimpleIntroContent;
    blogDetail: BlogDetailContent;
    pageTitles: { about: string; blog: string; blogDetail: string; gallery: string; testimonial: string; chefs: string };
    galleryPage: PageIntroContent;
    chefsPage: PageIntroContent;
    testimonialPage: PageIntroContent;
    ui: { breadcrumbHome: string; pagination: string; previousPage: string; nextPage: string; backToTop: string; testimonialPagination: string; previousTestimonials: string; nextTestimonials: string };
  };
  categories: {
    ArbanSpice: {
      sections: {
        Home: { menuCategories: MenuCategory[]; chefs: Chef[]; copy: { menu: HomeCopyBlock; chefs: HomeCopyBlock; gallery: HomeCopyBlock } };
        Chefs: { items: Chef[] };
        Gallery: { items: string[] };
        Testimonials: { items: Testimonial[] };
        Blogs: { items: BlogPost[] };
        Specials: { items: Special[] };
        Menu: { mainMenu: Dish[][]; seafood: Dish[]; desserts: Dish[] };
        Booking: { page: Record<string, unknown> };
        Contact: { page: Record<string, unknown> };
        About: { achievements: AchievementContent; whyChoose: WhyChooseContent };
      };
    };
  };
};
