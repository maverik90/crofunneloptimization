# Downfunnel Optimization Documentation

## Overview
This project implements a downfunnel optimization for the user onboarding and questionnaire process. The flow is managed via JavaScript and localStorage, tracking user progress through various steps and dynamically updating the UI and navigation.

## Flow Steps
1. **User Signup**: Begins at `/users/sign_up` (tracked as `pageTracking = 1`).
2. **Demographic Information**: `/user_demographic/new` (`pageTracking = 2`).
3. **Questionnaire**: Multi-step, mapped by `qsArray`, tracked in localStorage.
4. **Product Selection**: `/products/28` (`pageTracking = 3`).
5. **Cart and Checkout**: `/carts/` and `/checkout/` (`pageTracking = 4` and `7`).
6. **Verification and Completion**: `/user_verifications` (`pageTracking = 8`).

## Optimization Features
- **Step Tracking**: Users resume where they left off.
- **Dynamic Navigation**: Redirects users to the correct step.
- **Responsive UI**: Tracker adapts to screen size.
- **Automated Actions**: Some steps are automated for efficiency.

## Flow Chart
*Add your flow chart image here:*

```
![Downfunnel Optimization Flow](flowchart.jpg)
```

---
*For more details, see the JavaScript logic in `rugiet-2003-script.js`.*
