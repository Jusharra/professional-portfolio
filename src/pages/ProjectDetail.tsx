import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const projectsData = {
  'patient-intake-ai': {
    title: 'Patient Intake AI (HIPAA-Compliant)',
    date: '2024',
    summary: 'Voice + form intake system that triages, summarizes, and routes patient data securely',
    problem: 'Healthcare clinics were struggling with incomplete patient intake forms, long wait times, and HIPAA compliance challenges. Manual data entry was error-prone and time-consuming for staff.',
    approach: `Built a comprehensive AI-powered intake system with multiple touchpoints:
    
    • **Voice Interface**: VAPI integration for natural language patient interviews
    • **Secure Forms**: HIPAA-compliant Jotform integration for data collection
    • **Automation Engine**: Make.com workflows for intelligent routing and processing
    • **Data Storage**: Secure Airtable database with role-based access controls
    • **Notifications**: Twilio-powered SMS/email alerts for staff and patients
    • **Security Layer**: End-to-end encryption and audit logging`,
    results: `Significant improvements across all key metrics:
    
    • **60% reduction** in manual intake processing time
    • **35% decrease** in patient no-shows through automated reminders
    • **95% patient satisfaction** score for the intake experience
    • **Zero HIPAA violations** since implementation
    • **40% increase** in data accuracy compared to manual forms`,
    role: 'Solution Architect, Security Lead',
    stack: ['VAPI', 'Make.com', 'Airtable', 'Twilio', 'Jotform', 'HIPAA', 'Python', 'Node.js'],
    images: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      'https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg',
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
    ],
    links: {
      live: 'https://intriageflow.network/',
      github: 'https://github.com/Jusharra/intri-flow-ai',
      deck: '#'
    },
    architecture: 'Patient → Voice/Form Interface → VAPI Processing → Make.com Automation → Secure Storage → Staff Notifications',
    challenges: [
      'HIPAA compliance requirements for all data handling',
      'Real-time voice processing with high accuracy',
      'Integration of multiple third-party services securely',
      'Handling sensitive medical information with proper encryption'
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Button variant="ghost" className="mb-8">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {project.summary}
          </p>
          
          {/* Project Meta */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {project.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {project.role}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {project.links.live && (
              <Button>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Problem Statement */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.problem}
              </p>
            </CardContent>
          </Card>

          {/* Architecture Overview */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">System Architecture</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-900 font-mono text-sm">
                  {project.architecture}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Wrench className="mr-2 h-5 w-5" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution Approach */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution Approach</h2>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {project.approach}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Challenges */}
          {project.challenges && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Results & Impact */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {project.results}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Gallery */}
          {project.images.length > 1 && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 py-12 bg-blue-600 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interested in discussing this project?
          </h2>
          <p className="text-blue-100 mb-6">
            I'd be happy to share more details about the technical implementation and lessons learned.
          </p>
          <Button size="lg" variant="secondary">
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}