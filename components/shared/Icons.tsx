import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const line = (d: React.ReactNode) =>
  function LineIcon(props: P) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
        {d}
      </svg>
    );
  };

const solid = (d: React.ReactNode) =>
  function SolidIcon(props: P) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
        {d}
      </svg>
    );
  };

export const MapPin = solid(<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />);
export const MapPinLine = line(<><path d="M12 22s7-7.8 7-13a7 7 0 1 0-14 0c0 5.2 7 13 7 13Z" /><circle cx="12" cy="9" r="2.5" /></>);
export const Phone = solid(<path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />);
export const PhoneLine = line(<path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />);
export const Clock = line(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const Mail = line(<><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6 8.5 7 8.5-7" /></>);
export const MailSolid = solid(<path d="M3 5h18a1 1 0 0 1 1 1v.4l-10 6.3L2 6.4V6a1 1 0 0 1 1-1Zm-1 3.7 10 6.3 10-6.3V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.7Z" />);
export const Facebook = solid(<path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.85.25-1.45 1.5-1.45h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21h2.9Z" />);
export const Instagram = line(<><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.8" cy="7.2" r=".6" fill="currentColor" /></>);
export const Twitter = solid(<path d="M21.5 6.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.7-2.4.9a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.2 5.2a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.4 3 3.8-.6.2-1.2.2-1.7.1.5 1.5 1.9 2.6 3.6 2.7A7.7 7.7 0 0 1 3 17.9a10.8 10.8 0 0 0 16.6-9.6c.8-.6 1.4-1.2 1.9-2Z" />);
export const XLogo = solid(<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />);
export const Youtube = solid(<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />);
export const Pinterest = solid(<path d="M12.3 2C6.8 2 4 5.9 4 9.2c0 2 .8 3.7 2.4 4.4.3.1.5 0 .6-.3l.2-.9c.1-.3 0-.4-.2-.7a3.4 3.4 0 0 1-.8-2.3c0-3 2.2-5.6 5.8-5.6 3.2 0 4.9 1.9 4.9 4.5 0 3.4-1.5 6.3-3.8 6.3-1.2 0-2.2-1-1.9-2.3.4-1.5 1.1-3.1 1.1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.4c-.4 1.9-.1 4.2 0 4.4 0 .1.2.2.3.1.1-.2 1.7-2.1 2.2-4l.9-3.4c.4.8 1.7 1.6 3.1 1.6 4.1 0 6.8-3.7 6.8-8.7C20.5 5.6 17.3 2 12.3 2Z" />);
export const Owl = line(<><circle cx="7.5" cy="13" r="3" /><circle cx="16.5" cy="13" r="3" /><circle cx="7.5" cy="13" r=".8" fill="currentColor" /><circle cx="16.5" cy="13" r=".8" fill="currentColor" /><path d="M3 9.5c2-1.6 5.5-2.5 9-2.5s7 .9 9 2.5M10.5 15l1.5 2 1.5-2" /></>);
export const ArrowRight = line(<path d="M4 12h16m-6-6 6 6-6 6" />);
export const ArrowLeft = line(<path d="M20 12H4m6-6-6 6 6 6" />);
export const ChevronRight = line(<path d="m9 5 7 7-7 7" />);
export const ChevronLeft = line(<path d="m15 5-7 7 7 7" />);
export const ChevronDown = line(<path d="m5 9 7 7 7-7" />);
export const ArrowUp = line(<path d="M12 20V4m-6 6 6-6 6 6" />);
export const Quote = solid(<path d="M3 18.5V13c0-4.4 2.1-7.4 6.3-8.5l.9 1.8C7.8 7.1 6.6 8.8 6.5 11H10v7.5H3Zm11 0V13c0-4.4 2.1-7.4 6.3-8.5l.9 1.8c-2.4.8-3.6 2.5-3.7 4.7H21v7.5h-7Z" />);
export const Star = solid(<path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9L12 2.8Z" />);
export const Calendar = line(<><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 10h17M8 3v4m8-4v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></>);
export const User = line(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>);
export const Users = line(<><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2A5 5 0 0 1 21.5 19" /></>);
export const Folder = line(<path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" />);
export const Search = line(<><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>);
export const Check = line(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const ChefHat = line(<><path d="M7 14.5c-2.2-.3-4-2-4-4.3a4.3 4.3 0 0 1 5.4-4.2A4.4 4.4 0 0 1 12 4a4.4 4.4 0 0 1 3.6 2 4.3 4.3 0 0 1 5.4 4.2c0 2.3-1.8 4-4 4.3V20H7v-5.5Z" /><path d="M7 17h10M10 14v3M14 14v3" /></>);
export const Cloche = line(<><path d="M3 18h18M4.5 18a7.5 7.5 0 0 1 15 0" /><path d="M12 8.5V7m-1.5 0h3" /><path d="M8 13.5a4.5 4.5 0 0 1 2.5-2" /></>);
export const TableIcon = line(<><path d="M3 10h18M6 10v10m12-10v10M9 10v5h6v-5" /><path d="M3 6v14m18-14v14" /></>);
export const Leaf = line(<><path d="M20 4C9 4 4 9.5 4 16c0 1.4.3 2.7.8 4C13 20 20 14 20 4Z" /><path d="M4.8 20C8 15 11.5 11.5 16 8.5" /></>);
export const Trophy = line(<><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4.5v1.5A3.5 3.5 0 0 0 8 11M16 6h3.5v1.5A3.5 3.5 0 0 1 16 11" /><path d="M12 13v3.5M8.5 20h7l-1-3.5h-5L8.5 20Z" /></>);
export const ForkKnife = line(<><path d="M5 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M7 3v18" /><path d="M19 3c-2 1.5-3 4-3 7v3h3V3Zm0 10v8" /></>);
export const CrossedUtensils = line(<><path d="M4 4l16 16M20 4 4 20" /><path d="M17.5 3.5 20.5 6.5 18 9 15 6zM6.5 3.5 3.5 6.5 6 9 9 6z" /></>);
export const Fish = line(<><path d="M3 12c2.5-3.5 6-5 9.5-5 3.2 0 5.5 1.7 7 5-1.5 3.3-3.8 5-7 5-3.5 0-7-1.5-9.5-5Z" /><path d="M19.5 12 22 9v6l-2.5-3Z" /><circle cx="8" cy="11" r=".6" fill="currentColor" /><path d="M12 9.5c.8.8 1.2 1.6 1.2 2.5s-.4 1.7-1.2 2.5" /></>);
export const Cake = line(<><path d="M3 20h18M4 20v-7l16-4v11" /><path d="M4 13c2 1 4 1 6 0s4-1 6 0 3 .6 4 0" /><path d="m4 13 9-8 7 4" /><circle cx="15" cy="6" r="1" /></>);
export const Sun = line(<><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" /></>);
export const Moon = solid(<path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5a8.5 8.5 0 1 0 11.3 11.3Z" />);
export const Chat = line(<><path d="M4 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="M7 9h6M7 12h4M20 9v8h-2v3l-3-3h-4" /></>);
export const Menu = line(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Close = line(<path d="M6 6l12 12M18 6 6 18" />);
export const Plate = line(<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="5" /><path d="M10 11.5c.5-1 1.2-1.5 2-1.5" /></>);
export const Bowl = line(<><path d="M3 11h18a9 9 0 0 1-18 0Z" /><path d="M8 11c0-2 1-3 2-3m2 3c0-3 1.5-5 3-5m-9 14h12" /></>);
export const Plus = line(<path d="M12 5v14M5 12h14" />);
