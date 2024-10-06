import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

export function useVuetify() {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            accent: colors.indigo.lighten3,
          }
        },
        light: {
          colors: {
            accent: colors.blue.darken1,
          }
        }
      }
    },
    components,
    directives,
  })

  return { vuetify }
}