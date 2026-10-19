# Hugo Fugeard, private chef

The website for Hugo Fugeard, private chef in Annecy. French at `/`, English at `/en/`.

## Où modifier quoi / Where to change what

| Je veux changer... / I want to change... | Fichier / File |
| --- | --- |
| Les textes en français / French text | `src/content/fr.json` |
| Les textes en anglais / English text | `src/content/en.json` |
| E-mail, WhatsApp, adresse du site / email, WhatsApp, site address | `src/content/site.json` |
| Les photos / photos | dossier / folder `src/images` |

Rules / Règles :

1. Change the text between the quotes `"..."` only. Keep the quotes and the commas.
   Ne changez que le texte entre les guillemets `"..."`. Gardez les guillemets et les virgules.
2. A French change usually needs the same change in English, and the other way round.
   Un changement en français demande souvent le même changement en anglais.
3. To replace a photo, upload a new one to `src/images` with the exact same name (for example `hero.jpg`). Or upload it with a new name and change the name in `fr.json` and `en.json`.
   Pour changer une photo, envoyez-la dans `src/images` avec exactement le même nom. Ou avec un nouveau nom, puis changez le nom dans `fr.json` et `en.json`.
4. Photos are resized automatically. Any phone photo is fine.
   Les photos sont redimensionnées automatiquement.
5. If the site breaks after a change, Vercel keeps the previous version online. Ask Claude to help you find the mistake.
   Si le site casse après un changement, Vercel garde l'ancienne version en ligne.

## Photos

| File | What goes there |
| --- | --- |
| `hero.jpg` | Big photo at the top: an inviting table |
| `hugo.jpg` | Portrait of Hugo, warm and smiling |
| `table-1.jpg` to `table-6.jpg` | Gallery: dishes, friends at the table, ingredients, dessert, Hugo cooking |

## For developers

Astro static site, no environment variables, no secrets. `npm install`, `npm run dev`, `npm run build`. Vercel detects it automatically with default settings.
