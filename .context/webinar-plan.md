# OneDay Webinar: Claude Code for Non-Technical People

## Mission
Teach non-technical people how to start using Claude Code to multiply their output. A beginner's course that teaches advanced skills, taking people from zero to one.

## What Attendees Will Learn
- Everything they need to know to start using Claude Code
- The secrets and workflows top engineers use to do extraordinary things
- How to actually build their own "Life OS" with Claude Code

## What This Unlocks For Attendees
- Launch their ideas
- Sell their own products
- Create apps
- Bring their visions to life
- Create what before seemed impossible

## Positioning
- Those who leverage AI will make a name for themselves in the new future of work
- We don't want people to get left behind
- Jam-packed session with hands-on guidance

## Pricing
- **Webinar**: $30 per person

## Business Goals
- **Primary**: Lead generation tool for higher-priced offerings
- **Secondary**: Revenue from ticket sales
- **Funnel into**:
  - 1-on-1 sessions (higher priced)
  - Small group / team sessions
  - OneDay's broader training offerings
- Great way to meet people and share how we can help them do more in personal lives and at work

## Scheduling
- Target: Sunday, Monday, Tuesday, or Wednesday evening
- Can run multiple sessions after the first one
- First session TBD (need to pick date)

## Infrastructure Requirements
- Event/ticketing page (Luma or Partiful) with $30 ticket
- Webinar hosting platform (free tier preferred)
- Landing page on the OneDay site
- Payment processing (through event platform if possible)

## Tech Stack Preferences
- Use as many free tools as possible
- Leverage existing OneDay landing page infrastructure (Next.js on Vercel)

---

## Intake Form (Luma Registration Questions)

Three multiple-choice questions. Zero typing, ~30 seconds to complete.

### Q1: "What best describes you?"
Options: Entrepreneur/freelancer | Corporate professional | Creative (designer, writer, content creator) | Student | Stay-at-home parent | Other

**How to use this:**
- Determines which examples and language to use during the workshop
- Parent → meal planning, school emails, family scheduling
- Freelancer → invoicing, client comms, proposals
- Corporate → meeting notes, email triage, reporting
- Creative → brainstorming, drafts, content pipelines
- Tells you which LifeOS demos will land hardest with the room

### Q2: "What feels most overwhelming in your day-to-day?"
Options: Keeping track of everything (tasks, calendar, commitments) | Email and communication overload | Repetitive busywork that eats my time | Organizing information and ideas | I just feel behind on AI and want to catch up

**How to use this:**
- This is the #1 content curation signal — lead with whatever pain is most common
- "Keeping track of everything" → lead with LifeOS todo/calendar demo
- "Email overload" → lead with email triage/drafting demo
- "Repetitive busywork" → lead with automation/workflow demo
- "Organizing info" → lead with knowledge management demo
- "Behind on AI" → these are the FOMO crowd, motivated by fear of falling behind, not a specific pain point — give them a strong "here's what's possible" opening to hook them emotionally before going tactical

### Q3: "How much have you used AI tools?"
Options: Never tried any | Played with ChatGPT a few times | I use AI regularly but want to level up | I'm comfortable with AI and want to go deeper

**How to use this:**
- Determines pacing of the setup/installation portion
- If 80%+ are "never tried" → spend 15 min on setup, explain what a prompt is
- If most have "played with ChatGPT" → 10 min setup, frame Claude Code as the next evolution
- If advanced skew → move fast through basics, spend time on advanced LifeOS patterns
- Mix of levels → acknowledge the range, pair exercises so beginners aren't lost and advanced aren't bored

---

## Upsell Strategy: Converting Attendees to 1:1 Sessions

### Timing
- Soft mention at the start: "If you want to go deeper after today, we do 1:1 sessions — but let's focus on the workshop first"
- Main pitch in the last 5 minutes, after the highest-energy demo moment

### The Core Pitch
The workshop shows people what's *possible*. The 1:1 session builds it *for their specific life*.

Frame it as: "Today we built a general LifeOS. In a 1:1, I sit with you and we build YOUR system — tailored to your job, your tools, your actual daily workflow. You walk out with something ready to use Monday morning."

