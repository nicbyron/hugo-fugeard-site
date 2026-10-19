# Builds 1-starter-prompt.md by pasting the handoff prompt into the starter template.
from pathlib import Path
here = Path(__file__).parent
src = (here / '1-starter-prompt.src.md').read_text()
handoff = (here / '2-handoff-prompt.md').read_text().strip()
(here / '1-starter-prompt.md').write_text(src.replace('{{HANDOFF_PROMPT}}', handoff))
