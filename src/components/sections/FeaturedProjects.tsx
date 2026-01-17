import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const featuredProjects = [
  {
    id: 'patient-intake-ai',
    title: 'Patient Intake AI',
    subtitle: 'HIPAA-Compliant Healthcare Automation',
    description: 'Voice-powered patient intake system with secure data processing, reducing manual work by 60% while ensuring HIPAA compliance.',
    impact: '60% faster intake processing',
    stack: ['VAPI', 'HIPAA', 'Make.com', 'Supabase', 'RAG', 'MCP', 'Lovable'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    badge: 'AI',
    links: { live: 'https://intriageflow.network/', github: 'https://github.com/Jusharra?tab=repositories' }
  },
  {
    id: 'laundromat-saas',
    title: 'Laundromat Operations SaaS',
    subtitle: 'IoT-Enabled Business Management',
    description: 'Comprehensive SaaS platform for laundromat operations with real-time machine monitoring, customer management, and automated alerts.',
    impact: '25% increase in utilization',
    stack: ['React', 'Node.js', 'IoT', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg',
    badge: 'SaaS',
    links: { live: 'https://thelavanderiaclub.com/', github: 'https://github.com/Jusharra?tab=repositories' }
  },
  {
    id: 'gold-ecommerce',
    title: 'Premium Gold E-commerce',
    subtitle: 'Secure Trading Platform',
    description: 'Enterprise-grade e-commerce platform for precious metals trading with real-time pricing, KYC verification, and fraud prevention.',
    impact: '$2M+ transactions processed',
    stack: ['Shopify', 'Stripe', 'Dropshipping'],
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    badge: 'SaaS',
    links: { live: 'https://www.luxconnoisseurs.com/' }
  },
  {
    id: 'soc-automation',
    title: 'MLSecOps Incident Response Automation',
    subtitle: 'Enterprise Security Operations',
    description: 'Automated security incident response system with threat intelligence integration, reducing mean time to resolution by 65%.',
    impact: '65% faster incident response',
    stack: ['Python', 'MCP', 'RAG', 'Docker', 'Terraform', 'GitHub Actions', ' Azure Entra ID', 'Microsoft Foundry'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    badge: 'Security',
    links: { live: 'https://mlsecops-dashboard.streamlit.app/', github: 'https://github.com/Jusharra/azure-agentic-ai-security-lab/tree/feature/phase-1-identity-foundations://github.com/Jusharra?tab=repositories' }
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured projects demonstrating applied AI security, governance, and identity engineering—translating frameworks into operational controls that reduce risk, strengthen trust, 
            and scale securely across real-world environments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
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
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-semibold text-gray-900">{project.impact}</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.live} className="flex items-center">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.github} className="flex items-center">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/projects/${project.id}`} className="flex items-center">
                      Case Study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-gray-600 mt-3">
            Explore detailed case studies and technical implementations that translate AI governance, security, 
            and identity controls into measurable real-world outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}