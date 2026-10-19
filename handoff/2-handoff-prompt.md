You are going to help me, Hugo, put my company's marketing website into my own GitHub account, publish it through my own Vercel account, give it its own web address, and learn how to make simple changes myself. I am not a developer. I use a Windows computer. I will not be installing any developer software; everything happens in the web browser.

Please read everything below before you reply.

LANGUAGE
Talk to me in French, in simple words. When a button or menu on screen is in English, write its exact English name in quotes, then explain it in French. Example: cliquez sur "Deploy" (publier).

WHAT HAS ALREADY HAPPENED
- I have a GitHub account. Username: [FROM SETUP CARD: GitHub username]. Email used: [FROM SETUP CARD: email].
- I have a Vercel account, signed in by: [FROM SETUP CARD: Vercel sign-in method].
- Two-factor sign-in is on for GitHub. My recovery codes are kept at: [FROM SETUP CARD: place only]. I will never paste them here.
- My Claude plan: [FROM SETUP CARD: plan as noted]. I pay for it myself.
- A team led by Devin has built the website for me and I have chosen the version I want.
- My team contacts are Nic Byron and Devin Hanaway, on WhatsApp. For anything that feels unsafe, or for anything you cannot explain, I pause and message them.

WHAT MY TEAM HAS TOLD ME ABOUT THE WEBSITE
- Website source: [TEAM FILLS: link to the GitHub repository, e.g. github.com/nicbyron/hugo-fugeard-site]
- How it is being handed to me: The team is transferring the repository to my GitHub account. I look for an email from GitHub asking me to accept the transfer.
- Repository name to expect: hugo-fugeard-site
- What kind of site it is: an Astro website. Vercel recognises it automatically. No build settings to change.
- Where the words and pictures live:
  - src/content/fr.json: all the French text
  - src/content/en.json: all the English text
  - src/content/site.json: my email, my WhatsApp number, and the website address
  - src/images: all the photos
  - README.md: a short guide, in French and English, to which file does what
- Settings Vercel needs: none. Accept Vercel's defaults. No secret values exist for this site.
- Vercel plan decision: stay on the free Hobby plan.
- Custom domain: yes. In Step 6 we choose and buy a domain with my name, inside Vercel, under my account.
- File to use for the test change: src/content/fr.json. Find the line "title": "Bonjour, moi c'est Hugo" and change only the words inside the quotes, for example to "Bonjour, je suis Hugo".

HOW I WANT YOU TO WORK WITH ME
1. One step at a time. Give me a single action, then stop and wait for me to say "done" or to describe what I see.
2. For every step, tell me what to do, what success looks like, and what to do if my screen looks different.
3. Short messages, plain words. Explain any technical word in one sentence the first time.
4. Never ask me to paste a password, two-factor code, recovery code, API key, token, card number or any other secret into this chat. Stop me if I start to.
5. Do not describe screens from memory as if you can see them. Ask me what I see, or ask for a screenshot.
6. You cannot see my screen, open websites, click anything, push code, or deploy. You can only read what I type and the screenshots I paste. If this version of Claude has connected tools that could act for me, say so before using them and ask first.
7. If a website shows a warning, asks for a permission, mentions a cost, or asks for a setting I would not understand, explain it before I click. Never suggest skipping or disabling a security protection. Never suggest deleting a repository or a Vercel project, or making the repository public or private, without first explaining it and telling me to check with my team.
8. If something looks like a genuine security problem, tell me to stop and message Nic or Devin.
9. Everything must stay under my own accounts. Nothing should depend on Nic's or Devin's accounts.
10. Follow only the handover method above. Do not improvise a different method.

THE STEPS, IN ORDER

STEP 0. Introduce yourself briefly, in French. Say honestly what you can and cannot do (rule 6). Read back the key facts above in two or three lines so I can confirm they are correct. Then ask me to open github.com and sign in.

STEP 1. Get the website into my GitHub account by accepting the transfer. Help me find the email from GitHub, or the notification on github.com, and accept it. Success looks like: on my GitHub profile I see a repository called hugo-fugeard-site under my own username, and it contains files (not an empty page). If I do not see it, ask me to describe or screenshot what I see before suggesting anything.

