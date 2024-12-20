import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Services() {
    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Berimbolo Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Security Risk Assessments</h2>
                        <p className="mb-4">Our expert team conducts thorough evaluations of your property to identify potential vulnerabilities and recommend tailored security solutions.</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Comprehensive property analysis</li>
                            <li>Identification of security weak points</li>
                            <li>Customized security recommendations</li>
                        </ul>
                        <Button asChild>
                            <Link href="/contact">Schedule an Assessment</Link>
                        </Button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Alarm System Installation</h2>
                        <p className="mb-4">We provide and install state-of-the-art alarm systems to protect your home or business from intruders and other security threats.</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Advanced motion sensors</li>
                            <li>Door and window sensors</li>
                            <li>Smart home integration</li>
                        </ul>
                        <Button asChild>
                            <Link href="/products">View Alarm Systems</Link>
                        </Button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">CCTV Camera Installation</h2>
                        <p className="mb-4">Our high-quality CCTV systems provide round-the-clock surveillance, deterring criminals and providing valuable evidence if needed.</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>HD and 4K camera options</li>
                            <li>Night vision capabilities</li>
                            <li>Remote viewing via smartphone</li>
                        </ul>
                        <Button asChild>
                            <Link href="/products">Explore CCTV Systems</Link>
                        </Button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">24/7 Monitoring</h2>
                        <p className="mb-4">Our professional monitoring team keeps watch over your property day and night, ready to respond to any security alerts.</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Immediate alert verification</li>
                            <li>Rapid dispatch of emergency services</li>
                            <li>Regular system health checks</li>
                        </ul>
                        <Button asChild>
                            <Link href="/contact">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}