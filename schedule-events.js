const scheduleEvents = 
[
          {
            title: 'Introduction',
            start: '2026-03-30',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Introduction to Internet Security (ZMap/LZR), Course Overview, Presentation Instructions, Presentation Schedule, and How to Give A Good Talk.',
            items: [
              { label: 'Lecture: Intro to Internet Security', url: 'lectures/L1-Intro.pdf' },
              { label: 'Lecture: How to Give a Good Talk', url: 'lectures/L4-GoodTalks.pdf' },
              { label: 'Lecture: Course Logistics', url: '' },
              { label: 'HW: Presentation Schedule', url: 'https://docs.google.com/spreadsheets/d/1cBANaylcDcTz5xj28ke2N1HjKetTo_uuBPmty4jIiEs/edit?usp=sharing'},
              { label: 'HW: Group Sign-Ups', url: '' },    
              { label: 'HW: How to Read a Paper', url: 'https://dl.acm.org/doi/pdf/10.1145/1273445.1273458' },        
              { label: 'Paper Reference: ZMap', url: '' },
              { label: 'Paper Reference: LZR Paper', url: '' } 
            ]
          },
          {
            title: 'HW: Reading',
            start: '2026-03-30',
            end: '2026-04-01',
            color: '#EAAA00',
            type: 'Homework',      
            description: 'Read "How to Read a Paper"',
            items: [
              { label: 'Paper:How to Read a Paper', url: 'https://dl.acm.org/doi/pdf/10.1145/1273445.1273458' }
            ]             
          },
          {
            title: 'HW: Presentation Sign Up',
            start: '2026-03-30',
            end: '2026-04-01',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Sign Up for Presentation Slot',
            items: [
              { label: 'Sign-Up', url: 'https://docs.google.com/spreadsheets/d/1cBANaylcDcTz5xj28ke2N1HjKetTo_uuBPmty4jIiEs/edit?usp=sharing' }
            ]  
          },
          {
            title: 'HW: Project Sign Up',
            start: '2026-03-30',
            end: '2026-04-01',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Sign Up for Project Groups between 2--4 people.',
            items: [
              { label: 'Sign-Up', url: '' }
            ]  
          },
          {
            title: 'IPv6',
            start: '2026-04-01',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: IPv6', url: '' },
              { label: 'HW: Project Proposal Brainstorm', url: '' },
              { label: 'Paper Reference: 6Sense', url: 'https://www.usenix.org/system/files/usenixsecurity24-williams.pdf' }        
            ]
          },
          {
            title: 'HW: Project Proposals',
            start: '2026-04-01',
            end: '2026-04-06',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/1, due 4/6.',
            items: [
              { label: 'Instructions', url: '' },
            ]
          },
          {
            title: 'Routing',
            start: '2026-04-06',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Routing', url: '' }
            ]
          },
          {
            title: 'HW: Routing',
            start: '2026-04-06',
            end: '2026-04-13',
            color: '#EAAA00',
            type: 'Homework',
            url: '',
            description: 'Routing Homework Assignment.'
          },
          {
            title: 'Routing Security',
            start: '2026-04-08',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Routing Security', url: '' },
            ]
          },
          {
            title: 'Project 3 Window',
            start: '2026-04-08',
            end: '2026-04-15',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/8, due 4/14.',
            items: [
              { label: 'Write-Up', url: '' }
            ]
          },
          {
            title: 'Cloud Compute',
            start: '2026-04-13',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Cloud Compute', url: '' },
              { label: 'Paper Reference: Get-Off-My-Cloud ', url: 'https://rist.tech.cornell.edu/papers/cloudsec.pdf' }
            ]
          },
          {
            title: 'Cloud Storage',
            start: '2026-04-15',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Cloud Storage', url: '' }, //lectures/L7-CloudStorage.pdf
              { label: 'Paper Reference: HoneyBuckets', url: 'https://lizizhikevich.github.io/assets/papers/honeybuckets.pdf' },        
            ]
          },
          {
            title: 'Project 4 Window',
            start: '2026-04-15',
            end: '2026-04-22',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/15, due 4/21.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1mpzAjYUeVrY_v-LM6d795cIPLUbuOYZ_mMtuem3dSKs' }
            ]
          },
          {
            title: 'Botnets',
            start: '2026-04-20',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
               { label: 'Paper Reference: Mirai', url: 'https://www.usenix.org/system/files/conference/usenixsecurity17/sec17-antonakakis.pdf' }, 
               { label: 'Lecture: Botnets', url: '' },       // lectures/L11-Criminals.pdf
            ]
          },
          {
            title: 'Bullet-Proof Hosting',
            start: '2026-04-22',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
               { label: 'Paper Reference: Bullet-Proof', url: 'https://www.usenix.org/system/files/sec19-noroozian.pdf' }, 
               { label: 'Lecture: Botnets', url: '' },       // lectures/L11-Criminals.pdf
            ]
          },
          {
            title: 'Project 5 Window',
            start: '2026-04-22',
            end: '2026-04-29',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/22, due 4/28.',
            items: [
              { label: 'Instructions', url: 'https://docs.google.com/document/d/1o-6mnOFx_uMRPRcyNtQ17FXGxmo0lZ4_3AR-lLWUR-E/' },
              { label: 'Presentation Sign-Ups', url: 'https://docs.google.com/spreadsheets/d/1R4u7pyjVR3o-FWXh_tSmwnXDwl1ZSyCEUMmkXwqGEcg' }
            ]
          },
          {
            title: 'GEO Satellites',
            start: '2026-05-11',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'GEO Satellites, Paper Discussion, Student Presentation',
            items: [
              { label: 'Lecture: GEO Satellites', url: '' },//lectures/L8-GEO.pdf
              { label: 'Paper Reference: A Tale of Sea and Sky', url: 'https://ieeexplore.ieee.org/abstract/document/9152624' }
                      
            ]
          },
          {
            title: 'Mid-Point and GEO Satellites [Virtual]',
            start: '2026-04-29',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'GEO Satellites, Mid-Point Presentations',
            items: [
              { label: 'GEO Satellites', url: 'lectures/L8-GEO.pdf' }
            ]
          },
          {
            title: 'Mid-Point Write-Up Window',
            start: '2026-04-29',
            end: '2026-05-06',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/29, due 5/5.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1CxuELae5vj1fZIwIZFMIOz1V7Z9-rqYxv_nXNFhCQzc' }
            ]
          },
          {
            title: 'LEO Satellites',
            start: '2026-05-04',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'LEO Satellites, Paper Discussion, Student Presentation',
            items: [
              { label: 'LEO Satellites', url: 'lectures/L10-LEO.pdf' }
            ]
          },

          {
            title: 'Internet of Things',
            start: '2026-05-06',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Tips for Empirical Writing, Paper Discussion, Student Presentation',
            items: [
              { label: 'Tips for Empirical Writing', url: 'https://docs.google.com/document/d/1JDognR_cGMzKXYJN2GZQ1QBnwNwDmhQvXNsDGGvM1EQ' }
            ]
          },
          {
            title: 'Project 6 Window',
            start: '2026-05-06',
            end: '2026-05-15',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 5/6, due 5/14.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1CpzaoH3Seayix95bh6aWpYCmAzc7W2MC1ciTlkZm_kU' }
            ]
          },
          {
            title: 'Homework: LEO Measurements',
            start: '2026-05-07',
            color: '#EAAA00',
            type: 'Homework',
            url: 'https://lizizhikevich.github.io/assets/papers/LEO-HitchHiking.pdf',
            description: 'Democratizing LEO Satellite Network Measurements'
          },
          {
            title: 'Understanding Criminals',
            start: '2026-05-11',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Internet Criminals, Paper Discussion, Student Presentation',
            items: [
              { label: 'Internet Criminals', url: '' }
            ]
          },
          {
            title: 'Homework: IoT Devices',
            start: '2026-05-12',
            color: '#EAAA00',
            type: 'Homework',
            url: 'https://www.usenix.org/system/files/sec19-kumar-deepak_0.pdf',
            description: 'All Things Considered: An Analysis of IoT Devices on Home Networks'
          },
          {
            title: 'Understanding Criminals Part 2',
            start: '2026-05-13',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Internet Criminals Part 2, Paper Discussion, Student Presentation',
            items: [
              { label: 'Internet Criminals Part 2', url: '' }
            ]
          },
          {
            title: 'Homework: Bullet-Proof Hosting',
            start: '2026-05-14',
            color: '#EAAA00',
            type: 'Homework',
            url: '',
            description: 'Platforms in Everything: Analyzing Ground-Truth Data on the Anatomy and Economics of Bullet-Proof Hosting'
          },
          {
            title: 'Guest Lecture',
            start: '2026-05-18',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Internet Scanning for Research and Profit; David Adrian',
            items: [
              { label: 'David Adrian', url: 'https://dadrian.io' }
            ]
          },
          {
            title: 'Machine Learning',
            start: '2026-05-20',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Research Group Meetings, Paper Discussion, Student Presentation'
          },
          {
            title: 'Final Write-Up Window',
            start: '2026-05-20',
            end: '2026-05-31',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 5/20, due 5/30 at 5:00 PM.',
            items: [
              { label: 'Final Write-Up', url: 'https://docs.google.com/document/d/1gc6_w3CW2FM9gI5xktHADuMHtXmvbGZD7RME6_B7M0E' }
            ]
          },
          {
            title: 'Homework: ML in Security',
            start: '2026-05-21',
            color: '#EAAA00',
            type: 'Homework',
            url: 'https://www.usenix.org/system/files/sec22summer_arp.pdf',
            description: "Dos and Don'ts of Machine Learning in Computer Security"
          },
          {
            title: 'Holiday',
            start: '2026-05-25',
            color: '#718096',
            type: 'No Class',
            description: 'No class.'
          },
          {
            title: 'Project Wrap-Up',
            start: '2026-05-27',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Project Group Meetings (See EdStem for more details/expectations)'
          },
          {
            title: 'Final Presentation Upload Window',
            start: '2026-05-27',
            end: '2026-06-03',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 5/27, due 6/2 at 1:30 PM.',
            items: [
              { label: 'Upload Final Presentation to Gradescope' }
            ]
          },
          {
            title: 'Final Presentations',
            start: '2026-06-01',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'No required reading. Attendance mandatory.'
          },
          {
            title: 'Reproducibility Report Window',
            start: '2026-06-01',
            end: '2026-06-07',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 6/1, due 6/6 at 5:00 PM.',
            items: [
              { label: 'Reproducibility Report', url: 'https://docs.google.com/document/d/1HPK7ZLOh80HR8d0MjcAZ1jmgFhC-dJ2HDKhRvbBz0ls/' }
            ]
          },
          {
            title: 'Final Presentations',
            start: '2026-06-03',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'No required reading. Attendance mandatory.'
          }
        ];
