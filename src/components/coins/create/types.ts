export type SocialLinks = {
  website?: string;
  twitter?: string;
  telegram?: string;
};

export type FormState = {
  name: string;
  ticker: string;
  description: string;
  socials: SocialLinks;
  iconFile?: File | null;
  iconUrl?: string | null;
  bannerFile?: File | null;
  bannerUrl?: string | null;
};
