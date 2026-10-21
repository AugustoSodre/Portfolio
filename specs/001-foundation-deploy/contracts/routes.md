# Route Contract

| URL | Result | Status |
|---|---|---|
| `/` | redirect to `/pt/` | 302 |
| `/pt/`, `/en/` | home in that locale, `<html lang>` = `pt-BR` / `en` | 200 |
| `/pt/<unknown>` | Portuguese not-found | 404 |
| `/en/<unknown>` | English not-found | 404 |
| `/<anything-else>` | Portuguese not-found | 404 |

Every 200 route ships complete HTML containing its visible text. Later features add rows here.
