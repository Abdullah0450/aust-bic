/**
 * Contact form submission service
 * Handles email and WhatsApp integrations
 */

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const BIC_EMAIL = 'bic@aust.edu.pk';
const BIC_WHATSAPP = '+92XXXXXXXXXX'; // Update with actual WhatsApp number

/**
 * Send email via EmailJS
 * Update the service ID, template ID, and public key with your EmailJS credentials
 */
export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Using EmailJS service
    // Get free account at https://www.emailjs.com/
    const templateParams = {
      to_email: BIC_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Make API call to EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service',
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template',
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key',
        template_params: templateParams,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};

/**
 * Generate WhatsApp message URL
 * Opens WhatsApp with pre-filled message
 */
export const getWhatsAppLink = (formData: ContactFormData): string => {
  const message = encodeURIComponent(
    `Hello,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  );
  return `https://wa.me/${BIC_WHATSAPP.replace(/\D/g, '')}?text=${message}`;
};

/**
 * Send contact form submission
 * Attempts email first, provides WhatsApp fallback
 */
export const submitContactForm = async (
  formData: ContactFormData
): Promise<{ success: boolean; whatsappLink?: string; error?: string }> => {
  try {
    // Try to send via email
    const emailSent = await sendEmail(formData);

    if (emailSent) {
      return { success: true };
    }

    // If email fails, provide WhatsApp link as fallback
    const whatsappLink = getWhatsAppLink(formData);
    return {
      success: false,
      whatsappLink,
      error: 'Email could not be sent. Please use WhatsApp to contact us.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    const whatsappLink = getWhatsAppLink(formData);
    return {
      success: false,
      whatsappLink,
      error: 'An error occurred. Please try WhatsApp instead.',
    };
  }
};

export default {
  sendEmail,
  getWhatsAppLink,
  submitContactForm,
};
