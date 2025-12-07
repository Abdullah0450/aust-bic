import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

/**
 * Custom hook to set meta tags for SEO
 */
export const useMetaTags = ({
  title = 'BIC AUST - Business Incubation Center',
  description = 'Transform your innovative ideas into thriving businesses with mentorship, workspace, training, and funding opportunities at AUST.',
  keywords = 'business, incubation, startup, mentorship, funding',
  image = '/og-image.png',
  url = 'https://bic.aust.edu.pk',
}: MetaTagsProps = {}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateOgTag('og:title', title);
    updateOgTag('og:description', description);
    updateOgTag('og:image', image);
    updateOgTag('og:url', url);
    updateOgTag('og:type', 'website');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [title, description, keywords, image, url]);
};

export default useMetaTags;
