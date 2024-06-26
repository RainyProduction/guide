// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: "Rainlink",
    description: "Another lavalink wrapper but focus on stability and rich features",
    socials: {
      github: "RainyXeon/Rainlink",
      discord: {
        label: "Support",
        href: "https://discord.com/invite/xff4e2WvVy",
        icon: "ic:baseline-discord"
      },
      npmjs: {
        label: "npm",
        href: "https://www.npmjs.com/package/rainlink",
        icon: "carbon:logo-npm"
      }
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: false,
    },
    footer: {
      iconLinks: [],
      credits: {
        icon: 'fluent:weather-rain-showers-day-24-filled',
        text: 'Powered by RainyProduction',
        href: 'https://github.com/RainyProduction',
      },
    }
}
})