### Leverage Intake Data for the Pitch
- **Q1 (who they are)** → Reference their specific role in the pitch: "For the freelancers in the room, imagine a system that automatically drafts client proposals from a brief..."
- **Q2 (their pain)** → Call back to the top pain point: "I know a lot of you said email is your biggest overwhelm. In a 1:1 we'd build an email system specific to YOUR inbox, YOUR priorities..."
- **Q3 (experience)** → For beginners: "If today felt fast, a 1:1 gives us time to go at your pace and make sure everything clicks." For advanced: "If you're already comfortable, a 1:1 lets us skip the basics and build something genuinely powerful."

### Conversion Tactics
- Offer a limited-time discount for people who book within 48 hours of the workshop (urgency)
- Show a quick before/after of a real 1:1 client result (social proof)
- Drop a booking link in chat, don't make people search for it
- Follow up via email 24 hours later with a recap + the 1:1 offer for anyone who didn't act in the moment
- The $30 workshop price should feel like a no-brainer entry point that makes the 1:1 feel like the obvious next step, not a hard sell

---

## Learnings from 1:1 Session (Phoebe / FunGuy — DTC CEO)

### Critical: Pre-Workshop Setup is Non-Negotiable
Command line tools took **20-25 minutes** to download during Phoebe's session. This cannot happen during a 60-minute workshop with 50 people. Must send a setup guide 3-5 days before the event.

### Pre-Workshop Setup Checklist (send to attendees in advance)
1. Install VS Code (free) — download link
2. Sign up for Claude Pro ($20/month) or have an active subscription
3. Install Claude Code extension in VS Code
4. Install command line tools (macOS: Xcode CLI tools, Windows: equivalent)
5. Test that it works: open VS Code, open Claude Code, type "hello" and confirm a response
6. Create a workspace folder on their desktop (e.g., `~/Desktop/my-projects/`)

Include a short video walkthrough or step-by-step screenshots. Offer a "setup help" session or troubleshooting thread the day before if needed.

### Real Use Cases That Landed (non-technical CEO context)
These are the things that made a non-technical founder's eyes light up:
- **Shipping cost audit**: Uploaded two CSVs, Claude wrote a Python script to find $1,500 in overcharges in 17 days — work that would take hours manually
- **Analytics dashboard**: Connected to Triple Whale API, generated visualizations of revenue trends, CAC, profitability — better than Shopify's built-in AI
- **Email automation**: Reading emails, identifying high-priority items, drafting responses in the founder's voice
- **Brand guidelines**: Analyzing existing creative assets and social media to create comprehensive brand docs
- **Organizing messy notes**: Taking scattered Apple Notes and categorizing them into structured folders
- **Developer accountability**: Founder could now understand what her dev was doing and question "3 hours for a button change"

### What Works in a Group Setting (50 people, Zoom)
- Live demo of a "wow" moment — uploading a CSV and getting instant analysis
- Building a simple LifeOS together (todo list, daily briefing)
- Showing the "interview me" pattern — tell Claude to ask questions before starting
- Demonstrating separate conversations for separate workstreams
- Quick security/privacy reassurance (Anthropic doesn't train on Claude Code conversations)

### What Does NOT Work in a Group Setting
- API integrations (OAuth flows, Google Cloud Console — too personalized, too many failure points)
- Deep custom workflow building (shipping audits, analytics dashboards — save for 1:1)
- Troubleshooting individual setup issues mid-session (hence the pre-setup requirement)

### Best Practices to Teach During Workshop
1. **Separate conversations** for different workstreams — keeps context clean
2. **Context window** degrades after 50-60% capacity — compact or start fresh
3. **"Interview me" pattern** — tell Claude to ask questions when you're unsure what you want
4. **Create skills** (slash commands) to package and reuse successful workflows
5. **Tell Claude to "remember"** important info or preferences
6. **Use markdown** for documentation — all AI tools read it well
7. **Allow bash commands** unless they seem suspicious — Claude asks permission first

### Security Talking Points (will come up)
- Anthropic doesn't train on Claude Code conversations by default
- Claude requests permission before executing any commands
- For businesses with sensitive data: mention Claude Teams/Enterprise plans
- Frame it positively: "You're always in control"

### 1:1 Upsell Proof Points from This Session
Phoebe's session naturally generated demand for:
- Training her assistant (1:1 session)
- Team masterclass for the whole company
- Ongoing support as she builds more workflows
This validates the funnel: workshop → 1:1 → team training
