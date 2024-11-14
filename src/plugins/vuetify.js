// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: 'hsl(165 55% 55%)',
        secondary: 'hsl(210 55% 55%)',
        accent: 'hsl(50 75% 60%)',
        error: 'hsl(0 55% 55%)',
        info: 'hsl(200 100% 45%)',
        success: 'hsl(120 100% 45%)',
        warning: 'hsl(45 100% 45%)'
      }
    }
  }
})
