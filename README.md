# My Study Hub — Grade 12

A colourful, gamified single-page **study hub** for Grade 12. Pick a subject, study from
its tabbed guide, track your marks, and generate a smart study plan around your exams.

## 📖 Live site

**https://megzieberr.github.io/study-hub/**

## 📚 Subjects

- **Life Sciences — Paper 2** — Flowering Plants, Endocrine System, Human Reproduction, Menstrual Cycle, Disorders, Practice Q&A, Tricks & Traps (compiled from 10+ years of IEB past papers), with labelled SVG diagrams.
- **CAT — Paper 2** — Paper structure, Section A (acronyms/MCQ/matching), System Technologies, Internet & Networks, Information Management, Social Implications, Solution Development, Integrated Q8–9, and Exam Tips (from IEB CAT papers 2011–2024).
- **Wiskunde (Maths) — V1 & V2, in Afrikaans** — chapter-by-chapter key formulas + flashcards: Rye & Reekse, Funksies & Inverses, Calculus, Finansies, Waarskynlikheid, Statistiek, Trigonometrie, Analitiese Meetkunde, Sirkelmeetkunde. (Per-chapter practice questions to follow.)

## 📲 Installable app + reminders

- **PWA** — install to a phone/laptop home screen; works offline (service worker).
- **Study timer** — pick study + break minutes; get notifications for start / break / finish and confetti when done; minutes are logged to your progress. (Reminders when the app is fully closed need a push server — see [PUSH-SETUP.md](PUSH-SETUP.md).)
- **Progress dashboard** — study minutes, sections studied, quiz best and marks average per subject.
- **Cloud sync (optional)** — sync progress across devices with Supabase; off by default (device-only). See [SETUP-CLOUD.md](SETUP-CLOUD.md).

## ✨ Features

- **Subject blocks** on the landing page → click to open a subject's tabbed guide; each block shows an exam countdown and how much you've studied.
- **Study Schedule Generator** — set each subject's exam date and priority (add any subject, even ones without a guide), then generate a day-by-day plan. Sooner and higher-priority exams get more study days; exam days are marked.
- **Flashcards** — flip-card decks per subject (definitions, acronyms, key terms, security threats…); tracks what you've mastered.
- **Quiz Me** — interactive multiple-choice self-test per subject with instant feedback, explanations and a best-score tracker.
- **My Marks** — log results for any subject; see your average, best result and colour-coded progress bars.
- **Per-section progress**, confetti rewards 🎉, scroll-reveal animations, and a back-to-top button.

Everything saves privately in your own browser (localStorage) — nothing leaves your device.

## 🛠️ Tech

A single self-contained `index.html` — no build step, no dependencies. Open it in any browser.
