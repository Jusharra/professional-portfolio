import { Shield, Bot, Users, Award, Cloud, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const skills = [
  { icon: Shield, name: 'Cloud Security', description: 'AWS & Azure security architecture' },
  { icon: Bot, name: 'AI Automation', description: 'Intelligent workflow automation' },
  { icon: Cloud, name: 'IAM & Zero Trust', description: 'Identity & access management' },
  { icon: Code, name: 'Security Scripting', description: 'Python & PowerShell automation' },
  { icon: Users, name: 'Incident Response', description: 'Threat hunting & containment' },
  { icon: Award, name: 'Compliance', description: 'HIPAA, SOC2, & regulatory frameworks' }
];

const certifications = [
  { name: 'CompTIA Security+', current: true },
  { name: 'CompTIA CySA+', current: true },
  { name: 'CompTIA Network+', current: true },
  { name: 'CompTIA A+', current: true },
  { name: 'AWS Cloud Practitioner', current: true },
  { name: 'ISO/IEC 27001:2022 Lead Auditor', current: true },
  { name: 'ISO/IEC 42001:2023 Lead Auditor', current: true },
  { name: 'AISF AI Security Foundation', current: true },
  { name: 'AISP AI Security Practitioner', current: true },
  { name: 'CISSP', current: false, target: true }
];

const currentProjects = [
  {
    name: 'Patient Intake AI',
    description: 'HIPAA-compliant voice & form automation',
    status: 'Production'
  },
  {
    name: 'Secure RAG Pipeline Hardening + MLSecOps SOC',
    description: 'A fully secured, identity-aware RAG pipeline on Azure, with MLSecOps detection, attack visibility, MCP-driven automated security actions, and a verifiable evidence chain—mirroring the SOC workflows shown in your screenshots but adapted for RAG security instead of traditional SIEM.',
    status: 'Beta Testing'
  },
  {
    name: 'Compliance-as-Code-Terraform-Guardrails',
    description: 'Automates compliance checks for Terraform infrastructure ',
    status: 'Production'
  },
  {
    name: 'AI-Governance-Knowledge-Base',
    description: 'A Retrieval-Augmented Generation (RAG) and MCP agent that helps auditors, engineers, or executives instantly find which control or policy addresses a given compliance requirement',
    status: 'Production'
  },
  {
    name: 'Automated Access Review',
    description: 'AWS Access Review is a comprehensive, zero-configuration security assessment tool that automatically evaluates your AWS environment for potential security risks and compliance gaps.',
    status: 'Production'
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Expertise & Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in enterprise AI security architecture, identity governance, 
            and compliance engineering to support secure innovation at scale.
          </p>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <skill.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Current Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 flex items-center">
                <Award className="mr-3 h-6 w-6" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span className="font-medium text-gray-900">{cert.name}</span>
                    {cert.target ? (
                      <Badge variant="outline" className="border-orange-300 text-orange-700 bg-orange-50">
                        Jan 2026 Target
                      </Badge>
                    ) : cert.current ? (
                      <Badge className="bg-green-100 text-green-800">
                        Current
                      </Badge>
                    ) : null}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 flex items-center">
                <Code className="mr-3 h-6 w-6" />
                Current Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentProjects.map((project, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{project.name}</h4>
                      <Badge 
                        variant="outline" 
                        className={
                          project.status === 'Production' 
                            ? 'border-green-300 text-green-700' 
                            : project.status === 'Beta Testing'
                            ? 'border-blue-300 text-blue-700'
                            : 'border-orange-300 text-orange-700'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Building secure, AI-powered systems that automate complex workflows through identity-aware architecture, 
                  governance controls, and security-by-design.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}