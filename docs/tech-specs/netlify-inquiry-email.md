# Direct inquiry emails through Netlify

## Summary

Add one shared inquiry form and route the site’s inquiry actions to it. Submissions go through Netlify Forms, which stores each submission and emails a notification to the address configured in Netlify’s dashboard. Visitors see an inline confirmation after a successful submission.

## Implementation

- Add a localized inquiry page with **name, email, optional phone, topic, and message** fields. Inquiry links should prefill the topic and preserve relevant context, such as the selected group-travel destination.
- Replace inquiry-oriented `mailto:` calls with links to the shared form. Keep plain email-address links as direct email links.
- Declare the form in the deployed static HTML so Netlify can detect it during deploy. Submit the Vue form to Netlify using its Forms submission flow; show pending, success, and error states.
- Configure the notification recipient and subject in the Netlify dashboard. The submitter’s email should be included for replies. Netlify Forms does not read the recipient address from an environment variable. [Netlify Forms notifications](https://docs.netlify.com/manage/forms/notifications/) · [Netlify Forms setup](https://docs.netlify.com/manage/forms/setup/)
- Keep the newsletter signup out of scope. Update the privacy page to describe inquiry submission handling and Netlify storage.

## Acceptance checks

- Inquiry links open the shared form with the expected topic and destination context.
- Required fields and email format are checked; phone remains optional.
- A valid submission produces a Netlify Forms entry and notification; the page shows success only after acceptance, and shows a recoverable error otherwise.
- The form is detected in a Netlify deploy, and notification delivery works with the recipient configured in the dashboard.
- Portuguese and English labels, validation messages, and confirmation states are provided.

## Approaches and assumptions

- **Selected:** shared form linked from inquiry actions. Embedded forms would repeat UI and setup; a standalone proposal page would lose the context of some inquiry links.
- Use Netlify Forms notifications rather than a Netlify Function and email provider, so no email provider credentials or recipient environment variable are needed.
- Apply this to inquiry calls to action, while leaving plain email-address links unchanged. Netlify Forms stores submissions; no separate database or newsletter integration is included.
