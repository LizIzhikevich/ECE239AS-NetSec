const scheduleEvents = 
[
          {
            title: 'Introduction',
            start: '2026-03-30',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Introduction to Internet Security, Course Overview, Presentation Instructions, Presentation Schedule, and How to Give A Good Talk.',
            items: [
              { label: 'Lecture: Intro to Internet Security', url: 'lectures/L1-Intro.pdf' },
              { label: 'Lecture: How to Give a Good Talk', url: 'lectures/L1-GoodTalks.pdf' },
              { label: 'Lecture: Course Logistics Overview', url: '' },
              { label: 'HW: Presentation Schedule', url: 'https://docs.google.com/spreadsheets/d/1cBANaylcDcTz5xj28ke2N1HjKetTo_uuBPmty4jIiEs/edit?usp=sharing'},
              { label: 'Presentation Instructions', url: 'https://docs.google.com/document/d/1qYgbsvrDPedcM9_bq9hP4rQu6RvsNGoCjv-1ignCX8g/'},
              { label: 'HW: Project Group Sign-Ups', url: 'https://docs.google.com/spreadsheets/d/17XejSyn26zxtgBq_Qk8R8DEyHFD-tudbxhRPfM8cK7Q' },    
              { label: 'HW: How to Read a Paper', url: 'https://dl.acm.org/doi/pdf/10.1145/1273445.1273458' },        
              { label: 'Paper Reference: LZR', url: 'https://lizizhikevich.github.io/assets/papers/lzr.pdf' },
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
              { label: 'Sign-Up', url: 'https://docs.google.com/spreadsheets/d/1cBANaylcDcTz5xj28ke2N1HjKetTo_uuBPmty4jIiEs/edit?usp=sharing' },
              { label: 'Presentation Instructions', url: 'https://docs.google.com/document/d/1qYgbsvrDPedcM9_bq9hP4rQu6RvsNGoCjv-1ignCX8g/'},
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
              { label: 'Sign-Up', url: 'https://docs.google.com/spreadsheets/d/17XejSyn26zxtgBq_Qk8R8DEyHFD-tudbxhRPfM8cK7Q/edit?gid=0#gid=0' }
            ]  
          },
          {
            title: 'IPv6',
            start: '2026-04-01',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: IPv6 Intro', url: 'lectures/L2-IPv6-Intro.pdf' },
              { label: 'Lecture: IPv6 Scanning (6Sense)', url: 'https://www.usenix.org/system/files/usenixsecurity24_slides-williams.pdf' },
              { label: 'Student Presentation: GPS', url: 'https://drive.google.com/file/d/1KBUBiFw8S_bxlQofRApuFoIwx9c7wP_c/view?usp=sharing' },        
              { label: 'HW: Project Proposal', url: 'https://docs.google.com/document/d/1PihzGJ-wk4zOFoY5GXMX3klTYRwVvTMG8M1F40qPAbw' },
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
              { label: 'Instructions', url: 'https://docs.google.com/document/d/1PihzGJ-wk4zOFoY5GXMX3klTYRwVvTMG8M1F40qPAbw' },
            ]
          },
          {
            title: 'Routing',
            start: '2026-04-06',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Routing', url: 'lectures/L3-Routing.pdf' }
            ]
          },
          {
            title: 'HW: Routing',
            start: '2026-04-06',
            end: '2026-04-13',
            color: '#EAAA00',
            type: 'Homework',
            url: '',
            description: 'Routing Homework Assignment.',
            items: [
              { label: 'HW: Routing', url: 'HWs/ECE239_routing.pdf' },
              { label: 'HW: AI-Assist Report', url: 'https://docs.google.com/document/d/1NbkWGtgttUZTVMKl-68MBHyLQ-gPAScSuFN8pgOm-3Y' },
            ]
          },
          {
            title: 'Routing Security',
            start: '2026-04-08',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Routing Security', url: 'lectures/L4-RoutingSecurity' },
            ]
          },
          {
            title: 'Cloud Compute',
            start: '2026-04-13',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: Cloud Compute', url: 'lectures/L5-CloudCompute-Security.pdf' },
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
              { label: 'Lecture: Cloud Storage', url: 'lectures/L6-CloudStorage.pdf' }, //lectures/L7-CloudStorage.pdf
              { label: 'Paper Reference: HoneyBuckets', url: 'https://lizizhikevich.github.io/assets/papers/honeybuckets.pdf' },        
            ]
          },
          {
            title: 'HW: Project Milestone',
            start: '2026-04-15',
            end: '2026-04-20',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/15, due 4/19.',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1FD-LAijSEtChkHpbSfE2p8NLKdKvwEYJjBhJc64tEOo/' }
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
               { label: 'Lecture: Botnets', url: 'lectures/L7-Botnets.pdf' },       // lectures/L11-Criminals.pdf
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
               { label: 'Lecture: Botnets', url: 'lectures/L11-Criminals.pdf' },       // 
            ]
          },
          {
            title: 'HW: Project Milestone',
            start: '2026-04-23',
            end: '2026-04-27',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 4/23, due 4/26.',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/10_9qkMP7z54jORMbPPgjMqNhmc5jN1SNbAdoTAYgnXk' }
            ]
          },
          {
            title: 'HW: Presentation Feedback',
            start: '2026-04-29',
            end: '2026-04-30',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Presentation Feedback Form',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1HlEA8JXmE4mE70MsJDX3srfOw_qVyaiBUEQjB-F6BD8' }
            ]  
          },
          
          {
            title: 'HW: Project Milestone',
            start: '2026-04-27',
            end: '2026-04-30',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Create a draft 5 min presentation following the usual clear presentation rubric.',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1HlEA8JXmE4mE70MsJDX3srfOw_qVyaiBUEQjB-F6BD8' },
              { label: 'Clear Presentation Rubric:', url: 'https://docs.google.com/document/d/1qYgbsvrDPedcM9_bq9hP4rQu6RvsNGoCjv-1ignCX8g' },
            ]  
          },
          
          {
            title: 'HoneyPots/Telescopes',
            start: '2026-04-27',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture', url: 'lectures/CloudWatching-IMC.pdf' },
              { label: 'Paper Reference: Cloud Watching', url: 'https://lizizhikevich.github.io/assets/papers/Cloud_Watching.pdf' }
            ]
          },
          {
            title: 'Group Presentation Feedback',
            start: '2026-04-29',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Individual Group Meetings, 1-on-1 Practice Talks',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1HlEA8JXmE4mE70MsJDX3srfOw_qVyaiBUEQjB-F6BD8' },       
            ]
          },
          {
            title: 'Mid-Point Project Presentations',
            start: '2026-05-04',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Project Presentation',
            items: [
              { label: 'Presentation Rubric: ', url: 'https://docs.google.com/document/d/1qYgbsvrDPedcM9_bq9hP4rQu6RvsNGoCjv-1ignCX8g' },
                      
            ]
          },  
          {
            title: 'HW: Project Milestone',
            start: '2026-04-30',
            end: '2026-05-04',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Finalize midpoint presentation and continue working on paper.',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1ABzdnuTojN7a45pH5TTUZPg9xohkIJjik-FGIZMVdhk/' },
            ]  
          },          
          {
            title: 'Content Delivery Networks',
            start: '2026-05-06',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: ', url: 'L-CDN.pdf' }, 
              { label: 'Paper Reference: ', url: 'https://www.usenix.org/system/files/conference/nsdi15/nsdi15-paper-flavel.pdf' },        
            ]
          }, 
          {
            title: 'HW: Project Milestone',
            start: '2026-05-06',
            end: '2026-05-18',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Work on paper results.',
            items: [
              { label: 'HW Instructions', url: 'https://docs.google.com/document/d/1tankZy_nv4pRjPMhweIxRTccu6p17RyX6pZ17UOWhy0' },
            ]  
          },          
          {
            title: 'HW: Internet Scanning Analysis',
            start: '2026-05-11',
            end: '2026-05-18',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Internet Scanning Hw Assignment',
            items: [
              { label: 'HW Instructions:', url: '' }
            ]  
          },
          
          {
            title: 'GEO Satellites Part 1',
            start: '2026-05-11',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation, Lecture',
            items: [
              { label: 'Lecture: GEO Satellites', url: 'lectures/GEO.pdf' },//lectures/L8-GEO.pdf
              { label: 'Paper Reference: A Tale of Sea and Sky', url: 'https://ieeexplore.ieee.org/abstract/document/9152624' }
                      
            ]
          },
          {
            title: 'GEO Satellites Part 2',
            start: '2026-05-13',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'GEO Satellites',
            items: [
              { label: 'Guest Lecture', url: '' },
              { label: 'Paper Reference: ', url: 'https://satcom.sysnet.ucsd.edu/docs/dontlookup_ccs25_fullpaper.pdf' },
            ]
          },

          {
            title: 'LEO Satellites Part 1',
            start: '2026-05-18',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation,Lecture',
            items: [
              { label: 'Lecture: LEO Satellites', url: '' }, //lectures/L10-LEO.pdf
              { label: 'Paper Reference: LEO HitchHiking', url: 'https://lizizhikevich.github.io/assets/papers/LEO-HitchHiking.pdf' }
            ]
          },
          {
            title: 'LEO Satellites Part 2',
            start: '2026-05-20',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Student Presentation,Lecture',
            items: [
              { label: 'Lecture: LEO Satellites', url: '' } //lectures/L10-LEO.pdf
            ]
          },
          {
            title: 'Holiday',
            start: '2026-05-25',
            color: '#718096',
            type: 'No Class',
            description: 'No class.'
          },

          {
            title: 'Final Presentations',
            start: '2026-05-27',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'No required reading. Attendance mandatory.'
          },
          {
            title: 'Final Presentation',
            start: '2026-05-20',
            end: '2026-05-27',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Released 5/20, due 5/27 at 5:00 PM.',
            items: [
               { label: 'Upload Final Presentation to Gradescope', url: '' }
            ]
          },
          {
            title: 'Final Write Up',
            start: '2026-05-27',
            end: '2026-06-03',
            color: '#EAAA00',
            type: 'Homework',
            description: 'Due Week 10.',
            items: [
              { label: 'Final Write-Up', url: 'https://docs.google.com/document/d/1gc6_w3CW2FM9gI5xktHADuMHtXmvbGZD7RME6_B7M0E' }
            ]
          },
          {
            title: 'TBD',
            start: '2026-06-01',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'TBD'
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
            title: 'TBD',
            start: '2026-06-03',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'TBD.'
          }
        ];
