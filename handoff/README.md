# Handoff to Hugo (team only)

Based on Devin's two prompts and pre-send checklist (2026-10-19), with Nic's decisions applied.

## Files

1. `1-starter-prompt.md`: send to Hugo first. Account setup only. The full handoff prompt is already pasted inside it.
2. `2-handoff-prompt.md`: master copy. Hugo gets it back from the starter chat with his setup facts filled in. If his copy comes out garbled, send him this one with his facts filled in.
3. `1-starter-prompt.src.md` + `build.py`: edit these, then run `python3 handoff/build.py` to regenerate `1-starter-prompt.md`.

## Decisions already applied

1. Handover: transfer the repo to Hugo's GitHub
2. Hosting: Vercel Hobby (free), under Hugo's account
3. Claude: Hugo pays for his own plan
4. Accounts email: hugo.fugeard@gmail.com. Google Workspace mentioned as a later option
5. Team contacts: Nic and Devin, WhatsApp
6. Domain: Hugo buys it in Vercel during the handoff. hugofugeard.com and hugofugeard.fr were both available on 2026-10-19
7. Claude speaks French to Hugo
8. Site: Astro, no environment variables, no secrets. Text in `src/content/*.json`, photos in `src/images`

## Still to do before sending

1. Starter prompt
   1. Run it once with a throwaway account to catch anything that reads wrong
2. Handoff prompt
   1. Hugo has picked a version (A is `main`, B is `version-b`, C is `version-c`). Merge the winner into `main` and delete the other branches
   2. Fill the one remaining [TEAM FILLS] field: the repo link
   3. Real photos from Hugo replace the placeholders in `src/images`
   4. Hugo confirms the facts on the site (see below)
   5. Test-deploy the exact repo to Vercel from a clean account with default settings, then remove that test project
   6. Agree between Nic and Devin what counts as a team issue versus a "Hugo asks Claude" issue
   7. Delete this `handoff` folder, then transfer the repo

## Facts on the site that Hugo must confirm

1. He travels in France and abroad, and travel is included in the proposal
2. Cuisines listed: French, Italian, Portuguese, Indian
3. He can bring an assistant or butler on request
4. A deposit confirms the dates; groceries billed at cost with receipts
5. Groceries delivered when possible, otherwise he shops
6. Photo consent from anyone recognisable in `table-1.jpg` (from Emma's birthday weekend)
