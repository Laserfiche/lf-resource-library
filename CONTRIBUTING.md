# Contributing to Lf Resource Library
We encourage and appreciate feedback and contribution from the community!

 - [Code of Conduct](#coc)
 - [Question or Problem](#question)
 - [Issue and Feature Requests](#issue)
 - [PR Submission Guidelines](#submit-pr)
 - [Rules](#rules)

## <a name="coc"></a> Code of Conduct
 Please read and follow our [Code of Conduct](https://github.com/Laserfiche/lf-resource-library/blob/main/code_of_conduct.md).

## <a name="question"></a> Question or Problem?

Please post general questions on [Laserfiche Answers](https://answers.laserfiche.com/). Please include *lf-resource-library* for reference.

## <a name="issue"></a> Issue and Feature Requests

Search [Github Issues](https://github.com/Laserfiche/lf-resource-library/issues) for existing bugs report or features request related to your question. Please submit an Issue or Feature Request if your issues or requests have not been addressed.

## <a name="submit-pr"></a> PR Submission Guidelines

- Search Github [Pull Requests](https://github.com/Laserfiche/lf-resource-library/pulls) for PRs related to your submission. Make sure that this is not a duplication.
- Link the issue addressed by the PR.
- Follow the contributing guideline on how to create resources.

After the submission, core members of the project will review the code. 

## <a name="rules"></a> Rules
Please follow the rules as you add new resources:

1. Create a folder under resources (e.g. my-new-resources)
2. In that folder create a resource file for each supported language.
3. The file name should be in the format languagecode2-country/regioncode2. languagecode2 is a lowercase two-letter code derived from ISO 639-1. country/regioncode2 is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. codes. The file should have an extension of .json
   - en-US.json
   - zh-Hans.json
4. Required/Default Language: en-US.json
   - If a resource key is not found in the selected language, the en-US string will be used.
5. Optional Language: For Laserfiche, we recommend providing resources for at least: ar-EG, en-US, en-GB, es-MX, fr-CA, fr-FR, pt-BR, zh-Hans, zh-Hant
