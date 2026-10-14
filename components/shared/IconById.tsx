import type { SVGProps } from "react";
import type { IconId } from "@/types";
import {
  ArrowLeft, ArrowRight, Bowl, Cake, Calendar, Chat, Check, ChefHat, Cloche, ChevronDown,
  ChevronLeft, ChevronRight, Clock, Close, Facebook, ForkKnife, Instagram,
  Leaf, Mail, MailSolid, MapPin, MapPinLine, Menu, Moon, Owl, Phone, Plate, Fish,
  PhoneLine, Pinterest, Plus, Sun, TableIcon, Trophy, Twitter, Users, User,
  XLogo, Youtube,
} from "./Icons";

const icons = {
  mapPin: MapPin, phone: Phone, clock: Clock, facebook: Facebook,
  instagram: Instagram, twitter: Twitter, youtube: Youtube,
  chevronDown: ChevronDown, menu: Menu, close: Close,
  chevronRight: ChevronRight, mailSolid: MailSolid, owl: Owl, sun: Sun,
  moon: Moon, mapPinLine: MapPinLine, phoneLine: PhoneLine, mail: Mail,
  xLogo: XLogo, pinterest: Pinterest, arrowRight: ArrowRight, user: User,
  calendar: Calendar, users: Users, chat: Chat, check: Check, chefHat: ChefHat,
  forkKnife: ForkKnife, trophy: Trophy, cloche: Cloche, plate: Plate, bowl: Bowl, fish: Fish, cake: Cake, tableIcon: TableIcon,
  leaf: Leaf, arrowLeft: ArrowLeft, plus: Plus, chevronLeft: ChevronLeft,
} satisfies Record<IconId, typeof MapPin>;

export function IconById({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconId }) {
  const Component = icons[icon];
  return <Component {...props} />;
}
