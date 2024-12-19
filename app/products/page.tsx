'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from '@/contexts/CartContext'

const products = [
    {
        id: 1,
        name: "Smart Door Lock",
        image: "/smart-door-locks-hero-460.jpg",
        price: 199.99,
        description: "Advanced smart lock with fingerprint and code access.",
        category: "locks"
    },
    {
        id: 2,
        name: "HD Security Camera",
        image: "/d681b45f-5166-4813-b740-cf73ab7c0e22_1.68fc1b5da2d611e59d161b8b3f1e5610.webp",
        price: 129.99,
        description: "1080p HD camera with night vision and two-way audio.",
        category: "cameras"
    },
    {
        id: 3,
        name: "Motion Sensor",
        image: "/Motion-Sensor-1.png",
        price: 49.99,
        description: "Wireless motion detector with adjustable sensitivity.",
        category: "sensors"
    },
    {
        id: 4,
        name: "Smart Doorbell",
        image: "/1165089.avif",
        price: 179.99,
        description: "Video doorbell with HD camera and mobile app integration.",
        category: "cameras"
    },
    {
        id: 5,
        name: "Window Sensor",
        image: "/1000_1000Door_WindowSensorG2-Safety.webp",
        price: 39.99,
        description: "Wireless window sensor for intrusion detection.",
        category: "sensors"
    },
    {
        id: 6,
        name: "Security System Hub",
        image: "/S87d725ec0f4c41ada56bb8c86ddaf42fz.png_640x640.png_.avif",
        price: 299.99,
        description: "Central hub for managing all your security devices.",
        category: "hubs"
    },
    {
        id: 7,
        name: "Smart Light Bulb",
        image: "/smart-light-bulb.jpg",
        price: 49.99,
        description: "Smart bulb with adjustable brightness and color.",
        category: "lighting"
    },
    {
        id: 8,
        name: "Wireless Security Camera",
        image: "/wireless-camera.jpg",
        price: 149.99,
        description: "Wireless HD camera with motion detection.",
        category: "cameras"
    },
    {
        id: 9,
        name: "Smart Thermostat",
        image: "/smart-thermostat.jpg",
        price: 249.99,
        description: "Wi-Fi enabled thermostat for remote control and energy savings.",
        category: "hubs"
    },
    {
        id: 10,
        name: "Smart Lock",
        image: "/smart-lock.jpg",
        price: 189.99,
        description: "Smart lock with remote access and biometric scanning.",
        category: "locks"
    },
    {
        id: 11,
        name: "Security Camera with AI",
        image: "/ai-security-camera.jpg",
        price: 199.99,
        description: "Security camera with AI-powered facial recognition.",
        category: "cameras"
    },
    {
        id: 12,
        name: "Smart Home Hub",
        image: "/home-hub.jpg",
        price: 249.99,
        description: "Centralized hub for controlling all your smart home devices.",
        category: "hubs"
    },
    {
        id: 13,
        name: "Floodlight Camera",
        image: "/floodlight-camera.jpg",
        price: 229.99,
        description: "Outdoor floodlight camera with motion detection.",
        category: "cameras"
    },
    {
        id: 14,
        name: "Smart Plug",
        image: "/smart-plug.jpg",
        price: 29.99,
        description: "Smart plug for remote control of electrical appliances.",
        category: "lighting"
    },
    {
        id: 15,
        name: "Leak Detector",
        image: "/leak-detector.jpg",
        price: 39.99,
        description: "Wireless sensor to detect leaks and water damage.",
        category: "sensors"
    },
    {
        id: 16,
        name: "Smart Smoke Detector",
        image: "/smoke-detector.jpg",
        price: 99.99,
        description: "Smart smoke detector with remote alerts.",
        category: "sensors"
    },
    {
        id: 17,
        name: "Voice Assistant Speaker",
        image: "/voice-assistant-speaker.jpg",
        price: 79.99,
        description: "Voice-controlled speaker for home automation.",
        category: "hubs"
    },
    {
        id: 18,
        name: "Pet Tracker",
        image: "/pet-tracker.jpg",
        price: 69.99,
        description: "GPS tracker for keeping tabs on your pets.",
        category: "sensors"
    },
    {
        id: 19,
        name: "Smart Light Switch",
        image: "/smart-light-switch.jpg",
        price: 89.99,
        description: "Smart light switch for remote control and scheduling.",
        category: "lighting"
    },
    {
        id: 20,
        name: "Smart Water Valve",
        image: "/smart-water-valve.jpg",
        price: 119.99,
        description: "Automated water valve for leak prevention and control.",
        category: "sensors"
    },
    {
        id: 21,
        name: "Home Security Alarm",
        image: "/security-alarm.jpg",
        price: 169.99,
        description: "Loud alarm system with sensors and mobile alerts.",
        category: "locks"
    },
    {
        id: 22,
        name: "Smart Garage Door Opener",
        image: "/garage-door-opener.jpg",
        price: 249.99,
        description: "Smart garage opener with remote control and security features.",
        category: "locks"
    },
    {
        id: 23,
        name: "Smart Camera System",
        image: "/camera-system.jpg",
        price: 349.99,
        description: "Comprehensive camera system for whole-home security.",
        category: "cameras"
    },
    {
        id: 24,
        name: "Smart Home Security Kit",
        image: "/security-kit.jpg",
        price: 499.99,
        description: "Complete security kit with cameras, sensors, and alarm systems.",
        category: "hubs"
    }
]

export default function Products() {
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('')
    const { cart, addToCart } = useCart()

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === '' || product.category === category)
    )

    return (
        <main className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <Input
                        className="mb-4 md:mb-0 md:w-64"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <Button asChild>
                        <Link href="/cart">View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</Link>
                    </Button>

                    <Select
                        value={category}
                        onValueChange={(value) => setCategory(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="">All Categories</SelectItem>
                            <SelectItem value="locks">Smart Locks</SelectItem>
                            <SelectItem value="cameras">Security Cameras</SelectItem>
                            <SelectItem value="sensors">Sensors</SelectItem>
                            <SelectItem value="hubs">Hubs</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                            <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover mb-4 rounded" />
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </main>
    )
}