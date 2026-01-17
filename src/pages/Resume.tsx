import { Download, Calendar, MapPin, Phone, Mail, Linkedin, Github, Award, Building, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ClientDateDisplay from '../components/ClientDateDisplay';

const skills = [
  'Cloud Security (AWS, Azure, Google Cloud)', 'Identity & Access Management (IAM)', 
  'Incident Response & Threat Hunting', 'Vulnerability Management & Penetration Testing', 
  'Security Information and Event Management (SIEM)', 'Network Security & Firewall Management',
  'Risk Assessment & Compliance (HIPAA, SOC 2, PCI-DSS)', 'Security Architecture & Design',
  'Automation & Scripting (Python, PowerShell, Bash)', 'Project Management & Cross-functional Leadership',
  'AI/ML Integration & Automation', 'DevSecOps & CI/CD Security', 'Digital Forensics',
  'Business Continuity & Disaster Recovery', 'Security Training & Awareness',
  'Data Loss Prevention (DLP)', 'Endpoint Detection and Response (EDR)', 
  'Security Operations Center (SOC) Management', 'Governance, Risk, and Compliance (GRC)',
  'Security Awareness Training', 'Cryptography', 'Security Auditing', 'Threat Modeling',
  'Security Policy Development', 'Virtualization Security', 'Container Security (Docker, Kubernetes)',
  'Web Application Security', 'Mobile Security', 'Database Security',
  'Security Orchestration, Automation, and Response (SOAR)',
  'Intrusion Detection/Prevention Systems (IDS/IPS)', 'Public Key Infrastructure (PKI)',
  'Security Assessment Tools (Nessus, Qualys, Burp Suite)', 'Cloud Access Security Broker (CASB)',
  'Zero Trust Architecture'
];

const certifications = [
  { name: 'CompTIA A+', year: 'Expired: 2023', current: false, expired: true, id: 'CompTIA A+ Expired' },
  { name: 'CompTIA Network+', year: 'Expired: 2023', current: false, expired: true, id: 'CompTIA Network+ Expired' },
  { name: 'CompTIA Security+', year: 'Expired: 2023', current: false, expired: true, id: 'CompTIA Security+ Expired' },
  { name: 'CompTIA CySA+', year: 'Expired: 2023', current: false, expired: true, id: 'CompTIA CySA+ Expired' },
  { name: 'Microsoft AZ-500', year: 'Current', current: true, id: 'Microsoft AZ-500 Current' },
  { name: 'SANS SEC510', year: 'Current', current: true, id: 'SANS SEC510 Current' },
  { name: 'SANS: Continuous Monitoring', year: 'Current', current: true, id: 'SANS Continuous Monitoring Current' },
  { name: 'AISF AI Security Foundation', year: 'Current', current: true, id: 'AISF AI Security Foundation' },
  { name: 'AISP AI Security Practitioner', year: 'Current', current: true, id: 'AISF AI Security Practitioner' },
  { name: 'CISSP', year: 'Target: 2026', current: false, target: true, id: 'CISSP Certification Target' },
];

const experience = [
  {
    role: 'Sr. Cybersecurity Analyst / Engineer',
    company: 'LIBERTY Dental Plan',
    location: 'CA',
    period: 'November 2022 – Present',
    description: '', // Description left empty as per instruction
    achievements: [
      'Engineered a project to configure, and implement, Microsoft Entra ID Periodic Access Reviews for compliance and audits for enterprise apps with group-based access.',
      'Provided a key role in developing and implementing SOAR-based detection and response playbook solutions using Cortex XSOAR.',
      'Documented operating procedures, RCA\'s, security incident reports, security tool configurations, security project presentations, and workflow diagrams for all security projects and initiatives.',
      'Daily tasks of responding to security incidents and alerts on both business and After-hours.',
      'Provided daily security support and incident response to internal user security issues.',
      'Managed and provided support for DLP policy rules with Microsoft Purview and Email DLP & Encryption.',
      'Engineered a project to install, configure, and implement Microsoft Information Protection Scanner for both on-premises and cloud data stores for sensitive content labeling.',
      'Engineered a project to implement Zscaler to all internal employees and decommission Symantec endpoint protection.',
      'Engineered a project to tune proxy rules and policies in both Zscaler and Symantec Web Gateway that provided least privilege access to Generative AI, File sharing, social media, Webmail, and Instant Messaging cloud applications and sites.',
      'Assisted in the design of the procedural process with Information Risk departments to audit web access groups using periodic access reviews.',
      'Provided support to internal user issues by allowing or blocking sensitive data that aligned with security and compliance policies.',
      'Managed and provided support for email security tasks, including semi-annual health checks, email encryption, email fraud defense, and email DLP security rules.',
      'Documented operating procedures for handling secure email account issues, and TLS connections.',
      'Administered, managed and provided support and tuning for DMARC, DKIM, and SPF management.',
      'Administered and implemented hosted DMARC, DKIM, and SPF for email fraud defense of sender domains.',
      'Engineered two projects to manage and implement both Duo and Microsoft MFA for all users.',
      'Configured, implemented, and administered Single Sign-On solutions for over 50+ enterprise applications.',
      'Assisted in the secure architecture and design of BYOD security policies, enrollment steps and configuration with Intune.',
      'Engineered, administered, and managed Conditional Access Policies for user sign-in experiences to enterprise apps using security group access.',
      'Documented operating procedures for both security and service desk team members, onboarding workflows, and configuration details for production instances.'
    ],
    technologies: ['Microsoft Entra ID', 'Cortex XSOAR', 'Defender XDR', 'Freshservice', 'Datadog', 'Microsoft Purview', 'Microsoft Information Protection Scanner', 'Symantec Endpoint Protection', 'Zscaler', 'Cortex XDR', 'Symantec Web Gateway', 'Proofpoint', 'Microsoft Exchange', 'DMARC', 'DKIM', 'SPF', 'Duo', 'Microsoft MFA', 'SSO', 'Intune', 'Conditional Access Policies']
  },
  {
    role: 'Cyber Security Analyst',
    company: 'City of Hope',
    location: 'Los Angeles, CA',
    period: 'March 2020 – November 2022',
    description: '',
    achievements: [
      'Analyzed QRadar SIEM, endpoint, 365 security and Palo Alto firewall log and event information to assess and remediate security-related risks.',
      'Supported IT departments and business units on security-related issues with Remedy tickets.',
      'Engineered a project to implement, administer and manage Single Sign-On and MFA for over 50+ enterprise applications.',
      'Responded to security incidents using Cortex XSOAR.',
      'Utilized Nessus for vulnerability scanning and assessment for internal requests.'
    ],
    technologies: ['QRadar SIEM', 'Palo Alto Firewall', 'Remedy', 'Single Sign-On', 'MFA', 'Cortex XSOAR', 'Nessus']
  },
  {
    role: 'Service Desk Engineer II',
    company: 'OpenX',
    location: 'Los Angeles, CA',
    period: 'July 2018 – March 2020',
    description: '',
    achievements: [
      'Engineered a project to implement, administer and manage over 30+ single sign-on enterprise applications using Ping Identity.',
      'Administered and managed internal user account access, in on-premises Active Directory, and Google Suite.',
      'Assisted in the management of IT members in remote locations worldwide.',
      'Assisted in cloud migration initiatives for Google Cloud Platform and Azure for hybrid infrastructure upgrade projects.',
      'Assisted in the design of an Identity access management and asset management application for users and decommissioning the old system.',
      'Participated in Disaster Recovery planning and exercises.',
      'Developed and maintained automation for provisioning security patches and policy deployments.'
    ],
    technologies: ['Ping Identity', 'Active Directory', 'Google Suite', 'Google Cloud Platform', 'Azure']
  },
  {
    role: 'Incident Response Consultant',
    company: 'Live Nation Entertainment',
    location: 'Los Angeles, CA',
    period: 'June 2018 – July 2018',
    description: '',
    achievements: [
      'Analyzed internal company emails to assess security attacks to triage security team members.',
      'Worked with the Information Security team on potential security vulnerabilities.'
    ],
    technologies: []
  },
  {
    role: 'Support Analyst I',
    company: 'Meggitt',
    location: 'Los Angeles, CA',
    period: 'October 2017 – June 2018',
    description: '',
    achievements: [
      'Onboarded employees using on-premises Active Directory accounts and Outlook email accounts.',
      'Assisted in implementing security practices for network access by responding to tickets using ServiceNow.'
    ],
    technologies: ['Active Directory', 'Outlook', 'ServiceNow']
  },
  {
    role: 'IT Helpdesk Support',
    company: 'Ace Relocation Systems Inc.',
    location: 'Los Angeles, CA',
    period: 'July 2016 – May 2017',
    description: '',
    achievements: [
      'Provided support to internal employees with IT-related productivity concerns.',
      'Setup and managed both in-office and remote asset management for workstations and additional offices.',
      'Administered, managed, and provided support to corporate mobile devices for iPhone and Android users.'
    ],
    technologies: ['Asset Management', 'iPhone', 'Android']
  },
  {
    role: 'Computer Technician',
    company: 'PCM IT Solutions & Services',
    location: 'Los Angeles, CA',
    period: 'June 2016 – January 2017',
    description: '',
    achievements: [
      'Diagnosed, evaluated, and repaired various PC hardware devices.'
    ],
    technologies: ['PC Hardware']
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Wilberforce University',
    year: '2006',
    location: 'Wilberforce, OH',
    details: ''
  },
  {
    degree: 'Mass Communication',
    school: 'Savannah State University',
    year: '2007',
    location: 'Savannah, GA',
    details: ''
  },
  {
    degree: 'Cybersecurity Certificate',
    school: 'Per Scholas',
    year: '2016',
    location: 'Dallas, TX',
    details: ''
  }
];

export default function Resume() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quashaya Goree
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Cybersecurity Engineer • AI Security Practitioner • GRC Engineer
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Bakersfield, CA
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              (562) 825-0082
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              qjgoree@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </div>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a 
              href="https://drive.google.com/drive/folders/1zHW07AoFwXGw7gdCKb-uN1AiqKV-kt0I?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              AI Security, GRC, and Identity Engineer with a strong record of designing and governing secure enterprise systems across cloud and regulated environments. My work focuses on building identity-aware, risk-driven architectures that integrate AI security, compliance automation, and operational resilience. I bring deep experience across AWS and Azure, IAM, incident response, vulnerability management, and compliance programs including HIPAA, SOC 2, and PCI-DSS. I leverage AI-driven automation and scripting to translate governance and security requirements into scalable, testable controls, while collaborating closely with engineering, security, and leadership teams to support informed decision-making. I am currently pursuing CISSP certification to further strengthen my strategic security and governance leadership.
            </p>
          </CardContent>
        </Card>

        {/* Core Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  cert.target ? 'border-orange-200 bg-orange-50' : 
                  cert.expired ? 'border-red-200 bg-red-50' : 
                  'border-gray-200 bg-white'
                }`}>
                  <div className="font-medium text-gray-900">{cert.name}</div>
                  <div className={`text-sm ${
                    cert.target ? 'text-orange-600' : 
                    cert.expired ? 'text-red-600' : 
                    'text-gray-500'
                  }`}>
                    {cert.year}
                    {cert.target && (
                      <Badge variant="outline" className="ml-2 text-xs border-orange-300 text-orange-700">
                        In Progress
                      </Badge>
                    )}
                    {cert.expired && (
                      <Badge variant="outline" className="ml-2 text-xs border-red-300 text-red-700">
                        Expired
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                      <div className="flex items-center mb-1">
                        <Building className="h-4 w-4 mr-2 text-blue-600" />
                        <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 md:text-right">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  {job.description && <p className="text-gray-600 mb-3 italic">{job.description}</p>}
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-6">
                  <h3 className="font-semibold text-gray-900 text-lg">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <p className="text-green-600 font-medium">{edu.school}</p>
                    <div className="text-sm text-gray-500">
                      <span>{edu.year} • {edu.location}</span>
                    </div>
                  </div>
                  {edu.details && <p className="text-sm text-gray-600">{edu.details}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Affiliations & Additional Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Professional Development</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• CISSP Study Group Participant (2024-2026)</li>
                  <li>• AWS Security Specialty Training</li>
                  <li>• SANS Training Courses (Various)</li>
                  <li>• Cybersecurity Mentorship Program</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Strengths</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cross-functional team leadership</li>
                  <li>• Strategic security planning</li>
                  <li>• Regulatory compliance expertise</li>
                  <li>• Innovative problem solving</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-8">
          <ClientDateDisplay />
          <p>References available upon request • Security clearance eligible</p>
        </div>
      </div>
    </div>
  );
}