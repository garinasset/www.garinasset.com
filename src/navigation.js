import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '产品及服务',
      links: [
        {
          text: '聊天完成',
          href: getPermalink('/products/chat'),
        },
        {
          text: '工具函数',
          href: getPermalink('/products/functions'),
        }, 
        {
          text: '训练数据集',
          href: getPermalink('/products/dataset'),
        },
      ],
    },
    {
      text: '定价与支持',
      links: [
        {
          text: '定价',
          href: getPermalink('/pricing'),
        },
        {
          text: '获取联络',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: '文档',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/documents/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/documents/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/documents/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/documents/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/documents/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/documents/subscription'),
        },
      ],
    },
    {
      text: '博客',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: '关于',
      links: [
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
        {
          text: '专业术语',
          href: getPermalink('/terms'),
        },
        {
          text: '隐私政策',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: '移动应用',
      target: '_blank',
      href: getPermalink('/mobile-app'),
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //    {
    //      text: 'Personal',
    //      href: getPermalink('/products/personal'),
    //    },
    //   ],
    // },

    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: '立即试用', href: 'https://github.com/garinops/www.garinasset.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        { text: '聊天完成', href: getPermalink('/products/chat')},
        { text: '工具函数', href: getPermalink('/products/functions') },
        { text: '训练数据集', href: getPermalink('/products/dataset') },
      ],
    },
    {
      title: '平台',
      links: [
        { text: '开发者平台', href: '#' },
        { text: 'Python', href: '#' },
      ],
    },
    {
      title: '支持',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: '公司',
      links: [
        { text: '关于', href: getPermalink('/about') },
        { text: '博客', href: getBlogPermalink() },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '专业术语', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/garinops/www.garinasset.com' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(/src/assets/images/logo.png)]"></span>
   版权所有 &copy; 2022-2024<strong>&nbsp;嘉林（北京）有限公司</strong><a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind"></a>
  `,
};
