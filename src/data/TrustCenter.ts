import {
    CheckCircle2,
    FileCheck,
    Fingerprint,
    Globe,
    Lock,
    LockKeyhole,
    LucideIcon,
    ScanFace,
    ShieldCheck,
    Zap,
} from "lucide-react";


export const certifications = [
    {
        title: "GDPR",
        status: "COMPLIANT",
        icon: ShieldCheck,
    },
    {
        title: "ISO 27001",
        status: "CERTIFIED",
        icon: Globe,
    },
    {
        title: "iBeta ISO 30107-3 Level 1",
        status: "CERTIFIED",
        icon: Fingerprint,
    },
    {
        title: "iBeta ISO 30107-3 Level 2",
        status: "CERTIFIED",
        icon: CheckCircle2,
    },
    {
        title: "Age Verification",
        status: "APPROVED",
        icon: LockKeyhole,
    },
    {
        title: "NIST 8355 Age Estimation & Verification",
        status: "BENCHMARKED",
        icon: ScanFace,
    },
];

export const securityFeatures = [
    {
        title: "Data Encryption",
        description:
            "All data is encrypted in transit and at rest using industry-standard AES-256 encryption to ensure maximum security.",
    },
    {
        title: "Multi-Factor Authentication",
        description:
            "Protect your account with multi-factor authentication including SMS, email, and authenticator app options.",
    },
    {
        title: "Regular Security Audits",
        description:
            "We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.",
    },
    {
        title: "Access Controls",
        description:
            "Role-based access controls ensure that users only have access to the data and features they need.",
    },
    {
        title: "Secure Infrastructure",
        description:
            "Our infrastructure is hosted on secure cloud platforms with 24/7 monitoring and automated threat detection.",
    },
    {
        title: "Data Backup & Recovery",
        description:
            "Automated backup systems and disaster recovery procedures ensure business continuity and data protection.",
    },
];


interface Practice {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const securityPractices : Practice[]= [
    {
        title: "24/7 Monitoring",
        description:
            "Continuous monitoring of our systems and networks for threats and anomalies.",
        icon: ShieldCheck,
    },
    {
        title: "Secure Development",
        description:
            "Security is integrated into every stage of our development lifecycle.",
        icon: Lock,
    },
    {
        title: "Compliance",
        description:
            "Regular compliance audits and certifications to meet industry standards.",
        icon: FileCheck,
    },
    {
        title: "Incident Response",
        description:
            "Rapid incident response procedures to address any security concerns.",
        icon: Zap,
    },
];
