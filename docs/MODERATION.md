# Leaderboard name moderation

Nicknames only go public after a person reads them. Nothing is automatic.

## Before adding a row to `web/src/data/leaderboard.json`
1. Books really arrived and passed the condition check.
2. The donor ticked the consent box.
3. The nickname passes ALL of these:
   - Not rude, hateful, sexual, or violent; no bullying or jokes about a person.
   - Not a full real name (first name + initial is OK), no email, phone, address or links.
   - Not impersonating a real person, school, brand or the BookBridge team.
4. Run `npm run check:leaderboard` (in `web/`). It also runs on every upload and blocks the deploy if a row looks bad.
5. If unsure, ask the adult contact (parent) or use "Anonymous donor" and tell the donor.

## Removing a name
Delete the row, push. Donors can ask by replying to any email.

The automatic check is a first filter only; clever spellings can slip through. The human read in step 3 is the real safeguard.
