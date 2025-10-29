import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'patient-intake-ai',
    title: 'Patient Intake AI (HIPAA-Compliant)',
    summary: 'Voice + form intake system that triages, summarizes, and routes patient data securely',
    problem: 'Clinics struggle to capture complete, structured intake data while maintaining HIPAA compliance',
    approach: 'VAPI voice recognition → Jotform HIPAA → Make.com automation → Airtable → notifications',
    results: 'Cut manual intake time by 60%; reduced no-shows by 35% through automated reminders',
    role: 'Solution Architect, Security Lead',
    stack: ['VAPI', 'Make.com', 'Supabase', 'Twilio', 'Jotform', 'HIPAA'],
    category: 'AI',
    year: '2025',
    badge: 'AI',
    links: {
      live: 'https://intriageflow.network/',
      github: 'https://github.com/Jusharra/intri-flow-ai',
      deck: '#'
    },
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg'
  },
  {
    id: 'comply-guardian',
    title: 'Comply Guardian AI',
    summary: 'AI-powered compliance management platform for enterprise security and regulatory frameworks',
    problem: 'Organizations struggle to maintain continuous compliance across multiple frameworks (SOC2, HIPAA, PCI-DSS) with manual processes',
    approach: 'AI-driven compliance monitoring + automated evidence collection + real-time risk assessment + regulatory mapping',
    results: 'Reduced compliance preparation time by 75%; achieved 99.8% audit readiness score across multiple frameworks',
    role: 'Lead Security Engineer, Compliance Architect',
    stack: ['Python', 'AI/ML', 'AWS', 'Docker', 'PostgreSQL', 'React'],
    category: 'Security',
    year: '2024',
    badge: 'Security',
    links: {
      live: 'https://complyguardian-ai.lovable.app/',
      github: 'https://github.com/Jusharra/complyguard-ai-hub'
    },
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg'
  },
  {
    id: 'neonomos',
    title: 'NeoNomos Legal AI',
    summary: 'Advanced AI platform for legal document analysis, contract review, and regulatory compliance',
    problem: 'Legal teams spend 70% of their time on document review and compliance checking, leading to high costs and human error',
    approach: 'NLP-powered document analysis + contract risk assessment + automated compliance checking + legal precedent matching',
    results: 'Accelerated legal review processes by 80%; reduced contract analysis time from days to hours',
    role: 'AI Solutions Architect, Technical Lead',
    stack: ['Python', 'NLP', 'TensorFlow', 'FastAPI', 'MongoDB', 'React'],
    category: 'AI',
    year: '2024',
    badge: 'AI',
    links: {
      live: 'https://neonomos-ai.lovable.app/',
      github: 'https://github.com/Jusharra/neonomos-legal-ai'
    },
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg'
  },
  {
    id: 'laundromat-saas',
    title: 'Laundromat Management SaaS',
    summary: 'Full-stack SaaS platform for laundromat operations with IoT machine monitoring',
    problem: 'Laundromat owners lack real-time visibility into machine status, customer queues, and revenue',
    approach: 'React dashboard + Node.js API + IoT sensors + payment integration + mobile alerts',
    results: 'Increased machine utilization by 25%; reduced customer wait times by 40%',
    role: 'Full-Stack Developer, Product Manager',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Uber Direct', 'Supabase'],
    category: 'SaaS',
    year: '2025',
    badge: 'SaaS',
    links: {
      live: 'https://thelavanderiaclub.com/',
      github: 'https://github.com/Jusharra/spin-smart-profit'
    },
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg'
  },
  {
    id: 'gold-ecommerce',
    title: 'Premium Gold E-commerce Platform',
    summary: 'Secure e-commerce platform for precious metals trading with real-time pricing',
    problem: 'Gold dealers needed secure, compliant platform with live market pricing and fraud prevention',
    approach: 'Next.js storefront + secure payment processing + real-time gold API + KYC verification',
    results: 'Processed $2M+ in transactions; 99.9% uptime; zero security incidents',
    role: 'Security Engineer, Lead Developer',
    stack: ['Next.js', 'Stripe', 'AWS', 'Redis', 'PostgreSQL'],
    category: 'Security',
    year: '2025',
    badge: 'Security',
    links: {
      live: 'https://www.luxconnoisseurs.com/',      
    },
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg'
  },
  {
    id: 'soc-automation',
    title: 'SOC Incident Response Automation',
    summary: 'Automated security incident response system reducing MTTR by 65%',
    problem: 'Manual incident response processes caused delays in threat containment and resolution',
    approach: 'SOAR platform integration + custom Python scripts + threat intelligence feeds + automated playbooks',
    results: 'Reduced MTTR from 4 hours to 85 minutes; automated 80% of Level 1 incidents',
    role: 'Security Engineer, Automation Lead',
    stack: ['Python', 'Splunk', 'MISP', 'REST APIs', 'Docker'],
    category: 'Security',
    year: '2025',
    badge: 'Security',
    links: {
      live: 'https://complyguardian-ai.lovable.app/', 
      github: 'https://github.com/Jusharra/complyguard-ai-hub'
    },
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
  },
  {
    id: 'aws-access-review',
    title: 'AWS Automated Access Review',
    summary: 'Zero-configuration security assessment tool for AWS environments with automated risk evaluation',
    problem: 'Organizations struggle to continuously monitor AWS access permissions and identify security risks across complex cloud environments',
    approach: 'Automated AWS API scanning + IAM policy analysis + compliance gap detection + risk scoring + actionable remediation recommendations',
    results: 'Identified 95% of critical access risks within minutes; reduced manual security reviews from weeks to hours',
    role: 'Cloud Security Architect, Lead Developer',
    stack: ['AWS SDK', 'Python', 'IAM', 'CloudTrail', 'Lambda', 'DynamoDB'],
    category: 'Security',
    year: '2024',
    badge: 'Security',
    links: {
      live: 'https://aws-access-review.lovable.app/',
      github: 'https://github.com/Jusharra/aws-access-review'
    },
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
  },
  {
    id: 'security-ai-agents',
    title: 'Security AI Agents - Incident Response',
    summary: 'AI-powered incident response agents that investigate, classify, and respond to cybersecurity threats in minutes',
    problem: 'SOC teams struggle with manual incident response processes, compliance documentation, and ensuring consistent response across multiple regulatory frameworks',
    approach: 'AI agent orchestration + real-time threat classification + automated IR playbook generation + compliance mapping + documentation automation',
    results: 'Reduced incident response time from hours to minutes; achieved 100% compliance documentation accuracy across HIPAA, NIST, ISO, GDPR, SOC 2, PCI DSS',
    role: 'AI Security Architect, Incident Response Lead',
    stack: ['Python', 'AI Agents', 'NIST Framework', 'SOAR', 'Machine Learning', 'FastAPI'],
    category: 'AI',
    year: '2024',
    badge: 'AI',
    links: {
      live: 'https://security-ai-agents.lovable.app/',
      github: 'https://github.com/Jusharra/security-ai-agents'
    },
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg'
  }
];

const categories = ['All', 'Security', 'AI', 'SaaS'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of cybersecurity solutions, AI automation systems, and SaaS platforms 
            built to solve real-world business challenges.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      project.badge === 'Security' ? 'bg-red-100 text-red-800' :
                      project.badge === 'AI' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}
                  >
                    {project.badge}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 text-sm">{project.summary}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-sm text-gray-700">{project.results}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Role:</h4>
                    <p className="text-sm text-gray-700">{project.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    {project.links.live && (
                      <Button size="sm" variant="outline">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    )}
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link to={`/projects/${project.id}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-blue-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Let's discuss how I can help secure and automate your systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:+15628250082">
                Call My AI Assistant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}