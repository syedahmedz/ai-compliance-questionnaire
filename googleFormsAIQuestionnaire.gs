function createComplianceQuestionnaire() {
  const form = FormApp.create('AI Compliance Questionnaire');

  // Section 1: AI Capabilities and Service Providers
  let item = form.addMultipleChoiceItem();
  item.setTitle('1. What AI capabilities are included in the application scope?')
    .setChoices([
      item.createChoice('Video Generation'),
      item.createChoice('Image Generation'),
      item.createChoice('Code Generation'),
      item.createChoice('Text Generation'),
      item.createChoice('Speech Generation'),
      item.createChoice('Other (please specify)')
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('2. Please list applicable third-party AI service providers:');

  item = form.addMultipleChoiceItem();
  item.setTitle('3. Does your solution use a proprietary foundation model?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  // Section 2: Data Handling and Privacy
  item = form.addMultipleChoiceItem();
  item.setTitle('4. Is a single-tenant solution available with full control over data encryption keys?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('5. Is our organizational data collected, disclosed, or retained?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('6. Will any of our organization\'s data be utilized to train your AI / LLM models offered to your other customers?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('7. Will anyone in your company have access to unencrypted/plain text organizational data submitted to the model? If so, please provide their job titles and reasons for access.')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  // Section 3: Data Security and Compliance
  item = form.addMultipleChoiceItem();
  item.setTitle('8. Can our organization use its own exposed API\'s/Transit Gateways/VPC\'s to process outbound traffic before it\'s sent to the relevant models in scope?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('9. Are there any data regulations or obligations when using the data outputted by your utilized model(s)?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('10. Have your models\' accuracy been independently assessed?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('11. Does your platform allow for the option to "opt-out" of training all public and proprietary models for all of the data in scope for this relationship?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('12. Does your company have measures in place to address "prompt injection" attacks?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);  

   // ... (Questions 1-12 have already been added above)

  item = form.addMultipleChoiceItem();
  item.setTitle('13. Can our organization opt out of all of your company\'s Acceptable Use Policy (AUP) reviews and prevent your company from accessing clear-text data associated with AUP violations?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('14. In the event of any incidents can you provide event logs/details?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]); 

  // Section 4: Data Retention and Zero Data Retention (ZDR)
  item = form.addMultipleChoiceItem();
  item.setTitle('15. If the system crashes, is any temporary or in-memory data saved?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('16. How long is data retained in volatile memory during GenAI processing? Is volatile memory cleared periodically, or is there a specific process for purging it?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);

  item = form.addMultipleChoiceItem();
  item.setTitle('17. Do your platforms use of GenAI offer Zero Data Retention (ZDR)?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('18. Does your platform display a real-time status for Zero Data Retention (ZDR)?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('19. Please provide proof demonstrating how your company will technically enable and enforce Zero Data Retention (ZDR) for our agreement.')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]); 

  item = form.addMultipleChoiceItem();
  item.setTitle('20. Are Zero Data Retention (ZDR) configuration changes recorded in logs accessible to our organization?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);
  

  // Section 5: Model Accuracy, Refinement, and Third-Party Services
  item = form.addMultipleChoiceItem();
  item.setTitle('21. Does your company have a process to address instances where your Large Language Model generates inaccurate information ("hallucinates") or discloses Personal Information?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);
    
  item = form.addMultipleChoiceItem();
  item.setTitle('22. Does your company use human feedback to retrain or refine your models?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true);  
  
  item = form.addMultipleChoiceItem();
  item.setTitle('23. To provide the services outlined in this agreement, does your company utilize any third-party AI service providers, including public or proprietary foundational models?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]); 
  
  item = form.addMultipleChoiceItem();
  item.setTitle('24. Where are your third-party AI services hosted?')
    .setChoices([
      item.createChoice('ONLY hosted On-premise within your company\'s infrastructure/network'),
      item.createChoice('ONLY hosted by the third-party AI service provider'),
      item.createChoice('BOTH - Some components are hosted by your company, and some components are hosted by the AI service provider')
    ]); 

  item = form.addMultipleChoiceItem();
  item.setTitle('25. Will the AI service provider have any access, involvement, or interaction with our data, including sharing, handling, or processing?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]); 

  item = form.addMultipleChoiceItem();
  item.setTitle('26. If your company develops its own foundational models (FM), please indicate if any are accessible (publicly or through subscription) on cloud-based ML platforms like GCP, Azure or AWS. If so, list the specific platforms below.')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ])
    .showOtherOption(true); 

  item = form.addMultipleChoiceItem();
  item.setTitle('27. Do you have explicit agreements with your third-party AI Service Providers (AISPs) stating that: (a) Your customer\'s prompt/completion/inference data will never be retained or accessible in clear-text by the AISPs, and (b) Your customer\'s data will never be used to train the AISPs\' foundational models (FMs)?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]);

  item = form.addMultipleChoiceItem();
  item.setTitle('28. Can we explicitly choose to (a) have zero data retention with your AI service provider and (b) prevent our data from being used to train their model?')
    .setChoices([
      item.createChoice('Yes'),
      item.createChoice('No'),
      item.createChoice('N/A')
    ]); 


  Logger.log('Published URL: ' + form.getPublishedUrl());
}
