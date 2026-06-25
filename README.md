# Peak Week

Peak Week is a social athletic challenge app where friend groups compete to improve their performance across events like bench press, squat, vertical jump, 100m dash, mile time, and pull-ups.

## Problem

Fitness tracking apps are usually individual-focused. PR League is built around group challenges, baseline testing, retesting, and friend-group competition.

## Core Features

- Create athletic challenges
- Add participants
- Track baseline, current, final, and PR results
- Support strength, speed, endurance, and bodyweight events
- Calculate improvement percentages
- Show best absolute result leaderboards
- Show most-improved leaderboards
- Compare users to benchmark scores

## MVP

The first version supports one challenge with manually added participants, standard events, result entry, PR tracking, and dashboard leaderboards.

## Tech Stack

- React Native / Expo
- Supabase
- TypeScript
- EAS Build

## Data Model

### Challenge
- id
- name
- start_date
- end_date

### Event
- id
- challenge_id
- name
- unit
- higher_is_better

### Result
- id
- participant_id
- event_id
- result_type
- value
- date

## Scoring

For higher-is-better events:

`improvement = (current - baseline) / baseline`

For lower-is-better events:

`improvement = (baseline - current) / baseline`

Times are stored internally in seconds and displayed as readable times.

## Roadmap

### V1
- Manual participant entry
- Standard events
- Baseline/final result tracking
- PR page
- Leaderboards
- Charts

### V2
- Accounts
- Join codes
- Multiple challenges
- Activity feed

### V3
- Badges
- Comments
- Weekly check-ins
- Team mode
