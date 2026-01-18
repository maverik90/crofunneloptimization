This project implements a downfunnel optimization for the user onboarding and questionnaire process. The flow is managed via JavaScript and localStorage, tracking user progress through various steps and dynamically updating the UI and navigation.

Flow Overview
User Signup:

User begins at the signup page (/users/sign_up).
Progress is tracked with pageTracking = 1.
Demographic Information:

User provides demographic data (/user_demographic/new).
Progress is tracked with pageTracking = 2.
Questionnaire:

User is directed to a multi-step questionnaire (/products/28/user_questionnaires/).
Steps are mapped using a qsArray that links question numbers to step and tracker values.
Progress is tracked and updated in localStorage.
Product Selection:

After the questionnaire, the user selects products (/products/28).
Progress is tracked with pageTracking = 3.
Cart and Checkout:

User reviews cart (/carts/) and proceeds to checkout (/checkout/).
Progress is tracked with pageTracking = 4 and 7 respectively.
Verification and Completion:

User completes verification (/user_verifications).
Final step tracked with pageTracking = 8.
Optimization Features
Step Tracking:
Each step is tracked in localStorage to allow users to resume where they left off.
Dynamic Navigation:
The script automatically redirects users to the correct step based on their progress.
Responsive UI:
The tracker adapts to different screen sizes for optimal user experience.
Automated Actions:
Certain steps (e.g., auto-selecting answers) are automated to streamline the funnel.
