import * as React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { CheckCircle2, Lightbulb, BarChart2, Users, Code, ShieldCheck, ShoppingBag, ExternalLink, Search, Filter } from 'lucide-react';

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

interface DigitalProductProps {
  title: string;
  description: string;
  imageUrl: string;
  productUrl: string;
  price?: string;
  category: string;
}

const DigitalProductCard: React.FC<DigitalProductProps> = ({ title, description, imageUrl, productUrl, price, category }) => (
  <Card className="h-full transition-all hover:shadow-xl hover:border-blue-200 overflow-hidden group">
    <div className="relative overflow-hidden bg-gray-100">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {price && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-3 py-1">
            {price}
          </Badge>
        </div>
      )}
      <div className="absolute bottom-4 left-4">
        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
          {category}
        </Badge>
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600">{description}</p>
      <a 
        href={productUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block w-full"
      >
        <Button className="w-full group/btn">
          View Product
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </a>
    </CardContent>
  </Card>
);

const Advisory: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

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
      title: 'AI Governance & GRC EngineeringAdvisory',
      description: 'Advisory on AI security controls, risk assessments, and compliance frameworks including NIST AI RMF, SOC 2, ISO 27001/42001-aligned practices, and cloud security standards.',
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />
    }
  ];

  // Digital products data — 15 products (current, aligned catalog)
