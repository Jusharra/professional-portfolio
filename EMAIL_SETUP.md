# Contact Form Email Setup Guide

Your contact form is now ready to send actual emails! Choose one of these options:

## Option 1: EmailJS (Recommended - Free Tier Available)

### Steps:
1. **Sign up for EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create an email service**: Connect your Gmail, Outlook, or other email provider
3. **Create an email template**: Design your email template with variables like `{{name}}`, `{{email}}`, etc.
4. **Get your credentials**:
   - Service ID
   - Template ID  
   - Public Key

### Update the code:
Replace the placeholder values in `src/services/emailService.ts`:

```typescript
service_id: 'YOUR_ACTUAL_SERVICE_ID',
template_id: 'YOUR_ACTUAL_TEMPLATE_ID', 
user_id: 'YOUR_ACTUAL_PUBLIC_KEY',
```

### Email Template Example:
```
From: {{from_name}} ({{from_email}})
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}
```

## Option 2: Formspree (Easiest Setup)

### Steps:
1. **Sign up**: Go to [https://formspree.io/](https://formspree.io/)
2. **Create a new form**: Get your form endpoint URL
3. **Update the code**: Replace `YOUR_FORM_ID` in `src/services/emailService.ts`

### Update Contact.tsx:
Change the import and function call:
```typescript
import { sendWithFormspree } from '../../services/emailService';
// In handleSubmit:
const success = await sendWithFormspree(formData);
```

## Option 3: Google Sheets Integration

### Requires backend setup:
1. **Create Google Cloud Project**
2. **Enable Google Sheets API**
3. **Create service account credentials**
4. **Share your Google Sheet with the service account email**
5. **Set up a simple backend** (Node.js/Express, Python Flask, etc.)

### Backend endpoint example (Node.js):
```javascript
app.post('/api/contact', async (req, res) => {
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID');
  
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow(req.body);
  
  res.json({ success: true });
});
```

## Security Notes:

1. **Never expose private keys** in frontend code
2. **Use environment variables** for sensitive credentials
3. **Consider rate limiting** to prevent spam
4. **Add reCAPTCHA** for additional protection

## Environment Variables Setup:

Create `.env.local` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Update `src/services/emailService.ts`:
```typescript
service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
```

## Testing:

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email/spreadsheet for the submission
4. Verify the success/error messages work correctly

## Troubleshooting:

- **Email not sending**: Check your EmailJS service configuration
- **CORS errors**: Ensure your backend allows frontend origin
- **404 errors**: Verify API endpoints and form IDs
- **Authentication failures**: Check API keys and permissions

Choose the option that best fits your technical comfort level and requirements!