STEP 2. Connect it to Vercel. Guide me to sign in to vercel.com and start a new project by importing from GitHub. If Vercel asks for permission to see my GitHub repositories, explain that this is expected and that I may give access only to this one repository. Have me select hugo-fugeard-site. Before I press the deploy button, have me check that nothing needs changing (see "Settings Vercel needs" above) and leave everything at the default. Then deploy. Success looks like: Vercel shows a success screen with a web address ending in vercel.app. If it shows an error, ask me for a screenshot and help me read it. If we cannot fix it together in a few minutes, tell me to send the screenshot to Nic or Devin rather than keep trying.

STEP 3. Prove it works. Have me open the vercel.app address in a fresh browser tab and, if I can, on my phone. Check both languages: the French page, and the English page at the same address followed by /en/. Success looks like: my website loads and looks like the version I chose.

STEP 4. Make one small change myself. Using the GitHub website only (no software installed): guide me to open the test file named above, click the edit (pencil) option, change the test line, and save with the commit button. Explain that "commit" just means "save this version". Then have me wait a minute or two and refresh the vercel.app address. Success looks like: my change appears on the live site. This proves the whole chain works and that I can do it alone.

STEP 5. Teach me the routine, in a short plain list in French that I will keep:
- To change words: tell Claude what I want changed and on which page. Claude tells me which file (fr.json for French, en.json for English), the current text, and the exact new text. I open the file in GitHub, edit only between the quotes, commit, wait, refresh. If I change the French, I usually change the English too.
- To add or replace a picture: in GitHub, go to the src/images folder and upload the file. Easiest: give it the same name as the photo it replaces (for example hero.jpg). Otherwise ask Claude for the exact change to make in fr.json and en.json.
- If something breaks or an error appears, in GitHub or in Vercel: take a screenshot and show Claude. Vercel keeps the previous version of the site online, and a broken change can be reversed; ask Claude to walk me through going back.
- Before any change that is not words or pictures (new pages, forms, payments, anything involving my account settings or access), ask Nic or Devin first.
- Never give anyone access to my GitHub or Vercel account because they asked for it in an email or message. Check with Nic or Devin.

STEP 6. My own web address (domain). We do this inside Vercel, on my project, in the domain settings.
(a) Explain in two sentences what a domain is and that it is paid every year.
(b) Help me pick a name that will work well on Google and is easy to say out loud: my name, no hyphens, no numbers, as short as possible. Check in this order, using Vercel's domain search: hugofugeard.com, hugofugeard.fr, chefhugofugeard.com, hugofugeard-chef.com only if all others are taken. A .com suits international clients; a .fr suits French clients. If both .com and .fr are free and cheap, explain that I can buy both and send one to the other, and let me decide. If Vercel does not offer .fr, the .com alone is fine.
(c) Before I pay, read me the yearly price Vercel shows and confirm I want it. I pay with my own card, typed directly into Vercel's page, never into this chat.
(d) After buying, help me attach the domain to my project and wait until Vercel shows it as working. Success looks like: typing my new address in the browser opens my website, with the padlock icon.
(e) Then help me update one line: in src/content/site.json, change "url" to my new address, starting with https:// (for example "https://hugofugeard.com"). This tells Google the correct address of my site. Commit, wait, refresh.
(f) Tell me, without doing anything now: once I have my domain, I can get a professional email address such as hugo@mydomain through Google Workspace, a paid Google service. Until then my Gmail is fine. If I want it later, I ask Nic or Devin.

STEP 7. Be found on Google. Guide me to Google Search Console (free), signed in with my Gmail. Help me add my website and prove I own it using the method Google suggests for a domain bought at Vercel. Then submit my sitemap: my address followed by /sitemap-index.xml. Explain that Google can take a few days or weeks to show my site. Then tell me that a free Google Business Profile ("chef à domicile" in Annecy) is the next big step for being found locally, and that I can set it up with Nic or Devin later.

STEP 8. The finish line. Give me a WEBSITE CARD in plain text to add to my "Website Setup" document: my web address, the link to my repository, the files I edit for text and pictures, the routine from Step 5, my domain and when it renews, and my team contacts (Nic Byron and Devin Hanaway, WhatsApp). No secrets. Then say, in French: "Your website is live and you own it. For future changes, open a new chat, paste your Website Card at the top, and describe what you want to change."

Start with Step 0.
