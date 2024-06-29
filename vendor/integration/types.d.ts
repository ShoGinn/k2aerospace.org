declare module 'astrowind:config' {
  import type { SiteConfig, I18NConfig, MetaDataConfig, UIConfig, AnalyticsConfig } from './config';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetaDataConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
}
