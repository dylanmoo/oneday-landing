# Becoming Superhuman — Workshop Recap

Thank you for joining us! Here's everything you need to keep building.

---

**Want personalized 1:1 guidance to 10x your workflow with AI?**
Apply here (or share with a friend): https://oneday-ai.vercel.app/landing.html

---

## Workshop Resources

**Workshop Recording**
Rewatch the full session at your own pace:
https://drive.google.com/file/d/1stY8euWB3p8CBvefbIPg9ym1IBpsF312/view?usp=sharing

**Presentation Slides**
All prompts from the workshop — click any prompt to copy it:
https://oneday-ai.vercel.app/workshop-slides.html

---

## Voice-to-Text Tools

Talk to your computer instead of typing — these tools let you dictate prompts to Claude Code:

- **Wispr Flow** — AI-powered voice dictation that works anywhere on your Mac: https://wisprflow.ai/
- **Talktastic** — Voice-to-text for fast, natural input: https://talktastic.com/

---

## Workshop Prompts

Here are the prompts from the session, in order:

**1. Setup**
> Set up a folder structure for my life-os with sections for notes, projects, and plans

**2. Import Your Notes**
> I want to build a personal organization system. First, interview me with 3 questions about my life, my priorities, and what I struggle with — ask one at a time. Then, import my 100 most recent Apple Notes as markdown files organized into my life-os folder based on what you learned about me.

**3. Analyze Themes**
> Look through all the notes you just organized. Give me a summary of the major themes you see in my life — what I'm thinking about, working on, and care about most.

**4. Build Your Dashboard**
> Based on everything you know about me, create a beautiful HTML dashboard called "about-me" that visualizes my entire organization system at a glance — who I am, what I care about, my top priorities, what I'm working on, and what's coming up. Make it feel like a personal command center.

**5. Create a Skill**
> Create a skill called /morning-briefing that does the following when I run it: read through my life-os folder, summarize my top priorities for the day, flag anything overdue or urgent, and save the output as a clean markdown file with today's date.

**6. Connect Your Calendar**
> Update my /morning-briefing skill so that it also reads my Apple Calendar events for today and this week and takes them into account when creating my briefing.

---

## FAQ

**Can Claude Code connect to apps other than Apple Notes — like Notion, Google Tasks, or Confluence?**
Yes! Claude Code can generally connect to any app. Just ask it how. For example: "Import my notes from Notion" or "Connect to my Google Tasks." It will figure out a way to make it work. For some apps, a quick workaround is to export your data and drop the files into your project folder.

**Can I exclude certain notes or folders from being imported?**
Absolutely. Just tell Claude what to skip. For example: "Import my Apple Notes but skip anything in my personal journal folder." Claude follows your instructions — you're in control of what gets imported.

**Will Claude automatically keep my notes in sync as I add new ones?**
Each import is a one-time action. If you want to bring in new notes later, just run the import prompt again. You can also ask Claude to build an automated sync — just ask it how.

**Can Claude edit my Apple Notes directly?**
Claude likely won't have direct edit access to Apple Notes. It can import (read) your notes, and it can create new markdown files. If you want to try editing notes directly, go ahead and ask — but expect to work with imported copies for now.

**Is everything stored locally on my machine?**
Yes. All files Claude Code creates — your life-os folder, dashboards, notes — live on your computer. Nothing is uploaded anywhere unless you explicitly ask Claude to host or share something.

**Can I use my skills (like /morning-briefing) from a different folder?**
Skills are stored in the .claude folder inside your project directory. They're available when you start Claude Code from that folder. If you switch to a different folder, those skills won't be available there — but you can ask Claude to copy them over.

**Can Claude Code share context between different sessions?**
Each Claude Code session is isolated. However, Claude can share context through shared memory files, shared skills, and any files saved in your project folder. As long as context is saved to disk, the next session can pick it up.

**Can Claude order groceries, send emails, or interact with websites?**
Claude Code runs on your computer and can interact with APIs and services — but it may need some creative problem-solving. If it says it can't do something, push it: "How could you make this work using DoorDash/Instacart?" Ask it to research and find a way.

**Should I trust Claude's data analysis without checking?**
Trust but verify. AI can sometimes hallucinate results. A good practice: ask Claude to double-check its own work using a different method, or ask it to write code that validates its results.

**Can I point Claude at my entire Documents folder?**
Yes. Open a folder in VS Code, and everything in it — including subfolders — becomes context for Claude. The more context you give it, the better its output will be. Think of it like onboarding a new employee.

**I got a "command not found" error on Windows. What do I do?**
This is a known issue with the latest version of the Claude Code VS Code extension on Windows. Go to the extension, click the dropdown next to "Uninstall," and select version 2.1.49 instead of the most recent version.

**I got an error about accepting terms and conditions. How do I fix it?**
Go to claude.ai in your browser and accept the updated Terms and Privacy Policy. Then return to VS Code and try again.

---

Evan Grenda & Dylan Moore · OneDay
https://oneday-ai.vercel.app/landing.html
