# Angular Aria Cinema

This repository is a **project-based learning playground** for **Angular Aria**.

Instead of isolated examples, we build a **simplified cinema application**, where each feature demonstrates real-world accessibility challenges and how Angular Aria helps solve them by focusing on **user experience**, not just ARIA compliance.

---

## What This Repository Is

- A **hands-on companion** to Angular Aria articles
- A **learning-by-doing** approach to accessibility
- A growing collection of **practical Angular Aria patterns**
- A place to experiment with **keyboard navigation, focus management, and screen readers**

This is **not** a component library.  
This is **not** a checklist of ARIA attributes.

It’s about building **inclusive UI flows from the start**.

---

##  Getting Started

```bash
git clone https://github.com/AdrianRomanski/angular-aria-cinema.git
cd angular-aria-cinema
yarn install
```

## Exercises & Branches

Each exercise lives on its own Git branch and follows the same structure:

- `part-X-start` — starting point for the exercise
- `part-X-finish` — completed solution

---

## 🎨 Chromatic Previews

This project uses **Chromatic** to showcase accessible UI states and interactions visually.

Chromatic allows you to explore the components **without running the app locally**, making it easier to review layout, states, and visual behavior alongside the exercises.

### Available Instances

- **Main branch**  
  https://696220fa05c327809bcea813-qqrvwlisye.chromatic.com/

- **Exercise 1 – Finished solution (`part-1-finish`)**  
  https://696220fa05c327809bcea813-nuqkbeltit.chromatic.com/

These previews are especially useful for:
- Reviewing component structure and states
- Verifying visual consistency across exercises
- Discussing UI decisions independently from implementation
- Pairing visual review with keyboard and screen reader testing

> ⚠️ Note: Chromatic previews focus on visual output.  
> For full accessibility verification, always test with **keyboard navigation** and **screen readers** (VoiceOver / NVDA).

---

### Part 1 — Day Selection (Combobox + Listbox)

**Feature:**  
Selecting a day for a movie screening using an accessible custom select.

**Branches:**
- `part-1-start`
- `part-1-finish`

**Angular Aria used:**
- `@angular/aria/combobox`
  - `ngCombobox`
  - `ngComboboxInput`
  - `ngComboboxPopupContainer`
- `@angular/aria/listbox`
  - `ngListbox`
  - `ngOption`

**Accessibility concepts covered:**
- Combobox vs native select
- Keyboard navigation
- Screen reader announcements
- `aria-expanded`, `aria-haspopup`, `aria-labelledby`
- Disabled options
- Focus management

---

