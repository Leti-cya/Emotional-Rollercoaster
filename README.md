# Emotional Rollercoaster

## Overview
Welcome to my chaotic little music web app ‧₊˚♪ 𝄞₊˚⊹
Shuffle through my playlist with album art, song info, mood, and favorite lyrics. Colors, fonts, and background effects shift with each song for the full effect. Every 10th song? Chaos Mode. Because why not ₍₍⚞(˶>ᗜ<˶)⚟⁾⁾

## File Structure
- `music.html` → main page
- `style.css` → styling & particle effects
- `script.js` → song data, logic, chaos mode

## Features
- Randomly rotates songs from the playlist
- Special chaos songs that pop up every 10th track
- Dynamic Theme: background, font, buttons, mood section
- Manual “Next” button (no autoplay—replay your fav songs as much as you want ₍^. .^₎Ⳋ )
- Tracks songs played and resets after chaos
- LocalStorage remembers the last song played (even if you reload the page ദ്ദി ˉ꒳ˉ )✧ )

## How It Works
- Songs live in `script.js` as objects with:
  - `title`, `artist`, `mood`, `description`, `quote`
  - `color`, `bgColor`, `textColor` (theme per song)
  - `particleType` (`rain`, `bubble`, `feather`)
  - `isChaos` (true = chaos song ฅ^>⩊<^ ฅ )
- Songs are split into normal vs chaos arrays
- `songCount` tracks and triggers chaos mode for every 10th song (alert + crazy animation)
- Next button handles normal vs chaos logic automatically

## Notes
- Audio is embedded via SoundCloud iframes
- Particle effects are dynamically generated in JS
- Chaos mode resets system after playing
- Can fully customize song data; site still works if something’s missing (hopefully 𐔌՞. .՞𐦯 )
    - To add songs: add a new custom object in `songs` array in `script.js`
    - Set `isChaos: true` if it should only appear during chaos mode

## Usage
1. Open `music.html` in a browser
2. Click “Next” to shuffle through the playlist
3. Watch colors, fonts, and particles change per mood
4. Chaos mode triggers automatically every 10th song

## Future Ideas
(May or may not be implemented based on my mood ∘ ∘ ∘ ( °ヮ° ) ? )
- Toggle particle ambiance on/off
- Smooth transitions for text and song changes
- Smart song suggestions based on mood
- Favorite songs prioritized
- Better UI elements
- Maybe chaos levels… maybe search mood feature… 𑣲₍ ᐢ. .ᐢ₎

⸻

Coding this was mainly for fun (although it's not fun when the code doesn't work… ( •̀ ᴖ •́ ) ). If it crashes… well, oops (⸝⸝>؂•̀⸝⸝)ᕗ✧