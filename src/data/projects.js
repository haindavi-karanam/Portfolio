export const projects = [
    {
        id: 'spendwise',
        title: 'SpendWise',
        tagline: 'Full-Stack Expense Tracker with Receipt OCR',
        description:
            'A full-stack personal finance application engineered for expense tracking, secure user authorization, interactive financial dashboards, and automated receipt digitisation.',
        features: [
            'JWT Authentication ensuring secure user session management and protected REST endpoints',
            'Expense CRUD workflows with categorized tracking and transaction filtering',
            'Financial dashboards displaying spending patterns and category breakdowns',
            'Tesseract.js OCR integration to automatically parse amounts and dates from receipt uploads',
        ],
        techStack: [
            'React',
            'Node.js',
            'Express',
            'JWT',
            'Tailwind CSS',
            'Tesseract.js',
        ],
        status: 'Completed',
        statusVariant: 'accent',
        links: {
            github: 'https://github.com/haindavi-karanam/Spendwise---Expense-Tracker',
            demo: null,
        },
    },
    {
        id: 'webhookhub',
        title: 'WebhookHub',
        tagline: 'Webhook Endpoint Management & Delivery Monitoring',
        description:
            'A backend service for registering webhook endpoints, monitoring delivery status, processing payloads asynchronously, and verifying cryptographic signatures.',
        features: [
            'Webhook endpoint lifecycle management and destination URL configuration',
            'Real-time delivery monitoring and status event logging',
            'Asynchronous processing queue with configurable delivery retries',
            'Cryptographic HMAC signature verification to safeguard payload integrity',
        ],
        techStack: [
            'Node.js',
            'Express',
            'Webhooks',
            'HMAC Security',
            'REST APIs',
        ],
        status: 'In Progress',
        statusVariant: 'warning',
        links: {
            github: 'https://github.com/haindavi-karanam',
            demo: null,
        },
    },
]

