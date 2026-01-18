# CRO Downfunnel Optimization Documentation

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


Original Flow 	
Step 1 - Sign up Form
Step 2 - Eligibility Criteria
Step 3 - Question 1
Step 4 - Question 2
Step 5 - Question 3
Step 6 - Question 4
Step 7 - Question 5
Step 8 - Question 6
Step 9 - Question 7
Step 10 - Question 8
Step 12 - Question 9
Step 13 - Question 10
Step 14 - Question 11
Step 15 - Question 12
Step 16 - Dose Strength
Step 17 - Number of Dose
Step 18 - Cart Overview 
Step 19 - Subscribe 
Step 20 - Order Summary
Step 22 - Thank you 
Step 23 - Verify Identity

Optimized Flow
Step 1 - Sign up Form
Step 2 - Eligibility Criteria
Step 3 - Dose Strength
Step 4 - Number of Dose
Step 5 - Cart Overview 
Step 6 - Subscribe 
Step 7 - Order Summary
Step 8 - Thank you 
Step 9 - Question 1
Step 10 - Question 2
Step 12 - Question 3
Step 13 - Question 4
Step 14 - Question 5
Step 15 - Question 6
Step 16 - Question 7
Step 17 - Question 8
Step 18 - Question 9
Step 19 - Question 10
Step 20 - Question 11
Step 22 - Question 12
Step 23 - Verify Identity

```

---
*For more details, see the JavaScript logic in `crodf-2003-script.js`.*
