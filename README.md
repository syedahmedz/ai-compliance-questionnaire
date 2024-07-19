## AI Compliance Questionnaire

This questionnaire was built to help enterprises and startups (Series A and beyond) keep a record of how your data is used,transacted and operated on by AI tooling. The aim is to understand the following key areas

- Data security
- Training Practices
- Data retention
- Scope of data usage for training,fine-tuning or third parry data exposure.
- Hosting of models
- Data handling for PII and sensitive data

The questionnaire itself can be found [here](questionnaire.md)

## Deploying to Google Forms through Google Apps Scripts 

For ease of use, this questionnaire can be easily deployed on google forms and its reponses stored within your workspace. In order to do this follow theese instruactions

1. Log into your Google Workspace
2. Head over to https://script.google.com/
3. Click on the '+' sign and add a script
4. Copy paste the code found [here](googleFormsAIQuestionnaire.gs) (Please note that .gs as a file extension is javascript based scripting preferred by google cloud apps, hence the extension .gs and not .js) 
5. Click on 'Run' to ensure there are no bugs in the script
6. When this script executes, the logs should display a unique URL to the form that can be shared.
7. Head over to [Google Forms](docs.google.com/forms) to view the form and edit any other settings needed, including themes and more. 

