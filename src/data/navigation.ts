export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: readonly NavigationItem[] = [
  { id: "work", label: "Work", href: "/#work" },
  { id: "apps", label: "Apps", href: "/#apps" },
  { id: "products", label: "Products", href: "/#products" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "contact", label: "Contact", href: "/#contact" },
];
