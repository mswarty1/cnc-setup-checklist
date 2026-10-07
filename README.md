# CNC Setup Checklist

**Live web version:** https://mswarty1.github.io/cnc-setup-checklist/

A free, single-page web app that walks you through a repeatable CNC router job setup before you press Start. It runs in any browser (phone, tablet or desktop), works offline once loaded, and can be installed to your home screen like an app.

It is based on a third-party CNC router project setup checklist and chipload calculator, and is shared for feedback.

---

## Features

### Checklists
- **Full Setup checklist** - 27 steps in 4 sections: Material (5), Router Bit (7), Start Point (6) and Final Checks (9). Work through them in order before every job.
- **Bit Change mode** - a shorter 11-step checklist for swapping bits mid-job without repeating the whole setup.
- **Per-line responses** - mark each line done (tick), flagged, N/A or skipped, so nothing is silently missed.
- **Quick Start from Template** - start a new job from one of your last 5 jobs and reuse its details.
- **Bit-order picker** - choose the bits for a job and get a clear, readable list (1st: 2F / 2nd: 3F ...). The box expands to show every bit neatly.
- **Bit-holding guide** - a reference for the correct way to hold and install router bits, shown at the bit-install step.

### Calculators and tools
- **Chipload calculator** - works out feed rate from bit diameter, flutes, spindle speed and material. Presets for Hardwood, Softwood and MDF; metric or imperial.
- **Tools library** - save your bits (name, diameter, type, flutes, notes), pick them from a list when filling in a job, and track cut time per bit so you know when one is worn.
- **Tool import** - bring in an existing tool database from Vectric (.vtdb), JSON, CSV or XML. Importing works offline.

### Records
- **History** - every completed checklist is saved so you can look back at past jobs.
- **Report and PDF** - open a job report from the header and download it as an A4 PDF, one bit per line.

### Settings and app
- **Shop / operator details** - name and shop, added to reports.
- **Units** - switch between millimetres and inches throughout the app.
- **Feedback** - a link straight to the GitHub issues page.
- **Install and offline use** - install to your home screen (where your browser offers it); the app keeps working with no connection.
- **Clear layout** - solid white or black theme, large tap targets, no sounds.

All data stays on your device (browser local storage). Nothing is uploaded.

---

## Why use the checklist from the original document

The app is built around the original setup checklist rather than a made-up list, because:

- **It is a proven order.** Material, bit, start point, then final checks follows how a job actually goes wrong, so mistakes are caught before the cut, not during it.
- **It prevents costly errors.** Wrong zero, loose collet, unclamped stock or the wrong bit are cheap to fix before you start and expensive after.
- **It is consistent.** The same steps every time mean the same quality, whether it is your first job of the day or your last, and whoever is operating the machine.
- **It supports safety.** Final checks cover clamping, clearances, dust extraction and being ready to stop the machine.
- **It handles bit changes.** The short Bit Change list keeps you safe and accurate mid-job without redoing everything.
- **It leaves a record.** Reports and history show what was checked on each job, which helps with troubleshooting and repeat work.

---

## Samples

The `samples/` folder holds example tool libraries you can import to try the Tools tab.

## Feedback

Found a bug or have an idea? Open an issue: https://github.com/mswarty1/cnc-setup-checklist/issues/new
