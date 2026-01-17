import * as React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Lightbulb, BarChart2, Users, Code, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <Card className="h-full transition-all hover:shadow-lg hover:border-blue-100">
    <CardHeader>
      <div className="p-2 bg-blue-50 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Advisory: React.FC = () => {
  const services = [
    {
      title: 'AI & Security Strategy',
      description: 'Advisory support to help organizations define AI governance strategy, risk posture, and security priorities aligned to business objectives and regulatory expectations.',
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'AI Security & Identity Architecture',
      description: 'Design and review of secure, identity-aware architectures for AI systems, cloud platforms, and enterprise environments, focused on governance, access control, and risk containment.',
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Risk & Control Optimization',
      description: 'Evaluating AI and security controls to reduce operational risk, improve reliability, and ensure systems scale without introducing governance or compliance gaps.',
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Engineering & GRC Enablement',
      description: 'Supporting engineering, security, and GRC teams with practical guidance on implementing AI governance, compliance-as-code, and security-by-design practices.',
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'AI Security & Compliance Advisory',
      description: 'Advisory on AI security controls, risk assessments, and compliance frameworks including NIST AI RMF, SOC 2, ISO 27001/42001-aligned practices, and cloud security standards.',
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="mb-4">
          <Badge className="text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200">Expert Advisory</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          AI Security, Governance, and Enterprise Architecture Advisory
        </h1>
        <p className="text-xl text-gray-600">
          I partner with organizations to design and govern secure AI-enabled systems—combining AI security, identity architecture, and GRC engineering to reduce risk while enabling responsible scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <ServiceCard 
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking for expert guidance on AI security and governance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you’re building, deploying, or governing AI systems and need clarity around risk, security, or compliance, I offer advisory engagements designed to help teams make informed, defensible decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-sm font-semibold">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-sm font-semibold">
              Discuss an Engagement
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Advisory Services?</h2>
        <div className="space-y-6">
          {[
            'Proven experience designing and assessing AI security and governance controls in real-world environments',
            'Deep expertise across AI security, identity architecture, cloud platforms, and GRC engineering',
            'Ability to translate frameworks and policy into operational, testable controls',
            'Advisory approach grounded in execution, not theory',
            'Focus on knowledge transfer so teams can operate independently and sustainably'
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisory;
