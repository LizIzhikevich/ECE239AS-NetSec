const scheduleEvents = 
[
          {
            title: 'Introduction to Internet Scanning',
            start: '2026-03-30',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Intro to Internet Security, Course Overview, Presentation Instructions, Presentation Schedule, and How to Read a Paper.',
            items: [
              { label: 'Intro to Internet Security', url: 'lectures/L1-Intro.pdf' },
              { label: 'Presentation Instructions', url: 'https://docs.google.com/document/d/1qYgbsvrDPedcM9_bq9hP4rQu6RvsNGoCjv-1ignCX8g/' },
              { label: 'Presentation Schedule', url: 'https://docs.google.com/spreadsheets/d/1cBANaylcDcTz5xj28ke2N1HjKetTo_uuBPmty4jIiEs/edit?usp=sharing' }
            ]
          },
          {
            title: 'Reading Due: LZR',
            start: '2026-04-02',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://www.usenix.org/system/files/sec21-izhikevich.pdf',
            description: 'LZR: Identifying Unexpected Internet Services'
          },
          {
            title: 'Internet Scanning Research',
            start: '2026-04-01',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Research Topics, Censys, Paper Discussion',
            items: [
              { label: 'Research Topics', url: 'https://docs.google.com/document/d/1-Dx_9vnk1R1PAPuH3A-5T6y65lXlsV46fGUHzFdcdC0' },
              { label: 'Censys', url: 'https://platform.censys.io' }
            ]
          },
          {
            title: 'Project 1 Window',
            start: '2026-04-01',
            end: '2026-04-08',
            color: '#EAAA00',
            type: 'Project Window',
            description: 'Released 4/1, due 4/7.',
            items: [
              { label: 'Instructions', url: 'https://docs.google.com/document/d/1BtAJyScvYrxwoXOtsYWoJOvCeV3dVBQCxyhrcQM6Ivs' },
              { label: 'Group Sign-Ups', url: 'https://docs.google.com/spreadsheets/d/1n_Q2POeLowH4tUXlPOwLFx87T5mOxdKTJTL_ySgFZ2g' }
            ]
          },
          {
            title: 'Internet Data Analysis',
            start: '2026-04-06',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'SQL (BigQuery) For Analysis, Research Group Meetings',
            items: [
              { label: 'SQL (BigQuery) For Analysis', url: 'lectures/L3-Big Query for Internet Data Analysis.pdf' }
            ]
          },
          {
            title: 'Project 2 Window',
            start: '2026-04-06',
            end: '2026-04-10',
            color: '#EAAA00',
            type: 'Project Window',
            description: 'Released 4/6, due 4/9.',
            items: [
              { label: 'Instructions', url: 'https://docs.google.com/document/d/1pWojPtE2sIrpLAk6aC0QZx-w7Keuxy5WjH0jKk-pUPE' }
            ]
          },
          {
            title: 'Predictive Internet Scanning',
            start: '2026-04-08',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Predictive Scanning, How to Give a Good Talk, Research Group Meetings',
            items: [
              { label: 'Predictive Scanning', url: 'lectures/L4-PredictiveScanning.pdf' },
              { label: 'How to Give a Good Talk', url: 'lectures/L4-GoodTalks.pdf' }
            ]
          },
          {
            title: 'Project 3 Window',
            start: '2026-04-08',
            end: '2026-04-15',
            color: '#EAAA00',
            type: 'Project Window',
            description: 'Released 4/8, due 4/14.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1QNTdTcr5BHad6eSrMmL2UmXN239guG4AFGwi5amn9x8/' }
            ]
          },
          {
            title: 'Reading Due: Predicting IPv4 Services',
            start: '2026-04-14',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://lizizhikevich.github.io/assets/papers/gps.pdf',
            description: 'Predicting IPv4 Services Across All Ports'
          },
          {
            title: 'Abusing Internet Scanning',
            start: '2026-04-13',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Botnets, Paper Discussion, Student Presentation',
            items: [
              { label: 'Botnets', url: 'lectures/L5-MaliciousScanning.pdf' }
            ]
          },
          {
            title: 'IPv6 Scanning',
            start: '2026-04-15',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'IPv6, Paper Discussion, Student Presentation',
            items: [
              { label: 'IPv6', url: 'lectures/L6-IPv6.pdf' }
            ]
          },
          {
            title: 'Project 4 Window',
            start: '2026-04-15',
            end: '2026-04-22',
            color: '#EAAA00',
            type: 'Project Window',
            description: 'Released 4/15, due 4/21.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1mpzAjYUeVrY_v-LM6d795cIPLUbuOYZ_mMtuem3dSKs' }
            ]
          },
          {
            title: 'Reading Due: Mirai Botnet',
            start: '2026-04-16',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://www.usenix.org/system/files/conference/usenixsecurity17/sec17-antonakakis.pdf',
            description: 'Understanding the Mirai Botnet'
          },
          {
            title: 'Cloud Storage Scanning',
            start: '2026-04-20',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Cloud Storage, Paper Discussion, Student Presentation',
            items: [
              { label: 'Cloud Storage', url: 'lectures/L7-CloudStorage.pdf' }
            ]
          },
          {
            title: 'IPv6 Reading Due: 6Sense',
            start: '2026-04-21',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://www.usenix.org/system/files/usenixsecurity24-williams.pdf',
            description: '6Sense: Internet-Wide IPv6 Scanning and its Security Applications'
          },
          {
            title: 'Cloud Compute Scanning',
            start: '2026-04-22',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'Group Meetings, Paper Discussion, Student Presentation'
          },
          {
            title: 'Project 5 Window',
            start: '2026-04-22',
            end: '2026-04-29',
            color: '#EAAA00',
            type: 'Project Window',
            description: 'Released 4/22, due 4/28.',
            items: [
              { label: 'Instructions', url: 'https://docs.google.com/document/d/1o-6mnOFx_uMRPRcyNtQ17FXGxmo0lZ4_3AR-lLWUR-E/' },
              { label: 'Presentation Sign-Ups', url: 'https://docs.google.com/spreadsheets/d/1R4u7pyjVR3o-FWXh_tSmwnXDwl1ZSyCEUMmkXwqGEcg' }
            ]
          },
          {
            title: 'Reading Due: Honeybuckets',
            start: '2026-04-23',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://lizizhikevich.github.io/assets/papers/honeybuckets.pdf',
            description: 'Using Honeybuckets to Characterize Cloud Storage Scanning in the Wild'
          },
          {
            title: 'GEO Satellites',
            start: '2026-04-27',
            color: '#2b6cb0',
            type: 'Lecture',
            description: 'GEO Satellites, Paper Discussion, Student Presentation',
            items: [
              { label: 'GEO Satellites', url: 'lectures/L8-GEO.pdf' }
            ]
          },
          {
            title: 'Reading Due: My Cloud',
            start: '2026-04-28',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://rist.tech.cornell.edu/papers/cloudsec.pdf',
            description: 'Hey, You, Get Off of My Cloud: Exploring Information Leakage in Third-Party Compute Clouds'
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
            type: 'Project Window',
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
            title: 'Reading Due: Maritime VSAT',
            start: '2026-05-05',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://ieeexplore.ieee.org/abstract/document/9152624',
            description: 'A Tale of Sea and Sky On the Security of Maritime VSAT Communications'
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
            type: 'Project Window',
            description: 'Released 5/6, due 5/14.',
            items: [
              { label: 'Write-Up', url: 'https://docs.google.com/document/d/1CpzaoH3Seayix95bh6aWpYCmAzc7W2MC1ciTlkZm_kU' }
            ]
          },
          {
            title: 'Reading Due: LEO Measurements',
            start: '2026-05-07',
            color: '#dd6b20',
            type: 'Reading Due',
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
              { label: 'Internet Criminals', url: 'lectures/L11-Criminals.pdf' }
            ]
          },
          {
            title: 'Reading Due: IoT Devices',
            start: '2026-05-12',
            color: '#dd6b20',
            type: 'Reading Due',
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
              { label: 'Internet Criminals Part 2', url: 'lectures/L11-Criminals.pdf' }
            ]
          },
          {
            title: 'Reading Due: Bullet-Proof Hosting',
            start: '2026-05-14',
            color: '#dd6b20',
            type: 'Reading Due',
            url: 'https://www.usenix.org/system/files/sec19-noroozian.pdf',
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
            type: 'Project Window',
            description: 'Released 5/20, due 5/30 at 5:00 PM.',
            items: [
              { label: 'Final Write-Up', url: 'https://docs.google.com/document/d/1gc6_w3CW2FM9gI5xktHADuMHtXmvbGZD7RME6_B7M0E' }
            ]
          },
          {
            title: 'Reading Due: ML in Security',
            start: '2026-05-21',
            color: '#dd6b20',
            type: 'Reading Due',
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
            type: 'Project Window',
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
            type: 'Project Window',
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
