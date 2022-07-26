# Introduction

Contains resource files that can be used in conjunction with LfLocalizationService from [`@laserfiche/lf-js-utils`](https://github.com/Laserfiche/lf-js-utils).

## Creating a new resource

1. Create a folder under resources (e.g. my-new-resources)
2. In that folder create a resource file for each supported language.
3. The file name should be in the format languagecode2-country/regioncode2. languagecode2 is a lowercase two-letter code derived from ISO 639-1. country/regioncode2 is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. codes. The file should have an extension of .json
   - en.json
   - en-US.json
   - zh-Hans.json
4. Required/Default Language: en.json
   - If a resource key is not found in the selected language, the en string will be used.
5. Optional Language: For Laserfiche, we recommend providing resources for at least: ar, en-US, en-GB, es, fr-CA, fr, pt-BR, zh-Hans, zh-Hant

## Documentation

### With LfLocalizationService from [`@laserfiche/lf-js-utils`](https://github.com/Laserfiche/lf-js-utils)

`LfLocalizationService` is a service that handles internationalization and localization, mapping text to its corresponding translated texts in the selected language. `@laserfiche/lf-resource-library` provides language resources files in JSON that can be utlized by LfLocalizationService.

**Install @laserfiche/lf-js-utils:**

```ts
npm install  @laserfiche/lf-js-utils
```

**Import LfLocalizationService:**

```ts
import { LfLocalizationService } from "@laserfiche/lf-js-utils";
```

**In node, import any fetch polyfill which suits your requirements:**
examples:

- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- [cross-fetch](https://www.npmjs.com/package/cross-fetch)
- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)

**Example Usages**:

```ts
let localizationService = new LfLocalizationService();
localizationService.setLanguage('es');
await localizationService.initResourcesFromUrlAsync('https://cdn.jsdelivr.net/npm/@laserfiche/lf-resource-library@4.0.0/resources/laserfiche-base');
let loading =  localizationService.getString('LOADING'); // loading -> 'Cargando...'
```

## [Icons](https://github.com/Laserfiche/lf-resource-library/blob/main/resources/icons/document-icons-documentation.md)

[**Example Usages**]

```ts
 export function getDocumentIconUrlFromIconId(iconId: string): string {
    return `https://cdn.jsdelivr.net/npm/@laserfiche/lf-resource-library@4.0.0/resources/icons/document-icons.svg#${iconId}`;
}
```

## Change Log

See CHANGELOG [here](https://github.com/Laserfiche/lf-resource-library/blob/4.x/CHANGELOG.md).

## Contribution

We welcome contributions and feedback. Please follow our [contributing guidelines](https://github.com/Laserfiche/lf-resource-library/blob/main/CONTRIBUTING.md).
