// Email service integration options
// Choose one of these approaches:

// Option 1: EmailJS (Free tier available)
export const sendEmailWithEmailJS = async (formData: any) => {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_j7gs6sd',
        template_id: 'template_otarzvm',
        user_id: 'VtjAnZWdcKi_F6_jy',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          to_email: 'qjgoree@gmail.com'
        }
      })
    });
    
    return response.ok;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};

// Option 2: Formspree (Simple form handling)
export const sendWithFormspree = async (formData: any) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    return response.ok;
  } catch (error) {
    console.error('Formspree error:', error);
    throw error;
  }
};

// Option 3: Custom backend with Google Sheets integration
export const sendToGoogleSheets = async (formData: any) => {
  try {
    // This would require a backend service (Node.js, Python, etc.)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...formData
      })
    });
    
    return response.ok;
  } catch (error) {
    console.error('Google Sheets error:', error);
    throw error;
  }
};
