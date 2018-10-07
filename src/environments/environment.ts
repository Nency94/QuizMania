// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ques: [
       {
        'question': 'Which one is correct team name in NBA?',
        'options': [
            'New York Bulls',
            'Los Angeles Kings',
            'Golden State Warriros',
            'Huston Rocket'
        ],
        'answer': 'Huston Rocket',
        'id': '1',
        'givenAns': ''
        },
        {
        'question': '5 + 7 = ?',
        'options': [
            '10',
            '11',
            '12',
            '13'
        ],
        'answer': '12',
        'id': '2',
        'givenAns': ''
        },
        {
          'question': 'Which state was awarded as the best state under the Swachh Survekshan Grameen Awards 2018?',
          'options': [
              'Telangana',
              'Haryana',
              'Gujarat',
              'Karnataka'
          ],
          'answer': 'Haryana',
          'id': '3',
          'givenAns': ''

        },
        {
          'question': 'What is the technique called by which the genome of an organism can be split up into different sized molecules?',
          'options': [
              'Electrolysis',
              'Electrophoresis',
              'Chromatography',
              'None of these'
          ],
          'answer': 'Electrophoresis',
          'id': '4',
          'givenAns': ''

        },
        {
          'question': 'The Reserve Bank of India (RBI) eased foreign exchange rules for which sector?',
          'options': [
              'Oil Marketing Companies',
              'Financing Institutions',
              'Micro, Small and Medium Enterprises',
              'Travel and Tourism'
          ],
          'answer': 'Oil Marketing Companies',
          'id': '5',
          'givenAns': ''

        }
      ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