const digitalProducts: DigitalProductProps[] = [
  {
    title: 'AI Governance Readiness Signal',
    description:
      'A 10-minute signal check to surface governance gaps across AI visibility, oversight, accountability, evidence, and audit readiness.',
    imageUrl: '/images/products/ai-governance-readiness-signal.png',
    productUrl: 'https://jusharra.gumroad.com/l/AI-Governance-Readiness-Signal',
    price: '$0',
    category: 'Free'
  },
  {
    title: 'AI Governance Readiness Workbook (ISO 42001 + AI RMF)',
    description:
      'Workbook to structure AI governance readiness using ISO 42001 and NIST AI RMF-aligned questions, fields, and evidence prompts.',
    imageUrl: '/images/products/ai-governance-readiness-workbook.png',
    productUrl: 'https://jusharra.gumroad.com/l/AI-Governance-Readiness-Workbook',
    price: '$0',
    category: 'Free'
  },
  {
    title: 'AI System Risk Classification Matrix',
    description:
      'A practical matrix to classify AI systems by impact, autonomy, data sensitivity, reversibility, and regulatory exposure.',
    imageUrl: '/images/products/AI-System-Risk-Classification-Matrix.png',
    productUrl: 'https://jusharra.gumroad.com/l/AI-System-Risk-Classification-Matrix',
    price: '$9',
    category: 'Workbooks'
  },
  {
    title: 'AI System Inventory & Shadow AI Discovery Workbook',
    description:
      'Inventory worksheet to document approved AI systems and uncover shadow AI usage across teams, tools, and data exposure patterns.',
    imageUrl: '/images/products/ai-system-inventory-shadow-ai.png',
    productUrl: 'https://your-product-link.com/ai-system-inventory-shadow-ai',
    price: '$19',
    category: 'Workbooks'
  },
  {
    title: 'ISO 42001 / AI RMF → Engineering Control Mapping Workbook',
    description:
      'Clause/function mapping workbook translating governance requirements into engineering controls and practical evidence examples.',
    imageUrl: '/images/products/ISO42001-AIRMF-Engineering-Control-Mapping-Workbook.png',
    productUrl: 'https://jusharra.gumroad.com/l/Engineering-Control-Mapping-Workbook',
    price: '$59',
    category: 'Workbooks'
  },
  {
    title: 'Identity-Aware RAG Security Checklist',
    description:
      'Checklist for securing RAG systems with identity boundaries, authorization context, leakage controls, and traceable retrieval.',
    imageUrl: '/images/products/Identity-Aware-RAG-Security-Checklist.png',
    productUrl: 'https://jusharra.gumroad.com/l/Identity-Aware-RAG-Security-Checklist',
    price: '$19',
    category: 'Checklists'
  },
  {
    title: 'Continuous Compliance & Assurance Pipeline Checklist',
    description:
      'Checklist to assess whether controls produce continuous signals and evidence (not static documents) for audit-ready AI governance.',
    imageUrl: '/images/products/continuous-compliance-assurance-pipeline.png',
    productUrl: 'https://your-product-link.com/continuous-compliance-assurance-pipeline',
    price: '$39',
    category: 'Checklists'
  },
  {
    title: 'Generative AI Governance & Security Playbook',
    description:
      'Playbook to govern GenAI adoption with approval gates, oversight expectations, identity controls, logging, and escalation triggers.',
    imageUrl: '/images/products/Generative-AI-Governance-Security-Playbook.png',
    productUrl: 'https://your-product-link.com/genai-governance-security-playbook',
    price: '$99',
    category: 'Playbooks'
  },
  {
    title: 'AI Security Audit Checklist',
    description:
      'Audit-oriented checklist to evaluate AI security posture, control gaps, and evidence readiness across tools, pipelines, and AI workflows.',
    imageUrl: '/images/products/ai-security-audit-checklist.png',
    productUrl: 'https://your-product-link.com/ai-security-audit-checklist',
    price: '$49',
    category: 'Checklists'
  },
  {
    title: 'AI GRC Architecture Blueprint',
    description:
      'Reference blueprint showing how AI governance, risk, security, and evidence pipelines connect for defensible, auditable operations.',
    imageUrl: '/images/products/ai-grc-architecture-blueprint.png',
    productUrl: 'https://your-product-link.com/ai-grc-architecture-blueprint',
    price: '$69',
    category: 'Blueprints'
  },
  {
    title: 'AI Incident Response Runbook',
    description:
      'Cross-functional runbook for responding to AI data exposure, misuse, and integrity incidents—even without specialized detection tooling.',
    imageUrl: '/images/products/ai-incident-response-runbook.png',
    productUrl: 'https://your-product-link.com/ai-incident-response-runbook',
    price: '$49',
    category: 'Runbooks'
  },
  {
    title: 'AI Ethics & Bias Review Framework',
    description:
      'Structured framework for operational ethics and bias review: intended use, impacted stakeholders, bias points, oversight, and accountability.',
    imageUrl: '/images/products/ai-ethics-bias-review-framework.png',
    productUrl: 'https://your-product-link.com/ai-ethics-bias-review-framework',
    price: '$89',
    category: 'Frameworks'
  },
  {
    title: 'Prompt Injection & Tool Misuse Risk Review Checklist',
    description:
      'Risk review checklist for prompt injection and tool misuse: trust boundaries, authorization, execution safeguards, monitoring, and escalation.',
    imageUrl: '/images/products/prompt-injection-tool-misuse-checklist.png',
    productUrl: 'https://your-product-link.com/prompt-injection-tool-misuse-checklist',
    price: '$79',
    category: 'Checklists'
  },
  {
    title: 'AI Data Exposure & Residency Review Checklist',
    description:
      'Checklist to assess AI data exposure paths, vendor data handling, storage locations, residency constraints, retention, and deletion readiness.',
    imageUrl: '/images/products/ai-data-exposure-residency-checklist.png',
    productUrl: 'https://your-product-link.com/ai-data-exposure-residency-checklist',
    price: '$79',
    category: 'Checklists'
  },
  {
    title: 'Third-Party AI Vendor Risk Assessment',
    description:
      'Assessment template to evaluate AI vendor security, transparency, data handling, sub-processors, governance posture, and evidence readiness.',
    imageUrl: '/images/products/third-party-ai-vendor-risk-assessment.png',
    productUrl: 'https://your-product-link.com/third-party-ai-vendor-risk-assessment',
    price: '$99',
    category: 'Assessments'
  }
];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(digitalProducts.map(p => p.category)))];

  // Filter products based on search and category
  const filteredProducts = digitalProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="mb-4">
          <Badge className="text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200">Specialist Advisory</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Enterprise AI Risk, Audit & Continuous Assurance Advisory
        </h1>
        <p className="text-xl text-gray-600">
          I work with enterprise organizations on AI governance transformation, specifically helping leadership reduce audit friction, legal exposure, and operational risk created by unclear or unmanaged AI usage.
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

      {/* Digital Products Section */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4">
            <Badge className="text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-200">
              <ShoppingBag className="h-4 w-4 mr-1 inline" />
              Digital Product Store
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            AI Security Resources & Templates
          </h2>
          <p className="text-lg text-gray-600">
            Practical tools, frameworks, and guides to accelerate your AI security and governance initiatives.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'hover:bg-blue-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <DigitalProductCard 
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  productUrl={product.productUrl}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
            <div className="text-center mt-8 text-gray-600">
              Showing {filteredProducts.length} of {digitalProducts.length} products
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking for specialist guidance on AI security and governance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you're building, deploying, or governing AI systems and need clarity around risk, security, or compliance, I offer advisory engagements designed to help teams make informed, defensible decisions.
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