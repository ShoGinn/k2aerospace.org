import { getPermalink } from './utils/permalinks';
import { SITE } from 'astrowind:config';

let currentYear = new Date().getFullYear();
let copyrightElement = `\u00A9 ${currentYear} ${SITE.name}. All rights reserved.`;

export const headerData = {
  isFullWidth: true,
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/k2-aerospace/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: getPermalink('/contact') },
  ],
  footNote: copyrightElement,
};
