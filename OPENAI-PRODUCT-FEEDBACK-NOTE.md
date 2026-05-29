# OpenAI Product Feedback Note

Last updated: 2026-05-28

## Subject

ChatGPT GitHub connector approval pauses slow down routine website work.

## Problem

When working on a real website repository, the ChatGPT GitHub connector frequently pauses for approval or shows internal action labels such as `create_file` and `update_file`.

For a non-technical website owner, those labels are confusing. They can look like the user is being told to manually create or update files, even when the AI is only asking permission to do the work.

The repeated approval steps also create a time-management problem. Routine safe file placement, documentation updates, checklist edits, and status-file updates take much longer than they should.

## Why This Matters

The user is trying to build and manage small business websites with AI assistance. The workflow needs to be direct, clear, and efficient.

When safe repository edits require repeated confirmation, the user loses time and focus. The extra approval friction makes the system feel less like an assistant and more like another task to manage.

## Requested Improvement

Please improve the ChatGPT GitHub connector workflow so that routine safe repo edits can be grouped, approved once, and completed without repeated interruption.

Helpful improvements would include:

1. A clearer explanation of internal action labels such as `create_file` and `update_file`.
2. A mode for trusted repositories where routine safe edits can be approved in batches.
3. Better handoff between ChatGPT and Codex so Codex can automatically place files in the correct repo folders.
4. Less interruption for low-risk documentation, status, checklist, and static website edits.
5. Clear stop points only for real risks such as credentials, payments, live ads, private keys, account login, or major code deletion.

## Current Workaround

Use Codex as the primary repository-editing workflow.

Codex should handle routine file placement, updates, and commits directly. ChatGPT should be used mainly for planning, review, small checks, and Codex handoff instructions.

## User Impact

The current approval friction is causing wasted time, repeated explanations, and unnecessary confusion. The user needs a smoother workflow for building revenue-focused websites with AI assistance.
