import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, Bot, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { sendEmailWithEmailJS } from '../../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Send email using EmailJS
      const success = await sendEmailWithEmailJS(formData);
      
      if (success) {
        setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try calling my AI assistant instead.');
      console.error('Form submission error:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to discuss AI security challenges, governance strategy, or identity-driven automation 
            opportunities? I’d welcome the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Assistant Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Bot className="mr-3 h-6 w-6" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  Prefer quick responses? Call my AI assistant for instant answers about 
                  my background, current projects, and availability.
                </p>
                <Button className="w-full bg-white text-blue-900 hover:bg-blue-50" asChild>
                  <a href="tel:+15628250082" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (562) 825-0082
                  </a>
                </Button>
                <p className="text-xs text-blue-200 mt-2 text-center">
                  Available 24/7 • Leave your details for same-day callback
                </p>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-100">Email</p>
                    <a href="mailto:qjgoree@gmail.com" className="text-white hover:text-blue-200">
                      qjgoree@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-100">Phone</p>
                    <a href="tel:+15628250082" className="text-white hover:text-blue-200">
                      (562) 825-0082
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-100">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/quashayajgoree/" className="text-white hover:text-blue-200">
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-100">GitHub</p>
                    <a href="https://github.com/Jusharra" className="text-white hover:text-blue-200">
                      View my code
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-green-400 mr-2" />
                  <Badge className="bg-green-100 text-green-800">
                    Available for New Opportunities
                  </Badge>
                </div>
                <p className="text-blue-100 text-sm">
                  Currently accepting new projects and full-time opportunities. 
                  Response time: Within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, challenges, or how I can help..."
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    I typically respond within 24 hours. For urgent matters, please call my AI assistant.
                  </p>
                  
                  {submitMessage && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 text-lg mb-4">
            Prefer a quick chat? Schedule a 15-minute intro call
          </p>
          <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Call
          </Button>
        </div>
      </div>
    </section>
  );
}