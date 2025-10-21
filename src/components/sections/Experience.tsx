import { Link } from 'react-router-dom';
import { Building, Calendar, MapPin, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const experiences = [
  {
    role: 'Cybersecurity Engineer',
    company: 'LIBERTY Dental Plan',
    location: 'Tustin, CA',
    period: '2022 - 2024',
    type: 'Full-time',
    description: 'Leading cybersecurity initiatives for a healthcare organization serving 2M+ members',
    keyAchievements: [
      {
        icon: TrendingUp,
        metric: '40% reduction',
        description: 'in security incident response time through automated workflows'
      },
      {
        icon: Shield,
        metric: 'SOC2 compliance',
        description: 'achieved in 6 months leading cross-functional team of 8 engineers'
      },
      {
        icon: Users,
        metric: '85% reduction',
        description: 'in unauthorized access attempts via Zero-Trust architecture'
      }
    ],
    technologies: ['AWS', 'Zero-Trust', 'SIEM', 'Python', 'Incident Response', 'SOC2']
  },
  {
    role: 'IT Security Analyst',
    company: 'City of Hope',
    location: 'Irwindale, CA',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Cybersecurity operations for critical healthcare infrastructure and research facilities',
    keyAchievements: [
      {
        icon: Shield,
        metric: '50+ assessments',
        description: 'vulnerability assessments across critical healthcare infrastructure'
      },
      {
        icon: TrendingUp,
        metric: '60% time savings',
        description: 'in threat analysis through automated hunting scripts'
      },
      {
        icon: Users,
        metric: '100% success rate',
        description: 'in HIPAA compliance audits across 3 facility locations'
      }
    ],
    technologies: ['HIPAA', 'Vulnerability Assessment', 'Threat Hunting', 'Python', 'Healthcare IT']
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven track record of delivering enterprise cybersecurity solutions that protect 
            critical infrastructure while enabling business growth.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-2">{experience.role}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{experience.location}</span>
                      </div>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{experience.description}</p>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {experience.keyAchievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <achievement.icon className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-bold text-blue-900">{achievement.metric}</span>
                        </div>
                        <p className="text-sm text-gray-700">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Are you hiring?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's explore how my expertise in enterprise security architecture, 
            AI automation, and compliance can help protect and scale your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/resume" className="flex items-center">
                View Full Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}