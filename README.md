# Introduction 
Contains resource files that can be used in conjunction with LfLocalizationService from `@laserfiche/laserfiche-ui-components-core`.

# Creating a new resource
1. Create a folder under resources (e.g. my-new-resources)
2. In that folder create a resource file for each supported language.
3. The file name should be in the format languagecode2-country/regioncode2. languagecode2 is a lowercase two-letter code derived from ISO 639-1. country/regioncode2 is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. codes. The file should have an extension of .json
   - en.json
   - en-US.json
   - zh-Hans.json
4. Required/Default Language: en.json
   - If a resource key is not found in the selected language, the en string will be used.
5. Optional Language: For Laserfiche, we recommend providing resources for at least: ar, en-US, en-GB, es, fr-CA, fr, pt-BR, zh-Hans, zh-Hant
