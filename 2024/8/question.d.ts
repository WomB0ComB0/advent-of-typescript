declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** @default 'true' */
      MOOD_LIGHTS: 'true';
      /** @default '327.59' */
      BATH_TEMPERATURE: '327.59';
      /** @default 'chocolate' */
      STRAWBERRIES: 'chocolate';
    }
  }
}

export {}