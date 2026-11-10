# Tax Rebate Processing & Refund Management Platform

## Business Impact

- Significantly reduced manual processing effort through automation
- Faster tax rebate evaluation and approval cycles
- Improved visibility into application status with tracking
- Standardized refund workflows across cases for consistency
- Reduced errors in tax calculations and documentation handling
- Improved operational control for staff teams
- Scalable handling of high-volume tax applications

## Engineering Challenges

- Manual tax filing and spreadsheet tracking leading to errors
- Lack of structured workflow for tax rebate applications
- Difficulty tracking application status through complex approval processes
- Manual tax calculations prone to human error
- Inconsistent document handling and verification

## Architecture Overview

The system is a workflow-driven state management engine managing the full tax rebate lifecycle: Customer Registration → Identity Verification → Tax Information Collection → Document Upload → Document Processing → Tax Calculation → Staff Review → Refund Approval → Refund Processing → Completed Case.

The workflow state model enforces controlled transitions: Registration Started → Profile Completed → Documents Submitted → Tax Calculation Completed → Under Review → Refund Approved → Refund Processed, with role-based system design separating customer, staff, and system engine responsibilities.

## Key Engineering Decisions

- State-controlled financial workflow engine with enforced transitions
- Customer onboarding system with identity verification
- Tax information engine for structured financial data capture
- Document processing system with AI-based extraction (Mindee AI)
- Tax calculation engine with configurable tax rules
- Refund management system for approval and processing tracking
- Staff operations dashboard for monitoring and review

## Technologies

Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, bcrypt, Twilio Verify, Mindee AI (document processing), PDF-Lib, AWS S3, Revolut Business API, Mailgun
