import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "What services does Berimbolo Security offer?",
        answer: "Berimbolo Security offers a comprehensive range of security services including home security systems, business security solutions, cybersecurity consulting, and personal protection services. We provide cutting-edge technology combined with expert knowledge to ensure the safety and security of our clients."
    },
    {
        question: "How can I get a quote for a security system?",
        answer: "You can get a quote for our security systems by filling out the contact form on our website, calling our customer service line, or visiting one of our local offices. We offer free consultations to assess your specific security needs and provide a tailored solution."
    },
    {
        question: "Do you offer 24/7 monitoring services?",
        answer: "Yes, we offer round-the-clock monitoring services for both residential and commercial security systems. Our monitoring center is staffed with trained professionals who can respond to alerts and dispatch emergency services if needed."
    },
    {
        question: "Can I integrate my existing security devices with your system?",
        answer: "In many cases, yes. Berimbolo Security systems are designed to be compatible with a wide range of security devices. During our initial consultation, we'll assess your existing equipment and advise on integration possibilities or necessary upgrades."
    },
    {
        question: "What sets Berimbolo Security apart from other security companies?",
        answer: "Berimbolo Security stands out due to our cutting-edge technology, comprehensive service offerings, and our commitment to customized security solutions. We don't believe in one-size-fits-all approaches; instead, we tailor our services to meet the unique needs of each client. Additionally, our team consists of highly trained security experts with backgrounds in various fields of security and law enforcement."
    },
    {
        question: "Do you offer cybersecurity services for businesses?",
        answer: "Yes, we offer a range of cybersecurity services for businesses of all sizes. This includes network security assessments, penetration testing, employee training programs, and ongoing monitoring and threat detection services. Our team of cybersecurity experts stays up-to-date with the latest threats and protection strategies."
    }
]

export default function FAQPage() {
    return (
        <main className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </main>
    )
}